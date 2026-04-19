import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, mentoringRequests, usersV2 } from '@/lib/schema';
import { eq, count } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  // Fetch all mentors with email and request count
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
      mode:          mentors.mode,
      maxMentees:    mentors.maxMentees,
      active:        mentors.active,
      createdAt:     mentors.createdAt,
      email:         usersV2.email,
    })
    .from(mentors)
    .leftJoin(usersV2, eq(mentors.userId, usersV2.id))
    .orderBy(mentors.createdAt);

  // Fetch request counts per mentor
  const requestCounts = await db
    .select({
      mentorId: mentoringRequests.mentorId,
      total:    count(),
    })
    .from(mentoringRequests)
    .groupBy(mentoringRequests.mentorId);

  const countMap: Record<number, number> = {};
  for (const row of requestCounts) {
    countMap[row.mentorId] = Number(row.total);
  }

  const result = rows.map(m => ({
    ...m,
    requestCount: countMap[m.id] ?? 0,
  }));

  return NextResponse.json(result);
}
