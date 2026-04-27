import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq, and, sql } from 'drizzle-orm';
import ShowcaseClient from './ShowcaseClient';

export const metadata: Metadata = {
  title: 'NP Showcase | NPCollab',
  description: 'Meet the Australian Nurse Practitioners behind NPCollab — a randomly featured member spotlight.',
  openGraph: {
    title: 'NP Showcase | NPCollab',
    description: 'Meet the Australian Nurse Practitioners behind NPCollab — a randomly featured member spotlight.',
    url: 'https://npcollab.com/community/showcase',
  },
  alternates: {
    canonical: 'https://npcollab.com/community/showcase',
  },
};

export const dynamic = 'force-dynamic';

export default async function ShowcasePage() {
  let initialUser = null;

  try {
    const [user] = await db
      .select({
        id:            usersV2.id,
        name:          usersV2.name,
        state:         usersV2.state,
        npEndorsement: usersV2.npEndorsement,
        employer:      usersV2.employer,
        specialtyArea: usersV2.specialtyArea,
        currentRole:   usersV2.currentRole,
        bio:           usersV2.bio,
      })
      .from(usersV2)
      .where(and(eq(usersV2.active, true), eq(usersV2.approved, true)))
      .orderBy(sql`RANDOM()`)
      .limit(1);

    initialUser = user ?? null;
  } catch {
    initialUser = null;
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>NP Showcase</h1>
        <p>Meet a fellow Australian Nurse Practitioner — a new member is featured on every visit</p>
      </div>
      <div className="content-prose">
        <ShowcaseClient initialUser={initialUser} />
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
            Want to appear here? Update your bio in{' '}
            <a href="/profile/edit" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>My Profile</a>.
          </p>
        </div>
      </div>
    </>
  );
}
