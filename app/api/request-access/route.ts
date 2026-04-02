import { db } from '@/lib/db';
import { accessRequests } from '@/lib/schema';
import { NextRequest } from 'next/server';

const VALID_ROLES = ['Endorsed NP', 'TNP', 'NP Student', 'RN considering NP', 'Other'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role, reason } = body;

    // Validate
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return Response.json({ error: 'Please enter your full name.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!role || !VALID_ROLES.includes(role)) {
      return Response.json({ error: 'Please select a valid role.' }, { status: 400 });
    }
    if (!reason || typeof reason !== 'string' || reason.trim().length < 10) {
      return Response.json({ error: 'Please provide a brief reason for your request.' }, { status: 400 });
    }

    await db.insert(accessRequests).values({
      name:   name.trim(),
      email:  email.trim().toLowerCase(),
      role,
      reason: reason.trim(),
      status: 'pending',
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[request-access]', err);
    return Response.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}
