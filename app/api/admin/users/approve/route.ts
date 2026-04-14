import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, adminActions } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import { Resend } from 'resend';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';

const resend = new Resend(process.env.RESEND_API_KEY);

async function isAdmin(req: NextRequest): Promise<boolean> {
  const sessionToken = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (sessionToken) {
    const session = await verifySessionToken(sessionToken);
    if (session?.role === 'admin') return true;
  }
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

function htmlPage(title: string, body: string): NextResponse {
  return new NextResponse(
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} — NPCollab Admin</title>
  <style>
    body { margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
           background: #0B1829; min-height: 100vh; display: flex;
           align-items: center; justify-content: center; padding: 24px; }
    .card { background: #fff; border-radius: 12px; padding: 40px 48px;
            max-width: 480px; width: 100%; text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    h1 { font-size: 22px; color: #0B1829; margin: 0 0 12px; }
    p { color: #4A6080; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
    a { display: inline-block; padding: 10px 24px; background: #0B1829; color: #fff;
        border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; }
  </style>
</head>
<body><div class="card">${body}</div></body>
</html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}

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
            Your NPCollab account has been approved. Click the button below to log in for the first time.
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

// GET /api/admin/users/approve?token=xxx  OR  with admin cookie (JSON POST-style via fetch)
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');

  if (!token) {
    return htmlPage('Error', '<h1>⚠️ Invalid link</h1><p>No approval token provided.</p><a href="/">Go home</a>');
  }

  const now = new Date();

  // Find valid unused non-expired approve token
  const [action] = await db
    .select()
    .from(adminActions)
    .where(and(
      eq(adminActions.token, token),
      eq(adminActions.action, 'approve'),
      eq(adminActions.used, false),
      gt(adminActions.expiresAt, now),
    ))
    .limit(1);

  if (!action) {
    return htmlPage('Link Expired', '<h1>⏱️ Link expired</h1><p>This approval link has expired or has already been used.</p><a href="/">Go home</a>');
  }

  // Get the user
  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, action.userId))
    .limit(1);

  if (!user) {
    return htmlPage('Error', '<h1>⚠️ User not found</h1><p>The user account no longer exists.</p><a href="/">Go home</a>');
  }

  // Approve user + mark token used
  await Promise.all([
    db.update(usersV2)
      .set({ approved: true })
      .where(eq(usersV2.id, user.id)),
    db.update(adminActions)
      .set({ used: true })
      .where(eq(adminActions.id, action.id)),
  ]);

  // Send welcome email to user
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
  if (process.env.RESEND_API_KEY) {
    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      user.email,
      subject: 'Welcome to NPCollab — your account is approved',
      html:    welcomeEmailHtml(user.name.split(' ')[0], `${siteUrl}/login`, new Date().getFullYear()),
    }).catch(err => console.error('[approve] welcome email failed:', err));
  }

  return htmlPage(
    'Account Approved',
    `<div style="font-size:48px;margin-bottom:16px;">✅</div>
     <h1>Account approved</h1>
     <p>Welcome email sent to <strong>${user.email}</strong>.</p>
     <a href="/">Go home</a>`
  );
}

// POST /api/admin/users/approve — admin panel action (JSON, uses admin cookie)
export async function POST(req: NextRequest) {
  if (!await isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: { id?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id } = body;
  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, id)).limit(1);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const [updated] = await db
    .update(usersV2)
    .set({ approved: true })
    .where(eq(usersV2.id, id))
    .returning();

  // Send welcome email
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';
  if (process.env.RESEND_API_KEY) {
    resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      user.email,
      subject: 'Welcome to NPCollab — your account is approved',
      html:    welcomeEmailHtml(user.name.split(' ')[0], `${siteUrl}/login`, new Date().getFullYear()),
    }).catch(err => console.error('[approve POST] welcome email failed:', err));
  }

  return NextResponse.json({ ok: true, user: updated });
}
