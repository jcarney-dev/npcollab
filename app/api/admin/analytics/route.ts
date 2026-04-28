import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/session';
import { db } from '@/lib/db';
import { pageViews, usersV2 } from '@/lib/schema';
import { eq, and, gte, lte, desc, sql, count, sum } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const filterUserId = searchParams.get('userId') || null;
  const filterFrom   = searchParams.get('from')   || null;
  const filterTo     = searchParams.get('to')     || null;

  const conditions = [];
  if (filterUserId) conditions.push(eq(pageViews.userId, filterUserId));
  if (filterFrom)   conditions.push(gte(pageViews.viewedAt, new Date(filterFrom)));
  if (filterTo) {
    const toDate = new Date(filterTo);
    toDate.setHours(23, 59, 59, 999);
    conditions.push(lte(pageViews.viewedAt, toDate));
  }
  const where = conditions.length > 0 ? and(...conditions) : undefined;

  // Top visited pages
  const topPages = await db
    .select({
      path:          pageViews.path,
      visitCount:    count(),
      totalDuration: sum(pageViews.duration),
    })
    .from(pageViews)
    .where(where)
    .groupBy(pageViews.path)
    .orderBy(desc(count()))
    .limit(20);

  // Per-user session summaries
  const sessions = await db
    .select({
      userId:        pageViews.userId,
      sessionId:     pageViews.sessionId,
      pageCount:     count(),
      totalDuration: sum(pageViews.duration),
      firstView:     sql<string>`MIN(${pageViews.viewedAt})`,
      lastView:      sql<string>`MAX(${pageViews.viewedAt})`,
      userName:      usersV2.name,
      userEmail:     usersV2.email,
    })
    .from(pageViews)
    .leftJoin(usersV2, eq(pageViews.userId, usersV2.id))
    .where(where)
    .groupBy(pageViews.userId, pageViews.sessionId, usersV2.name, usersV2.email)
    .orderBy(desc(sql`MAX(${pageViews.viewedAt})`))
    .limit(100);

  // Detailed page-level rows for a specific user
  let userDetail: Array<{ path: string; duration: number; sessionId: string; viewedAt: Date }> = [];
  if (filterUserId) {
    userDetail = await db
      .select({
        path:      pageViews.path,
        duration:  pageViews.duration,
        sessionId: pageViews.sessionId,
        viewedAt:  pageViews.viewedAt,
      })
      .from(pageViews)
      .where(where)
      .orderBy(desc(pageViews.viewedAt))
      .limit(200);
  }

  // Distinct users who have any page views (for filter dropdown)
  const activeUsers = await db
    .selectDistinct({ id: pageViews.userId, name: usersV2.name, email: usersV2.email })
    .from(pageViews)
    .leftJoin(usersV2, eq(pageViews.userId, usersV2.id))
    .orderBy(usersV2.name);

  return NextResponse.json({ topPages, sessions, userDetail, activeUsers });
}
