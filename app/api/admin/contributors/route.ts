import { db } from '@/lib/db';
import { moduleContributors } from '@/lib/schema';
import { desc } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const rows = await db
      .select()
      .from(moduleContributors)
      .orderBy(desc(moduleContributors.createdAt));
    return Response.json(rows);
  } catch (error) {
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = await req.json();
    const { moduleSlug, name, title, credentials, bio, avatarInitials } = body;

    if (!moduleSlug || !name || !title || !avatarInitials) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
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
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
}
