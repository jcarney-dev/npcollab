'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { NewsItem } from '@/lib/schema';

// ── Date helper ─────────────────────────────────────────────────────────────

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Type badge ──────────────────────────────────────────────────────────────

const TYPE_LABEL: Record<string, string> = {
  article:      'Article',
  external:     'External Link',
  announcement: 'Announcement',
};

const TYPE_STYLE: Record<string, React.CSSProperties> = {
  article:      { background: 'var(--navy)', color: '#fff' },
  external:     { background: 'var(--gold-pale)', color: 'var(--navy)', border: '1px solid var(--gold-light)' },
  announcement: { background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' },
};

type FilterTab = 'all' | 'article' | 'external' | 'announcement';

const TABS: { key: FilterTab; label: string }[] = [
  { key: 'all',          label: 'All' },
  { key: 'announcement', label: 'Announcements' },
  { key: 'external',     label: 'External Links' },
  { key: 'article',      label: 'Articles' },
];

// ── News card ───────────────────────────────────────────────────────────────

function NewsCard({ item }: { item: NewsItem }) {
  const hasLink = !!item.url;
  const isExternal = item.type === 'external' || hasLink;
  const publishDate = item.publishedAt || item.createdAt;

  return (
    <article style={{
      border: '1px solid var(--border)',
      borderRadius: '10px',
      background: '#fff',
      borderLeft: '4px solid var(--gold)',
      padding: '22px 24px',
    }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          padding: '3px 9px',
          borderRadius: '10px',
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          flexShrink: 0,
          ...TYPE_STYLE[item.type] || TYPE_STYLE.article,
        }}>
          {TYPE_LABEL[item.type] || item.type}
        </span>
        {item.sourceName && (
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, alignSelf: 'center' }}>
            {item.sourceName}
          </span>
        )}
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: 'auto', alignSelf: 'center', whiteSpace: 'nowrap' }}>
          {formatDate(publishDate)}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        margin: '0 0 10px',
        fontSize: '17px',
        fontWeight: 700,
        color: 'var(--navy)',
        fontFamily: 'var(--font-heading)',
        lineHeight: 1.35,
      }}>
        {isExternal ? (
          <a href={item.url!} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            {item.title}
          </a>
        ) : (
          <Link href={`/community/news/${item.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {item.title}
          </Link>
        )}
      </h3>

      {/* Summary */}
      <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.65 }}>
        {item.summary}
      </p>

      {/* Read more */}
      {isExternal ? (
        <a
          href={item.url!}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--navy)',
            textDecoration: 'none',
            padding: '7px 16px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            background: 'var(--off-white)',
          }}
        >
          Read more ↗
        </a>
      ) : (
        <Link
          href={`/community/news/${item.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--navy)',
            textDecoration: 'none',
            padding: '7px 16px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            background: 'var(--off-white)',
          }}
        >
          Read more →
        </Link>
      )}
    </article>
  );
}

// ── Main component ──────────────────────────────────────────────────────────

export default function NewsClient({ items, isLoggedIn }: { items: NewsItem[]; isLoggedIn: boolean }) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered = activeTab === 'all' ? items : items.filter(i => i.type === activeTab);

  // Hide tabs that have no items
  const counts: Record<FilterTab, number> = {
    all:          items.length,
    article:      items.filter(i => i.type === 'article').length,
    external:     items.filter(i => i.type === 'external').length,
    announcement: items.filter(i => i.type === 'announcement').length,
  };

  return (
    <>
      {/* Top action row */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        {isLoggedIn && (
          <Link
            href="/community/news/submit"
            style={{
              display: 'inline-block',
              padding: '9px 20px',
              background: 'var(--navy)',
              color: '#fff',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            Submit News →
          </Link>
        )}
      </div>

      {items.length === 0 ? (
        <div style={{ padding: '48px 32px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--off-white)' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '16px' }}>
            No news items yet — check back soon.
          </p>
        </div>
      ) : (
        <>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {TABS.filter(t => t.key === 'all' || counts[t.key] > 0).map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  border: activeTab === tab.key ? '1px solid var(--navy)' : '1px solid var(--border)',
                  background: activeTab === tab.key ? 'var(--navy)' : '#fff',
                  color: activeTab === tab.key ? '#fff' : 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {tab.label}
                {tab.key !== 'all' && (
                  <span style={{ marginLeft: '6px', fontSize: '11px', opacity: 0.7 }}>
                    {counts[tab.key]}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--navy)' }}>{filtered.length}</strong> item{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div style={{ padding: '32px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--off-white)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>No {TABS.find(t => t.key === activeTab)?.label.toLowerCase()} items yet.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filtered.map(item => <NewsCard key={item.id} item={item} />)}
            </div>
          )}
        </>
      )}
    </>
  );
}
