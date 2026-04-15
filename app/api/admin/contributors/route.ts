import { db } from '@/lib/db';
import { moduleContributors } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  const cookieVal = adminCookie?.value ?? '(missing)';
  const envSet = process.env.ADMIN_PASSWORD ? '(set)' : '(NOT SET)';
  console.log(`[contributors isAdmin] cookie="${cookieVal.substring(0, 4)}..." env=${envSet} match=${cookieVal === process.env.ADMIN_PASSWORD}`);
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised', detail: 'Admin cookie missing or invalid' }, { status: 401 });

  try {
    const rows = await db
      .select()
      .from(moduleContributors)
      .orderBy(desc(moduleContributors.createdAt));
    return Response.json(rows);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;
    console.error('[contributors GET]', msg, stack);
    return Response.json({ error: 'Database error', detail: msg, stack }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised', detail: 'Admin cookie missing or invalid' }, { status: 401 });

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
    const stack = error instanceof Error ? error.stack : undefined;
    console.error('[contributors POST]', msg, stack);
    return Response.json({ error: 'Database error', detail: msg, stack }, { status: 500 });
  }
}
