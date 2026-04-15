import { db } from '@/lib/db';
import { moduleContributors } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = await req.json();
    const { moduleSlug, name, title, credentials, bio, avatarInitials, displayOrder } = body;
    const { id } = await params;

    const result = await db
      .update(moduleContributors)
      .set({
        moduleSlug: moduleSlug || undefined,
        name: name || undefined,
        title: title || undefined,
        credentials: credentials !== undefined ? credentials : undefined,
        bio: bio !== undefined ? bio : undefined,
        avatarInitials: avatarInitials || undefined,
        displayOrder: displayOrder !== undefined ? displayOrder : undefined,
      })
      .where(eq(moduleContributors.id, id))
      .returning();

    if (result.length === 0) {
      return Response.json({ error: 'Contributor not found' }, { status: 404 });
    }

    return Response.json({ contributor: result[0] });
  } catch (error) {
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const { id } = await params;
    const result = await db
      .delete(moduleContributors)
      .where(eq(moduleContributors.id, id))
      .returning();

    if (result.length === 0) {
      return Response.json({ error: 'Contributor not found' }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
}