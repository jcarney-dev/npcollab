import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return Response.json({ error: 'Stripe not configured.' }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey);
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return Response.json({ error: 'Missing signature.' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return Response.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const listingId = session.metadata?.listingId;

    if (!listingId) {
      console.error('No listingId in session metadata');
      return Response.json({ received: true });
    }

    // Update listing status to 'pending_approval' and record posted_at
    const [listing] = await db
      .update(jobListings)
      .set({ status: 'pending_approval', paymentStatus: 'paid', postedAt: new Date() })
      .where(eq(jobListings.id, listingId))
      .returning();

    if (!listing) {
      console.error('Listing not found:', listingId);
      return Response.json({ received: true });
    }

    // Email admin
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com.au';

    if (resendKey && adminEmail) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: FROM,
          to: adminEmail,
          subject: `New job listing awaiting approval — ${listing.jobTitle}`,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; color: #1A2B3C;">
              <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
                <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">New job listing — payment received</h1>
              </div>
              <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr><td style="padding: 6px 0; color: #4A6080; width: 140px;">Job title</td><td style="padding: 6px 0; font-weight: 600;">${listing.jobTitle}</td></tr>
                  <tr><td style="padding: 6px 0; color: #4A6080;">Employer</td><td style="padding: 6px 0;">${listing.employerName}</td></tr>
                  <tr><td style="padding: 6px 0; color: #4A6080;">Location</td><td style="padding: 6px 0;">${listing.location}</td></tr>
                  <tr><td style="padding: 6px 0; color: #4A6080;">Contact email</td><td style="padding: 6px 0;">${listing.contactEmail}</td></tr>
                  <tr><td style="padding: 6px 0; color: #4A6080;">Payment</td><td style="padding: 6px 0; color: #2A7D4F; font-weight: 600;">$99.00 AUD received</td></tr>
                </table>
                <p style="margin-top: 24px;">
                  <a href="${siteUrl}/admin" style="background: #0B1829; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Review in Admin →</a>
                </p>
              </div>
            </div>
          `,
        });
      } catch (err) {
        console.error('Failed to send admin notification:', err);
      }
    }
  }

  return Response.json({ received: true });
}
