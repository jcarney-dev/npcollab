import { db } from '@/lib/db';
import { podcastSubscribers } from '@/lib/schema';
import { asc } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db
    .select()
    .from(podcastSubscribers)
    .orderBy(asc(podcastSubscribers.createdAt));

  return Response.json({ subscribers: rows });
}

// Export as CSV
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db
    .select()
    .from(podcastSubscribers)
    .orderBy(asc(podcastSubscribers.createdAt));

  const lines = ['email,subscribed_at', ...rows.map(r => `${r.email},${new Date(r.createdAt).toISOString()}`)];
  const csv = lines.join('\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="podcast-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
