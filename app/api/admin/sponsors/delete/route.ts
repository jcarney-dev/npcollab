import { db } from '@/lib/db';
import { sponsors } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';


export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const { id } = await req.json();

    if (!id || typeof id !== 'string') {
      return Response.json({ error: 'Sponsor ID required.' }, { status: 400 });
    }

    const [deleted] = await db
      .delete(sponsors)
      .where(eq(sponsors.id, id))
      .returning();

    if (!deleted) {
      return Response.json({ error: 'Sponsor not found.' }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[sponsors/delete]', err);
    return Response.json({ error: 'Server error.' }, { status: 500 });
  }
}
