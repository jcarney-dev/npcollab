import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { accessRequests, users, sponsors, podcastSubscribers } from '@/lib/schema';
import { eq, desc, count } from 'drizzle-orm';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin — NPCollab',
  robots: 'noindex',
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [pendingRequests, allUsers, allSponsors, allPodcastSubscribers, stats] = await Promise.all([
    db
      .select()
      .from(accessRequests)
      .where(eq(accessRequests.status, 'pending'))
      .orderBy(desc(accessRequests.createdAt)),
    db
      .select()
      .from(users)
      .orderBy(desc(users.approvedAt)),
    db
      .select()
      .from(sponsors)
      .orderBy(desc(sponsors.createdAt)),
    db
      .select()
      .from(podcastSubscribers)
      .orderBy(desc(podcastSubscribers.createdAt)),
    Promise.all([
      db.select({ count: count() }).from(accessRequests).where(eq(accessRequests.status, 'pending')),
      db.select({ count: count() }).from(users).where(eq(users.active, true)),
      db.select({ count: count() }).from(users).where(eq(users.active, false)),
      db.select({ count: count() }).from(users),
    ]),
  ]);

  const [pending, active, disabled, total] = stats;

  return (
    <AdminDashboard
      pendingRequests={pendingRequests}
      users={allUsers}
      sponsors={allSponsors}
      podcastSubscribers={allPodcastSubscribers}
      stats={{
        pending: pending[0].count,
        active: active[0].count,
        disabled: disabled[0].count,
        total: total[0].count,
      }}
    />
  );
}
