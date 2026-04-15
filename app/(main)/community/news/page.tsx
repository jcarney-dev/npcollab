import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { newsItems } from '@/lib/schema';
import type { NewsItem } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';
import { getSession } from '@/lib/session';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'NP News Australia',
  description: 'Latest news and updates for Australian Nurse Practitioners — AHPRA, NMBA, policy changes, and NP sector developments.',
  openGraph: {
    title: 'NP News Australia | NPCollab',
    description: 'Latest news and updates for Australian Nurse Practitioners — AHPRA, NMBA, policy changes, and NP sector developments.',
    url: 'https://npcollab.com/community/news',
  },
  alternates: {
    canonical: 'https://npcollab.com/community/news',
  },
};

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
  // Fetch published items
  let items: NewsItem[] = [];
  try {
    items = await db
      .select()
      .from(newsItems)
      .where(eq(newsItems.status, 'published'))
      .orderBy(desc(newsItems.publishedAt));
  } catch {
    items = [];
  }

  // Check if user has a valid session to show Submit News button
  const session = await getSession();
  const isLoggedIn = !!session;

  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>📰 News</h1>
        <p>Updates, policy changes, and announcements relevant to Australian Nurse Practitioners</p>
      </div>
      <div className="content-prose">
        <NewsClient items={items} isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}
