'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { JobListing } from '@/lib/schema';

// ── Date helpers ────────────────────────────────────────────────────────────

function formatPostedDate(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'Posted today';
  if (diffDays === 1) return 'Posted yesterday';
  if (diffDays < 7) return `Posted ${diffDays} days ago`;
  return `Posted ${d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}`;
}

function formatExpiryDate(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return `Expires ${d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}`;
}

function truncateWords(text: string, wordLimit: number): { short: string; full: string; truncated: boolean } {
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return { short: text, full: text, truncated: false };
  return { short: words.slice(0, wordLimit).join(' ') + '…', full: text, truncated: true };
}

// ── Job Card ────────────────────────────────────────────────────────────────

function JobCard({ listing }: { listing: JobListing }) {
  const [expanded, setExpanded] = useState(false);
  const desc = truncateWords(listing.description, 80);
  const postedDate = listing.postedAt || listing.createdAt;

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '10px',
      background: '#fff',
      borderLeft: '4px solid var(--gold)',
      overflow: 'hidden',
    }}>
      <div style={{ padding: '24px' }}>
        {/* Title row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              margin: '0 0 4px',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--navy)',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.3,
            }}>
              {listing.jobTitle}
            </h3>
            <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
              {listing.employerName}
              {listing.location ? ` · ${listing.location}` : ''}
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {listing.employmentType && (
                <span style={{
                  fontSize: '12px', padding: '3px 10px', borderRadius: '12px',
                  background: 'var(--gold-pale)', color: 'var(--navy)',
                  border: '1px solid var(--gold-light)', fontWeight: 600,
                }}>
                  {listing.employmentType}
                </span>
              )}
              {listing.specialty && (
                <span style={{
                  fontSize: '12px', padding: '3px 10px', borderRadius: '12px',
                  background: 'var(--off-white)', color: 'var(--text-muted)',
                  border: '1px solid var(--border)', fontWeight: 500,
                }}>
                  {listing.specialty}
                </span>
              )}
              {listing.salaryRange && (
                <span style={{
                  fontSize: '12px', padding: '3px 10px', borderRadius: '12px',
                  background: 'var(--off-white)', color: 'var(--text-muted)',
                  border: '1px solid var(--border)', fontWeight: 500,
                }}>
                  {listing.salaryRange}
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{ margin: '0 0 6px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.65 }}>
              {expanded ? desc.full : desc.short}
              {desc.truncated && !expanded && (
                <>
                  {' '}
                  <button
                    onClick={() => setExpanded(true)}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Read more
                  </button>
                </>
              )}
              {expanded && desc.truncated && (
                <>
                  {' '}
                  <button
                    onClick={() => setExpanded(false)}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Show less
                  </button>
                </>
              )}
            </p>

            {/* Dates */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
              {postedDate && (
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {formatPostedDate(postedDate)}
                </span>
              )}
              {listing.expiresAt && (
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {formatExpiryDate(listing.expiresAt)}
                </span>
              )}
            </div>
          </div>

          {/* Apply button */}
          <div style={{ flexShrink: 0, paddingTop: '4px' }}>
            <a
              href={listing.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 22px',
                background: 'var(--navy)',
                color: '#fff',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '14px',
                whiteSpace: 'nowrap',
                transition: 'background 0.15s',
              }}
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Filter bar ──────────────────────────────────────────────────────────────

const EMPLOYMENT_TYPES = ['All', 'Full-time', 'Part-time', 'Casual', 'Contract'];

const selectStyle: React.CSSProperties = {
  height: '38px',
  padding: '0 10px',
  borderRadius: '6px',
  border: '1px solid var(--border)',
  background: '#fff',
  color: 'var(--text)',
  fontSize: '14px',
  cursor: 'pointer',
  minWidth: '140px',
};

const inputStyle: React.CSSProperties = {
  height: '38px',
  padding: '0 10px',
  borderRadius: '6px',
  border: '1px solid var(--border)',
  background: '#fff',
  color: 'var(--text)',
  fontSize: '14px',
  minWidth: '160px',
  flex: '1',
};

// ── Main component ──────────────────────────────────────────────────────────

export default function JobBoardClient({ listings }: { listings: JobListing[] }) {
  const [sortBy, setSortBy] = useState<'recent' | 'expiring'>('recent');
  const [specialty, setSpecialty] = useState('All');
  const [employmentType, setEmploymentType] = useState('All');
  const [locationSearch, setLocationSearch] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Build unique specialties list
  const specialties = useMemo(() => {
    const s = new Set<string>();
    listings.forEach(l => { if (l.specialty?.trim()) s.add(l.specialty.trim()); });
    return ['All', ...Array.from(s).sort()];
  }, [listings]);

  // Filter + sort
  const filtered = useMemo(() => {
    let result = [...listings];
    if (specialty !== 'All') result = result.filter(l => l.specialty?.trim() === specialty);
    if (employmentType !== 'All') result = result.filter(l => l.employmentType?.toLowerCase() === employmentType.toLowerCase());
    if (locationSearch.trim()) {
      const q = locationSearch.toLowerCase();
      result = result.filter(l => l.location?.toLowerCase().includes(q));
    }
    if (sortBy === 'recent') {
      result.sort((a, b) => {
        const aDate = a.postedAt || a.createdAt;
        const bDate = b.postedAt || b.createdAt;
        return new Date(bDate).getTime() - new Date(aDate).getTime();
      });
    } else {
      result.sort((a, b) => {
        if (!a.expiresAt) return 1;
        if (!b.expiresAt) return -1;
        return new Date(a.expiresAt).getTime() - new Date(b.expiresAt).getTime();
      });
    }
    return result;
  }, [listings, sortBy, specialty, employmentType, locationSearch]);

  const hasFilters = sortBy !== 'recent' || specialty !== 'All' || employmentType !== 'All' || locationSearch.trim();

  function clearFilters() {
    setSortBy('recent');
    setSpecialty('All');
    setEmploymentType('All');
    setLocationSearch('');
  }

  const filterBar = (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <select value={sortBy} onChange={e => setSortBy(e.target.value as 'recent' | 'expiring')} style={selectStyle}>
        <option value="recent">Most Recent</option>
        <option value="expiring">Expiring Soon</option>
      </select>

      <select value={specialty} onChange={e => setSpecialty(e.target.value)} style={selectStyle}>
        {specialties.map(s => <option key={s} value={s}>{s === 'All' ? 'All Specialties' : s}</option>)}
      </select>

      <select value={employmentType} onChange={e => setEmploymentType(e.target.value)} style={selectStyle}>
        {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
      </select>

      <input
        type="text"
        placeholder="Filter by location…"
        value={locationSearch}
        onChange={e => setLocationSearch(e.target.value)}
        style={inputStyle}
      />

      {hasFilters && (
        <button
          onClick={clearFilters}
          style={{
            height: '38px',
            padding: '0 14px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            background: 'var(--off-white)',
            color: 'var(--text-muted)',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Post a Job CTA */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <Link
          href="/community/jobs/post"
          className="btn-primary"
          style={{ display: 'inline-block' }}
        >
          Post a Job — $99 for 30 days →
        </Link>
      </div>

      {listings.length === 0 ? (
        <div className="highlight-box" style={{ textAlign: 'center', padding: '48px 32px' }}>
          <h4>No listings at the moment</h4>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>
            Check back soon. Are you an employer? Post a role and reach Australia&rsquo;s NP community.
          </p>
          <Link href="/community/jobs/post" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 24px', background: 'var(--gold)', color: 'var(--navy)', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
            Post a Job →
          </Link>
        </div>
      ) : (
        <>
          {/* ── Desktop filter bar ─────────────── */}
          <div className="job-filter-desktop" style={{ marginBottom: '20px', padding: '16px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
            {filterBar}
          </div>

          {/* ── Mobile filter toggle ───────────── */}
          <div className="job-filter-mobile" style={{ marginBottom: '16px' }}>
            <button
              onClick={() => setFiltersOpen(f => !f)}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--off-white)',
                color: 'var(--navy)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Filter &amp; Sort{hasFilters ? ' (active)' : ''}</span>
              <span>{filtersOpen ? '▲' : '▼'}</span>
            </button>
            {filtersOpen && (
              <div style={{ marginTop: '10px', padding: '14px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <select value={sortBy} onChange={e => setSortBy(e.target.value as 'recent' | 'expiring')} style={{ ...selectStyle, minWidth: 'unset', width: '100%' }}>
                    <option value="recent">Most Recent</option>
                    <option value="expiring">Expiring Soon</option>
                  </select>
                  <select value={specialty} onChange={e => setSpecialty(e.target.value)} style={{ ...selectStyle, minWidth: 'unset', width: '100%' }}>
                    {specialties.map(s => <option key={s} value={s}>{s === 'All' ? 'All Specialties' : s}</option>)}
                  </select>
                  <select value={employmentType} onChange={e => setEmploymentType(e.target.value)} style={{ ...selectStyle, minWidth: 'unset', width: '100%' }}>
                    {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
                  </select>
                  <input
                    type="text"
                    placeholder="Filter by location…"
                    value={locationSearch}
                    onChange={e => setLocationSearch(e.target.value)}
                    style={{ ...inputStyle, minWidth: 'unset', width: '100%', flex: 'unset' }}
                  />
                  {hasFilters && (
                    <button onClick={clearFilters} style={{ height: '38px', borderRadius: '6px', border: '1px solid var(--border)', background: '#fff', color: 'var(--text-muted)', fontSize: '13px', cursor: 'pointer', fontWeight: 500 }}>
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── Result count ───────────────────── */}
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--navy)' }}>{filtered.length}</strong> of{' '}
            <strong style={{ color: 'var(--navy)' }}>{listings.length}</strong> listing{listings.length !== 1 ? 's' : ''}
          </p>

          {/* ── Listing cards ──────────────────── */}
          {filtered.length === 0 ? (
            <div style={{ padding: '40px 24px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--off-white)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px' }}>
                No listings match your filters.{' '}
                <button onClick={clearFilters} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, cursor: 'pointer', fontSize: '15px', textDecoration: 'underline' }}>
                  Clear filters
                </button>
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filtered.map(listing => (
                <JobCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Employer CTA footer */}
      <div style={{ marginTop: '40px', padding: '20px 24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--navy)' }}>Employers:</strong> Reach Australia&rsquo;s NP community for just $99 for 30 days.{' '}
          <a href="/employers" style={{ color: 'var(--gold)', fontWeight: 500 }}>Learn more about advertising →</a>
        </p>
      </div>

      {/* Mobile/desktop filter visibility styles */}
      <style>{`
        @media (min-width: 640px) {
          .job-filter-mobile { display: none !important; }
          .job-filter-desktop { display: block !important; }
        }
        @media (max-width: 639px) {
          .job-filter-mobile { display: block !important; }
          .job-filter-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}
