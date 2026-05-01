import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, adminActions } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';
import { Resend } from 'resend';
import { logError } from '@/lib/logger';

// ---------------------------------------------------------------------------
// In-memory rate limiting — max 5 registration attempts per IP per hour
// ---------------------------------------------------------------------------
interface RateEntry { count: number; resetTime: number; }
const rateMap = new Map<string, RateEntry>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true; // allowed
  }
  if (entry.count >= RATE_LIMIT) return false; // blocked
  entry.count++;
  return true; // allowed
}

// ---------------------------------------------------------------------------
// Cloudflare Turnstile verification
// ---------------------------------------------------------------------------
async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret:   process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const data = await res.json() as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

const resend = new Resend(process.env.RESEND_API_KEY);

function adminEmailHtml(opts: {
  name: string;
  email: string;
  state: string;
  npEndorsement: string;
  employer: string | null;
  specialtyArea: string | null;
  currentRole: string | null;
  statement: string | null;
  approveUrl: string;
  rejectUrl: string;
  year: number;
}): string {
  const row = (label: string, value: string | null) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#4A6080;font-size:13px;vertical-align:top;white-space:nowrap;font-weight:600;">${label}</td><td style="padding:6px 0;color:#1A2B3C;font-size:13px;">${value}</td></tr>`
      : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:40px 20px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <tr>
        <td style="background:#0B1829;padding:24px 36px;">
          <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:-0.01em;">NPCollab</span>
          <span style="color:#C9A84C;font-size:12px;margin-left:12px;">Admin Notification</span>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 36px;">
          <h2 style="margin:0 0 6px;font-size:20px;font-weight:700;color:#0B1829;">New Registration Request</h2>
          <p style="margin:0 0 24px;font-size:14px;color:#4A6080;">A new user has submitted a registration request and requires your approval.</p>
          <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:28px;">
            ${row('Name', opts.name)}
            ${row('Email', opts.email)}
            ${row('State', opts.state)}
            ${row('Endorsement', opts.npEndorsement)}
            ${row('Employer', opts.employer)}
            ${row('Specialty', opts.specialtyArea)}
            ${row('Current Role', opts.currentRole)}
            ${row('Statement', opts.statement)}
          </table>
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding-right:10px;">
                <a href="${opts.approveUrl}" style="display:block;text-align:center;background:#2A7D4F;color:#fff;text-decoration:none;padding:12px 0;border-radius:7px;font-size:14px;font-weight:700;">
                  ✓ Approve
                </a>
              </td>
              <td style="padding-left:10px;">
                <a href="${opts.rejectUrl}" style="display:block;text-align:center;background:#B03030;color:#fff;text-decoration:none;padding:12px 0;border-radius:7px;font-size:14px;font-weight:700;">
                  ✕ Reject
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#94a3b8;text-align:center;">
            These links expire in 7 days and can only be used once.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#f7f8fa;padding:16px 36px;border-top:1px solid #DDE3EC;text-align:center;">
          <p style="margin:0;font-size:12px;color:#94a3b8;">© ${opts.year} NPCollab</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`.trim();
}

export async function POST(req: NextRequest) {
  // Rate limiting — keyed by IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many registration attempts. Please try again in an hour.' },
      { status: 429 }
    );
  }

  let body: Record<string, string | null>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, state, npEndorsement, employer, specialtyArea, currentRole, statement, turnstileToken } = body as Record<string, string | null>;

  // Turnstile verification
  if (!turnstileToken) {
    return NextResponse.json({ error: 'CAPTCHA verification required.' }, { status: 400 });
  }
  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 400 });
  }

  // Validate required fields
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  if (!state?.trim()) {
    return NextResponse.json({ error: 'Please select your state.' }, { status: 400 });
  }
  if (!npEndorsement?.trim()) {
    return NextResponse.json({ error: 'Please select your NP endorsement type.' }, { status: 400 });
  }

  const cleanEmail = email.trim().toLowerCase();

  try {
    // Check for existing account in users_v2
    const [existing] = await db
      .select({ id: usersV2.id })
      .from(usersV2)
      .where(eq(usersV2.email, cleanEmail))
      .limit(1);

    if (existing) {
      return NextResponse.json(
        { error: 'An account with this email already exists. Try logging in instead.' },
        { status: 409 }
      );
    }

    // Insert new user (approved = false, pending review)
    const [newUser] = await db
      .insert(usersV2)
      .values({
        name:            name.trim(),
        email:           cleanEmail,
        state:           state.trim(),
        npEndorsement:   npEndorsement.trim(),
        employer:        employer?.trim() || null,
        specialtyArea:   specialtyArea?.trim() || null,
        currentRole:     currentRole?.trim() || null,
        role:            'user',
        active:          true,
        approved:        false,
        profileComplete: false,
      })
      .returning();

    // Generate approve and reject tokens (7-day expiry)
    const approveToken = randomBytes(24).toString('hex');
    const rejectToken  = randomBytes(24).toString('hex');
    const expiresAt    = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await db.insert(adminActions).values([
      { action: 'approve', userId: newUser.id, token: approveToken, expiresAt },
      { action: 'reject',  userId: newUser.id, token: rejectToken,  expiresAt },
    ]);

    // Send admin notification email
    const siteUrl    = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
    const adminEmail = process.env.ADMIN_EMAIL;

    if (adminEmail && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
        to:      adminEmail,
        subject: 'New NPCollab registration request',
        html:    adminEmailHtml({
          name:          newUser.name,
          email:         newUser.email,
          state:         newUser.state,
          npEndorsement: newUser.npEndorsement,
          employer:      newUser.employer,
          specialtyArea: newUser.specialtyArea,
          currentRole:   newUser.currentRole,
          statement:     statement?.trim() || null,
          approveUrl:    `${siteUrl}/api/admin/users/approve?token=${approveToken}`,
          rejectUrl:     `${siteUrl}/api/admin/users/reject?token=${rejectToken}`,
          year:          new Date().getFullYear(),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    await logError('[auth/register]', err);
    return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}
