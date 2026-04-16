import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { courses } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { requireAdmin } from '@/lib/session';


export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  const all = await db.select().from(courses).orderBy(courses.createdAt);
  return NextResponse.json(all);
}

// POST /api/admin/courses — create a single course manually
export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  let body: Record<string, string | null>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const {
    courseName, providerName, providerEmail, courseType, specialty,
    description, dateStart, dateEnd, location, cost, cpdHours,
    registrationUrl, status: st,
  } = body as Record<string, string>;

  if (!courseName?.trim() || !providerName?.trim() || !description?.trim() ||
      !dateStart || !location?.trim() || !registrationUrl?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const [inserted] = await db.insert(courses).values({
      courseName: courseName.trim(),
      providerName: providerName.trim(),
      providerEmail: providerEmail?.trim() || null,
      courseType: courseType?.trim() || 'other',
      specialty: specialty?.trim() || '',
      description: description.trim(),
      dateStart: new Date(dateStart),
      dateEnd: dateEnd ? new Date(dateEnd) : null,
      location: location.trim(),
      cost: cost?.trim() || null,
      cpdHours: cpdHours?.trim() || null,
      registrationUrl: registrationUrl.trim(),
      status: st === 'approved' ? 'approved' : 'draft',
      paymentStatus: 'manual',
      postedAt: st === 'approved' ? new Date() : null,
    }).returning();
    return NextResponse.json(inserted);
  } catch (err) {
    console.error('[admin/courses POST]', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// PUT /api/admin/courses — update status or fields
export async function PUT(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  let body: Record<string, string | null>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id, status: newStatus, ...rest } = body as Record<string, string>;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  try {
    const updates: Record<string, unknown> = {};
    if (newStatus) {
      updates.status = newStatus;
      if (newStatus === 'approved') updates.postedAt = new Date();
    }
    // Allow editing core fields if passed
    const fields = ['courseName','providerName','providerEmail','courseType','specialty',
                    'description','location','cost','cpdHours','registrationUrl'];
    for (const f of fields) {
      if (rest[f] !== undefined) updates[f] = rest[f]?.trim() || null;
    }
    if (rest.dateStart) updates.dateStart = new Date(rest.dateStart);
    if (rest.dateEnd !== undefined) updates.dateEnd = rest.dateEnd ? new Date(rest.dateEnd) : null;

    const [updated] = await db.update(courses).set(updates).where(eq(courses.id, id)).returning();
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(updated);
  } catch (err) {
    console.error('[admin/courses PUT]', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// DELETE /api/admin/courses?id=xxx
export async function DELETE(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    await db.delete(courses).where(eq(courses.id, id));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[admin/courses DELETE]', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
