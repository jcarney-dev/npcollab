import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { mentorReviewTokens, portfolioEntries, usersV2 } from '@/lib/schema';
import { and, eq, gt } from 'drizzle-orm';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;

  const [row] = await db
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

  if (!row) return NextResponse.json({ error: 'Invalid or expired link' }, { status: 404 });

  const [entry] = await db
    .select()
    .from(portfolioEntries)
    .where(eq(portfolioEntries.id, row.portfolioEntryId))
    .limit(1);

  if (!entry) return NextResponse.json({ error: 'Assessment not found' }, { status: 404 });

  const [user] = await db
    .select({ name: usersV2.name })
    .from(usersV2)
    .where(eq(usersV2.id, entry.userId))
    .limit(1);

  return NextResponse.json({
    entry: {
      id:             entry.id,
      formType:       entry.formType,
      title:          entry.title,
      status:         entry.status,
      traineeData:    entry.traineeData,
      assessorData:   entry.assessorData,
      mentorName:     entry.mentorName,
      mentorComments: entry.mentorComments,
      mentorSignedAt: entry.mentorSignedAt,
    },
    userName: user?.name ?? 'Unknown',
  });
}
