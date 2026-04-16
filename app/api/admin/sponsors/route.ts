import { db } from '@/lib/db';
import { sponsors } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';


export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db
    .select()
    .from(sponsors)
    .orderBy(desc(sponsors.createdAt));

  return Response.json(rows);
}
