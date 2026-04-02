import { db } from '@/lib/db';
import { accessRequests, users } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { sendApprovalEmail } from '@/lib/email';

function generateAccessCode(): string {
  const year = new Date().getFullYear();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I ambiguity
  let suffix = '';
  for (let i = 0; i < 4; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `NPC-${year}-${suffix}`;
}

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

  // Fetch the request
  const [request] = await db
    .select()
    .from(accessRequests)
    .where(eq(accessRequests.id, id))
    .limit(1);

  if (!request) {
    return Response.json({ error: 'Request not found.' }, { status: 404 });
  }
  if (request.status !== 'pending') {
    return Response.json({ error: 'Request is no longer pending.' }, { status: 409 });
  }

  // Generate a unique access code (retry on collision)
  let accessCode = '';
  for (let attempt = 0; attempt < 5; attempt++) {
    const candidate = generateAccessCode();
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.accessCode, candidate))
      .limit(1);
    if (existing.length === 0) {
      accessCode = candidate;
      break;
    }
  }
  if (!accessCode) {
    return Response.json({ error: 'Could not generate unique access code. Try again.' }, { status: 500 });
  }

  // Insert user + update request status in parallel
  const [newUser] = await db
    .insert(users)
    .values({
      name:       request.name,
      email:      request.email,
      role:       request.role,
      accessCode,
      active:     true,
      requestId:  request.id,
    })
    .returning();

  await db
    .update(accessRequests)
    .set({ status: 'approved' })
    .where(eq(accessRequests.id, id));

  // Send approval email to user — fire and forget
  sendApprovalEmail({
    name:       newUser.name,
    email:      newUser.email,
    accessCode: newUser.accessCode,
  }).catch(err => console.error('[email] Failed to send approval email:', err));

  return Response.json({ ok: true, user: newUser });
}
