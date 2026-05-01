import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LEVEL_3_PROCEDURES } from '../page';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ procedure: string }>;
}

export default async function Level3ProcedurePage({ params }: Props) {
  const { procedure } = await params;
  const proc = LEVEL_3_PROCEDURES.find(p => p.slug === procedure);
  if (!proc) notFound();

  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 3</div>
        <h1>{proc.name}</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          {proc.description}
        </p>
      </div>
      <div className="content-prose">
        {/* Scope disclaimer */}
        <div style={{ padding: '14px 16px', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '10px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#9A3412', marginBottom: '4px' }}>Scope note — ACEM P67 V4 (August 2025)</div>
          <div style={{ fontSize: '13px', color: '#7C2D12', lineHeight: 1.5 }}>
            Level 3 procedures are performed under direct medical supervision (FACEM/anaesthetist/surgeon) or referred
            to the medical team. NPs may assist or initiate in selected contexts but do not lead these procedures.
            Inclusion in an individual NP Scope of Clinical Practice requires specific institutional credentialing.
          </div>
        </div>

        <h2>Overview</h2>
        <p>{proc.description}</p>

        <div style={{ marginTop: '16px', padding: '14px 16px', background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            Competency Level
          </div>
          <div style={{ fontSize: '13px', color: 'var(--navy)' }}>
            Level 3 — Direct medical supervision or refer. Generally not within standard Australian ED NP scope
            of practice. NPs are expected to understand indications, patient preparation, assisting role, and
            post-procedure care. (ACEM P67 V4 §4.4)
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontStyle: 'italic', marginTop: '24px' }}>
          Detailed clinical content for this procedure will be added shortly.
        </p>

        <div style={{ marginTop: '24px' }}>
          <Link
            href="/streams/emergency/level-3"
            style={{ fontSize: '13px', color: 'var(--navy)', textDecoration: 'underline' }}
          >
            ← Back to Level 3
          </Link>
        </div>
      </div>
    </>
  );
}
