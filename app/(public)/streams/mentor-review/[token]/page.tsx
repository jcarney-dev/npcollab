import MentorReviewClient from '@/components/MentorReviewClient';
import { db } from '@/lib/db';
import { mentorReviewTokens, portfolioEntries, usersV2 } from '@/lib/schema';
import { and, eq, gt } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ token: string }>;
}

export default async function MentorReviewPage({ params }: Props) {
  const { token } = await params;

  let row = null;
  let entry = null;
  let userName = 'Unknown';

  try {
    [row] = await db
      .select()
      .from(mentorReviewTokens)
      .where(
        and(
          eq(mentorReviewTokens.token, token),
          eq(mentorReviewTokens.used, false),
          gt(mentorReviewTokens.expiresAt, new Date()),
        ),
      )
      .limit(1);

    if (row) {
      [entry] = await db
        .select()
        .from(portfolioEntries)
        .where(eq(portfolioEntries.id, row.portfolioEntryId))
        .limit(1);

      if (entry) {
        const [user] = await db
          .select({ name: usersV2.name })
          .from(usersV2)
          .where(eq(usersV2.id, entry.userId))
          .limit(1);
        userName = user?.name ?? 'Unknown';
      }
    }
  } catch {
    // DB error
  }

  if (!row || !entry) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔗</div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0B1829', marginBottom: '12px' }}>Link Unavailable</h1>
        <p style={{ fontSize: '14px', color: '#4A6080', maxWidth: '400px', lineHeight: 1.6 }}>
          This review link is no longer valid. It may have expired, already been used, or the assessment may have been updated.
          Please ask the trainee to resend the review link if needed.
        </p>
      </div>
    );
  }

  return (
    <MentorReviewClient
      token={token}
      userName={userName}
      formType={entry.formType as 'mini-cex' | 'dops'}
      title={entry.title}
      status={entry.status}
      traineeData={entry.traineeData as Record<string, unknown>}
      assessorData={entry.assessorData as Record<string, unknown>}
      mentorName={entry.mentorName}
      mentorComments={entry.mentorComments}
      mentorSignedAt={entry.mentorSignedAt?.toISOString() ?? null}
    />
  );
}
