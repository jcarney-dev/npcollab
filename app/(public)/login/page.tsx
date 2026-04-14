'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/request-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

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
      <div style={{
        width: '100%',
        maxWidth: '440px',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '8px',
          }}>
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

        {/* Card */}
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📬</div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '22px',
                color: 'var(--navy)',
                margin: '0 0 12px',
              }}>Check your email</h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: 1.6,
                margin: '0 0 20px',
              }}>
                We sent you a login link. It expires in 15 minutes.
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                Didn&apos;t receive it? Check your spam folder or{' '}
                <button
                  onClick={() => { setSubmitted(false); setEmail(''); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '13px',
                    textDecoration: 'underline',
                  }}
                >
                  try again
                </button>.
              </p>
            </div>
          ) : (
            <>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '24px',
                color: 'var(--navy)',
                margin: '0 0 8px',
              }}>Log in to NPCollab</h1>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
                margin: '0 0 28px',
                lineHeight: 1.5,
              }}>
                Enter your email address and we&apos;ll send you a one-time login link.
              </p>

              {error && (
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: 'var(--error)',
                  fontSize: '13px',
                  marginBottom: '16px',
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '6px',
                  }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      border: '1.5px solid var(--border)',
                      borderRadius: '7px',
                      fontSize: '15px',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text)',
                      boxSizing: 'border-box',
                      outline: 'none',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email.trim()}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: loading || !email.trim() ? 'var(--navy-light)' : 'var(--navy)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '7px',
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-body)',
                    cursor: loading || !email.trim() ? 'not-allowed' : 'pointer',
                    transition: 'background 0.15s',
                    letterSpacing: '0.01em',
                  }}
                >
                  {loading ? 'Sending…' : 'Send Login Link'}
                </button>
              </form>

              <div style={{
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/request-access"
                    style={{
                      color: 'var(--gold)',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    Request access
                  </Link>
                </span>
              </div>
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
