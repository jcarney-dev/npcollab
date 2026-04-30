export const metadata = {
  title: 'Level 3 — Emergency Stream | NPCollab',
};

export default function Level3Page() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 3</div>
        <h1>Level 3 — Advanced Procedures</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Advanced skills for experienced emergency NPs
        </p>
      </div>
      <div className="content-prose">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '14px' }}>🚧</div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>Coming Soon</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.6 }}>
            Level 3 procedures are being developed. Check back soon.
          </p>
        </div>
      </div>
    </>
  );
}
