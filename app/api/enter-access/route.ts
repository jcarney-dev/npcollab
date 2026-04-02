import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { signAccessCookie } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, redirectTo } = body;

    if (!code || typeof code !== 'string') {
      return Response.json({ error: 'Access code is required.' }, { status: 400 });
    }

    const normalized = code.trim().toUpperCase();

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.accessCode, normalized))
      .limit(1);

    if (!user) {
      return Response.json({ error: 'Access code not found. Please check and try again.' }, { status: 401 });
    }

    if (!user.active) {
      return Response.json({ error: 'This access code has been disabled. Please contact support.' }, { status: 403 });
    }

    const cookieValue = await signAccessCookie(user.id);

    // Determine safe redirect destination
    const destination =
      redirectTo && typeof redirectTo === 'string' && redirectTo.startsWith('/') && !redirectTo.startsWith('//')
        ? redirectTo
        : '/';

    const response = Response.json({ ok: true, redirect: destination });
    response.headers.set(
      'Set-Cookie',
      `npcollab_access=${cookieValue}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    );

    return response;
  } catch (err) {
    console.error('[enter-access]', err);
    return Response.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}
