import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';

export const metadata = {
  title: 'Dashboard | NPCollab',
};

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // Accept either the legacy access-code cookie or the new session cookie
  const cookieStore = await cookies();

  const legacyToken = cookieStore.get(COOKIE_NAME)?.value;
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  const legacyUser = legacyToken ? await verifyAccessCookie(legacyToken) : null;
  const sessionUser = sessionToken ? await verifySessionToken(sessionToken) : null;

  if (!legacyUser && !sessionUser) {
    redirect('/enter-access');
  }

  return (
    <>
      <div className="page-header">
        <div className="label">NPCollab</div>
        <h1>Welcome to NPCollab</h1>
        <p>Your Australian Nurse Practitioner resource hub</p>
      </div>

      <div className="content-prose">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}>
          {[
            {
              href: '/modules/cardiac',
              icon: '🫀',
              title: 'Clinical Modules',
              desc: 'Evidence-based clinical content across all specialties',
            },
            {
              href: '/community/jobs',
              icon: '💼',
              title: 'Job Board',
              desc: 'NP roles across Australia — updated regularly',
            },
            {
              href: '/community/courses',
              icon: '🎓',
              title: 'CPD Courses',
              desc: 'Upcoming conferences, workshops, and online learning',
            },
            {
              href: '/community/news',
              icon: '📰',
              title: 'Community News',
              desc: 'Announcements, articles, and resources for NPs',
            },
            {
              href: '/scope',
              icon: '📋',
              title: 'Scope of Practice',
              desc: 'Understanding the NP scope across Australian jurisdictions',
            },
            {
              href: '/clinical-essentials/billing-medicare',
              icon: '💳',
              title: 'Billing & Medicare',
              desc: 'MBS item numbers and billing guidance for NPs',
            },
          ].map(card => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                display: 'block',
                padding: '20px',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                background: '#fff',
                textDecoration: 'none',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{card.icon}</div>
              <div style={{
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--navy)',
                marginBottom: '4px',
                fontFamily: 'var(--font-heading)',
              }}>{card.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {card.desc}
              </div>
            </Link>
          ))}
        </div>

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
