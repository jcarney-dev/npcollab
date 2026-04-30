import Link from 'next/link';

export default function StreamLockedPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>Access Restricted</h1>
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '440px', lineHeight: 1.6, marginBottom: '24px' }}>
        This stream is currently restricted. Please contact the NPCollab team to request access.
      </p>
      <Link
        href="/contact"
        style={{ display: 'inline-block', padding: '10px 24px', background: 'var(--navy)', color: '#fff', borderRadius: '7px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
      >
        Contact us to request access
      </Link>
    </div>
  );
}
