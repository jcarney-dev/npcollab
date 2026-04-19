import Link from 'next/link';

export interface MentorCardData {
  id:            number;
  name:          string;
  credentials:   string;
  specialtyArea: string;
  state:         string;
  mode:          string;
  bio:           string;
  currentRole:   string;
  employer:      string;
  maxMentees:    number;
}

interface Props {
  mentor: MentorCardData;
}

export default function MentorCard({ mentor }: Props) {
  const initials = mentor.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Truncate bio to ~2 lines worth (120 chars)
  const bioShort = mentor.bio.length > 120
    ? mentor.bio.slice(0, 120).trimEnd() + '…'
    : mentor.bio;

  const modes = mentor.mode ? mentor.mode.split(',').map(m => m.trim()) : [];

  return (
    <Link
      href={`/mentoring/${mentor.id}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <div
        className="module-card"
        style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'box-shadow 0.2s, transform 0.2s',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Gold top bar — shown on hover via .module-card CSS */}
        <div style={{
          height: '4px',
          background: 'var(--gold)',
          flexShrink: 0,
        }} />

        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Avatar + name row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              minWidth: '48px',
              borderRadius: '50%',
              background: 'var(--navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--gold)',
            }}>
              {initials}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--navy)',
                lineHeight: 1.25,
                marginBottom: '2px',
              }}>
                {mentor.name}
                {mentor.credentials && (
                  <span style={{ fontWeight: 400, fontSize: '0.875rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                    {mentor.credentials}
                  </span>
                )}
              </div>
              {(mentor.currentRole || mentor.employer) && (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                  {mentor.currentRole}
                  {mentor.currentRole && mentor.employer ? ' · ' : ''}
                  {mentor.employer}
                </div>
              )}
            </div>
          </div>

          {/* Badges row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {mentor.specialtyArea && (
              <span style={{
                fontSize: '11px',
                padding: '3px 9px',
                borderRadius: '12px',
                background: 'var(--gold-pale)',
                color: 'var(--navy)',
                border: '1px solid var(--gold-light)',
                fontWeight: 600,
              }}>
                {mentor.specialtyArea}
              </span>
            )}
            {mentor.state && (
              <span style={{
                fontSize: '11px',
                padding: '3px 9px',
                borderRadius: '12px',
                background: 'rgba(11,24,41,0.06)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
                fontWeight: 500,
              }}>
                {mentor.state}
              </span>
            )}
            {modes.map(m => (
              <span key={m} style={{
                fontSize: '11px',
                padding: '3px 9px',
                borderRadius: '12px',
                background: 'rgba(11,24,41,0.06)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
                fontWeight: 500,
              }}>
                {m}
              </span>
            ))}
          </div>

          {/* Bio excerpt */}
          {bioShort && (
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              flex: 1,
            }}>
              {bioShort}
            </p>
          )}

          {/* Footer */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '10px',
            borderTop: '1px solid var(--border)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            Up to {mentor.maxMentees} mentee{mentor.maxMentees !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </Link>
  );
}
