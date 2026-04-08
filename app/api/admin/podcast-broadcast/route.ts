import { db } from '@/lib/db';
import { podcastSubscribers, podcastBroadcasts } from '@/lib/schema';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const { subject, body } = await req.json();

  if (!subject?.trim() || !body?.trim()) {
    return Response.json({ error: 'Subject and body are required.' }, { status: 400 });
  }

  // Fetch all subscribers
  const subscribers = await db.select().from(podcastSubscribers);

  if (subscribers.length === 0) {
    return Response.json({ error: 'No subscribers to send to.' }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return Response.json({ error: 'RESEND_API_KEY not configured.' }, { status: 500 });
  }

  const resend = new Resend(resendKey);

  // Build HTML email body
  const bodyHtml = body
    .split('\n')
    .map((line: string) => line.trim() ? `<p style="margin:0 0 12px;line-height:1.6;">${line}</p>` : '<br>')
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
      <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
        <p style="color: #C9A84C; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 6px;">NPCollab Podcast</p>
        <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">&#127897;&#65039; ${subject}</h1>
      </div>
      <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
        ${bodyHtml}
        <hr style="border: none; border-top: 1px solid #DDE3EC; margin: 24px 0;">
        <p style="font-size: 12px; color: #4A6080; margin: 0;">
          You&rsquo;re receiving this because you subscribed to NPCollab Podcast updates.
          <a href="https://npcollab.com.au/community/podcast" style="color: #C9A84C;">View podcast page</a>
        </p>
      </div>
    </body>
    </html>
  `;

  let successCount = 0;
  // Send individually to avoid rate limits and to handle failures gracefully
  // For large lists, batching/queueing would be needed — fine for early stage
  for (const subscriber of subscribers) {
    try {
      await resend.emails.send({
        from: FROM,
        to: subscriber.email,
        subject,
        html,
      });
      successCount++;
    } catch (err) {
      console.error(`Failed to send to ${subscriber.email}:`, err);
    }
  }

  // Log the broadcast
  await db.insert(podcastBroadcasts).values({
    subject: subject.trim(),
    body: body.trim(),
    recipientCount: successCount,
  });

  return Response.json({ ok: true, sent: successCount, total: subscribers.length });
}
