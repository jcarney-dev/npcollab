import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, magicLinks } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';
import { Resend } from 'resend';
import { verifySessionToken, SESSION_COOKIE_NAME, requireAdmin} from '@/lib/session';

const resend = new Resend(process.env.RESEND_API_KEY);


function loginEmailHtml(name: string, loginUrl: string, year: number): string {
  return `<!DOCTYPE html>
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
          <h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0B1829;font-family:Georgia,serif;">Your login link</h2>
          <p style="margin:0 0 8px;font-size:15px;color:#4A6080;line-height:1.6;">Hi ${name},</p>
          <p style="margin:0 0 28px;font-size:15px;color:#4A6080;line-height:1.6;">
            Click the button below to log in to NPCollab. This link expires in <strong>15 minutes</strong> and can only be used once.
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
          <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;text-align:center;line-height:1.5;">
            If you didn't request this, you can safely ignore this email.
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

// POST /api/admin/users/send-login — generate and email a magic link for a user
export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: { id?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id } = body;
  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });

  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, id))
    .limit(1);

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  if (!user.active || !user.approved) {
    return NextResponse.json({ error: 'User is not active or approved' }, { status: 400 });
  }

  // Generate token — 15 min expiry
  const token = randomBytes(16).toString('hex');
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await db.insert(magicLinks).values({
    email:     user.email,
    token,
    expiresAt,
    used:      false,
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
  const loginUrl = `${siteUrl}/auth/verify?token=${token}`;

  if (process.env.RESEND_API_KEY) {
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      user.email,
      subject: 'Your NPCollab login link',
      html:    loginEmailHtml(user.name.split(' ')[0], loginUrl, new Date().getFullYear()),
    }).catch(err => console.error('[send-login] email failed:', err));
  }

  return NextResponse.json({ ok: true });
}
