import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { mentorReviewTokens, portfolioEntries } from '@/lib/schema';
import { and, eq, gt } from 'drizzle-orm';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const { mentorName, assessorData } = await req.json();

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

  await db
    .update(portfolioEntries)
    .set({
      status:         'complete',
      assessorData:   assessorData ?? {},
      mentorName:     mentorName ?? '',
      mentorSignedAt: new Date(),
      updatedAt:      new Date(),
    })
    .where(eq(portfolioEntries.id, row.portfolioEntryId));

  await db
    .update(mentorReviewTokens)
    .set({ used: true })
    .where(eq(mentorReviewTokens.id, row.id));

  return NextResponse.json({ ok: true });
}
