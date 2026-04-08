'use client';

import { useState, useRef } from 'react';

export default function PodcastSignupForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value.trim() ?? '';
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/podcast-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="podcast-signup-success">
        <div className="podcast-signup-success-icon">✓</div>
        <h4>You&apos;re on the list</h4>
        <p>We&apos;ll let you know as soon as the NPCollab Podcast launches.</p>
      </div>
    );
  }

  return (
    <form className="podcast-signup-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="podcast-email" className="podcast-signup-label">
        Enter your email to be notified at launch
      </label>
      <div className="podcast-signup-row">
        <input
          id="podcast-email"
          ref={emailRef}
          type="email"
          placeholder="your@email.com"
          className="podcast-signup-input"
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="podcast-signup-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing…' : 'Notify me'}
        </button>
      </div>
      {status === 'error' && (
        <p className="podcast-signup-error">{errorMsg}</p>
      )}
    </form>
  );
}
