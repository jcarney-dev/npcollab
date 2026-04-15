import { db } from '@/lib/db';
import { moduleContributors } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  const cookieVal = adminCookie?.value ?? '(missing)';
  const envSet = process.env.ADMIN_PASSWORD ? '(set)' : '(NOT SET)';
  console.log(`[contributors/[id] isAdmin] cookie="${cookieVal.substring(0, 4)}..." env=${envSet} match=${cookieVal === process.env.ADMIN_PASSWORD}`);
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) {
    console.error('[contributors PATCH] Unauthorised');
    return Response.json({ error: 'Unauthorised', detail: 'Admin cookie missing or does not match ADMIN_PASSWORD' }, { status: 401 });
  }

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
    const msg = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;
    console.error('[contributors PATCH]', msg, stack);
    return Response.json({ error: 'Database error', detail: msg, stack }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) {
    console.error('[contributors DELETE] Unauthorised');
    return Response.json({ error: 'Unauthorised', detail: 'Admin cookie missing or does not match ADMIN_PASSWORD' }, { status: 401 });
  }

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
    const msg = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;
    console.error('[contributors DELETE]', msg, stack);
    return Response.json({ error: 'Database error', detail: msg, stack }, { status: 500 });
  }
}
