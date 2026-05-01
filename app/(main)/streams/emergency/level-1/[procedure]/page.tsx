import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LEVEL_1_PROCEDURES } from '../page';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ procedure: string }>;
}

export default async function ProcedurePage({ params }: Props) {
  const { procedure } = await params;
  const proc = LEVEL_1_PROCEDURES.find(p => p.slug === procedure);
  if (!proc) notFound();

  const cc = proc.clinicalContent;

  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 1</div>
        <h1>{proc.name}</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          {proc.description}
        </p>
      </div>
      <div className="content-prose">

        {/* Assessment forms */}
        <div style={{ padding: '20px', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '10px', marginBottom: '28px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>Clinical Assessment Forms</div>
          <p style={{ margin: '0 0 14px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Complete a Mini CEX or DOPS assessment for this procedure. Your form will be saved to your portfolio
            and can be sent to your mentor for review and sign-off.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              href={`/streams/emergency/level-1/${proc.slug}/mini-cex`}
              style={{ display: 'inline-block', padding: '9px 20px', background: 'var(--navy)', color: '#fff', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
            >
              Mini CEX
            </Link>
            <Link
              href={`/streams/emergency/level-1/${proc.slug}/dops`}
              style={{ display: 'inline-block', padding: '9px 20px', background: '#fff', color: 'var(--navy)', border: '1.5px solid var(--navy)', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
            >
              DOPS
            </Link>
          </div>
        </div>

        {cc ? (
          <>
            <h2>Key Clinical Points</h2>
            <ul>
              {cc.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {cc.decisionRules && cc.decisionRules.length > 0 && (
              <>
                <h2>Decision Rules & Scores</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {cc.decisionRules.map((rule, i) => (
                    <span
                      key={i}
                      style={{ display: 'inline-block', padding: '4px 12px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '20px', fontSize: '13px', color: '#1E40AF', fontWeight: 500 }}
                    >
                      {rule}
                    </span>
                  ))}
                </div>
              </>
            )}

            {cc.keyDrugs && cc.keyDrugs.length > 0 && (
              <>
                <h2>Key Drugs & Doses</h2>
                <ul>
                  {cc.keyDrugs.map((drug, i) => (
                    <li key={i}>{drug}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>Assessment Focus</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
              What Mini CEX / DOPS assessors look for in this procedure:
            </p>
            <ul>
              {cc.assessmentFocus.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div style={{ marginTop: '28px', padding: '14px 16px', background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Framework Reference</div>
              <div style={{ fontSize: '13px', color: 'var(--navy)' }}>{cc.frameworkRef}</div>
            </div>
          </>
        ) : (
          <>
            <h2>Overview</h2>
            <p>{proc.description}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontStyle: 'italic' }}>
              Detailed clinical content for this procedure will be added shortly.
            </p>
          </>
        )}
      </div>
    </>
  );
}
