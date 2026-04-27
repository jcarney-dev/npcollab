'use client';

import { useState } from 'react';

interface ShowcaseUser {
  id: string;
  name: string;
  state: string;
  npEndorsement: string;
  employer: string | null;
  specialtyArea: string | null;
  currentRole: string | null;
  bio: string | null;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() ?? '')
    .join('');
}

function AvatarCircle({ name }: { name: string }) {
  const initials = getInitials(name);
  return (
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'var(--navy)',
      color: 'var(--gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      fontWeight: 700,
      fontFamily: 'var(--font-heading)',
      flexShrink: 0,
      border: '3px solid var(--gold)',
    }}>
      {initials}
    </div>
  );
}

function ShowcaseCard({ user }: { user: ShowcaseUser }) {
  return (
    <div style={{
      border: '1.5px solid var(--border)',
      borderRadius: '14px',
      padding: '32px',
      background: '#fff',
      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      maxWidth: '600px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
        <AvatarCircle name={user.name} />
        <div>
          <div style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--navy)', lineHeight: 1.2 }}>
            {user.name}
          </div>
          {user.currentRole && (
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
              {user.currentRole}
            </div>
          )}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
            {user.npEndorsement && (
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                background: 'rgba(201,168,76,0.12)',
                color: 'var(--navy)',
                padding: '3px 10px',
                borderRadius: '20px',
                border: '1px solid rgba(201,168,76,0.3)',
              }}>
                {user.npEndorsement}
              </span>
            )}
            {user.state && (
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                background: 'var(--off-white)',
                color: 'var(--text-muted)',
                padding: '3px 10px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
              }}>
                {user.state}
              </span>
            )}
          </div>
        </div>
      </div>

      {(user.employer || user.specialtyArea) && (
        <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {user.employer && (
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Employer</div>
              <div style={{ fontSize: '14px', color: 'var(--text)' }}>{user.employer}</div>
            </div>
          )}
          {user.specialtyArea && (
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Specialty</div>
              <div style={{ fontSize: '14px', color: 'var(--text)' }}>{user.specialtyArea}</div>
            </div>
          )}
        </div>
      )}

      {user.bio ? (
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text)', margin: 0 }}>
          {user.bio}
        </p>
      ) : (
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
          No bio added yet.
        </p>
      )}
    </div>
  );
}

interface ShowcaseClientProps {
  initialUser: ShowcaseUser | null;
}

export default function ShowcaseClient({ initialUser }: ShowcaseClientProps) {
  const [user, setUser] = useState<ShowcaseUser | null>(initialUser);
  const [loading, setLoading] = useState(false);

  async function nextUser() {
    setLoading(true);
    try {
      const res = await fetch('/api/community/showcase');
      const data = await res.json();
      setUser(data.user ?? null);
    } catch {
      // keep current user on error
    } finally {
      setLoading(false);
    }
  }

  if (!user) {
    return (
      <div style={{
        padding: '40px 32px',
        border: '1.5px dashed var(--border)',
        borderRadius: '14px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        maxWidth: '600px',
      }}>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>👤</div>
        <p style={{ margin: 0, fontSize: '15px' }}>No members to showcase yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div>
      <ShowcaseCard user={user} />
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={nextUser}
          disabled={loading}
          style={{
            padding: '10px 22px',
            background: loading ? 'var(--off-white)' : 'var(--navy)',
            color: loading ? 'var(--text-muted)' : '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.15s',
          }}
        >
          {loading ? 'Loading…' : 'Meet someone else →'}
        </button>
      </div>
    </div>
  );
}
