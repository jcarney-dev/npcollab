'use client';

import { useState } from 'react';

interface Props {
  mentorId: number;
  mentorName: string;
  isSelf: boolean;
}

export default function IntroRequestForm({ mentorId, mentorName, isSelf }: Props) {
  const [open, setOpen]       = useState(false);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const res = await fetch(`/api/mentoring/request/${mentorId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Failed to send request.');
        return;
      }
      setSuccess(true);
      setOpen(false);
      setMessage('');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  }

  if (isSelf) {
    return (
      <a
        href="/mentoring/register"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '11px 24px',
          borderRadius: '7px',
          background: 'var(--navy)',
          color: 'var(--gold)',
          fontWeight: 600,
          fontSize: '0.95rem',
          textDecoration: 'none',
        }}
      >
        Edit your profile →
      </a>
    );
  }

  if (success) {
    return (
      <div style={{
        padding: '16px 20px',
        background: '#f0fff4',
        border: '1px solid var(--success)',
        borderRadius: '8px',
        color: 'var(--success)',
        fontWeight: 600,
        fontSize: '0.9rem',
      }}>
        Introduction request sent to {mentorName}. They will contact you directly via email.
      </div>
    );
  }

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '11px 24px',
            borderRadius: '7px',
            background: 'var(--gold)',
            color: 'var(--navy)',
            fontWeight: 700,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Request Introduction
        </button>
      )}

      {open && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: 'var(--off-white)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>
            Send an introduction to {mentorName}
          </div>

          {error && (
            <div style={{
              padding: '12px 14px',
              background: '#fff0f0',
              border: '1px solid var(--error)',
              borderRadius: '6px',
              color: 'var(--error)',
              fontSize: '0.875rem',
            }}>
              {error}
            </div>
          )}

          <div>
            <label htmlFor="intro-message" style={{
              display: 'block',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: 'var(--text)',
              marginBottom: '6px',
            }}>
              Message{' '}
              <span style={{
                fontWeight: 400,
                color: message.length > 500 ? 'var(--error)' : 'var(--text-muted)',
                fontSize: '0.8rem',
              }}>
                {message.length}/500
              </span>
            </label>
            <textarea
              id="intro-message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={5}
              maxLength={500}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                fontSize: '0.9rem',
                color: 'var(--text)',
                background: '#fff',
                boxSizing: 'border-box',
                resize: 'vertical',
                lineHeight: 1.6,
              }}
              placeholder={`Introduce yourself and tell ${mentorName} what kind of guidance you are looking for…`}
            />
            <p style={{ margin: '6px 0 0', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Your name, email, and current role will be included automatically so {mentorName} can reply directly.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="submit"
              disabled={sending}
              style={{
                padding: '10px 22px',
                borderRadius: '7px',
                background: sending ? 'var(--text-muted)' : 'var(--gold)',
                color: 'var(--navy)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: sending ? 'not-allowed' : 'pointer',
              }}
            >
              {sending ? 'Sending…' : 'Send Introduction'}
            </button>
            <button
              type="button"
              onClick={() => { setOpen(false); setError(''); setMessage(''); }}
              style={{
                padding: '10px 18px',
                borderRadius: '7px',
                background: '#fff',
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
