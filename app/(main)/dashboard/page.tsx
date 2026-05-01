import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2, moduleCompletions, procedureLogs } from '@/lib/schema';
import { eq, and, desc } from 'drizzle-orm';
import PortfolioEntryRow from '@/components/PortfolioEntryRow';
import type { PortfolioEntry, ProcedureLog } from '@/lib/schema';
import { portfolioEntries } from '@/lib/schema';

export const metadata = {
  title: 'Dashboard | NPCollab',
};

export const dynamic = 'force-dynamic';

// 22 non-MSK modules + 9 MSK sub-modules = 31 total trackable modules
const TOTAL_MODULES = 31;

// All trackable clinical modules — slug matches module_completions.module_slug
const ALL_MODULES = [
  { slug: 'aged-care',                   name: 'Aged Care',              emoji: '🏥', path: '/modules/aged-care' },
  { slug: 'cardiac',                     name: 'Cardiac',                emoji: '❤️', path: '/modules/cardiac' },
  { slug: 'cardiovascular',              name: 'Cardiovascular',         emoji: '🩺', path: '/modules/cardiovascular' },
  { slug: 'drugs-alcohol',               name: 'Drugs & Alcohol',        emoji: '💊', path: '/modules/drugs-alcohol' },
  { slug: 'endocrine',                   name: 'Endocrine',              emoji: '🔬', path: '/modules/endocrine' },
  { slug: 'ent',                         name: 'ENT',                    emoji: '👂', path: '/modules/ent' },
  { slug: 'eyes',                        name: 'Ophthalmology',          emoji: '👁️', path: '/modules/eyes' },
  { slug: 'general-medical',             name: 'General Medical',        emoji: '🩻', path: '/modules/general-medical' },
  { slug: 'gi-hepatobiliary',            name: 'GI & Hepatobiliary',     emoji: '🫁', path: '/modules/gi-hepatobiliary' },
  { slug: 'gu-nephrology',               name: 'GU & Nephrology',        emoji: '🫘', path: '/modules/gu-nephrology' },
  { slug: 'integumentary',               name: 'Integumentary',          emoji: '🩹', path: '/modules/integumentary' },
  { slug: 'maxillofacial-dental',        name: 'Maxillofacial & Dental', emoji: '🦷', path: '/modules/maxillofacial-dental' },
  { slug: "mens-health",                 name: "Men's Health",           emoji: '🧔', path: '/modules/mens-health' },
  { slug: 'mental-health',               name: 'Mental Health',          emoji: '🧠', path: '/modules/mental-health' },
  // MSK sub-modules (all live)
  { slug: 'musculoskeletal/shoulder',    name: 'MSK — Shoulder',         emoji: '🦴', path: '/modules/musculoskeletal/shoulder' },
  { slug: 'musculoskeletal/back',        name: 'MSK — Back',             emoji: '🦴', path: '/modules/musculoskeletal/back' },
  { slug: 'musculoskeletal/neck',        name: 'MSK — Neck',             emoji: '🦴', path: '/modules/musculoskeletal/neck' },
  { slug: 'musculoskeletal/knee',        name: 'MSK — Knee',             emoji: '🦴', path: '/modules/musculoskeletal/knee' },
  { slug: 'musculoskeletal/hip-pelvis',  name: 'MSK — Hip & Pelvis',     emoji: '🦴', path: '/modules/musculoskeletal/hip-pelvis' },
  { slug: 'musculoskeletal/elbow',       name: 'MSK — Elbow',            emoji: '🦴', path: '/modules/musculoskeletal/elbow' },
  { slug: 'musculoskeletal/wrist',       name: 'MSK — Wrist',            emoji: '🦴', path: '/modules/musculoskeletal/wrist' },
  { slug: 'musculoskeletal/foot-ankle',  name: 'MSK — Foot & Ankle',     emoji: '🦴', path: '/modules/musculoskeletal/foot-ankle' },
  { slug: 'musculoskeletal/chest',       name: 'MSK — Chest Wall',       emoji: '🦴', path: '/modules/musculoskeletal/chest' },
  // Remaining modules
  { slug: 'neurology',                   name: 'Neurology',              emoji: '🧬', path: '/modules/neurology' },
  { slug: 'onco-haematology',            name: 'Oncology & Haem',        emoji: '🔴', path: '/modules/onco-haematology' },
  { slug: 'paediatrics',                 name: 'Paediatrics',            emoji: '👶', path: '/modules/paediatrics' },
  { slug: 'palliative-care',             name: 'Palliative Care',        emoji: '🕊️', path: '/modules/palliative-care' },
  { slug: 'respiratory',                 name: 'Respiratory',            emoji: '🫀', path: '/modules/respiratory' },
  { slug: 'surgical',                    name: 'Surgical',               emoji: '🔪', path: '/modules/surgical' },
  { slug: 'toxicology',                  name: 'Toxicology',             emoji: '☠️', path: '/modules/toxicology' },
  { slug: "womens-health",               name: "Women's Health",         emoji: '🌸', path: '/modules/womens-health' },
] as const;

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
  let passedCompletions: {
    id: string;
    moduleSlug: string;
    moduleName: string;
    completedAt: Date;
    quizScore: number;
    cpdHours: string;
  }[] = [];

  try {
    passedCompletions = await db
      .select({
        id:          moduleCompletions.id,
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

  // Deduplicate by moduleSlug (keep most recent pass per module)
  const seenSlugs = new Set<string>();
  const uniqueCompletions = passedCompletions.filter(c => {
    if (seenSlugs.has(c.moduleSlug)) return false;
    seenSlugs.add(c.moduleSlug);
    return true;
  });

  // Build a quick lookup: moduleSlug → completion record
  const completionBySlug = new Map(uniqueCompletions.map(c => [c.moduleSlug, c]));

  const totalModulesCompleted = Math.min(uniqueCompletions.length, TOTAL_MODULES);
  const totalCpdHours = uniqueCompletions.reduce((sum, c) => sum + parseFloat(c.cpdHours || '1'), 0);
  const progressPct = Math.round((totalModulesCompleted / TOTAL_MODULES) * 100);
  const recentCompletions = uniqueCompletions.slice(0, 3);

  const quickLinks = [
    { href: '/modules/cardiac',   icon: '❤️', title: 'Clinical Modules', desc: 'Evidence-based content across all specialties', badge: 'Featured' },
    { href: '/community/jobs',    icon: '💼', title: 'Job Board',         desc: 'NP roles across Australia — updated regularly', badge: null },
    { href: '/community/courses', icon: '🎓', title: 'CPD Courses',       desc: 'Conferences, workshops, and online learning',  badge: null },
    { href: '/community/news',    icon: '📰', title: 'Community News',    desc: 'Announcements, articles, and resources for NPs', badge: null },
  ];

  // ── Portfolio entries ──────────────────────────────────────────────────────
  let myPortfolioEntries: PortfolioEntry[] = [];
  try {
    myPortfolioEntries = await db
      .select()
      .from(portfolioEntries)
      .where(eq(portfolioEntries.userId, session.userId))
      .orderBy(desc(portfolioEntries.updatedAt))
      .limit(10);
  } catch {
    // Table may not exist yet — fail silently
  }

  // ── Procedure Passport ────────────────────────────────────────────────────
  let recentProcedureLogs: ProcedureLog[] = [];
  let passportTotal = myPortfolioEntries.length;
  try {
    const allLogs = await db
      .select()
      .from(procedureLogs)
      .where(eq(procedureLogs.userId, session.userId))
      .orderBy(desc(procedureLogs.performedAt));
    recentProcedureLogs = allLogs.slice(0, 3);
    passportTotal = allLogs.length + myPortfolioEntries.length;
  } catch { /* fail silently */ }

  const formatDate = (d: Date) =>
    new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <>
      <div className="page-header">
        <div className="label">Dashboard</div>
        <h1>Welcome back, {firstName}</h1>
        <p style={{ margin: 0 }}>
          {user.npEndorsement && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
              <span>{user.npEndorsement} NP</span>
              {user.state && (
                <><span style={{ opacity: 0.4 }}>·</span><span>{user.state}</span></>
              )}
            </span>
          )}
        </p>
      </div>

      <div className="content-prose">

        {/* Profile completion prompt */}
        {profileIncomplete && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '16px 20px', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>Complete your profile</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>Complete your profile to unlock personalised content</div>
            </div>
            <Link href="/profile/edit" style={{ display: 'inline-block', padding: '8px 18px', background: 'var(--navy)', color: '#fff', borderRadius: '7px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Edit Profile
            </Link>
          </div>
        )}

        {/* Quick access cards */}
        <div style={{ marginBottom: '8px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--navy)', margin: '0 0 14px' }}>Quick Access</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px', marginBottom: '28px' }}>
            {quickLinks.map(card => (
              <Link key={card.href} href={card.href} style={{ display: 'block', padding: '18px 20px', border: '1px solid var(--border)', borderRadius: '10px', background: '#fff', textDecoration: 'none', position: 'relative', transition: 'box-shadow 0.15s, border-color 0.15s' }}>
                {card.badge && (
                  <span style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '4px', background: 'var(--gold)', color: 'var(--navy)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{card.badge}</span>
                )}
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>{card.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{card.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CPD Summary card ─────────────────────────────────────────────── */}
        <div style={{ padding: '22px 24px', background: 'var(--navy)', borderRadius: '10px', marginBottom: '28px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ fontSize: '28px', flexShrink: 0 }}>📋</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '2px' }}>CPD Summary</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>NPCollab module completions</div>
              </div>
            </div>
            <Link href="/dashboard/cpd" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View all CPD records →
            </Link>
          </div>

          {/* Stat row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px 16px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '26px', color: 'var(--gold)', lineHeight: 1, marginBottom: '4px' }}>
                {totalCpdHours % 1 === 0 ? totalCpdHours : totalCpdHours.toFixed(1)}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CPD Hours</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px 16px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '26px', color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
                {totalModulesCompleted}<span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>/{TOTAL_MODULES}</span>
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Modules</div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: totalModulesCompleted > 0 ? '18px' : '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginBottom: '6px' }}>
              <span>Module completion</span><span>{progressPct}%</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progressPct}%`, background: 'var(--gold)', borderRadius: '3px' }} />
            </div>
          </div>

          {/* Recent completions */}
          {recentCompletions.length > 0 && (
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>Recent completions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {recentCompletions.map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', gap: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{c.moduleName}</span>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 600 }}>{c.quizScore}%</span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>{formatDate(c.completedAt)}</span>
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

        {/* ── Procedure Passport card ──────────────────────────────────────── */}
        <div style={{ padding: '22px 24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ fontSize: '28px', flexShrink: 0 }}>🛂</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--navy)', marginBottom: '2px' }}>Procedure Passport</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {passportTotal > 0 ? `${passportTotal} procedure${passportTotal === 1 ? '' : 's'} recorded` : 'Start logging your clinical procedures'}
                </div>
              </div>
            </div>
            <Link href="/passport" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View Passport →
            </Link>
          </div>
          {recentProcedureLogs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {recentProcedureLogs.map(log => (
                <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '7px', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span style={{ fontSize: '14px' }}>📋</span>
                    <span style={{ fontWeight: 600, color: 'var(--navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{log.procedureName}</span>
                    {log.setting && <span style={{ fontSize: '11px', color: 'var(--text-muted)', flexShrink: 0 }}>{log.setting}</span>}
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', flexShrink: 0 }}>
                    {formatDate(log.performedAt)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: 'var(--off-white)', borderRadius: '8px', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Log procedures you perform to build your clinical portfolio.</span>
              <Link href="/passport" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', background: 'var(--gold)', padding: '6px 14px', borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                + Log Procedure
              </Link>
            </div>
          )}
        </div>

        {/* ── Clinical Portfolio ───────────────────────────────────────────── */}
        {myPortfolioEntries.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--navy)', margin: 0 }}>
                Clinical Portfolio
              </h2>
              <Link href="/streams/emergency" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none' }}>
                Add assessment →
              </Link>
            </div>
            {myPortfolioEntries.map(entry => (
              <PortfolioEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        {/* ── Completed Modules badge grid ─────────────────────────────────── */}
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--navy)', margin: '0 0 14px' }}>
            Your Completed Modules
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '12px' }}>
            {ALL_MODULES.map(mod => {
              const completion = completionBySlug.get(mod.slug);
              const isDone = !!completion;
              const tooltipTitle = isDone
                ? `${mod.name} — ${formatDate(completion!.completedAt)} — ${completion!.quizScore}%`
                : `Start ${mod.name}`;
              const href = isDone
                ? `/api/cpd/certificate/${completion!.id}`
                : mod.path;

              return (
                <a
                  key={mod.slug}
                  href={href}
                  title={tooltipTitle}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {/* Circle badge */}
                  <div style={{
                    position: 'relative',
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    background: isDone ? 'var(--navy)' : '#e8ecf0',
                    border: isDone ? '2.5px solid var(--gold)' : '2px solid #cdd3da',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}>
                    {mod.emoji}
                    {isDone && (
                      <div style={{
                        position: 'absolute',
                        bottom: '0px',
                        right: '0px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: 'var(--navy)',
                        fontWeight: 900,
                        lineHeight: 1,
                        boxShadow: '0 0 0 2px #fff',
                      }}>
                        ✓
                      </div>
                    )}
                  </div>
                  {/* Module name */}
                  <span style={{
                    fontSize: '10px',
                    fontWeight: isDone ? 700 : 400,
                    color: isDone ? 'var(--navy)' : 'var(--text-muted)',
                    textAlign: 'center',
                    lineHeight: 1.3,
                    maxWidth: '80px',
                    wordBreak: 'break-word',
                  }}>
                    {mod.name}
                  </span>
                </a>
              );
            })}
          </div>
          <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
            Completed modules link to your certificate download. Tap an incomplete module to start.
          </p>
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
