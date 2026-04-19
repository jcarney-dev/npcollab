'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

const AU_STATES = [
  'ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA',
];

const MENTORING_MODES = ['Video', 'Phone', 'In-person'];

interface ExistingMentor {
  id:            number;
  name:          string;
  credentials:   string;
  specialtyArea: string;
  state:         string;
  currentRole:   string;
  employer:      string;
  bio:           string;
  mode:          string;
  maxMentees:    number;
  active:        boolean;
}

interface Props {
  defaultName:  string;
  existing:     ExistingMentor | null;
}

export default function RegisterMentorForm({ defaultName, existing }: Props) {
  const router = useRouter();

  const existingModes = existing?.mode
    ? existing.mode.split(',').map((m: string) => m.trim())
    : [];

  const [form, setForm] = useState({
    name:          existing?.name          ?? defaultName,
    credentials:   existing?.credentials   ?? '',
    specialtyArea: existing?.specialtyArea ?? '',
    state:         existing?.state         ?? '',
    currentRole:   existing?.currentRole   ?? '',
    employer:      existing?.employer      ?? '',
    bio:           existing?.bio           ?? '',
    maxMentees:    existing?.maxMentees    ?? 3,
    active:        existing?.active        ?? true,
  });
  const [selectedModes, setSelectedModes] = useState<string[]>(existingModes);
  const [saving, setSaving] = useState(false);
  const [error, setError]   = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  function toggleMode(mode: string) {
    setSelectedModes(prev =>
      prev.includes(mode) ? prev.filter(m => m !== mode) : [...prev, mode]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (selectedModes.length === 0) {
      setError('Please select at least one mentoring mode.');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/mentoring/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, mode: selectedModes }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Failed to save profile.');
        return;
      }
      router.push(`/mentoring/${json.mentorId}?saved=1`);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const bioLength = form.bio.length;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {error && (
        <div style={{
          padding: '14px 16px',
          background: '#fff0f0',
          border: '1px solid var(--error)',
          borderRadius: '8px',
          color: 'var(--error)',
          fontSize: '0.875rem',
        }}>
          {error}
        </div>
      )}

      {/* Name + Credentials */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name <span style={{ color: 'var(--error)' }}>*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="credentials" style={labelStyle}>Credentials</label>
          <input
            id="credentials"
            name="credentials"
            type="text"
            value={form.credentials}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g. NP, MNP"
          />
        </div>
      </div>

      {/* Specialty + State */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="specialtyArea" style={labelStyle}>Specialty area <span style={{ color: 'var(--error)' }}>*</span></label>
          <select
            id="specialtyArea"
            name="specialtyArea"
            value={form.specialtyArea}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select specialty</option>
            {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="state" style={labelStyle}>State / territory <span style={{ color: 'var(--error)' }}>*</span></label>
          <select
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select state</option>
            {AU_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Current role + Employer */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="currentRole" style={labelStyle}>Current role</label>
          <input
            id="currentRole"
            name="currentRole"
            type="text"
            value={form.currentRole}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g. Nurse Practitioner"
          />
        </div>
        <div>
          <label htmlFor="employer" style={labelStyle}>Employer</label>
          <input
            id="employer"
            name="employer"
            type="text"
            value={form.employer}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g. Hunter Primary Care"
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label htmlFor="bio" style={labelStyle}>
          Bio <span style={{ color: 'var(--error)' }}>*</span>
          <span style={{ marginLeft: '8px', fontWeight: 400, color: bioLength > 500 ? 'var(--error)' : 'var(--text-muted)', fontSize: '0.8rem' }}>
            {bioLength}/500
          </span>
        </label>
        <textarea
          id="bio"
          name="bio"
          value={form.bio}
          onChange={handleChange}
          required
          rows={5}
          maxLength={500}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
          placeholder="Tell prospective mentees about your background, experience, and what you can offer as a mentor."
        />
      </div>

      {/* Mentoring mode */}
      <div>
        <div style={labelStyle}>Mentoring mode <span style={{ color: 'var(--error)' }}>*</span></div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          {MENTORING_MODES.map(mode => (
            <label key={mode} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text)' }}>
              <input
                type="checkbox"
                checked={selectedModes.includes(mode)}
                onChange={() => toggleMode(mode)}
                style={{ accentColor: 'var(--gold)', width: '16px', height: '16px' }}
              />
              {mode}
            </label>
          ))}
        </div>
      </div>

      {/* Max mentees */}
      <div style={{ maxWidth: '200px' }}>
        <label htmlFor="maxMentees" style={labelStyle}>Max mentees at once</label>
        <select
          id="maxMentees"
          name="maxMentees"
          value={form.maxMentees}
          onChange={handleChange}
          style={inputStyle}
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Active toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 16px',
        background: 'var(--off-white)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
      }}>
        <input
          type="checkbox"
          id="active"
          name="active"
          checked={form.active}
          onChange={handleChange}
          style={{ accentColor: 'var(--gold)', width: '16px', height: '16px' }}
        />
        <label htmlFor="active" style={{ fontSize: '0.9rem', color: 'var(--text)', cursor: 'pointer' }}>
          Visible in mentor directory
        </label>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '4px' }}>
          Untick to temporarily hide your profile without deleting it.
        </span>
      </div>

      {/* Submit */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          type="submit"
          disabled={saving}
          style={{
            padding: '11px 28px',
            borderRadius: '7px',
            background: saving ? 'var(--text-muted)' : 'var(--navy)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.95rem',
            border: 'none',
            cursor: saving ? 'not-allowed' : 'pointer',
          }}
        >
          {saving ? 'Saving…' : existing ? 'Update profile' : 'Register as mentor'}
        </button>
      </div>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 600,
  fontSize: '0.875rem',
  color: 'var(--text)',
  marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  borderRadius: '6px',
  border: '1px solid var(--border)',
  fontSize: '0.9rem',
  color: 'var(--text)',
  background: '#fff',
  boxSizing: 'border-box',
};
