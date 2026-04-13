'use client';

import { useState, useMemo } from 'react';
import type { Course } from '@/lib/schema';

// ── Helpers ─────────────────────────────────────────────────────────────────

function formatDateRange(start: Date | string, end: Date | string | null | undefined): string {
  const s = typeof start === 'string' ? new Date(start) : start;
  const sStr = s.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  if (!end) return sStr;
  const e = typeof end === 'string' ? new Date(end) : end;
  // Same month+year: "15–17 May 2026"
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()}–${e.getDate()} ${s.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}`;
  }
  return `${sStr} – ${e.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}`;
}

function formatPosted(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (diff < 1) return 'Posted today';
  if (diff === 1) return 'Posted yesterday';
  if (diff < 7) return `Posted ${diff} days ago`;
  return `Posted ${d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}`;
}

function truncateWords(text: string, limit = 80) {
  const words = text.split(/\s+/);
  if (words.length <= limit) return { short: text, truncated: false };
  return { short: words.slice(0, limit).join(' ') + '…', truncated: true };
}

const TYPE_LABEL: Record<string, string> = {
  conference: 'Conference', workshop: 'Workshop', online: 'Online',
  webinar: 'Webinar', simulation: 'Simulation', other: 'Other',
};

const COURSE_TYPES = ['All', 'Conference', 'Workshop', 'Online', 'Webinar', 'Simulation'];

// ── Course card ──────────────────────────────────────────────────────────────

function CourseCard({ course }: { course: Course }) {
  const [expanded, setExpanded] = useState(false);
  const desc = truncateWords(course.description);

  return (
    <article style={{ border: '1px solid var(--border)', borderRadius: '10px', background: '#fff', borderLeft: '4px solid var(--gold)', padding: '22px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Title */}
          <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
            {course.courseName}
          </h3>
          <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
            {course.providerName}
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: 'var(--gold-pale)', color: 'var(--navy)', border: '1px solid var(--gold-light)', fontWeight: 600 }}>
              {TYPE_LABEL[course.courseType] || course.courseType}
            </span>
            {course.specialty && (
              <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: 'var(--off-white)', color: 'var(--text-muted)', border: '1px solid var(--border)', fontWeight: 500 }}>
                {course.specialty}
              </span>
            )}
            {course.cpdHours && (
              <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '12px', background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontWeight: 500 }}>
                {course.cpdHours} CPD
              </span>
            )}
          </div>

          {/* Meta row */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <span>📅 {formatDateRange(course.dateStart, course.dateEnd)}</span>
            <span>📍 {course.location}</span>
            {course.cost && <span>💰 {course.cost}</span>}
          </div>

          {/* Description */}
          <p style={{ margin: '0 0 6px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.65 }}>
            {expanded ? course.description : desc.short}
            {desc.truncated && !expanded && (
              <> <button onClick={() => setExpanded(true)} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>Read more</button></>
            )}
            {expanded && desc.truncated && (
              <> <button onClick={() => setExpanded(false)} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>Show less</button></>
            )}
          </p>

          {/* Posted date */}
          {(course.postedAt || course.createdAt) && (
            <p style={{ margin: '10px 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>
              {formatPosted(course.postedAt || course.createdAt)}
            </p>
          )}
        </div>

        {/* Register button */}
        <div style={{ flexShrink: 0, paddingTop: '4px' }}>
          <a
            href={course.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '10px 22px', background: 'var(--navy)', color: '#fff', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}
          >
            Register Now →
          </a>
        </div>
      </div>
    </article>
  );
}

// ── Filter styles ────────────────────────────────────────────────────────────

const selectStyle: React.CSSProperties = {
  height: '38px', padding: '0 10px', borderRadius: '6px',
  border: '1px solid var(--border)', background: '#fff',
  color: 'var(--text)', fontSize: '14px', cursor: 'pointer', minWidth: '140px',
};
const inputStyle: React.CSSProperties = {
  height: '38px', padding: '0 10px', borderRadius: '6px',
  border: '1px solid var(--border)', background: '#fff',
  color: 'var(--text)', fontSize: '14px', flex: '1', minWidth: '140px',
};

// ── Main component ───────────────────────────────────────────────────────────

export default function CoursesClient({ courses, isLoggedIn }: { courses: Course[]; isLoggedIn: boolean }) {
  const [sortBy, setSortBy] = useState<'soonest' | 'recent'>('soonest');
  const [typeFilter, setTypeFilter] = useState('All');
  const [specialty, setSpecialty] = useState('All');
  const [locationSearch, setLocationSearch] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const specialties = useMemo(() => {
    const s = new Set<string>();
    courses.forEach(c => { if (c.specialty?.trim()) s.add(c.specialty.trim()); });
    return ['All', ...Array.from(s).sort()];
  }, [courses]);

  const filtered = useMemo(() => {
    let result = [...courses];
    if (typeFilter !== 'All') result = result.filter(c => c.courseType.toLowerCase() === typeFilter.toLowerCase());
    if (specialty !== 'All') result = result.filter(c => c.specialty?.trim() === specialty);
    if (locationSearch.trim()) {
      const q = locationSearch.toLowerCase();
      result = result.filter(c => c.location?.toLowerCase().includes(q));
    }
    result.sort((a, b) => {
      if (sortBy === 'soonest') return new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime();
      const aP = a.postedAt || a.createdAt;
      const bP = b.postedAt || b.createdAt;
      return new Date(bP).getTime() - new Date(aP).getTime();
    });
    return result;
  }, [courses, sortBy, typeFilter, specialty, locationSearch]);

  const hasFilters = sortBy !== 'soonest' || typeFilter !== 'All' || specialty !== 'All' || locationSearch.trim();

  function clearFilters() {
    setSortBy('soonest'); setTypeFilter('All'); setSpecialty('All'); setLocationSearch('');
  }

  const filterControls = (vertical = false) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', flexDirection: vertical ? 'column' : 'row' }}>
      <select value={sortBy} onChange={e => setSortBy(e.target.value as 'soonest' | 'recent')} style={{ ...selectStyle, ...(vertical ? { width: '100%', minWidth: 'unset' } : {}) }}>
        <option value="soonest">Soonest First</option>
        <option value="recent">Most Recent</option>
      </select>
      <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ ...selectStyle, ...(vertical ? { width: '100%', minWidth: 'unset' } : {}) }}>
        {COURSE_TYPES.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
      </select>
      <select value={specialty} onChange={e => setSpecialty(e.target.value)} style={{ ...selectStyle, ...(vertical ? { width: '100%', minWidth: 'unset' } : {}) }}>
        {specialties.map(s => <option key={s} value={s}>{s === 'All' ? 'All Specialties' : s}</option>)}
      </select>
      <input type="text" placeholder="Filter by location…" value={locationSearch} onChange={e => setLocationSearch(e.target.value)} style={{ ...inputStyle, ...(vertical ? { width: '100%', minWidth: 'unset', flex: 'unset' } : {}) }} />
      {hasFilters && (
        <button onClick={clearFilters} style={{ height: '38px', padding: '0 14px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--off-white)', color: 'var(--text-muted)', fontSize: '13px', cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap', ...(vertical ? { width: '100%' } : {}) }}>
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* CTA row */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        {isLoggedIn && (
          <a href="/community/courses/submit" style={{ display: 'inline-block', padding: '9px 20px', background: 'var(--navy)', color: '#fff', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
            Submit a Course →
          </a>
        )}
      </div>

      {courses.length === 0 ? (
        <div style={{ padding: '48px 32px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--off-white)' }}>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '16px' }}>No upcoming courses — check back soon.</p>
        </div>
      ) : (
        <>
          {/* Desktop filter bar */}
          <div className="course-filter-desktop" style={{ marginBottom: '20px', padding: '16px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
            {filterControls()}
          </div>

          {/* Mobile filter toggle */}
          <div className="course-filter-mobile" style={{ marginBottom: '16px' }}>
            <button onClick={() => setFiltersOpen(f => !f)} style={{ width: '100%', padding: '10px 16px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--off-white)', color: 'var(--navy)', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Filter &amp; Sort{hasFilters ? ' (active)' : ''}</span>
              <span>{filtersOpen ? '▲' : '▼'}</span>
            </button>
            {filtersOpen && (
              <div style={{ marginTop: '10px', padding: '14px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                {filterControls(true)}
              </div>
            )}
          </div>

          {/* Result count */}
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--navy)' }}>{filtered.length}</strong> of <strong style={{ color: 'var(--navy)' }}>{courses.length}</strong> course{courses.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ padding: '40px 24px', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--off-white)' }}>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px' }}>
                No courses match your filters.{' '}
                <button onClick={clearFilters} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold)', fontWeight: 600, cursor: 'pointer', fontSize: '15px', textDecoration: 'underline' }}>Clear filters</button>
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filtered.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </>
      )}

      {/* Footer CTA */}
      <div style={{ marginTop: '40px', padding: '20px 24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--navy)' }}>Know of a course?</strong> Submit it for the community and help keep this list up to date.{' '}
          {isLoggedIn && <a href="/community/courses/submit" style={{ color: 'var(--gold)', fontWeight: 500 }}>Submit a course →</a>}
        </p>
      </div>

      <style>{`
        @media (min-width: 640px) { .course-filter-mobile { display: none !important; } .course-filter-desktop { display: block !important; } }
        @media (max-width: 639px) { .course-filter-mobile { display: block !important; } .course-filter-desktop { display: none !important; } }
      `}</style>
    </>
  );
}
