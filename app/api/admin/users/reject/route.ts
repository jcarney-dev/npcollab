import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, adminActions } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
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

function rejectionEmailHtml(name: string, year: number): string {
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
          <span style="color:#fff;font-size:20px;font-weight:700;">⚕ NPCollab</span>
        </td>
      </tr>
      <tr>
        <td style="padding:40px;">
          <h2 style="margin:0 0 12px;font-size:20px;font-weight:700;color:#0B1829;font-family:Georgia,serif;">NPCollab Registration Update</h2>
          <p style="margin:0 0 8px;font-size:15px;color:#4A6080;line-height:1.6;">Hi ${name},</p>
          <p style="margin:0;font-size:15px;color:#4A6080;line-height:1.6;">
            Thank you for your interest in NPCollab. Unfortunately we are unable to approve your registration at this time.
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

// GET /api/admin/users/reject?token=xxx — called from email button
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');

  if (!token) {
    return htmlPage('Error', '<h1>⚠️ Invalid link</h1><p>No rejection token provided.</p><a href="/">Go home</a>');
  }

  const now = new Date();

  const [action] = await db
    .select()
    .from(adminActions)
    .where(and(
      eq(adminActions.token, token),
      eq(adminActions.action, 'reject'),
      eq(adminActions.used, false),
      gt(adminActions.expiresAt, now),
    ))
    .limit(1);

  if (!action) {
    return htmlPage('Link Expired', '<h1>⏱️ Link expired</h1><p>This rejection link has expired or has already been used.</p><a href="/">Go home</a>');
  }

  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, action.userId))
    .limit(1);

  if (!user) {
    return htmlPage('Already Processed', '<h1>✓ Already processed</h1><p>This registration has already been removed.</p><a href="/">Go home</a>');
  }

  // Delete user record + mark token used
  await Promise.all([
    db.delete(usersV2).where(eq(usersV2.id, user.id)),
    db.update(adminActions).set({ used: true }).where(eq(adminActions.id, action.id)),
  ]);

  // Send rejection email
  if (process.env.RESEND_API_KEY) {
    resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      user.email,
      subject: 'NPCollab registration update',
      html:    rejectionEmailHtml(user.name.split(' ')[0], new Date().getFullYear()),
    }).catch(err => console.error('[reject] rejection email failed:', err));
  }

  return htmlPage(
    'Registration Rejected',
    `<div style="font-size:48px;margin-bottom:16px;">❌</div>
     <h1>Registration rejected</h1>
     <p>Rejection email sent to <strong>${user.email}</strong>. The account has been removed.</p>
     <a href="/">Go home</a>`
  );
}

// POST /api/admin/users/reject — admin panel action (JSON, uses admin cookie)
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: { id?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id } = body;
  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, id)).limit(1);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  await db.delete(usersV2).where(eq(usersV2.id, id));

  // Send rejection email
  if (process.env.RESEND_API_KEY) {
    resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
      to:      user.email,
      subject: 'NPCollab registration update',
      html:    rejectionEmailHtml(user.name.split(' ')[0], new Date().getFullYear()),
    }).catch(err => console.error('[reject POST] email failed:', err));
  }

  return NextResponse.json({ ok: true });
}
