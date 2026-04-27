import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { requireAdmin } from '@/lib/session';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function welcomeEmailHtml(name: string, loginUrl: string, year: number): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:40px 20px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <tr>
        <td style="background:#0B1829;padding:28px 40px;text-align:center;">
          <span style="color:#fff;font-size:20px;font-weight:700;">NPCollab</span>
          <div style="color:#C9A84C;font-size:12px;margin-top:4px;font-weight:500;">Australian Nurse Practitioners</div>
        </td>
      </tr>
      <tr>
        <td style="padding:40px;">
          <h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0B1829;font-family:Georgia,serif;">Welcome to NPCollab!</h2>
          <p style="margin:0 0 8px;font-size:15px;color:#4A6080;line-height:1.6;">Hi ${name},</p>
          <p style="margin:0 0 28px;font-size:15px;color:#4A6080;line-height:1.6;">
            Your NPCollab account has been set up and is ready to go. Click the button below to log in for the first time.
          </p>
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center">
                <a href="${loginUrl}" style="display:inline-block;background:#0B1829;color:#fff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;">
                  Log in to NPCollab
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#94a3b8;text-align:center;line-height:1.5;">
            NPCollab is free for Australian Nurse Practitioners.<br>
            All content is for educational purposes only.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#f7f8fa;padding:16px 40px;border-top:1px solid #DDE3EC;text-align:center;">
          <p style="margin:0;font-size:12px;color:#94a3b8;">© ${year} NPCollab</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`.trim();
}

export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: Record<string, string>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { name, email, state, npEndorsement, employer, specialtyArea, currentRole } = body;

  if (!name?.trim() || name.trim().length < 2) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
  if (!email?.trim() || !email.includes('@')) return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  if (!state?.trim()) return NextResponse.json({ error: 'State is required.' }, { status: 400 });
  if (!npEndorsement?.trim()) return NextResponse.json({ error: 'NP endorsement area is required.' }, { status: 400 });

  // Check for duplicate email
  const [existing] = await db.select({ id: usersV2.id }).from(usersV2).where(eq(usersV2.email, email.trim().toLowerCase())).limit(1);
  if (existing) return NextResponse.json({ error: 'A user with that email already exists.' }, { status: 409 });

  const [created] = await db.insert(usersV2).values({
    name:          name.trim(),
    email:         email.trim().toLowerCase(),
    state:         state.trim(),
    npEndorsement: npEndorsement.trim(),
    employer:      employer?.trim() || null,
    specialtyArea: specialtyArea?.trim() || null,
    currentRole:   currentRole?.trim() || null,
    approved:      true,
    active:        true,
    role:          'user',
  }).returning();

  // Send welcome email
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
  if (process.env.RESEND_API_KEY) {
    resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      created.email,
      subject: 'Welcome to NPCollab — your account is ready',
      html:    welcomeEmailHtml(created.name.split(' ')[0], `${siteUrl}/login`, new Date().getFullYear()),
    }).catch(err => console.error('[create user] welcome email failed:', err));
  }

  return NextResponse.json({ ok: true, user: created });
}
