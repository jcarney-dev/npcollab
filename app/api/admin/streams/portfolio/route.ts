import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/session';
import { db } from '@/lib/db';
import { portfolioEntries, usersV2 } from '@/lib/schema';
import { desc, eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');

  const query = db
    .select({
      id:             portfolioEntries.id,
      formType:       portfolioEntries.formType,
      streamSlug:     portfolioEntries.streamSlug,
      procedureSlug:  portfolioEntries.procedureSlug,
      title:          portfolioEntries.title,
      status:         portfolioEntries.status,
      traineeData:    portfolioEntries.traineeData,
      assessorData:   portfolioEntries.assessorData,
      mentorEmail:    portfolioEntries.mentorEmail,
      mentorName:     portfolioEntries.mentorName,
      mentorComments: portfolioEntries.mentorComments,
      mentorSignedAt: portfolioEntries.mentorSignedAt,
      createdAt:      portfolioEntries.createdAt,
      updatedAt:      portfolioEntries.updatedAt,
      submittedAt:    portfolioEntries.submittedAt,
      userName:       usersV2.name,
      userEmail:      usersV2.email,
    })
    .from(portfolioEntries)
    .leftJoin(usersV2, eq(portfolioEntries.userId, usersV2.id))
    .orderBy(desc(portfolioEntries.createdAt));

  const all = await query;
  const filtered = status ? all.filter(e => e.status === status) : all;

  return NextResponse.json({ entries: filtered });
}
