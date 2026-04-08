import { db } from '@/lib/db';
import { sponsors } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db
    .select()
    .from(sponsors)
    .orderBy(desc(sponsors.createdAt));

  return Response.json(rows);
}
