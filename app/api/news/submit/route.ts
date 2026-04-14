import { db } from '@/lib/db';
import { newsItems } from '@/lib/schema';
import { NextRequest } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { Resend } from 'resend';

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';

export async function POST(req: NextRequest) {
  // Must have a valid session
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) {
    return Response.json({ error: 'You must be logged in to submit news.' }, { status: 401 });
  }
  const session = await verifySessionToken(token);
  if (!session) {
    return Response.json({ error: 'Invalid session. Please log in again.' }, { status: 401 });
  }

  const body = await req.json();
  const { title, summary, url, sourceName, submitterName, submitterEmail } = body;

  if (!title?.trim() || !summary?.trim()) {
    return Response.json({ error: 'Title and summary are required.' }, { status: 400 });
  }

  // Infer type from URL presence
  const type = url?.trim() ? 'external' : 'article';

  const [item] = await db.insert(newsItems).values({
    title:      title.trim(),
    summary:    summary.trim(),
    url:        url?.trim() || null,
    type,
    sourceName: sourceName?.trim() || '',
    status:     'pending',
  }).returning();

  // Notify admin
  const resendKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  if (resendKey && adminEmail) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: FROM,
        to:   adminEmail,
        subject: `New news submission — ${item.title}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; color: #1A2B3C;">
            <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
              <h1 style="margin: 0; color: #fff; font-size: 18px; font-weight: 700;">New news submission</h1>
            </div>
            <div style="background: #fff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 24px 32px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #4A6080; width: 140px;">Title</td><td style="padding: 6px 0; font-weight: 600;">${item.title}</td></tr>
                <tr><td style="padding: 6px 0; color: #4A6080;">Type</td><td style="padding: 6px 0;">${type}</td></tr>
                ${url?.trim() ? `<tr><td style="padding: 6px 0; color: #4A6080;">URL</td><td style="padding: 6px 0;"><a href="${url.trim()}">${url.trim()}</a></td></tr>` : ''}
                ${sourceName?.trim() ? `<tr><td style="padding: 6px 0; color: #4A6080;">Source</td><td style="padding: 6px 0;">${sourceName.trim()}</td></tr>` : ''}
                <tr><td style="padding: 6px 0; color: #4A6080;">Submitted by</td><td style="padding: 6px 0;">${submitterName?.trim() || '—'} (${submitterEmail?.trim() || '—'})</td></tr>
              </table>
              <p style="margin-top: 8px; font-size: 14px; color: #1A2B3C;"><strong>Summary:</strong></p>
              <p style="font-size: 14px; color: #4A6080; line-height: 1.6;">${item.summary}</p>
              <p style="margin-top: 24px;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com.au'}/admin" style="background: #0B1829; color: #fff; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px;">Review in Admin →</a>
              </p>
            </div>
          </div>
        `,
      });
    } catch (err) {
      console.error('Failed to send news submission notification:', err);
    }
  }

  return Response.json({ ok: true, id: item.id });
}
