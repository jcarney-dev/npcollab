import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2, moduleCompletions } from '@/lib/schema';
import { eq, and, desc } from 'drizzle-orm';

export const metadata = {
  title: 'Dashboard | NPCollab',
};

export const dynamic = 'force-dynamic';

const TOTAL_MODULES = 21;

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

  // ── CPD data ───────────────────────────────────────────────────────────────
  // Fetch all passed completions for this user
  let passedCompletions: { moduleSlug: string; moduleName: string; completedAt: Date; quizScore: number; cpdHours: string }[] = [];
  try {
    passedCompletions = await db
      .select({
        moduleSlug:  moduleCompletions.moduleSlug,
        moduleName:  moduleCompletions.moduleName,
        completedAt: moduleCompletions.completedAt,
        quizScore:   moduleCompletions.quizScore,
        cpdHours:    moduleCompletions.cpdHours,
      })
      .from(moduleCompletions)
      .where(
        and(
          eq(moduleCompletions.userId, session.userId),
          eq(moduleCompletions.passed, true)
        )
      )
      .orderBy(desc(moduleCompletions.completedAt));
  } catch {
    // Table may not exist yet — fail silently
  }

  // Deduplicate by moduleSlug (keep first/most recent pass per module)
  const seenSlugs = new Set<string>();
  const uniqueCompletions = passedCompletions.filter(c => {
    if (seenSlugs.has(c.moduleSlug)) return false;
    seenSlugs.add(c.moduleSlug);
    return true;
  });

  const totalModulesCompleted = uniqueCompletions.length;
  const totalCpdHours = uniqueCompletions.reduce((sum, c) => sum + parseFloat(c.cpdHours || '1'), 0);
  const progressPct = Math.round((totalModulesCompleted / TOTAL_MODULES) * 100);
  const recentCompletions = uniqueCompletions.slice(0, 3);

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

        {/* ── CPD Summary card ─────────────────────────────────────────────── */}
        <div style={{
          padding: '22px 24px',
          background: 'var(--navy)',
          borderRadius: '10px',
          marginBottom: '28px',
        }}>
          {/* Header row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ fontSize: '28px', flexShrink: 0 }}>📋</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#fff',
                  marginBottom: '2px',
                }}>
                  CPD Summary
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                  NPCollab module completions
                </div>
              </div>
            </div>
            <Link
              href="/dashboard/cpd"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--gold)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View all CPD records →
            </Link>
          </div>

          {/* Stat row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '14px',
            marginBottom: '18px',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '8px',
              padding: '12px 16px',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '26px',
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {totalCpdHours % 1 === 0 ? totalCpdHours : totalCpdHours.toFixed(1)}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                CPD Hours
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '8px',
              padding: '12px 16px',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '26px',
                color: '#fff',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {totalModulesCompleted}
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>
                  /{TOTAL_MODULES}
                </span>
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Modules
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: totalModulesCompleted > 0 ? '18px' : '0' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '6px',
            }}>
              <span>Module completion</span>
              <span>{progressPct}%</span>
            </div>
            <div style={{
              height: '6px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '3px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progressPct}%`,
                background: 'var(--gold)',
                borderRadius: '3px',
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>

          {/* Recent completions */}
          {recentCompletions.length > 0 && (
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                Recent completions
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {recentCompletions.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '13px',
                    gap: '8px',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {c.moduleName}
                    </span>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 600 }}>
                        {c.quizScore}%
                      </span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
                        {new Date(c.completedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalModulesCompleted === 0 && (
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>
              Complete a module quiz (80% or above) to earn your first CPD hour.
            </div>
          )}
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
