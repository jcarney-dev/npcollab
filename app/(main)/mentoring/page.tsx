import type { Metadata } from 'next';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import MentoringClient from './MentoringClient';
import type { MentorCardData } from '@/components/MentorCard';

export const metadata: Metadata = {
  title: 'Find a Mentor — NPCollab',
  description: 'Connect with experienced Australian Nurse Practitioners through the NPCollab mentoring directory.',
};

export const dynamic = 'force-dynamic';

export default async function MentoringPage() {
  const session = await getSession();
  if (!session) redirect('/login?redirect=/mentoring');

  let existingMentorId: number | null = null;
  let initialMentors: MentorCardData[] = [];

  try {
    const rows = await db
      .select({
        id:            mentors.id,
        userId:        mentors.userId,
        name:          mentors.name,
        credentials:   mentors.credentials,
        specialtyArea: mentors.specialtyArea,
        state:         mentors.state,
        currentRole:   mentors.currentRole,
        employer:      mentors.employer,
        bio:           mentors.bio,
        mode:          mentors.mode,
        maxMentees:    mentors.maxMentees,
      })
      .from(mentors)
      .where(eq(mentors.active, true));

    for (const row of rows) {
      if (row.userId === session.userId) {
        existingMentorId = row.id;
      } else {
        initialMentors.push(row);
      }
    }
  } catch {
    // Table may not exist yet — renders with empty list
  }

  const isMentor = existingMentorId !== null;

  return (
    <>
      {/* Hero */}
      <div className="page-header">
        <div className="label">Mentoring</div>
        <h1>🤝 Find a Mentor</h1>
        <p>
          Connect with experienced nurse practitioners and transitioning NPs across Australia.
        </p>
      </div>

      <div className="content-prose">
        {/* Intro box */}
        <div className="info-box" style={{ marginBottom: '32px' }}>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            NPCollab Mentoring connects nurse practitioners and transitioning NPs with experienced
            colleagues across Australia. Browse the mentor directory, review profiles, and send a
            direct introduction request. All connections are made via email — how you structure the
            relationship is entirely up to you.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{
          padding: '12px 16px',
          background: 'var(--off-white)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '32px',
        }}>
          NPCollab facilitates introductions only and does not monitor or guarantee mentoring relationships.
        </div>

        <MentoringClient isMentor={isMentor} existingMentorId={existingMentorId} initialMentors={initialMentors} />
      </div>
    </>
  );
}
