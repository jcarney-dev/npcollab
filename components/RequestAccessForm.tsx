'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const ROLES = [
  'Endorsed NP',
  'TNP',
  'NP Student',
  'RN considering NP',
  'Other',
];

export default function RequestAccessForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name:   (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email:  (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      role:   (form.elements.namedItem('role') as HTMLSelectElement).value,
      reason: (form.elements.namedItem('reason') as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        setState('error');
      } else {
        setState('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="public-success">
        <div className="public-success-icon">✓</div>
        <h2>Request received</h2>
        <p>
          Thanks for your interest in NPCollab. Your request has been submitted and will be reviewed shortly.
          You&apos;ll receive an email with your access code once approved.
        </p>
      </div>
    );
  }

  return (
    <form className="public-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your full name"
          disabled={state === 'submitting'}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          disabled={state === 'submitting'}
        />
      </div>

      <div className="form-field">
        <label htmlFor="role">Your role</label>
        <select id="role" name="role" required disabled={state === 'submitting'}>
          <option value="">Select your role</option>
          {ROLES.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="reason">Why do you want access?</label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          required
          placeholder="Brief description of your background and how you plan to use NPCollab..."
          disabled={state === 'submitting'}
        />
      </div>

      {state === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={state === 'submitting'}
      >
        {state === 'submitting' ? 'Submitting…' : 'Submit request'}
      </button>
    </form>
  );
}
