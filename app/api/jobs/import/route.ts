import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Authenticate via x-api-key header
  const apiKey = req.headers.get('x-api-key');
  const importKey = process.env.IMPORT_API_KEY;

  if (!importKey || !apiKey || apiKey !== importKey) {
    return Response.json({ error: 'Unauthorised.' }, { status: 401 });
  }

  const body = await req.json();

  // Accept either a single object or an array
  const items: unknown[] = Array.isArray(body) ? body : [body];
  const created = [];
  const errors = [];

  for (const item of items) {
    const { job_title, employer_name, location, description, application_url, source, employment_type, specialty, salary_range, contact_email } = item as Record<string, string>;

    if (!job_title?.trim() || !employer_name?.trim() || !location?.trim() || !description?.trim() || !application_url?.trim()) {
      errors.push({ item, error: 'Missing required fields: job_title, employer_name, location, description, application_url' });
      continue;
    }

    try {
      const [listing] = await db.insert(jobListings).values({
        jobTitle: job_title.trim(),
        employerName: employer_name.trim(),
        contactEmail: contact_email?.trim() || '',
        location: location.trim(),
        employmentType: employment_type?.trim() || 'full-time',
        specialty: specialty?.trim() || source?.trim() || '',
        description: description.trim(),
        salaryRange: salary_range?.trim() || null,
        applicationUrl: application_url.trim(),
        status: 'draft',
        paymentStatus: 'imported',
      }).returning();
      created.push(listing);
    } catch (err) {
      errors.push({ item, error: String(err) });
    }
  }

  return Response.json({ created: created.length, errors: errors.length, listings: created, errorDetails: errors });
}
