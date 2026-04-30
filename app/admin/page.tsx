import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { users, sponsors, podcastSubscribers, podcastBroadcasts, newsItems, jobListings, courses, siteSettings, usersV2, moduleContributors, streamAccessGrants, portfolioEntries } from '@/lib/schema';
import { eq, desc, count, isNull } from 'drizzle-orm';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin — NPCollab',
  robots: 'noindex',
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [
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
    allStreamGrants,
    allPortfolioSubmissions,
    stats,
  ] = await Promise.all([
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
    db.select({
      id:         streamAccessGrants.id,
      userId:     streamAccessGrants.userId,
      streamSlug: streamAccessGrants.streamSlug,
      grantedBy:  streamAccessGrants.grantedBy,
      grantedAt:  streamAccessGrants.grantedAt,
      revokedAt:  streamAccessGrants.revokedAt,
      userName:   usersV2.name,
      userEmail:  usersV2.email,
    }).from(streamAccessGrants).leftJoin(usersV2, eq(streamAccessGrants.userId, usersV2.id)).where(isNull(streamAccessGrants.revokedAt)).orderBy(desc(streamAccessGrants.grantedAt)),
    db.select({
      id:             portfolioEntries.id,
      userId:         portfolioEntries.userId,
      formType:       portfolioEntries.formType,
      streamSlug:     portfolioEntries.streamSlug,
      procedureSlug:  portfolioEntries.procedureSlug,
      title:          portfolioEntries.title,
      status:         portfolioEntries.status,
      traineeData:    portfolioEntries.traineeData,
      assessorData:   portfolioEntries.assessorData,
      mentorEmail:    portfolioEntries.mentorEmail,
      mentorName:     portfolioEntries.mentorName,
      mentorComments: portfolioEntries.mentorComments,
      mentorSignedAt: portfolioEntries.mentorSignedAt,
      createdAt:      portfolioEntries.createdAt,
      updatedAt:      portfolioEntries.updatedAt,
      submittedAt:    portfolioEntries.submittedAt,
      userName:       usersV2.name,
      userEmail:      usersV2.email,
    }).from(portfolioEntries).leftJoin(usersV2, eq(portfolioEntries.userId, usersV2.id)).orderBy(desc(portfolioEntries.createdAt)),
    Promise.all([
      db.select({ count: count() }).from(users).where(eq(users.active, true)),
      db.select({ count: count() }).from(users).where(eq(users.active, false)),
      db.select({ count: count() }).from(users),
    ]),
  ]);

  const [active, disabled, total] = stats;

  // Convert site_settings rows to a key/value map
  const settingsMap: Record<string, string> = {};
  for (const row of allSiteSettings) {
    settingsMap[row.key] = row.value;
  }

  return (
    <AdminDashboard
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
      streamGrants={allStreamGrants}
      portfolioSubmissions={allPortfolioSubmissions}
      stats={{
        active: active[0].count,
        disabled: disabled[0].count,
        total: total[0].count,
      }}
    />
  );
}
