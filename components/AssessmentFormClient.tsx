'use client';

import { useState, useEffect } from 'react';
import {
  type MiniCEXTraineeData,
  type DOPSTraineeData,
  emptyMiniCEXTrainee,
  emptyDOPSTrainee,
} from '@/lib/assessment-forms';

interface Props {
  formType:      'mini-cex' | 'dops';
  streamSlug:    string;
  procedureSlug: string;
  title:         string;
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '9px 12px', border: '1px solid #CBD5E0', borderRadius: '7px',
  fontSize: '14px', boxSizing: 'border-box', background: '#fff',
};
const selectStyle: React.CSSProperties = { ...inputStyle };
const labelStyle: React.CSSProperties = { display: 'block', fontWeight: 600, fontSize: '13px', color: 'var(--navy)', marginBottom: '5px' };
const fieldWrap: React.CSSProperties = { marginBottom: '18px' };

export default function AssessmentFormClient({ formType, streamSlug, procedureSlug, title }: Props) {
  const [entryId, setEntryId]       = useState<string | null>(null);
  const [traineeData, setTraineeData] = useState<MiniCEXTraineeData | DOPSTraineeData>(
    formType === 'mini-cex' ? emptyMiniCEXTrainee() : emptyDOPSTrainee()
  );
  const [status, setStatus]         = useState<'idle' | 'saving' | 'saved' | 'submitting' | 'submitted' | 'error'>('idle');
  const [mentorEmail, setMentorEmail] = useState('');
  const [showSubmit, setShowSubmit]  = useState(false);
  const [errorMsg, setErrorMsg]      = useState('');

  useEffect(() => {
    fetch('/api/streams/portfolio/mine')
      .then(r => r.json())
      .then(data => {
        const existing = data.entries?.find(
          (e: { procedureSlug: string; formType: string; status: string; id: string; traineeData: unknown }) =>
            e.procedureSlug === procedureSlug && e.formType === formType && e.status === 'draft'
        );
        if (existing) {
          setEntryId(existing.id);
          setTraineeData(existing.traineeData as MiniCEXTraineeData | DOPSTraineeData);
        }
      })
      .catch(() => {});
  }, [procedureSlug, formType]);

  function setField(key: string, value: string) {
    setTraineeData(d => ({ ...d, [key]: value }));
    setStatus('idle');
  }

  async function handleSave() {
    setStatus('saving');
    setErrorMsg('');
    try {
      const res = await fetch('/api/streams/portfolio/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: entryId, formType, streamSlug, procedureSlug, title, traineeData }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setEntryId(data.entry.id);
      setStatus('saved');
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Save failed');
      setStatus('error');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!entryId) { await handleSave(); }
    if (!mentorEmail) { setErrorMsg('Please enter your mentor\'s email address.'); return; }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/streams/portfolio/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: entryId, mentorEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submit failed');
      setStatus('submitted');
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Submit failed');
      setStatus('error');
    }
  }

  if (status === 'submitted') {
    return (
      <div style={{ padding: '40px 24px', textAlign: 'center', border: '1px solid #C9A84C', borderRadius: '12px', background: '#FBF3DF' }}>
        <div style={{ fontSize: '40px', marginBottom: '14px' }}>✅</div>
        <h2 style={{ color: 'var(--navy)', marginBottom: '10px' }}>Sent for review</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
          Your assessment has been saved and a review link has been sent to <strong>{mentorEmail}</strong>.
          Once your mentor signs it, it will appear as <em>Complete</em> in your portfolio.
        </p>
        <a href="/dashboard" style={{ display: 'inline-block', marginTop: '20px', padding: '9px 22px', background: 'var(--navy)', color: '#fff', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          Back to Dashboard
        </a>
      </div>
    );
  }

  const isMiniCEX = formType === 'mini-cex';
  const d = traineeData as unknown as Record<string, string>;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 18px', fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>Your Details</h3>

        {isMiniCEX ? (
          <>
            <div style={{ display: 'grid', gap: '0 16px', gridTemplateColumns: '1fr 1fr' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Patient Age Range</label>
                <select style={selectStyle} value={d.patientAgeRange} onChange={e => setField('patientAgeRange', e.target.value)}>
                  <option value="">Select…</option>
                  {['0–17', '18–34', '35–49', '50–64', '65–79', '80+'].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Patient Sex</label>
                <select style={selectStyle} value={d.patientSex} onChange={e => setField('patientSex', e.target.value)}>
                  <option value="">Select…</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Clinical Setting</label>
              <select style={selectStyle} value={d.clinicalSetting} onChange={e => setField('clinicalSetting', e.target.value)}>
                <option value="">Select…</option>
                {['Emergency Department', 'Outpatient Clinic', 'General Practice', 'Inpatient Ward', 'Community', 'Other'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Clinical Problem / Presentation</label>
              <input style={inputStyle} value={d.clinicalProblem} onChange={e => setField('clinicalProblem', e.target.value)} placeholder="Brief description of the clinical problem" />
            </div>
            <div style={{ display: 'grid', gap: '0 16px', gridTemplateColumns: '1fr 1fr' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Complexity (1 = Low, 5 = High)</label>
                <select style={selectStyle} value={d.complexity} onChange={e => setField('complexity', e.target.value)}>
                  {['1','2','3','4','5'].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Focus Area</label>
                <select style={selectStyle} value={d.focusArea} onChange={e => setField('focusArea', e.target.value)}>
                  <option value="">Select…</option>
                  {['History Taking', 'Physical Examination', 'Management', 'Communication', 'Clinical Judgement', 'Other'].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={fieldWrap}>
              <label style={labelStyle}>Procedure Name</label>
              <input style={inputStyle} value={d.procedureName} onChange={e => setField('procedureName', e.target.value)} placeholder="Name of the procedure performed" />
            </div>
            <div style={fieldWrap}>
              <label style={labelStyle}>Clinical Setting</label>
              <select style={selectStyle} value={d.clinicalSetting} onChange={e => setField('clinicalSetting', e.target.value)}>
                <option value="">Select…</option>
                {['Emergency Department', 'Outpatient Clinic', 'General Practice', 'Inpatient Ward', 'Community', 'Other'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div style={{ display: 'grid', gap: '0 16px', gridTemplateColumns: '1fr 1fr' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Number of Times Performed Before</label>
                <select style={selectStyle} value={d.performedBefore} onChange={e => setField('performedBefore', e.target.value)}>
                  {[{v:'0', l:'0'},{v:'1-4',l:'1–4'},{v:'5-9',l:'5–9'},{v:'10+',l:'10 or more'}].map(({v,l}) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Level of Difficulty</label>
                <select style={selectStyle} value={d.difficultyLevel} onChange={e => setField('difficultyLevel', e.target.value)}>
                  <option value="average">Average</option>
                  <option value="above-average">Above Average</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>

      {errorMsg && (
        <div style={{ padding: '12px 16px', background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', fontSize: '13px', color: '#991B1B', marginBottom: '16px' }}>
          {errorMsg}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
        <button
          type="button"
          onClick={handleSave}
          disabled={status === 'saving'}
          style={{ padding: '9px 20px', background: '#fff', color: 'var(--navy)', border: '1.5px solid var(--navy)', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
        >
          {status === 'saving' ? 'Saving…' : status === 'saved' ? '✓ Saved' : 'Save Draft'}
        </button>
        <button
          type="button"
          onClick={() => setShowSubmit(s => !s)}
          style={{ padding: '9px 20px', background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
        >
          Send to Mentor
        </button>
      </div>

      {showSubmit && (
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px' }}>
          <h3 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>Send for Mentor Review</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
            Your assessment will be saved and a unique review link will be emailed to your mentor.
            They do not need an account — they can review, add comments, and sign directly from the link.
          </p>
          <div style={fieldWrap}>
            <label style={labelStyle}>Mentor&apos;s Email Address</label>
            <input
              type="email"
              style={inputStyle}
              value={mentorEmail}
              onChange={e => setMentorEmail(e.target.value)}
              placeholder="mentor@example.com"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting' || !mentorEmail}
            style={{ padding: '9px 22px', background: '#C9A84C', color: '#0B1829', border: 'none', borderRadius: '7px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
          >
            {status === 'submitting' ? 'Sending…' : 'Send Review Link'}
          </button>
        </div>
      )}
    </form>
  );
}
