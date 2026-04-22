'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const SUBJECTS = [
  'Content contribution',
  'Clinical content question',
  'Technical issue',
  'Advertising / Partnership',
  'General enquiry',
  'Other',
];

interface Props {
  source: 'about' | 'support' | 'contact';
  turnstileSiteKey: string;
}

export default function ContactForm({ source, turnstileSiteKey }: Props) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  function set(field: keyof typeof form, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrorMsg('Network error — please try again.');
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 12px',
    borderRadius: '6px',
    border: '1px solid var(--border)',
    fontSize: '0.9rem',
    color: 'var(--text)',
    background: '#fff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.875rem',
    marginBottom: '5px',
    color: 'var(--navy)',
  };

  if (status === 'success') {
    return (
      <div style={{
        padding: '24px 28px',
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '10px',
        maxWidth: '560px',
      }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✅</div>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#166534', marginBottom: '6px' }}>Message sent</div>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#166534', lineHeight: 1.6 }}>
          Thanks for getting in touch. I&rsquo;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  const canSubmit = !!(form.name && form.email && form.subject && form.message && turnstileToken);

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '16px' }} noValidate>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            style={inputStyle}
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Your name"
            required
            disabled={status === 'sending'}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            style={inputStyle}
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Subject *</label>
        <select
          style={inputStyle}
          value={form.subject}
          onChange={e => set('subject', e.target.value)}
          required
          disabled={status === 'sending'}
        >
          <option value="">Select a subject</option>
          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }}
          value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Your message…"
          required
          disabled={status === 'sending'}
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

      {status === 'error' && (
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--error)', padding: '10px 12px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px' }}>
          {errorMsg}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending' || !canSubmit}
          className="btn-primary"
          style={{ fontSize: '0.9rem', padding: '10px 24px', cursor: (status === 'sending' || !canSubmit) ? 'not-allowed' : 'pointer', opacity: (status === 'sending' || !canSubmit) ? 0.7 : 1 }}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </div>

    </form>
  );
}
