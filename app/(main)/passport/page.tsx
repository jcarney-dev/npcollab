import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { procedureLogs, portfolioEntries } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';
import PassportClient from '@/components/PassportClient';

export const metadata: Metadata = {
  title: 'Procedure Passport | NPCollab',
};

export const dynamic = 'force-dynamic';

export default async function PassportPage() {
  const session = await getSession();
  if (!session?.userId) redirect('/login');

  const [logs, assessments] = await Promise.all([
    db.select().from(procedureLogs)
      .where(eq(procedureLogs.userId, session.userId))
      .orderBy(desc(procedureLogs.performedAt)),
    db.select().from(portfolioEntries)
      .where(eq(portfolioEntries.userId, session.userId))
      .orderBy(desc(portfolioEntries.updatedAt)),
  ]);

  return <PassportClient logs={logs} assessments={assessments} />;
}
