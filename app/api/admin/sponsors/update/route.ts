import { db } from '@/lib/db';
import { sponsors } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = await req.json();
    const { id, active, logoUrl, websiteUrl, placement, moduleSlug, startDate, endDate } = body;

    if (!id || typeof id !== 'string') {
      return Response.json({ error: 'Sponsor ID required.' }, { status: 400 });
    }

    // Build update object — only include defined fields
    const updates: Record<string, unknown> = {};
    if (typeof active === 'boolean')           updates.active      = active;
    if (typeof logoUrl === 'string')           updates.logoUrl     = logoUrl || null;
    if (typeof websiteUrl === 'string')        updates.websiteUrl  = websiteUrl;
    if (typeof placement === 'string')         updates.placement   = placement;
    if (moduleSlug !== undefined)              updates.moduleSlug  = moduleSlug || null;
    if (startDate !== undefined)               updates.startDate   = startDate ? new Date(startDate) : null;
    if (endDate !== undefined)                 updates.endDate     = endDate ? new Date(endDate) : null;

    const [updated] = await db
      .update(sponsors)
      .set(updates)
      .where(eq(sponsors.id, id))
      .returning();

    if (!updated) {
      return Response.json({ error: 'Sponsor not found.' }, { status: 404 });
    }

    return Response.json({ sponsor: updated });
  } catch (err) {
    console.error('[sponsors/update]', err);
    return Response.json({ error: 'Server error.' }, { status: 500 });
  }
}
