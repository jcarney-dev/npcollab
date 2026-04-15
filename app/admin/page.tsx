import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { accessRequests, users, sponsors, podcastSubscribers, podcastBroadcasts, newsItems, jobListings, courses, siteSettings, usersV2, moduleContributors } from '@/lib/schema';
import { eq, desc, count } from 'drizzle-orm';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin — NPCollab',
  robots: 'noindex',
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [
    pendingRequests,
    allUsers,
    allSponsors,
    allPodcastSubscribers,
    allPodcastBroadcasts,
    allNewsItems,
    allJobListings,
    allCourses,
    allSiteSettings,
    allUsersV2,
    allContributors,
    stats,
  ] = await Promise.all([
    db.select().from(accessRequests).where(eq(accessRequests.status, 'pending')).orderBy(desc(accessRequests.createdAt)),
    db.select().from(users).orderBy(desc(users.approvedAt)),
    db.select().from(sponsors).orderBy(desc(sponsors.createdAt)),
    db.select().from(podcastSubscribers).orderBy(desc(podcastSubscribers.createdAt)),
    db.select().from(podcastBroadcasts).orderBy(desc(podcastBroadcasts.sentAt)),
    db.select().from(newsItems).orderBy(desc(newsItems.createdAt)),
    db.select().from(jobListings).orderBy(desc(jobListings.createdAt)),
    db.select().from(courses).orderBy(desc(courses.createdAt)),
    db.select().from(siteSettings),
    db.select().from(usersV2).orderBy(desc(usersV2.createdAt)),
    db.select().from(moduleContributors).orderBy(desc(moduleContributors.createdAt)),
    Promise.all([
      db.select({ count: count() }).from(accessRequests).where(eq(accessRequests.status, 'pending')),
      db.select({ count: count() }).from(users).where(eq(users.active, true)),
      db.select({ count: count() }).from(users).where(eq(users.active, false)),
      db.select({ count: count() }).from(users),
    ]),
  ]);

  const [pending, active, disabled, total] = stats;

  // Convert site_settings rows to a key/value map
  const settingsMap: Record<string, string> = {};
  for (const row of allSiteSettings) {
    settingsMap[row.key] = row.value;
  }

  return (
    <AdminDashboard
      pendingRequests={pendingRequests}
      users={allUsers}
      sponsors={allSponsors}
      podcastSubscribers={allPodcastSubscribers}
      podcastBroadcasts={allPodcastBroadcasts}
      newsItems={allNewsItems}
      jobListings={allJobListings}
      courses={allCourses}
      siteSettings={settingsMap}
      registrations={allUsersV2}
      contributors={allContributors}
      stats={{
        pending: pending[0].count,
        active: active[0].count,
        disabled: disabled[0].count,
        total: total[0].count,
      }}
    />
  );
}
