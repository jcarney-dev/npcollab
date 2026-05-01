import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { errorLogs } from '@/lib/schema';
import { requireAdmin } from '@/lib/session';
import { desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(errorLogs)
    .orderBy(desc(errorLogs.createdAt))
    .limit(50);

  return NextResponse.json({ logs: rows });
}
