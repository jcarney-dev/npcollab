import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function StreamsLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session?.userId) redirect('/login');

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, session.userId)).limit(1);
  if (!user || !user.active || !user.approved) redirect('/login');

  return <>{children}</>;
}
