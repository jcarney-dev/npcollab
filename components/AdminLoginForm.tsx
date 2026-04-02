'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'error'>('idle');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');

    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setState('error');
    }
  }

  return (
    <form className="public-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          disabled={state === 'submitting'}
        />
      </div>
      {state === 'error' && (
        <div className="form-error">Incorrect password.</div>
      )}
      <button type="submit" className="btn-primary" disabled={state === 'submitting'}>
        {state === 'submitting' ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
