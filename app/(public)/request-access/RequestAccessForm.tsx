'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Turnstile } from '@marsidev/react-turnstile';

const STATES = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

const ENDORSEMENTS = [
  'Primary Care',
  'Mental Health',
  'Emergency',
  'Paediatrics',
  'Neonatal',
  'Aged Care',
  "Women's Health",
  'Perioperative',
  'Musculoskeletal',
  'Other',
];

interface Props {
  turnstileSiteKey: string;
}

export default function RequestAccessForm({ turnstileSiteKey }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    state: '',
    npEndorsement: '',
    employer: '',
    specialtyArea: '',
    currentRole: '',
    statement: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const fs: React.CSSProperties = {
    width: '100%',
    padding: '10px 13px',
    border: '1.5px solid var(--border)',
    borderRadius: '7px',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: 'var(--text)',
    background: '#fff',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.15s',
  };

  const ls: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--text-muted)',
    marginBottom: '5px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validation
    if (!form.name.trim()) { setError('Full name is required.'); return; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('A valid email address is required.'); return;
    }
    if (!form.state) { setError('Please select your state.'); return; }
    if (!form.npEndorsement) { setError('Please select your NP endorsement type.'); return; }
    if (!turnstileToken) { setError('Please complete the CAPTCHA verification.'); return; }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:            form.name.trim(),
          email:           form.email.trim().toLowerCase(),
          state:           form.state,
          npEndorsement:   form.npEndorsement,
          employer:        form.employer.trim() || null,
          specialtyArea:   form.specialtyArea.trim() || null,
          currentRole:     form.currentRole.trim() || null,
          statement:       form.statement.trim() || null,
          turnstileToken,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmittedName(form.name.trim().split(' ')[0]);
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '40px 24px',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ width: '100%', maxWidth: '560px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '26px' }}>⚕</span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '22px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>NPCollab</span>
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '12px', fontWeight: 500 }}>
            Australian Nurse Practitioners
          </div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '36px 40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '22px',
                color: 'var(--navy)',
                margin: '0 0 12px',
              }}>
                Thank you, {submittedName} — your application is under review.
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: 1.7,
                margin: '0 0 24px',
              }}>
                You will receive an email once your account is approved. This usually takes 1–2 business days.
              </p>
              <Link
                href="/login"
                style={{
                  fontSize: '13px',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Already approved? Log in →
              </Link>
            </div>
          ) : (
            <>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '22px',
                color: 'var(--navy)',
                margin: '0 0 6px',
              }}>Request Access</h1>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                margin: '0 0 24px',
                lineHeight: 1.6,
              }}>
                NPCollab is a free educational resource for Australian Nurse Practitioners, Transitional NPs, and NP students. Complete the form below — you&apos;ll receive an email once your application is reviewed.
              </p>

              {error && (
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: 'var(--error)',
                  fontSize: '13px',
                  marginBottom: '18px',
                }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={ls}>Full name <span style={{ color: 'var(--error)' }}>*</span></label>
                    <input
                      style={fs}
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="Jane Smith"
                      required
                      autoFocus
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                  <div>
                    <label style={ls}>Email address <span style={{ color: 'var(--error)' }}>*</span></label>
                    <input
                      style={fs}
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="jane@example.com"
                      required
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                </div>

                {/* State + Endorsement */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={ls}>State <span style={{ color: 'var(--error)' }}>*</span></label>
                    <select
                      style={fs}
                      value={form.state}
                      onChange={e => set('state', e.target.value)}
                      required
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <option value="">Select state…</option>
                      {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={ls}>NP Endorsement Type <span style={{ color: 'var(--error)' }}>*</span></label>
                    <select
                      style={fs}
                      value={form.npEndorsement}
                      onChange={e => set('npEndorsement', e.target.value)}
                      required
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <option value="">Select endorsement…</option>
                      {ENDORSEMENTS.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>
                </div>

                {/* Employer + Specialty */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={ls}>Employer <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                    <input
                      style={fs}
                      value={form.employer}
                      onChange={e => set('employer', e.target.value)}
                      placeholder="Hospital / clinic name"
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                  <div>
                    <label style={ls}>Specialty Area <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                    <input
                      style={fs}
                      value={form.specialtyArea}
                      onChange={e => set('specialtyArea', e.target.value)}
                      placeholder="e.g. Cardiology, Emergency"
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                </div>

                {/* Current Role */}
                <div>
                  <label style={ls}>Current Role <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                  <input
                    style={fs}
                    value={form.currentRole}
                    onChange={e => set('currentRole', e.target.value)}
                    placeholder="e.g. NP, TNP, RN, NP Student"
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                {/* Statement */}
                <div>
                  <label style={ls}>Why do you want to join NPCollab? <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                  <textarea
                    style={{ ...fs, resize: 'vertical' }}
                    rows={4}
                    value={form.statement}
                    onChange={e => set('statement', e.target.value)}
                    placeholder="Tell us a bit about yourself and how you'll use NPCollab…"
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                <div>
                  <Turnstile
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken('')}
                    onExpire={() => setTurnstileToken('')}
                    options={{ theme: 'light' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !turnstileToken}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: (submitting || !turnstileToken) ? 'var(--navy-light)' : 'var(--navy)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '7px',
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-body)',
                    cursor: (submitting || !turnstileToken) ? 'not-allowed' : 'pointer',
                    marginTop: '4px',
                    opacity: !turnstileToken ? 0.65 : 1,
                  }}
                >
                  {submitting ? 'Submitting…' : 'Request Access'}
                </button>
              </form>

              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Already have an account?{' '}
                  <Link href="/login" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
                    Log in
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
          marginTop: '20px',
        }}>
          © {new Date().getFullYear()} NPCollab · Educational purposes only
        </p>
      </div>
    </div>
  );
}
