import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { employerName, contactEmail, jobTitle, location, employmentType, specialty, description, salaryRange, applicationUrl } = body;

  if (!employerName?.trim() || !contactEmail?.trim() || !jobTitle?.trim() || !location?.trim() || !description?.trim() || !applicationUrl?.trim()) {
    return Response.json({ error: 'Required fields missing.' }, { status: 400 });
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  // Save listing to DB with status 'pending', payment_status 'unpaid'
  const [listing] = await db.insert(jobListings).values({
    employerName: employerName.trim(),
    contactEmail: contactEmail.trim(),
    jobTitle: jobTitle.trim(),
    location: location.trim(),
    employmentType: employmentType || 'full-time',
    specialty: specialty?.trim() || '',
    description: description.trim(),
    salaryRange: salaryRange?.trim() || null,
    applicationUrl: applicationUrl.trim(),
    status: 'pending',
    paymentStatus: 'unpaid',
  }).returning();

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return Response.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com.au';

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'aud',
          product_data: {
            name: `NPCollab Job Listing — ${listing.jobTitle}`,
            description: `30-day job listing at ${listing.employerName}`,
          },
          unit_amount: 9900, // $99.00 AUD in cents
        },
        quantity: 1,
      },
    ],
    metadata: {
      listingId: listing.id,
    },
    customer_email: contactEmail.trim(),
    success_url: `${siteUrl}/community/jobs/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/community/jobs/post?cancelled=1`,
  });

  // Update listing with Stripe session ID
  await db
    .update(jobListings)
    .set({ stripeSessionId: session.id })
    .where(eq(jobListings.id, listing.id));

  return Response.json({ url: session.url });
}
