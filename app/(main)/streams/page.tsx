import Link from 'next/link';

export const metadata = {
  title: 'Streams | NPCollab',
};

export default function StreamsPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams</div>
        <h1>Clinical Streams</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Structured learning pathways with skills, procedures, and clinical assessments
        </p>
      </div>
      <div className="content-prose">
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <Link
            href="/streams/emergency"
            style={{ display: 'block', padding: '24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', transition: 'box-shadow 0.15s' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚨</div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)', marginBottom: '6px' }}>Emergency</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Emergency NP skills and procedures — Level 1 to Level 3
            </div>
            <div style={{ marginTop: '14px', fontSize: '12px', color: 'var(--gold)', fontWeight: 600 }}>View stream →</div>
          </Link>
        </div>
      </div>
    </>
  );
}
