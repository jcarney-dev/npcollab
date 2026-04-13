import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { newsItems } from '@/lib/schema';
import type { NewsItem } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'News — NPCollab',
  description: 'Updates, policy changes, and announcements relevant to Australian Nurse Practitioners.',
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

  // Check if user has a valid access cookie to show Submit News button
  let isLoggedIn = false;
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get(COOKIE_NAME)?.value;
    if (raw) {
      const userId = await verifyAccessCookie(raw);
      isLoggedIn = !!userId;
    }
  } catch {
    isLoggedIn = false;
  }

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
