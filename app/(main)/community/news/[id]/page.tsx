import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { newsItems } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const [item] = await db
      .select()
      .from(newsItems)
      .where(and(eq(newsItems.id, id), eq(newsItems.status, 'published')))
      .limit(1);
    if (!item) return { title: 'News — NPCollab' };
    return { title: `${item.title} — NPCollab` };
  } catch {
    return { title: 'News — NPCollab' };
  }
}

function formatFullDate(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// Render summary text with paragraph breaks preserved
function renderContent(text: string) {
  return text.split(/\n\n+/).map((para, i) => (
    <p key={i} style={{ margin: '0 0 18px', fontSize: '16px', color: 'var(--text)', lineHeight: 1.75 }}>
      {para.split('\n').map((line, j, arr) => (
        j < arr.length - 1 ? <>{line}<br /></> : line
      ))}
    </p>
  ));
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;

  let item;
  try {
    const [found] = await db
      .select()
      .from(newsItems)
      .where(and(eq(newsItems.id, id), eq(newsItems.status, 'published')))
      .limit(1);
    item = found;
  } catch {
    notFound();
  }

  if (!item) notFound();

  const TYPE_LABEL: Record<string, string> = {
    article:      'Article',
    external:     'External Link',
    announcement: 'Announcement',
  };

  const publishDate = item.publishedAt || item.createdAt;

  return (
    <>
      <div className="page-header">
        <div className="label">Community · News</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: 1.25 }}>
          {item.title}
        </h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '10px',
            background: 'rgba(201,168,76,0.2)', color: 'var(--gold-light)', letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            {TYPE_LABEL[item.type] || item.type}
          </span>
          {item.sourceName && (
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{item.sourceName}</span>
          )}
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{formatFullDate(publishDate)}</span>
        </div>
      </div>

      <div className="content-prose">
        {/* Back link */}
        <Link
          href="/community/news"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)',
            textDecoration: 'none', marginBottom: '28px',
            padding: '7px 14px', border: '1px solid var(--border)',
            borderRadius: '6px', background: 'var(--off-white)',
          }}
        >
          ← Back to News
        </Link>

        {/* Article body */}
        <div style={{ maxWidth: '720px' }}>
          {renderContent(item.summary)}
        </div>

        {/* External link CTA */}
        {item.url && (
          <div style={{ marginTop: '32px', padding: '20px 24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)' }}>
              {item.sourceName ? `Source: ${item.sourceName}` : 'Read the original article:'}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '10px 22px',
                background: 'var(--navy)', color: '#fff', borderRadius: '6px',
                fontWeight: 600, textDecoration: 'none', fontSize: '14px',
              }}
            >
              Read Original Article ↗
            </a>
          </div>
        )}

        {/* Back link bottom */}
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link
            href="/community/news"
            style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}
          >
            ← Back to all news
          </Link>
        </div>
      </div>
    </>
  );
}
