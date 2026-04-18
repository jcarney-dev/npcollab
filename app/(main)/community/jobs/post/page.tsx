'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Turnstile } from '@marsidev/react-turnstile';

const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Casual', 'Contract', 'Locum'];
const SPECIALTIES = [
  'General Practice',
  'Emergency Medicine',
  'Aged Care',
  'Mental Health',
  'Paediatrics',
  'Oncology',
  'Cardiology',
  'Respiratory',
  'Endocrinology',
  'Musculoskeletal',
  'Palliative Care',
  'Community Health',
  'Remote / Rural',
  'Other',
];

export default function PostJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    employerName: '',
    contactEmail: '',
    jobTitle: '',
    location: '',
    employmentType: 'Full-time',
    specialty: '',
    description: '',
    salaryRange: '',
    applicationUrl: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.employerName.trim()) return setError('Please enter your organisation name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) return setError('Please enter a valid email address.');
    if (!form.jobTitle.trim()) return setError('Please enter a job title.');
    if (!form.location.trim()) return setError('Please enter a location.');
    if (!form.description.trim()) return setError('Please provide a job description.');
    if (!form.applicationUrl.trim()) return setError('Please enter an application URL.');
    if (!turnstileToken) return setError('Please complete the CAPTCHA verification.');

    setLoading(true);
    try {
      const res = await fetch('/api/jobs/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
      } else if (json.url) {
        router.push(json.url);
      } else {
        setError('Could not initiate payment. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="content-prose">
      <div className="hero-block">
        <h1>Post a Job</h1>
        <p className="hero-sub">Reach Australia&rsquo;s nurse practitioner community. 30 days for $99 AUD.</p>
      </div>

      <div className="info-box" style={{ marginBottom: '32px' }}>
        <p>Your listing will be reviewed by our team and published within 1 business day of payment. You&rsquo;ll receive an email confirmation once it&rsquo;s live.</p>
      </div>

      <form className="public-form" onSubmit={handleSubmit} noValidate>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', marginBottom: '16px' }}>Organisation details</h3>

        <div className="form-field">
          <label htmlFor="employerName">Organisation name</label>
          <input
            id="employerName"
            type="text"
            placeholder="e.g. Hunter New England Health"
            value={form.employerName}
            onChange={e => update('employerName', e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contactEmail">Contact email</label>
          <input
            id="contactEmail"
            type="email"
            placeholder="hr@yourorganisation.com.au"
            value={form.contactEmail}
            onChange={e => update('contactEmail', e.target.value)}
            disabled={loading}
          />
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', margin: '24px 0 16px' }}>Position details</h3>

        <div className="form-field">
          <label htmlFor="jobTitle">Job title</label>
          <input
            id="jobTitle"
            type="text"
            placeholder="e.g. Nurse Practitioner — Acute Care"
            value={form.jobTitle}
            onChange={e => update('jobTitle', e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Newcastle, NSW"
            value={form.location}
            onChange={e => update('location', e.target.value)}
            disabled={loading}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="form-field">
            <label htmlFor="employmentType">Employment type</label>
            <select
              id="employmentType"
              value={form.employmentType}
              onChange={e => update('employmentType', e.target.value)}
              disabled={loading}
            >
              {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="specialty">Clinical specialty</label>
            <select
              id="specialty"
              value={form.specialty}
              onChange={e => update('specialty', e.target.value)}
              disabled={loading}
            >
              <option value="">Select specialty…</option>
              {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="salaryRange">Salary range (optional)</label>
          <input
            id="salaryRange"
            type="text"
            placeholder="e.g. $120,000 – $140,000 + super"
            value={form.salaryRange}
            onChange={e => update('salaryRange', e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Job description</label>
          <textarea
            id="description"
            rows={8}
            placeholder="Describe the role, key responsibilities, required qualifications, and any other relevant information…"
            value={form.description}
            onChange={e => update('description', e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="form-field">
          <label htmlFor="applicationUrl">Application URL</label>
          <input
            id="applicationUrl"
            type="url"
            placeholder="https://yourorganisation.com.au/apply"
            value={form.applicationUrl}
            onChange={e => update('applicationUrl', e.target.value)}
            disabled={loading}
          />
        </div>

        {error && <div className="form-error">{error}</div>}

        <div style={{ marginBottom: '8px' }}>
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken('')}
            onExpire={() => setTurnstileToken('')}
            options={{ theme: 'light' }}
          />
        </div>

        <div style={{ padding: '20px', background: 'var(--gold-pale)', border: '1px solid var(--gold-light)', borderRadius: '8px', marginBottom: '16px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--navy)', fontWeight: 500 }}>
            💳 $99 AUD for 30 days — secure payment via Stripe
          </p>
          <p style={{ margin: '6px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
            You&rsquo;ll be redirected to Stripe to complete payment. Your listing goes live within 1 business day of review.
          </p>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading || !turnstileToken}
          style={{ opacity: !turnstileToken ? 0.65 : undefined, cursor: !turnstileToken ? 'not-allowed' : undefined }}
        >
          {loading ? 'Redirecting to payment…' : 'Proceed to payment — $99 AUD →'}
        </button>
      </form>
    </div>
  );
}
