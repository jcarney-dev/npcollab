'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormState = 'idle' | 'submitting' | 'error';

export default function EnterAccessForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const code = (form.elements.namedItem('code') as HTMLInputElement).value.trim().toUpperCase();

    try {
      const res = await fetch('/api/enter-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || 'Invalid access code. Please check and try again.');
        setState('error');
      } else {
        router.push(json.redirect || '/');
        router.refresh();
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <form className="public-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="code">Access code</label>
        <input
          id="code"
          name="code"
          type="text"
          autoComplete="off"
          required
          placeholder="NPC-2024-XXXX"
          style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'monospace' }}
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
        {state === 'submitting' ? 'Verifying…' : 'Access NPCollab'}
      </button>
    </form>
  );
}
