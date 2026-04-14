import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, magicLinks } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { randomBytes } from 'crypto';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Always return the same message to avoid email enumeration
const SUCCESS_MSG = { message: 'If your account is approved you will receive a login link shortly' };

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email address required' }, { status: 400 });
  }

  try {
    // Look up user — must be approved and active
    const [user] = await db
      .select()
      .from(usersV2)
      .where(and(
        eq(usersV2.email, email),
        eq(usersV2.approved, true),
        eq(usersV2.active, true),
      ))
      .limit(1);

    // If no valid user, still return success (no email enumeration)
    if (!user) {
      return NextResponse.json(SUCCESS_MSG);
    }

    // Generate secure 32-char hex token
    const token = randomBytes(16).toString('hex'); // 32 hex chars

    // Expiry: 15 minutes from now
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    // Save to magic_links
    await db.insert(magicLinks).values({
      email,
      token,
      expiresAt,
      used: false,
    });

    // Build login URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
    const loginUrl = `${siteUrl}/auth/verify?token=${token}`;

    // Send login email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
        to: email,
        subject: 'Your NPCollab login link',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0B1829;padding:28px 40px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="display:inline-table;">
                <tr>
                  <td style="color:#fff;font-size:22px;padding-right:8px;vertical-align:middle;">⚕</td>
                  <td style="color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.02em;vertical-align:middle;">NPCollab</td>
                </tr>
              </table>
              <div style="color:#C9A84C;font-size:12px;margin-top:4px;font-weight:500;">Australian Nurse Practitioners</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0B1829;font-family:Georgia,serif;">
                Your login link
              </h2>
              <p style="margin:0 0 8px;font-size:15px;color:#4A6080;line-height:1.6;">
                Hi ${user.name},
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#4A6080;line-height:1.6;">
                Click the button below to log in to NPCollab. This link expires in <strong>15 minutes</strong> and can only be used once.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${loginUrl}"
                       style="display:inline-block;background:#0B1829;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;letter-spacing:0.01em;">
                      Log in to NPCollab
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:13px;color:#4A6080;line-height:1.6;text-align:center;">
                If you didn&apos;t request this, you can safely ignore this email.<br>
                Someone may have entered your email address by mistake.
              </p>

              <hr style="margin:28px 0;border:none;border-top:1px solid #DDE3EC;">

              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
                If the button doesn&apos;t work, copy and paste this link into your browser:<br>
                <a href="${loginUrl}" style="color:#C9A84C;word-break:break-all;">${loginUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f7f8fa;padding:20px 40px;text-align:center;border-top:1px solid #DDE3EC;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} NPCollab · Educational purposes only
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      });
    }

    return NextResponse.json(SUCCESS_MSG);
  } catch (err) {
    console.error('[request-login]', err);
    // Still return success to avoid leaking info
    return NextResponse.json(SUCCESS_MSG);
  }
}
