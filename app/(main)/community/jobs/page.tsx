import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { jobListings } from '@/lib/schema';
import type { JobListing } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';

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
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
          <Link
            href="/community/jobs/post"
            className="btn-primary"
            style={{ display: 'inline-block' }}
          >
            Post a Job — $99 for 30 days →
          </Link>
        </div>

        {listings.length === 0 ? (
          <div className="highlight-box" style={{ textAlign: 'center', padding: '48px 32px' }}>
            <h4>No listings at the moment</h4>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>
              Check back soon. Are you an employer? Post a role and reach Australia&rsquo;s NP community.
            </p>
            <Link href="/community/jobs/post" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 24px', background: 'var(--gold)', color: 'var(--navy)', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
              Post a Job →
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {listings.map((listing) => (
              <div key={listing.id} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '24px', background: '#fff', position: 'relative', borderLeft: '4px solid var(--gold)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 600, color: 'var(--navy)', fontFamily: 'var(--font-body)' }}>
                      {listing.jobTitle}
                    </h3>
                    <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {listing.employerName} · {listing.location}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: 'var(--gold-pale)', color: 'var(--navy)', border: '1px solid var(--gold-light)', fontWeight: 500 }}>
                        {listing.employmentType}
                      </span>
                      {listing.specialty && (
                        <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: 'var(--off-white)', color: 'var(--text-muted)', border: '1px solid var(--border)', fontWeight: 500 }}>
                          {listing.specialty}
                        </span>
                      )}
                      {listing.salaryRange && (
                        <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: 'var(--off-white)', color: 'var(--text-muted)', border: '1px solid var(--border)', fontWeight: 500 }}>
                          {listing.salaryRange}
                        </span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {listing.description}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <a
                      href={listing.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-block', padding: '10px 20px', background: 'var(--navy)', color: '#fff', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '40px', padding: '24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--navy)' }}>Employers:</strong> Reach Australia&rsquo;s NP community for just $99 for 30 days.{' '}
            <Link href="/employers" style={{ color: 'var(--gold)', fontWeight: 500 }}>Learn more about advertising →</Link>
          </p>
        </div>
      </div>
    </>
  );
}
