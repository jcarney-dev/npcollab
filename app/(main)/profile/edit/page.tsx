'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const STATES = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

const ENDORSEMENTS = [
  'Primary Care',
  'Mental Health',
  'Emergency',
  'Paediatrics',
  'Neonatal',
  'Aged Care',
  "Women's Health",
  'Perioperative',
  'Musculoskeletal',
  'Other',
];

interface ProfileData {
  name: string;
  email: string;
  state: string;
  npEndorsement: string;
  employer: string;
  specialtyArea: string;
  currentRole: string;
}

export default function ProfileEditPage() {
  const router = useRouter();
  const [form, setForm] = useState<ProfileData>({
    name: '',
    email: '',
    state: '',
    npEndorsement: '',
    employer: '',
    specialtyArea: '',
    currentRole: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/profile/me')
      .then(r => {
        if (r.status === 401) { router.push('/login'); return null; }
        return r.json();
      })
      .then(data => {
        if (!data) return;
        setForm({
          name:          data.name          || '',
          email:         data.email         || '',
          state:         data.state         || '',
          npEndorsement: data.npEndorsement || '',
          employer:      data.employer      || '',
          specialtyArea: data.specialtyArea || '',
          currentRole:   data.currentRole   || '',
        });
      })
      .catch(() => setError('Failed to load profile. Please try again.'))
      .finally(() => setLoading(false));
  }, [router]);

  function set(field: keyof ProfileData, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setError('');
    setSuccess(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || form.name.trim().length < 2) {
      setError('Full name is required.'); return;
    }
    if (!form.state) {
      setError('Please select your state.'); return;
    }
    if (!form.npEndorsement) {
      setError('Please select your NP endorsement type.'); return;
    }

    setSaving(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/profile/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:          form.name.trim(),
          state:         form.state,
          npEndorsement: form.npEndorsement,
          employer:      form.employer.trim() || null,
          specialtyArea: form.specialtyArea.trim() || null,
          currentRole:   form.currentRole.trim() || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
        return;
      }
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const fs: React.CSSProperties = {
    width: '100%',
    padding: '10px 13px',
    border: '1.5px solid var(--border)',
    borderRadius: '7px',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: 'var(--text)',
    background: '#fff',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const ls: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--text-muted)',
    marginBottom: '5px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const readonlyStyle: React.CSSProperties = {
    ...fs,
    background: 'var(--off-white)',
    color: 'var(--text-muted)',
    cursor: 'not-allowed',
  };

  if (loading) {
    return (
      <>
        <div className="page-header">
          <div className="label">Account</div>
          <h1>My Profile</h1>
        </div>
        <div className="content-prose">
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Loading…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Account</div>
        <h1>My Profile</h1>
        <p>Update your professional details</p>
      </div>

      <div className="content-prose">
        <div style={{ maxWidth: '560px' }}>

          {success && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: '#f0fdf4',
              border: '1px solid #86efac',
              color: 'var(--success)',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
            }}>
              ✓ Profile updated successfully
            </div>
          )}

          {error && (
            <div style={{
              padding: '10px 14px',
              borderRadius: '6px',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: 'var(--error)',
              fontSize: '13px',
              marginBottom: '18px',
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Email (read-only) */}
            <div>
              <label style={ls}>Email address</label>
              <input
                style={readonlyStyle}
                value={form.email}
                readOnly
                disabled
                tabIndex={-1}
              />
              <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--text-muted)' }}>
                Email cannot be changed. Contact support if needed.
              </p>
            </div>

            {/* Name + State */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>Full name <span style={{ color: 'var(--error)' }}>*</span></label>
                <input
                  style={fs}
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  placeholder="Jane Smith"
                  required
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                />
              </div>
              <div>
                <label style={ls}>State <span style={{ color: 'var(--error)' }}>*</span></label>
                <select
                  style={fs}
                  value={form.state}
                  onChange={e => set('state', e.target.value)}
                  required
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <option value="">Select state…</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Endorsement */}
            <div>
              <label style={ls}>NP Endorsement Type <span style={{ color: 'var(--error)' }}>*</span></label>
              <select
                style={fs}
                value={form.npEndorsement}
                onChange={e => set('npEndorsement', e.target.value)}
                required
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <option value="">Select endorsement…</option>
                {ENDORSEMENTS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            {/* Employer + Specialty */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={ls}>
                  Employer{' '}
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                </label>
                <input
                  style={fs}
                  value={form.employer}
                  onChange={e => set('employer', e.target.value)}
                  placeholder="Hospital / clinic name"
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                />
              </div>
              <div>
                <label style={ls}>
                  Specialty Area{' '}
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                </label>
                <input
                  style={fs}
                  value={form.specialtyArea}
                  onChange={e => set('specialtyArea', e.target.value)}
                  placeholder="e.g. Cardiology, Emergency"
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                />
              </div>
            </div>

            {/* Current Role */}
            <div>
              <label style={ls}>
                Current Role{' '}
                <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <input
                style={fs}
                value={form.currentRole}
                onChange={e => set('currentRole', e.target.value)}
                placeholder="e.g. NP, TNP, RN, NP Student"
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              style={{
                padding: '12px 24px',
                background: saving ? 'var(--navy-light)' : 'var(--navy)',
                color: '#fff',
                border: 'none',
                borderRadius: '7px',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-body)',
                cursor: saving ? 'not-allowed' : 'pointer',
                alignSelf: 'flex-start',
              }}
            >
              {saving ? 'Saving…' : 'Save Changes'}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
