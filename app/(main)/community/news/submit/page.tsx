'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitNewsPage() {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    url: '',
    sourceName: '',
    submitterName: '',
    submitterEmail: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const fs: React.CSSProperties = {
    width: '100%', padding: '9px 12px',
    border: '1px solid var(--border)', borderRadius: '6px',
    fontSize: '14px', fontFamily: 'var(--font-body)',
    boxSizing: 'border-box', color: 'var(--text)',
    background: '#fff',
  };
  const ls: React.CSSProperties = {
    display: 'block', fontSize: '12px', fontWeight: 600,
    color: 'var(--text-muted)', marginBottom: '4px',
    textTransform: 'uppercase', letterSpacing: '0.05em',
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.summary.trim()) {
      setError('Title and summary are required.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/news/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Submission failed. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Community · News</div>
        <h1>Submit News</h1>
        <p>Share a relevant article, announcement, or update with the NPCollab community</p>
      </div>

      <div className="content-prose">
        <Link
          href="/community/news"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)',
            textDecoration: 'none', marginBottom: '28px',
            padding: '7px 14px', border: '1px solid var(--border)',
            borderRadius: '6px', background: 'var(--off-white)',
          }}
        >
          ← Back to News
        </Link>

        {submitted ? (
          <div style={{ padding: '40px 32px', textAlign: 'center', border: '1px solid #bbf7d0', borderRadius: '10px', background: '#f0fdf4' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <h3 style={{ margin: '0 0 8px', color: '#166534', fontFamily: 'var(--font-heading)' }}>Thank you for your submission!</h3>
            <p style={{ margin: '0 0 20px', color: '#166534', fontSize: '15px' }}>
              Your news item has been received and will be reviewed by the NPCollab team. It will appear on the news page once approved.
            </p>
            <Link
              href="/community/news"
              style={{
                display: 'inline-block', padding: '9px 22px',
                background: 'var(--navy)', color: '#fff', borderRadius: '6px',
                fontWeight: 600, textDecoration: 'none', fontSize: '14px',
              }}
            >
              Back to News
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="info-box" style={{ marginBottom: '4px' }}>
              <p style={{ margin: 0, fontSize: '13px' }}>
                Submissions are reviewed before publishing. Please only submit content relevant to Australian Nurse Practitioners — clinical updates, AHPRA/NMBA announcements, guideline changes, or NP-specific news.
              </p>
            </div>

            {error && (
              <div style={{ padding: '10px 14px', borderRadius: '6px', background: '#fef2f2', border: '1px solid #fecaca', color: 'var(--error)', fontSize: '13px' }}>
                {error}
              </div>
            )}

            <div>
              <label style={ls}>Title <span style={{ color: 'var(--error)' }}>*</span></label>
              <input
                style={fs}
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder="e.g. NMBA updates NP registration standards"
                required
              />
            </div>

            <div>
              <label style={ls}>Summary <span style={{ color: 'var(--error)' }}>*</span></label>
              <textarea
                style={{ ...fs, resize: 'vertical' }}
                rows={5}
                value={form.summary}
                onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
                placeholder="Briefly describe the news item — what it is and why it matters to NPs…"
                required
              />
            </div>

            <div>
              <label style={ls}>Source URL (if external article)</label>
              <input
                style={fs}
                type="url"
                value={form.url}
                onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                placeholder="https://www.ahpra.gov.au/…"
              />
            </div>

            <div>
              <label style={ls}>Source name</label>
              <input
                style={fs}
                value={form.sourceName}
                onChange={e => setForm(f => ({ ...f, sourceName: e.target.value }))}
                placeholder="e.g. AHPRA, NMBA, Therapeutic Guidelines, RACGP"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Your name</label>
                <input
                  style={fs}
                  value={form.submitterName}
                  onChange={e => setForm(f => ({ ...f, submitterName: e.target.value }))}
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label style={ls}>Your email</label>
                <input
                  style={fs}
                  type="email"
                  value={form.submitterEmail}
                  onChange={e => setForm(f => ({ ...f, submitterEmail: e.target.value }))}
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div style={{ paddingTop: '4px' }}>
              <button
                type="submit"
                disabled={submitting || !form.title.trim() || !form.summary.trim()}
                style={{
                  padding: '11px 28px',
                  background: 'var(--navy)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting || !form.title.trim() || !form.summary.trim() ? 0.65 : 1,
                }}
              >
                {submitting ? 'Submitting…' : 'Submit for Review'}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
