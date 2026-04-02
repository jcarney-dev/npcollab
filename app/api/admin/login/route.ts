import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const response = Response.json({ ok: true });
  response.headers.set(
    'Set-Cookie',
    `npcollab_admin=${process.env.ADMIN_PASSWORD}; HttpOnly; Path=/; Max-Age=${60 * 60 * 8}; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  return response;
}
