import { db } from '@/lib/db';
import { accessRequests } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function requireAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return Response.json({ error: 'Unauthorised.' }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return Response.json({ error: 'Missing request id.' }, { status: 400 });

  await db
    .update(accessRequests)
    .set({ status: 'denied' })
    .where(eq(accessRequests.id, id));

  return Response.json({ ok: true });
}
