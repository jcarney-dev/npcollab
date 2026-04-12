import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import type { JobListing } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import JobBoardClient from './JobBoardClient';

export const metadata: Metadata = {
  title: 'Job Board — NPCollab',
  description: 'Nurse Practitioner and NP-adjacent positions across Australia.',
};

export const dynamic = 'force-dynamic';

export default async function JobBoardPage() {
  let listings: JobListing[] = [];
  try {
    listings = await db
      .select()
      .from(jobListings)
      .where(
        and(
          eq(jobListings.status, 'approved'),
          gt(jobListings.expiresAt, new Date())
        )
      )
      .orderBy(jobListings.createdAt);
  } catch {
    listings = [];
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>💼 Job Board</h1>
        <p>Nurse Practitioner and NP-adjacent positions across Australia</p>
      </div>
      <div className="content-prose">
        <JobBoardClient listings={listings} />
      </div>
    </>
  );
}
