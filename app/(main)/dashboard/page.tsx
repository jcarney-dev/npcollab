import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export const metadata = {
  title: 'Dashboard | NPCollab',
};

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) redirect('/login');

  const session = await verifySessionToken(token);
  if (!session) redirect('/login');

  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!user || !user.active || !user.approved) redirect('/login');

  const firstName = user.name.split(' ')[0];
  const profileIncomplete = !user.profileComplete;

  const quickLinks = [
    {
      href: '/modules/cardiac',
      icon: '❤️',
      title: 'Clinical Modules',
      desc: 'Evidence-based content across all specialties',
      badge: 'Featured',
    },
    {
      href: '/community/jobs',
      icon: '💼',
      title: 'Job Board',
      desc: 'NP roles across Australia — updated regularly',
      badge: null,
    },
    {
      href: '/community/courses',
      icon: '🎓',
      title: 'CPD Courses',
      desc: 'Conferences, workshops, and online learning',
      badge: null,
    },
    {
      href: '/community/news',
      icon: '📰',
      title: 'Community News',
      desc: 'Announcements, articles, and resources for NPs',
      badge: null,
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="label">Dashboard</div>
        <h1>Welcome back, {firstName}</h1>
        <p style={{ margin: 0 }}>
          {user.npEndorsement && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.7)',
            }}>
              <span>{user.npEndorsement} NP</span>
              {user.state && (
                <>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>{user.state}</span>
                </>
              )}
            </span>
          )}
        </p>
      </div>

      <div className="content-prose">

        {/* Profile completion prompt */}
        {profileIncomplete && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '16px 20px',
            background: 'var(--gold-pale)',
            border: '1px solid var(--gold)',
            borderRadius: '10px',
            marginBottom: '28px',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>
                Complete your profile
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Complete your profile to unlock personalised content
              </div>
            </div>
            <Link
              href="/profile/edit"
              style={{
                display: 'inline-block',
                padding: '8px 18px',
                background: 'var(--navy)',
                color: '#fff',
                borderRadius: '7px',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Edit Profile
            </Link>
          </div>
        )}

        {/* Quick access cards */}
        <div style={{ marginBottom: '8px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--navy)',
            margin: '0 0 14px',
          }}>
            Quick Access
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '14px',
            marginBottom: '28px',
          }}>
            {quickLinks.map(card => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: 'block',
                  padding: '18px 20px',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  background: '#fff',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'box-shadow 0.15s, border-color 0.15s',
                }}
              >
                {card.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {card.badge}
                  </span>
                )}
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{card.icon}</div>
                <div style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'var(--navy)',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-heading)',
                }}>{card.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {card.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CPD placeholder */}
        <div style={{
          padding: '20px 24px',
          background: 'var(--navy)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          marginBottom: '28px',
        }}>
          <div style={{ fontSize: '32px', flexShrink: 0 }}>📋</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '15px',
              color: '#fff',
              marginBottom: '4px',
            }}>
              CPD Summary
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
              CPD tracking coming soon — complete modules to earn CPD certificates
            </div>
          </div>
        </div>

        {/* Getting started tip */}
        <div className="info-box">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6 }}>
            <strong>Getting started?</strong> Browse the{' '}
            <Link href="/intro" style={{ color: 'var(--gold)', fontWeight: 600 }}>Introduction</Link>{' '}
            for an overview of NPCollab, or jump straight into the{' '}
            <Link href="/modules/cardiac" style={{ color: 'var(--gold)', fontWeight: 600 }}>Clinical Modules</Link>{' '}
            for evidence-based clinical content.
          </p>
        </div>

      </div>
    </>
  );
}
