import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LEVEL_2_PROCEDURES } from '../page';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ procedure: string }>;
}

export default async function Level2ProcedurePage({ params }: Props) {
  const { procedure } = await params;
  const proc = LEVEL_2_PROCEDURES.find(p => p.slug === procedure);
  if (!proc) notFound();

  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 2</div>
        <h1>{proc.name}</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          {proc.description}
        </p>
      </div>
      <div className="content-prose">
        {/* Credential note */}
        <div style={{ padding: '14px 16px', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '10px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#9A3412', marginBottom: '4px' }}>Credentialing required</div>
          <div style={{ fontSize: '13px', color: '#7C2D12' }}>{proc.credential}</div>
        </div>

        {/* Assessment forms — coming soon for level-2 */}
        <div style={{ padding: '20px', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '10px', marginBottom: '28px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>Clinical Assessment Forms</div>
          <p style={{ margin: '0 0 14px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Mini CEX and DOPS assessments for Level 2 procedures are coming soon. Once available, your forms will
            be saved to your portfolio and can be sent to your mentor for review and sign-off.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-block', padding: '9px 20px', background: '#E2E8F0', color: '#94A3B8', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'not-allowed' }}>
              Mini CEX — Coming Soon
            </span>
            <span style={{ display: 'inline-block', padding: '9px 20px', background: '#E2E8F0', color: '#94A3B8', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'not-allowed' }}>
              DOPS — Coming Soon
            </span>
          </div>
        </div>

        <h2>Overview</h2>
        <p>{proc.description}</p>

        <div style={{ marginTop: '16px', padding: '14px 16px', background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            Competency Level
          </div>
          <div style={{ fontSize: '13px', color: 'var(--navy)' }}>
            Level 2 — With supervision or after additional credentialing/training. NPs commonly perform this
            procedure after specific local credentialing, documented supervised practice, and approval by the
            hospital credentialing committee. (ACEM P67 V4 §4.3)
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontStyle: 'italic', marginTop: '24px' }}>
          Detailed clinical content for this procedure will be added shortly.
        </p>

        <div style={{ marginTop: '24px' }}>
          <Link
            href="/streams/emergency/level-2"
            style={{ fontSize: '13px', color: 'var(--navy)', textDecoration: 'underline' }}
          >
            ← Back to Level 2
          </Link>
        </div>
      </div>
    </>
  );
}
