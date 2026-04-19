'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MentorCard, { type MentorCardData } from '@/components/MentorCard';

const SPECIALTIES = [
  'General Practice',
  'Emergency Medicine',
  'Aged Care',
  'Mental Health',
  'Paediatrics',
  'Oncology',
  'Cardiology',
  'Respiratory',
  'Endocrinology',
  'Musculoskeletal',
  'Palliative Care',
  'Community Health',
  'Remote / Rural',
  'Other',
];

const AU_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];
const MODES = ['Video', 'Phone', 'In-person'];

interface Props {
  isMentor: boolean;
  existingMentorId: number | null;
}

export default function MentoringClient({ isMentor, existingMentorId }: Props) {
  const [mentors, setMentors] = useState<MentorCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [specialty, setSpecialty] = useState('');
  const [state, setState]         = useState('');
  const [mode, setMode]           = useState('');

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (specialty) params.set('specialty', specialty);
    if (state)     params.set('state', state);
    if (mode)      params.set('mode', mode);

    fetch(`/api/mentoring/mentors?${params.toString()}`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setMentors(data);
        else setError('Failed to load mentors.');
      })
      .catch(() => setError('Failed to load mentors.'))
      .finally(() => setLoading(false));
  }, [specialty, state, mode]);

  return (
    <>
      {/* CTA bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '28px',
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {loading ? 'Loading…' : `${mentors.length} mentor${mentors.length !== 1 ? 's' : ''} available`}
        </p>
        {isMentor ? (
          <Link
            href={`/mentoring/${existingMentorId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '7px',
              background: 'var(--gold-pale)',
              color: 'var(--navy)',
              border: '1px solid var(--gold-light)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            View your mentor profile →
          </Link>
        ) : (
          <Link
            href="/mentoring/register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '7px',
              background: 'var(--navy)',
              color: 'var(--gold)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            Register as a mentor →
          </Link>
        )}
      </div>

      {/* Filter bar */}
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '28px',
        padding: '16px',
        background: 'var(--off-white)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
      }}>
        <select
          value={specialty}
          onChange={e => setSpecialty(e.target.value)}
          style={{
            flex: '1 1 160px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            fontSize: '0.875rem',
            color: 'var(--text)',
            background: '#fff',
          }}
          aria-label="Filter by specialty"
        >
          <option value="">All specialties</option>
          {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select
          value={state}
          onChange={e => setState(e.target.value)}
          style={{
            flex: '1 1 120px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            fontSize: '0.875rem',
            color: 'var(--text)',
            background: '#fff',
          }}
          aria-label="Filter by state"
        >
          <option value="">All states</option>
          {AU_STATES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select
          value={mode}
          onChange={e => setMode(e.target.value)}
          style={{
            flex: '1 1 130px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            fontSize: '0.875rem',
            color: 'var(--text)',
            background: '#fff',
          }}
          aria-label="Filter by mode"
        >
          <option value="">All modes</option>
          {MODES.map(m => <option key={m} value={m}>{m}</option>)}
        </select>

        {(specialty || state || mode) && (
          <button
            onClick={() => { setSpecialty(''); setState(''); setMode(''); }}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: '#fff',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Error */}
      {error && (
        <div style={{ padding: '16px', background: '#fff0f0', border: '1px solid var(--error)', borderRadius: '8px', color: 'var(--error)', marginBottom: '24px' }}>
          {error}
        </div>
      )}

      {/* Grid */}
      {!loading && !error && mentors.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          color: 'var(--text-muted)',
          background: 'var(--off-white)',
          borderRadius: '10px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🤝</div>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: 'var(--text)' }}>No mentors found</p>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            {specialty || state || mode
              ? 'Try adjusting your filters, or clear them to see all mentors.'
              : 'No mentors are currently registered. Be the first to register.'}
          </p>
        </div>
      )}

      {!loading && mentors.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {mentors.map(m => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-muted)' }}>
          Loading mentors…
        </div>
      )}
    </>
  );
}
