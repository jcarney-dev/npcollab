import { db } from '@/lib/db';
import { moduleContributors } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const rows = await db
      .select()
      .from(moduleContributors)
      .orderBy(desc(moduleContributors.createdAt));
    return Response.json(rows);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[contributors GET]', msg);
    return Response.json({ error: 'Database error', detail: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = await req.json();
    const { moduleSlug, name, title, credentials, bio, avatarInitials } = body;

    if (!moduleSlug || !name || !title || !avatarInitials) {
      return Response.json({ error: 'Missing required fields: moduleSlug, name, title, avatarInitials are all required.' }, { status: 400 });
    }

    const result = await db
      .insert(moduleContributors)
      .values({
        moduleSlug,
        name,
        title,
        credentials: credentials || null,
        bio: bio || null,
        avatarInitials,
        displayOrder: 0,
      })
      .returning();

    return Response.json({ contributor: result[0] });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[contributors POST]', msg);
    return Response.json({ error: 'Database error', detail: msg }, { status: 500 });
  }
}
