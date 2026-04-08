'use client';

import { useState } from 'react';

const OPTIONS = [
  { value: 'sidebar',  label: 'Sidebar Sponsor Card — $300/month' },
  { value: 'module',   label: 'Module Sponsor — $500/month' },
  { value: 'homepage', label: 'Homepage Featured Sponsor Card — $600/month' },
];

export default function AdvertiseForm() {
  const [form, setForm] = useState({
    companyName:  '',
    contactName:  '',
    email:        '',
    option:       '',
    message:      '',
  });
  const [error, setError]   = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.companyName.trim())   return setError('Please enter your company name.');
    if (!form.contactName.trim())   return setError('Please enter a contact name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError('Please enter a valid email address.');
    if (!form.option)                return setError('Please select an advertising option.');
    if (!form.message.trim())        return setError('Please add a brief message.');

    setLoading(true);
    try {
      const res = await fetch('/api/advertise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
      } else {
        setSuccess(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>
          <strong>Enquiry received — thank you.</strong> We will review your enquiry and get back to you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="public-form" onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
      <div className="form-group">
        <label className="form-label" htmlFor="companyName">Company name</label>
        <input
          id="companyName"
          className="form-input"
          type="text"
          placeholder="e.g. MedTech Australia Pty Ltd"
          value={form.companyName}
          onChange={e => update('companyName', e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contactName">Contact name</label>
        <input
          id="contactName"
          className="form-input"
          type="text"
          placeholder="Your name"
          value={form.contactName}
          onChange={e => update('contactName', e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="advertEmail">Email address</label>
        <input
          id="advertEmail"
          className="form-input"
          type="email"
          placeholder="you@company.com.au"
          value={form.email}
          onChange={e => update('email', e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="option">Advertising option</label>
        <select
          id="option"
          className="form-input"
          value={form.option}
          onChange={e => update('option', e.target.value)}
          disabled={loading}
        >
          <option value="">Select an option…</option>
          {OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="advertMessage">Message</label>
        <textarea
          id="advertMessage"
          className="form-input"
          rows={4}
          placeholder="Tell us about your company and what you'd like to achieve…"
          value={form.message}
          onChange={e => update('message', e.target.value)}
          disabled={loading}
          style={{ resize: 'vertical' }}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button
        type="submit"
        className="btn-primary"
        disabled={loading}
        style={{ width: '100%', marginTop: '8px' }}
      >
        {loading ? 'Sending…' : 'Send Enquiry →'}
      </button>
    </form>
  );
}
