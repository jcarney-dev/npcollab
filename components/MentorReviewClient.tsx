'use client';

import { useState } from 'react';
import {
  MINI_CEX_ASSESSOR_FIELDS,
  DOPS_ASSESSOR_FIELDS,
  RATING_LABELS,
  type MiniCEXTraineeData,
  type DOPSTraineeData,
  type MiniCEXAssessorData,
  type DOPSAssessorData,
  emptyMiniCEXAssessor,
  emptyDOPSAssessor,
} from '@/lib/assessment-forms';

interface Props {
  token:     string;
  userName:  string;
  formType:  'mini-cex' | 'dops';
  title:     string;
  status:    string;
  traineeData:  Record<string, unknown>;
  assessorData: Record<string, unknown>;
  mentorName:     string | null;
  mentorComments: string | null;
  mentorSignedAt: string | null;
}

const labelStyle: React.CSSProperties = { display: 'block', fontWeight: 600, fontSize: '13px', color: '#0B1829', marginBottom: '5px' };
const inputStyle: React.CSSProperties = { width: '100%', padding: '9px 12px', border: '1px solid #CBD5E0', borderRadius: '7px', fontSize: '14px', boxSizing: 'border-box', background: '#fff' };
const rowStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #EEF0F4' };

function ROField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#4A6080', marginBottom: '3px' }}>{label}</div>
      <div style={{ fontSize: '14px', color: '#1A2B3C' }}>{value || '—'}</div>
    </div>
  );
}

function RatingInput({ label, value, onChange }: { label: string; value: number | null; onChange: (v: number) => void }) {
  return (
    <div style={rowStyle}>
      <div style={{ fontSize: '14px', color: '#1A2B3C', flex: 1 }}>{label}</div>
      <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
        {[1,2,3,4,5,6].map(n => (
          <button
            key={n}
            type="button"
            title={RATING_LABELS[n]}
            onClick={() => onChange(n)}
            style={{
              width: '32px', height: '32px', borderRadius: '6px', border: '1.5px solid',
              borderColor: value === n ? '#0B1829' : '#CBD5E0',
              background: value === n ? '#0B1829' : '#fff',
              color: value === n ? '#fff' : '#4A6080',
              fontSize: '13px', fontWeight: 600, cursor: 'pointer',
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MentorReviewClient({
  token, userName, formType, title, status,
  traineeData, assessorData, mentorName: initMentorName,
  mentorComments: initMentorComments, mentorSignedAt,
}: Props) {
  const isMiniCEX = formType === 'mini-cex';
  const fields = isMiniCEX ? MINI_CEX_ASSESSOR_FIELDS : DOPS_ASSESSOR_FIELDS;

  const defaultAssessor = isMiniCEX ? emptyMiniCEXAssessor() : emptyDOPSAssessor();
  const [assessor, setAssessor] = useState<Record<string, unknown>>({
    ...defaultAssessor,
    ...(assessorData ?? {}),
  });
  const [mentorName, setMentorName]       = useState(initMentorName ?? '');
  const [mentorComments, setMentorComments] = useState(initMentorComments ?? '');
  const [confirmed, setConfirmed]         = useState(false);
  const [submitStatus, setSubmitStatus]   = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg]           = useState('');

  function setRating(key: string, v: number) {
    setAssessor(d => ({ ...d, [key]: v }));
  }

  async function handleSign(e: React.FormEvent) {
    e.preventDefault();
    if (!confirmed) { setErrorMsg('Please confirm you have reviewed the assessment.'); return; }
    setSubmitStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch(`/api/streams/mentor-review/${token}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mentorName, assessorData: assessor }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to sign');
      setSubmitStatus('done');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to sign');
      setSubmitStatus('error');
    }
  }

  const td = traineeData as Record<string, string>;

  const alreadyComplete = status === 'complete';

  if (submitStatus === 'done') {
    return (
      <div style={{ maxWidth: '640px', margin: '48px auto', padding: '40px 24px', textAlign: 'center', border: '1px solid #C9A84C', borderRadius: '12px', background: '#FBF3DF' }}>
        <div style={{ fontSize: '40px', marginBottom: '14px' }}>✅</div>
        <h2 style={{ color: '#0B1829', marginBottom: '10px' }}>Assessment Signed</h2>
        <p style={{ color: '#4A6080', fontSize: '14px', lineHeight: 1.6 }}>
          Thank you. The assessment for <strong>{userName}</strong> has been marked as complete
          and will be updated in their portfolio.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 20px', fontFamily: 'system-ui, sans-serif', color: '#1A2B3C' }}>
      <div style={{ background: '#0B1829', borderRadius: '8px 8px 0 0', padding: '24px 28px', borderBottom: '3px solid #C9A84C' }}>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          NPCollab — Assessment Review
        </div>
        <h1 style={{ margin: 0, color: '#fff', fontSize: '20px', fontWeight: 700 }}>{title}</h1>
      </div>

      <div style={{ background: '#fff', border: '1px solid #DDE3EC', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '28px' }}>
        <p style={{ fontSize: '15px', marginBottom: '24px', lineHeight: 1.6 }}>
          <strong>{userName}</strong> has asked you to review their {isMiniCEX ? 'Mini CEX' : 'DOPS'} assessment.
          Please review the details below, complete your ratings, and sign to confirm.
        </p>

        {/* Trainee section — read only */}
        <div style={{ background: '#F8FAFC', border: '1px solid #EEF0F4', borderRadius: '8px', padding: '18px 20px', marginBottom: '24px' }}>
          <h3 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: 700, color: '#0B1829' }}>
            Submitted by {userName}
          </h3>
          {isMiniCEX ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
              <ROField label="Patient Age Range"      value={td.patientAgeRange} />
              <ROField label="Patient Sex"            value={td.patientSex} />
              <ROField label="Clinical Setting"       value={td.clinicalSetting} />
              <ROField label="Complexity"             value={td.complexity} />
              <ROField label="Focus Area"             value={td.focusArea} />
              <ROField label="Clinical Problem"       value={td.clinicalProblem} />
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
              <ROField label="Procedure"              value={td.procedureName} />
              <ROField label="Clinical Setting"       value={td.clinicalSetting} />
              <ROField label="Times Performed Before" value={td.performedBefore} />
              <ROField label="Difficulty"             value={td.difficultyLevel} />
            </div>
          )}
        </div>

        {/* Assessor ratings */}
        {!alreadyComplete ? (
          <form onSubmit={handleSign}>
            <h3 style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 700, color: '#0B1829' }}>Your Assessment</h3>
            <p style={{ fontSize: '12px', color: '#4A6080', marginBottom: '16px' }}>
              Rate each domain: 1 = Below expectations &nbsp;·&nbsp; 6 = Superior
            </p>

            <div style={{ marginBottom: '20px' }}>
              {fields.map(({ key, label }) => (
                <RatingInput
                  key={String(key)}
                  label={label}
                  value={(assessor[String(key)] as number | null) ?? null}
                  onChange={v => setRating(String(key), v)}
                />
              ))}
            </div>

            {isMiniCEX ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Observation Time (mins)</label>
                  <input style={inputStyle} type="number" min="0" value={(assessor.observationTime as string) || ''} onChange={e => setAssessor(d => ({ ...d, observationTime: e.target.value }))} />
                </div>
                <div>
                  <label style={labelStyle}>Feedback Time (mins)</label>
                  <input style={inputStyle} type="number" min="0" value={(assessor.feedbackTime as string) || ''} onChange={e => setAssessor(d => ({ ...d, feedbackTime: e.target.value }))} />
                </div>
              </div>
            ) : null}

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                {isMiniCEX ? 'Observations & Agreed Action Plan' : 'Assessor Comments'}
              </label>
              <textarea
                style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                value={(assessor[isMiniCEX ? 'observedActionPlan' : 'assessorComments'] as string) || ''}
                onChange={e => setAssessor(d => ({ ...d, [isMiniCEX ? 'observedActionPlan' : 'assessorComments']: e.target.value }))}
                placeholder="Add your feedback and agreed actions…"
              />
            </div>

            {!isMiniCEX && (
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Agreed Action Plan</label>
                <textarea
                  style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                  value={(assessor.agreedActionPlan as string) || ''}
                  onChange={e => setAssessor(d => ({ ...d, agreedActionPlan: e.target.value }))}
                  placeholder="Agreed learning actions or next steps…"
                />
              </div>
            )}

            <div style={{ borderTop: '1px solid #EEF0F4', paddingTop: '20px', marginTop: '4px' }}>
              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Your Full Name</label>
                <input
                  style={inputStyle}
                  value={mentorName}
                  onChange={e => setMentorName(e.target.value)}
                  placeholder="Your name as it will appear on the signed assessment"
                  required
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginBottom: '20px', fontSize: '14px', lineHeight: 1.5 }}>
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={e => setConfirmed(e.target.checked)}
                  style={{ marginTop: '2px', flexShrink: 0 }}
                />
                I confirm that I have observed and reviewed this clinical assessment,
                and the ratings and comments above are an accurate reflection of the trainee&apos;s performance.
              </label>

              {errorMsg && (
                <div style={{ padding: '10px 14px', background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '7px', fontSize: '13px', color: '#991B1B', marginBottom: '14px' }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'submitting' || !mentorName || !confirmed}
                style={{ padding: '10px 26px', background: '#C9A84C', color: '#0B1829', border: 'none', borderRadius: '7px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}
              >
                {submitStatus === 'submitting' ? 'Signing…' : 'Sign & Complete'}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: 700, color: '#0B1829' }}>Assessment Signed</h3>
            <p style={{ fontSize: '14px', color: '#4A6080', marginBottom: '8px' }}>
              Signed by <strong>{initMentorName}</strong>
              {mentorSignedAt && ` on ${new Date(mentorSignedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`}
            </p>
            {initMentorComments && (
              <div style={{ background: '#F8FAFC', border: '1px solid #EEF0F4', borderRadius: '8px', padding: '14px 16px', fontSize: '14px', lineHeight: 1.6 }}>
                {initMentorComments}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
