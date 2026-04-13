'use client';

import { useState } from 'react';
import Link from 'next/link';

const COURSE_TYPES = ['conference', 'workshop', 'online', 'webinar', 'simulation', 'other'];
const TYPE_LABEL: Record<string, string> = {
  conference: 'Conference', workshop: 'Workshop', online: 'Online',
  webinar: 'Webinar', simulation: 'Simulation', other: 'Other',
};

export default function SubmitCoursePage() {
  const [form, setForm] = useState({
    courseName: '',
    providerName: '',
    providerEmail: '',
    courseType: 'conference',
    specialty: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    location: '',
    cost: '',
    cpdHours: '',
    registrationUrl: '',
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
    if (!form.courseName.trim() || !form.providerName.trim() || !form.description.trim() ||
        !form.dateStart || !form.location.trim() || !form.registrationUrl.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/courses/submit', {
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
        <div className="label">Community · Courses</div>
        <h1>Submit a Course</h1>
        <p>Share a CPD opportunity with the NPCollab community</p>
      </div>

      <div className="content-prose">
        <Link
          href="/community/courses"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)',
            textDecoration: 'none', marginBottom: '28px',
            padding: '7px 14px', border: '1px solid var(--border)',
            borderRadius: '6px', background: 'var(--off-white)',
          }}
        >
          ← Back to Courses
        </Link>

        {submitted ? (
          <div style={{ padding: '40px 32px', textAlign: 'center', border: '1px solid #bbf7d0', borderRadius: '10px', background: '#f0fdf4' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <h3 style={{ margin: '0 0 8px', color: '#166534', fontFamily: 'var(--font-heading)' }}>Thank you for your submission!</h3>
            <p style={{ margin: '0 0 20px', color: '#166534', fontSize: '15px' }}>
              Your course listing has been received and will be reviewed by the NPCollab team. It will appear on the courses page once approved.
            </p>
            <Link
              href="/community/courses"
              style={{
                display: 'inline-block', padding: '9px 22px',
                background: 'var(--navy)', color: '#fff', borderRadius: '6px',
                fontWeight: 600, textDecoration: 'none', fontSize: '14px',
              }}
            >
              Back to Courses
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="info-box" style={{ marginBottom: '4px' }}>
              <p style={{ margin: 0, fontSize: '13px' }}>
                Submissions are reviewed before publishing. Please only submit courses relevant to Australian Nurse Practitioners — CPD events, conferences, workshops, online modules, or simulation sessions.
              </p>
            </div>

            {error && (
              <div style={{ padding: '10px 14px', borderRadius: '6px', background: '#fef2f2', border: '1px solid #fecaca', color: 'var(--error)', fontSize: '13px' }}>
                {error}
              </div>
            )}

            {/* Course details */}
            <div>
              <label style={ls}>Course Name <span style={{ color: 'var(--error)' }}>*</span></label>
              <input style={fs} value={form.courseName}
                onChange={e => setForm(f => ({ ...f, courseName: e.target.value }))}
                placeholder="e.g. Advanced NP Clinical Skills Workshop" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Provider / Organisation <span style={{ color: 'var(--error)' }}>*</span></label>
                <input style={fs} value={form.providerName}
                  onChange={e => setForm(f => ({ ...f, providerName: e.target.value }))}
                  placeholder="e.g. ACNP, University of Newcastle" required />
              </div>
              <div>
                <label style={ls}>Provider Email</label>
                <input style={fs} type="email" value={form.providerEmail}
                  onChange={e => setForm(f => ({ ...f, providerEmail: e.target.value }))}
                  placeholder="events@provider.com.au" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Course Type <span style={{ color: 'var(--error)' }}>*</span></label>
                <select style={fs} value={form.courseType}
                  onChange={e => setForm(f => ({ ...f, courseType: e.target.value }))}>
                  {COURSE_TYPES.map(t => <option key={t} value={t}>{TYPE_LABEL[t]}</option>)}
                </select>
              </div>
              <div>
                <label style={ls}>Specialty / Area</label>
                <input style={fs} value={form.specialty}
                  onChange={e => setForm(f => ({ ...f, specialty: e.target.value }))}
                  placeholder="e.g. Cardiology, Emergency, General" />
              </div>
            </div>

            <div>
              <label style={ls}>Description <span style={{ color: 'var(--error)' }}>*</span></label>
              <textarea style={{ ...fs, resize: 'vertical' }} rows={5}
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Describe what the course covers, who it's for, and what attendees will learn…"
                required />
            </div>

            {/* Dates */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Start Date <span style={{ color: 'var(--error)' }}>*</span></label>
                <input style={fs} type="date" value={form.dateStart}
                  onChange={e => setForm(f => ({ ...f, dateStart: e.target.value }))} required />
              </div>
              <div>
                <label style={ls}>End Date (if multi-day)</label>
                <input style={fs} type="date" value={form.dateEnd}
                  onChange={e => setForm(f => ({ ...f, dateEnd: e.target.value }))} />
              </div>
            </div>

            {/* Location, cost, CPD */}
            <div>
              <label style={ls}>Location <span style={{ color: 'var(--error)' }}>*</span></label>
              <input style={fs} value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                placeholder="e.g. Sydney CBD / Online / Newcastle NSW" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Cost</label>
                <input style={fs} value={form.cost}
                  onChange={e => setForm(f => ({ ...f, cost: e.target.value }))}
                  placeholder="e.g. Free, $250, $150 members" />
              </div>
              <div>
                <label style={ls}>CPD Hours</label>
                <input style={fs} value={form.cpdHours}
                  onChange={e => setForm(f => ({ ...f, cpdHours: e.target.value }))}
                  placeholder="e.g. 6, 20, 2.5" />
              </div>
            </div>

            <div>
              <label style={ls}>Registration URL <span style={{ color: 'var(--error)' }}>*</span></label>
              <input style={fs} type="url" value={form.registrationUrl}
                onChange={e => setForm(f => ({ ...f, registrationUrl: e.target.value }))}
                placeholder="https://www.provider.com.au/register" required />
            </div>

            {/* Submitter */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Your name</label>
                <input style={fs} value={form.submitterName}
                  onChange={e => setForm(f => ({ ...f, submitterName: e.target.value }))}
                  placeholder="Jane Smith" />
              </div>
              <div>
                <label style={ls}>Your email</label>
                <input style={fs} type="email" value={form.submitterEmail}
                  onChange={e => setForm(f => ({ ...f, submitterEmail: e.target.value }))}
                  placeholder="jane@example.com" />
              </div>
            </div>

            <div style={{ paddingTop: '4px' }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: '11px 28px',
                  background: 'var(--navy)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.65 : 1,
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
