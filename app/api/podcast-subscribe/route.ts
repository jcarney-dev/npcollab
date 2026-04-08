import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { podcastSubscribers } from '@/lib/schema';
import { Resend } from 'resend';
import { eq } from 'drizzle-orm';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not set');
  return new Resend(key);
}

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const clean = email.trim().toLowerCase();

    // Check for duplicate
    const existing = await db
      .select()
      .from(podcastSubscribers)
      .where(eq(podcastSubscribers.email, clean))
      .limit(1);

    if (existing.length > 0) {
      // Treat as success so we don't leak whether an email is subscribed
      return NextResponse.json({ ok: true });
    }

    await db.insert(podcastSubscribers).values({ email: clean });

    // Confirmation email to subscriber
    try {
      const resend = getResend();
      await resend.emails.send({
        from: FROM,
        to: clean,
        subject: "You're on the list — The NPCollab Podcast",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1A2B3C;">
            <div style="background: #0B1829; padding: 24px 28px; border-radius: 8px 8px 0 0;">
              <p style="color: #C9A84C; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin: 0 0 6px;">NPCollab</p>
              <h1 style="color: #fff; font-size: 22px; margin: 0;">&#127897;&#65039; The NPCollab Podcast</h1>
            </div>
            <div style="background: #fff; padding: 28px; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px;">
              <p>Thanks for signing up &mdash; you&rsquo;re on the list.</p>
              <p>When the NPCollab Podcast launches, you&rsquo;ll be the first to know. We&rsquo;ll cover clinical education, NP scope of practice, career development, and interviews with leading NPs and healthcare professionals from across Australia.</p>
              <p style="margin-top: 24px; font-size: 13px; color: #4A6080;">
                &mdash; The NPCollab team<br>
                <a href="https://npcollab.com.au" style="color: #C9A84C;">npcollab.com.au</a>
              </p>
            </div>
          </div>
        `,
      });

      // Notify Jason
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        await resend.emails.send({
          from: FROM,
          to: adminEmail,
          subject: 'New NPCollab Podcast subscriber',
          html: `<p>New podcast subscriber: <strong>${clean}</strong></p>`,
        });
      }
    } catch (emailErr) {
      console.error('Podcast subscribe email error:', emailErr);
      // Don't fail the request if email sending fails
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Podcast subscribe error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
