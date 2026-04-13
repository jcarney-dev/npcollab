import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { courses } from '@/lib/schema';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // Must be logged in
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  const user = await verifyAccessCookie(token);
  if (!user) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const {
    courseName, providerName, providerEmail, courseType, specialty,
    description, dateStart, dateEnd, location, cost, cpdHours,
    registrationUrl, submitterName, submitterEmail,
  } = body;

  if (!courseName?.trim() || !providerName?.trim() || !description?.trim() ||
      !dateStart || !location?.trim() || !registrationUrl?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await db.insert(courses).values({
      courseName: courseName.trim(),
      providerName: providerName.trim(),
      providerEmail: providerEmail?.trim() || null,
      courseType: courseType?.trim() || 'other',
      specialty: specialty?.trim() || '',
      description: description.trim(),
      dateStart: new Date(dateStart),
      dateEnd: dateEnd ? new Date(dateEnd) : null,
      location: location.trim(),
      cost: cost?.trim() || null,
      cpdHours: cpdHours?.trim() || null,
      registrationUrl: registrationUrl.trim(),
      source: submitterName?.trim() ? `${submitterName.trim()}${submitterEmail?.trim() ? ` <${submitterEmail.trim()}>` : ''}` : null,
      status: 'draft',
      paymentStatus: 'manual',
    });

    // Email admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && process.env.RESEND_API_KEY) {
      const dateLabel = dateEnd
        ? `${new Date(dateStart).toLocaleDateString('en-AU')} – ${new Date(dateEnd).toLocaleDateString('en-AU')}`
        : new Date(dateStart).toLocaleDateString('en-AU');

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au',
        to: adminEmail,
        subject: `[NPCollab] New course submission: ${courseName.trim()}`,
        html: `
          <p>A new course has been submitted for review.</p>
          <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
            <tr><td><strong>Course</strong></td><td>${courseName.trim()}</td></tr>
            <tr><td><strong>Provider</strong></td><td>${providerName.trim()}</td></tr>
            <tr><td><strong>Type</strong></td><td>${courseType || 'other'}</td></tr>
            <tr><td><strong>Date</strong></td><td>${dateLabel}</td></tr>
            <tr><td><strong>Location</strong></td><td>${location.trim()}</td></tr>
            ${cost ? `<tr><td><strong>Cost</strong></td><td>${cost}</td></tr>` : ''}
            ${cpdHours ? `<tr><td><strong>CPD Hours</strong></td><td>${cpdHours}</td></tr>` : ''}
            <tr><td><strong>Registration</strong></td><td><a href="${registrationUrl}">${registrationUrl}</a></td></tr>
            ${submitterName ? `<tr><td><strong>Submitted by</strong></td><td>${submitterName}${submitterEmail ? ` &lt;${submitterEmail}&gt;` : ''}</td></tr>` : ''}
          </table>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com'}/admin">Review in admin panel →</a></p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[courses/submit]', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
