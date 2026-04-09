import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import { desc, eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';

// GET — all job listings
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db.select().from(jobListings).orderBy(desc(jobListings.createdAt));
  return Response.json(rows);
}

// POST — manual admin entry (goes live immediately with status 'approved')
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const body = await req.json();
  const { employerName, contactEmail, jobTitle, location, employmentType, specialty, description, salaryRange, applicationUrl, expiresAt } = body;

  if (!employerName?.trim() || !jobTitle?.trim() || !location?.trim() || !description?.trim() || !applicationUrl?.trim()) {
    return Response.json({ error: 'Required fields missing.' }, { status: 400 });
  }

  const [listing] = await db.insert(jobListings).values({
    employerName: employerName.trim(),
    contactEmail: contactEmail?.trim() || '',
    jobTitle: jobTitle.trim(),
    location: location.trim(),
    employmentType: employmentType || 'full-time',
    specialty: specialty?.trim() || '',
    description: description.trim(),
    salaryRange: salaryRange?.trim() || null,
    applicationUrl: applicationUrl.trim(),
    status: 'approved',
    paymentStatus: 'manual',
    expiresAt: expiresAt ? new Date(expiresAt) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  }).returning();

  return Response.json(listing);
}

// PUT — approve, reject, or update a listing
export async function PUT(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const body = await req.json();
  const { id, action, ...fields } = body;

  if (!id) return Response.json({ error: 'ID is required.' }, { status: 400 });

  if (action === 'approve') {
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const [listing] = await db
      .update(jobListings)
      .set({ status: 'approved', expiresAt })
      .where(eq(jobListings.id, id))
      .returning();

    // Send approval email to employer
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && listing.contactEmail) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: FROM,
          to: listing.contactEmail,
          subject: 'Your NPCollab job listing is live',
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; color: #1A2B3C;">
              <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
                <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">Your job listing is now live</h1>
              </div>
              <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
                <p>Hi there,</p>
                <p>Your job listing <strong>${listing.jobTitle}</strong> at <strong>${listing.employerName}</strong> has been approved and is now live on NPCollab.</p>
                <p>Your listing will be active for 30 days, expiring on <strong>${expiresAt.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>.</p>
                <p style="margin-top: 24px;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/community/jobs" style="background: #0B1829; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">View the Job Board →</a>
                </p>
                <hr style="border: none; border-top: 1px solid #DDE3EC; margin: 24px 0;">
                <p style="font-size: 12px; color: #4A6080;">NPCollab — Free education for Australian Nurse Practitioners</p>
              </div>
            </div>
          `,
        });
      } catch (err) {
        console.error('Failed to send approval email:', err);
      }
    }

    return Response.json(listing);
  }

  if (action === 'reject') {
    const [listing] = await db
      .update(jobListings)
      .set({ status: 'rejected' })
      .where(eq(jobListings.id, id))
      .returning();
    return Response.json(listing);
  }

  // Generic update
  const updateData: Record<string, unknown> = {};
  if (fields.status !== undefined) updateData.status = fields.status;
  if (fields.expiresAt !== undefined) updateData.expiresAt = fields.expiresAt ? new Date(fields.expiresAt) : null;

  const [listing] = await db
    .update(jobListings)
    .set(updateData)
    .where(eq(jobListings.id, id))
    .returning();

  return Response.json(listing);
}
