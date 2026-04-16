import { db } from '@/lib/db';
import { accessRequests } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';


export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) {
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
