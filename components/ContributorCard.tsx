import React from 'react';

export interface ContributorCardProps {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  /** Two-letter initials shown in the avatar circle — defaults to first letters of name */
  initials?: string;
}

/**
 * Reusable contributor card for module pages and the about page.
 * Renders only when a contributor has been assigned.
 */
export default function ContributorCard({ name, title, credentials, bio, initials }: ContributorCardProps) {
  const avatarText = initials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
        background: 'var(--off-white)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '18px 20px',
        marginTop: '24px',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--navy)',
          color: 'var(--gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          fontWeight: 700,
          flexShrink: 0,
          letterSpacing: '0.02em',
        }}
        aria-hidden="true"
      >
        {avatarText}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '4px' }}>
          Module Contributor
        </div>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '1px' }}>
          {name}
        </div>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: credentials ? '2px' : '8px' }}>
          {title}
        </div>
        {credentials && (
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            {credentials}
          </div>
        )}
        <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text)' }}>
          {bio}
        </p>
      </div>
    </div>
  );
}
