import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2, moduleCompletions } from '@/lib/schema';
import { eq, and, desc } from 'drizzle-orm';

export const metadata = {
  title: 'CPD Record | NPCollab',
};

export const dynamic = 'force-dynamic';

const TOTAL_MODULES = 21;

export default async function CpdRecordPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>;
}) {
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

  const params = await searchParams;
  const fromDate = params.from ? new Date(params.from) : null;
  const toDate = params.to ? new Date(params.to + 'T23:59:59') : null;

  // Fetch all passed completions for this user
  let allCompletions: {
    id: string;
    moduleSlug: string;
    moduleName: string;
    completedAt: Date;
    quizScore: number;
    cpdHours: string;
    certificateGenerated: boolean;
  }[] = [];

  try {
    allCompletions = await db
      .select({
        id:                   moduleCompletions.id,
        moduleSlug:           moduleCompletions.moduleSlug,
        moduleName:           moduleCompletions.moduleName,
        completedAt:          moduleCompletions.completedAt,
        quizScore:            moduleCompletions.quizScore,
        cpdHours:             moduleCompletions.cpdHours,
        certificateGenerated: moduleCompletions.certificateGenerated,
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

  // Deduplicate: one record per module (keep most recent pass)
  const seenSlugs = new Set<string>();
  const uniqueCompletions = allCompletions.filter(c => {
    if (seenSlugs.has(c.moduleSlug)) return false;
    seenSlugs.add(c.moduleSlug);
    return true;
  });

  // Apply date filter
  const filtered = uniqueCompletions.filter(c => {
    const d = new Date(c.completedAt);
    if (fromDate && d < fromDate) return false;
    if (toDate && d > toDate) return false;
    return true;
  });

  const totalCpdHours = filtered.reduce((sum, c) => sum + parseFloat(c.cpdHours || '1'), 0);
  const progressPct = Math.round((uniqueCompletions.length / TOTAL_MODULES) * 100);

  const formatDate = (d: Date) =>
    new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <>
      <div className="page-header">
        <div className="label">Dashboard</div>
        <h1>CPD Record</h1>
        <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
          {user.name} · NPCollab module completions
        </p>
      </div>

      <div className="content-prose">

        {/* Back link */}
        <div style={{ marginBottom: '20px' }}>
          <Link href="/dashboard" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            ← Back to Dashboard
          </Link>
        </div>

        {/* Summary row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '28px' }}>
          {[
            { label: 'Total CPD Hours',     value: totalCpdHours % 1 === 0 ? String(totalCpdHours) : totalCpdHours.toFixed(1), colour: 'var(--gold)' },
            { label: 'Modules Completed',   value: `${uniqueCompletions.length} / ${TOTAL_MODULES}`, colour: 'var(--navy)' },
            { label: 'Overall Progress',    value: `${progressPct}%`, colour: 'var(--navy)' },
          ].map(stat => (
            <div key={stat.label} style={{ padding: '16px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '28px', color: stat.colour, lineHeight: 1, marginBottom: '6px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Date filter */}
        <form method="GET" action="/dashboard/cpd" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px', padding: '14px 18px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', whiteSpace: 'nowrap' }}>Filter by date:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <input type="date" name="from" defaultValue={params.from || ''} style={{ fontSize: '13px', padding: '6px 10px', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text)', background: '#fff' }} />
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>to</span>
            <input type="date" name="to" defaultValue={params.to || ''} style={{ fontSize: '13px', padding: '6px 10px', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text)', background: '#fff' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="submit" style={{ padding: '6px 14px', background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Apply</button>
            {(params.from || params.to) && (
              <Link href="/dashboard/cpd" style={{ padding: '6px 14px', background: '#fff', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '13px', textDecoration: 'none', display: 'inline-block' }}>Clear</Link>
            )}
          </div>
        </form>

        {/* CPD Table */}
        {filtered.length === 0 ? (
          <div style={{ padding: '40px 24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', textAlign: 'center' }}>
            {uniqueCompletions.length === 0 ? (
              <>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📋</div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '8px' }}>No CPD records yet</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
                  Complete a module quiz with 80% or above to earn your first CPD hour.
                </div>
                <Link href="/modules/cardiac" style={{ display: 'inline-block', padding: '9px 20px', background: 'var(--navy)', color: '#fff', borderRadius: '7px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
                  Browse Clinical Modules
                </Link>
              </>
            ) : (
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No completions match the selected date range.</div>
            )}
          </div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 80px 90px 110px', gap: '0', padding: '11px 20px', background: 'var(--navy)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>
              <span>Module</span>
              <span>Date Completed</span>
              <span>Score</span>
              <span>CPD Hours</span>
              <span>Certificate</span>
            </div>

            {/* Table rows */}
            {filtered.map((c, i) => (
              <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '1fr 140px 80px 90px 110px', gap: '0', padding: '13px 20px', fontSize: '13px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'center', background: i % 2 === 0 ? '#fff' : 'var(--off-white)' }}>
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{c.moduleName}</span>
                <span style={{ color: 'var(--text-muted)' }}>{formatDate(c.completedAt)}</span>
                <span>
                  <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '4px', background: c.quizScore >= 90 ? '#f0faf4' : 'var(--gold-pale)', color: c.quizScore >= 90 ? '#2A7D4F' : 'var(--navy)', fontWeight: 700, fontSize: '12px' }}>
                    {c.quizScore}%
                  </span>
                </span>
                <span style={{ color: 'var(--text-muted)' }}>{parseFloat(c.cpdHours).toFixed(1)} hr</span>
                <span>
                  <a
                    href={`/api/cpd/certificate/${c.id}`}
                    style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    📄 Download
                  </a>
                </span>
              </div>
            ))}

            {/* Total row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 80px 90px 110px', gap: '0', padding: '13px 20px', background: 'var(--gold-pale)', borderTop: '2px solid var(--gold)', fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>
              <span>Total</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{filtered.length} module{filtered.length !== 1 ? 's' : ''}</span>
              <span></span>
              <span style={{ color: 'var(--gold)' }}>{totalCpdHours % 1 === 0 ? totalCpdHours : totalCpdHours.toFixed(1)} hrs</span>
              <span></span>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div style={{ marginTop: '24px', padding: '14px 18px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--text)' }}>Educational purposes only.</strong>{' '}
          NPCollab CPD records are provided for your reference. Always verify your CPD requirements
          with AHPRA and your relevant registration authority. CPD hours earned through NPCollab
          should be recorded under self-directed learning in your CPD log.
        </div>

      </div>
    </>
  );
}
