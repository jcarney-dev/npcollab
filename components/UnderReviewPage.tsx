export default function UnderReviewPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>Under Review</h1>
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.6 }}>
        This section is currently under review and will be available shortly.
      </p>
    </div>
  );
}
