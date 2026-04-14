'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function VerifyInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState<'loading' | 'success' | 'expired' | 'error'>('loading');

  useEffect(() => {
    if (!token) {
      setStatus('expired');
      return;
    }

    fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setStatus('success');
          router.replace(json.redirect || '/dashboard');
        } else {
          setStatus('expired');
        }
      })
      .catch(() => setStatus('error'));
  }, [token, router]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '28px' }}>⚕</span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '24px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>NPCollab</span>
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '13px', fontWeight: 500 }}>
            Australian Nurse Practitioners
          </div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}>
          {status === 'loading' && (
            <>
              <div style={{
                width: '48px',
                height: '48px',
                border: '3px solid var(--border)',
                borderTopColor: 'var(--navy)',
                borderRadius: '50%',
                margin: '0 auto 20px',
                animation: 'spin 0.8s linear infinite',
              }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--navy)',
                margin: '0 0 8px',
              }}>Verifying your link…</h2>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>
                Just a moment while we log you in.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--navy)',
                margin: '0 0 8px',
              }}>Logged in!</h2>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>
                Redirecting you to your dashboard…
              </p>
            </>
          )}

          {(status === 'expired' || status === 'error') && (
            <>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏱️</div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--navy)',
                margin: '0 0 12px',
              }}>
                {status === 'error' ? 'Something went wrong' : 'Link expired'}
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
                lineHeight: 1.6,
                margin: '0 0 24px',
              }}>
                {status === 'error'
                  ? 'An unexpected error occurred. Please try again.'
                  : 'This login link has expired or has already been used.'}
              </p>
              <Link
                href="/login"
                style={{
                  display: 'inline-block',
                  padding: '11px 28px',
                  background: 'var(--navy)',
                  color: '#fff',
                  borderRadius: '7px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                Request a new login link
              </Link>
            </>
          )}
        </div>

        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '12px',
          marginTop: '24px',
        }}>
          © {new Date().getFullYear()} NPCollab · Educational purposes only
        </p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyInner />
    </Suspense>
  );
}
