'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load the PDF download button to avoid SSR issues with @react-pdf/renderer
const ScopeDownloadButton = dynamic(() => import('./ScopeDownloadButton'), { ssr: false, loading: () => (
  <button disabled style={{ opacity: 0.5, padding: '12px 28px', borderRadius: '8px', background: 'var(--navy)', color: 'var(--gold)', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'not-allowed' }}>
    Preparing PDF...
  </button>
) });

const AU_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];

const METASPECIALTIES = [
  'Primary Care / General Practice',
  'Emergency / Acute Care',
  'Mental Health',
  'Aged Care',
  'Paediatrics',
  "Women's Health",
  'Perioperative / Surgical',
  'Musculoskeletal',
  'Oncology / Haematology',
  'Neonatal',
  'Other',
];

const PRACTICE_SETTINGS = [
  'Public hospital — inpatient',
  'Public hospital — outpatient / ambulatory care',
  'Emergency department',
  'Community health centre',
  'General practice',
  'Private specialist clinic',
  'Private practice (NP-owned)',
  'Residential aged care facility',
  'Remote / rural clinic',
  'Telehealth / virtual care',
  'Other',
];

export type ScopeFormData = {
  // Section 1: Practitioner details
  fullName: string;
  credentials: string;
  ahpraNumber: string;
  endorsementDate: string;
  metaspecialty: string;
  state: string;
  employer: string;
  practiceAddress: string;
  practicePhone: string;
  practiceEmail: string;

  // Section 2: Practice context
  practiceSetting: string;
  isPrivatePractice: boolean;
  abn: string;

  // Section 3: Patient population
  patientPopulation: string;
  ageGroups: string[];
  exclusions: string;

  // Section 4: Clinical scope — procedures
  procedures: string;

  // Section 5: Prescribing
  prescribingScope: string;
  hasS8Authority: boolean;
  s8AuthorityDetails: string;

  // Section 6: Referrals and ordering
  referralsOrdering: string;

  // Section 7: Collaborative arrangement
  collaboratorName: string;
  collaboratorCredentials: string;
  collaboratorContact: string;
  collaborativeArrangementDate: string;
  collaborativeArrangementReviewDate: string;

  // Section 8: Signature
  signatureDate: string;
};

const EMPTY_FORM: ScopeFormData = {
  fullName: '',
  credentials: '',
  ahpraNumber: '',
  endorsementDate: '',
  metaspecialty: '',
  state: '',
  employer: '',
  practiceAddress: '',
  practicePhone: '',
  practiceEmail: '',
  practiceSetting: '',
  isPrivatePractice: false,
  abn: '',
  patientPopulation: '',
  ageGroups: [],
  exclusions: '',
  procedures: '',
  prescribingScope: '',
  hasS8Authority: false,
  s8AuthorityDetails: '',
  referralsOrdering: '',
  collaboratorName: '',
  collaboratorCredentials: '',
  collaboratorContact: '',
  collaborativeArrangementDate: '',
  collaborativeArrangementReviewDate: '',
  signatureDate: '',
};

const AGE_GROUP_OPTIONS = ['Neonates (0–28 days)', 'Infants (1 month–1 year)', 'Children (1–12 years)', 'Adolescents (13–17 years)', 'Adults (18–64 years)', 'Older adults (65+)'];

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

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '100px',
  resize: 'vertical',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 600,
  fontSize: '0.875rem',
  marginBottom: '5px',
  color: 'var(--navy)',
};

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: 'var(--navy)',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '2px solid var(--gold-light)',
};

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={labelStyle}>{label}</label>
      {hint && <p style={{ margin: '0 0 6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{hint}</p>}
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '18px' }}>
      {children}
    </div>
  );
}

export default function ScopeGeneratorPage() {
  const [form, setForm] = useState<ScopeFormData>(EMPTY_FORM);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Pre-fill today's date for signatureDate
    const today = new Date().toISOString().split('T')[0];
    setForm(f => ({ ...f, signatureDate: today }));
    setReady(true);
  }, []);

  function set(field: keyof ScopeFormData, value: string | boolean | string[]) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function toggleAgeGroup(group: string) {
    setForm(f => {
      const current = f.ageGroups;
      return {
        ...f,
        ageGroups: current.includes(group)
          ? current.filter(g => g !== group)
          : [...current, group],
      };
    });
  }

  const isComplete = form.fullName && form.ahpraNumber && form.metaspecialty && form.state;

  return (
    <>
      <div className="page-header">
        <div className="label">Scope of Practice</div>
        <h1>Scope of Practice Generator</h1>
        <p>Complete the sections below to generate a downloadable PDF scope of practice document.</p>
      </div>

      <div className="content-prose">

        <div className="info-box" style={{ marginBottom: '32px' }}>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            Fill in each section with your specific practice details. When complete, click <strong>Generate PDF</strong> to download
            a formatted scope of practice document. All data is processed locally in your browser — nothing is stored on our servers.
          </p>
        </div>

        {/* ── Section 1: Practitioner Details ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>1. Practitioner Details</h2>

          <Row>
            <div>
              <Field label="Full Name *">
                <input style={inputStyle} value={form.fullName} onChange={e => set('fullName', e.target.value)} placeholder="e.g. Sarah Johnson" />
              </Field>
            </div>
            <div>
              <Field label="Post-nominal Credentials" hint="e.g. RN, NP, MNP, FACNP">
                <input style={inputStyle} value={form.credentials} onChange={e => set('credentials', e.target.value)} placeholder="e.g. RN, NP, MNP" />
              </Field>
            </div>
          </Row>

          <Row>
            <div>
              <Field label="AHPRA Registration Number *">
                <input style={inputStyle} value={form.ahpraNumber} onChange={e => set('ahpraNumber', e.target.value)} placeholder="e.g. NMW0001234567" />
              </Field>
            </div>
            <div>
              <Field label="NP Endorsement Date">
                <input type="date" style={inputStyle} value={form.endorsementDate} onChange={e => set('endorsementDate', e.target.value)} />
              </Field>
            </div>
          </Row>

          <Row>
            <div>
              <Field label="Metaspecialty / Endorsement Area *">
                <select style={inputStyle} value={form.metaspecialty} onChange={e => set('metaspecialty', e.target.value)}>
                  <option value="">Select metaspecialty</option>
                  {METASPECIALTIES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
            </div>
            <div>
              <Field label="State / Territory *">
                <select style={inputStyle} value={form.state} onChange={e => set('state', e.target.value)}>
                  <option value="">Select state</option>
                  {AU_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>
            </div>
          </Row>

          <Field label="Employer / Organisation">
            <input style={inputStyle} value={form.employer} onChange={e => set('employer', e.target.value)} placeholder="e.g. Royal Melbourne Hospital" />
          </Field>

          <Field label="Practice Address">
            <input style={inputStyle} value={form.practiceAddress} onChange={e => set('practiceAddress', e.target.value)} placeholder="Street address, suburb, state, postcode" />
          </Field>

          <Row>
            <div>
              <Field label="Practice Phone">
                <input type="tel" style={inputStyle} value={form.practicePhone} onChange={e => set('practicePhone', e.target.value)} placeholder="(03) 9000 0000" />
              </Field>
            </div>
            <div>
              <Field label="Practice Email">
                <input type="email" style={inputStyle} value={form.practiceEmail} onChange={e => set('practiceEmail', e.target.value)} placeholder="np@clinic.com.au" />
              </Field>
            </div>
          </Row>
        </div>

        {/* ── Section 2: Practice Context ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>2. Practice Context</h2>

          <Field label="Practice Setting">
            <select style={inputStyle} value={form.practiceSetting} onChange={e => set('practiceSetting', e.target.value)}>
              <option value="">Select setting</option>
              {PRACTICE_SETTINGS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>

          <Field label="">
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 500, fontSize: '0.9rem' }}>
              <input
                type="checkbox"
                checked={form.isPrivatePractice}
                onChange={e => set('isPrivatePractice', e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: 'var(--navy)' }}
              />
              I operate as an independent / private practice NP
            </label>
          </Field>

          {form.isPrivatePractice && (
            <Field label="ABN" hint="Required for independent NP practice">
              <input style={inputStyle} value={form.abn} onChange={e => set('abn', e.target.value)} placeholder="e.g. 12 345 678 901" />
            </Field>
          )}
        </div>

        {/* ── Section 3: Patient Population ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>3. Patient Population</h2>

          <Field label="Patient Population Description" hint="Describe the patient group you manage — diagnosis types, care complexity, referral source.">
            <textarea
              style={textareaStyle}
              value={form.patientPopulation}
              onChange={e => set('patientPopulation', e.target.value)}
              placeholder="e.g. Adult patients (18+ years) presenting with undifferentiated acute and chronic primary care conditions including chronic disease management, preventive care, and minor acute illness..."
            />
          </Field>

          <Field label="Age Groups Managed">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              {AGE_GROUP_OPTIONS.map(group => (
                <label key={group} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>
                  <input
                    type="checkbox"
                    checked={form.ageGroups.includes(group)}
                    onChange={() => toggleAgeGroup(group)}
                    style={{ width: '15px', height: '15px', accentColor: 'var(--navy)' }}
                  />
                  {group}
                </label>
              ))}
            </div>
          </Field>

          <Field label="Exclusions / Limitations" hint="Document patient groups or conditions explicitly excluded from your scope.">
            <textarea
              style={{ ...textareaStyle, minHeight: '70px' }}
              value={form.exclusions}
              onChange={e => set('exclusions', e.target.value)}
              placeholder="e.g. Excludes paediatric patients under 16 years; excludes complex obstetric management; excludes inpatient ventilatory management..."
            />
          </Field>
        </div>

        {/* ── Section 4: Procedures ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>4. Clinical Procedures</h2>

          <Field
            label="Procedures Within Scope"
            hint="List clinical procedures you are competent to perform. Include any that require specific credentialing or are subject to conditions."
          >
            <textarea
              style={textareaStyle}
              value={form.procedures}
              onChange={e => set('procedures', e.target.value)}
              placeholder={`e.g.
• Comprehensive physical examination (all body systems)
• Wound assessment and management including suturing and stapling
• ECG acquisition and interpretation
• Spirometry acquisition and interpretation
• Venepuncture and peripheral IV cannulation
• Joint aspiration and corticosteroid injection (knee, shoulder)
• Cervical screening
• Immunisation administration`}
            />
          </Field>

          <div className="info-box" style={{ marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>
              Refer to the <a href="/scope/by-metaspecialty" style={{ color: 'var(--navy)', fontWeight: 600 }}>Scope by Metaspecialty</a> reference page for competency lists by endorsement area.
            </p>
          </div>
        </div>

        {/* ── Section 5: Prescribing ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>5. Prescribing Scope</h2>

          <Field
            label="Prescribing Scope"
            hint="Describe the therapeutic classes and specific medications within your prescribing scope. Include PBS and non-PBS items."
          >
            <textarea
              style={textareaStyle}
              value={form.prescribingScope}
              onChange={e => set('prescribingScope', e.target.value)}
              placeholder={`e.g.
• Antibiotics for common primary care infections (RTIs, UTIs, skin infections)
• Antihypertensives — initiation and titration for hypertension management
• Lipid-lowering agents — statins and ezetimibe
• Metformin and SGLT2 inhibitors for type 2 diabetes
• Inhaled bronchodilators and corticosteroids for asthma and COPD
• Analgesics — paracetamol, NSAIDs, low-dose opioids (Schedule 4)
• Topical preparations for dermatological conditions`}
            />
          </Field>

          <Field label="">
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 500, fontSize: '0.9rem' }}>
              <input
                type="checkbox"
                checked={form.hasS8Authority}
                onChange={e => set('hasS8Authority', e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: 'var(--navy)' }}
              />
              I hold Schedule 8 prescribing authority for this state/territory
            </label>
          </Field>

          {form.hasS8Authority && (
            <Field label="Schedule 8 Authority Details" hint="Authority number, issuing body, conditions attached, and medications authorised.">
              <textarea
                style={{ ...textareaStyle, minHeight: '70px' }}
                value={form.s8AuthorityDetails}
                onChange={e => set('s8AuthorityDetails', e.target.value)}
                placeholder="e.g. Authority No. XXXXXX issued by NSW Ministry of Health — authorised to prescribe oxycodone and morphine for chronic non-cancer pain under conditions..."
              />
            </Field>
          )}
        </div>

        {/* ── Section 6: Referrals & Ordering ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>6. Referrals, Ordering & Investigation</h2>

          <Field
            label="Referrals, Ordering, and Investigation Scope"
            hint="List diagnostic investigations you can order and referral pathways you use within your scope."
          >
            <textarea
              style={textareaStyle}
              value={form.referralsOrdering}
              onChange={e => set('referralsOrdering', e.target.value)}
              placeholder={`e.g.
• Pathology — full range of in-scope diagnostic investigations
• Diagnostic imaging — X-ray, CT, MRI, ultrasound
• ECG and Holter monitoring
• Spirometry and lung function testing
• Referral to medical specialists (cardiology, respiratory, endocrinology, etc.)
• Allied health referrals (physiotherapy, dietitian, social work, psychology)
• Hospital admission (via ED or direct admission)
• Referral to community services and NDIS coordination`}
            />
          </Field>
        </div>

        {/* ── Section 7: Collaborative Arrangement ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>7. Collaborative Arrangement</h2>

          <div className="highlight-box" style={{ marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Australian NPs must work within a <strong>collaborative arrangement</strong> with a medical practitioner as required
              under the Health Insurance Act 1973 for MBS billing and under state/territory NP prescribing legislation.
              This arrangement must be documented and regularly reviewed.
            </p>
          </div>

          <Row>
            <div>
              <Field label="Collaborating Medical Practitioner — Full Name">
                <input style={inputStyle} value={form.collaboratorName} onChange={e => set('collaboratorName', e.target.value)} placeholder="Dr Jane Smith" />
              </Field>
            </div>
            <div>
              <Field label="Credentials / Specialty">
                <input style={inputStyle} value={form.collaboratorCredentials} onChange={e => set('collaboratorCredentials', e.target.value)} placeholder="e.g. MBBS, FRACGP — General Practitioner" />
              </Field>
            </div>
          </Row>

          <Field label="Contact Details">
            <input style={inputStyle} value={form.collaboratorContact} onChange={e => set('collaboratorContact', e.target.value)} placeholder="Phone / email / clinic address" />
          </Field>

          <Row>
            <div>
              <Field label="Arrangement Date">
                <input type="date" style={inputStyle} value={form.collaborativeArrangementDate} onChange={e => set('collaborativeArrangementDate', e.target.value)} />
              </Field>
            </div>
            <div>
              <Field label="Review Date">
                <input type="date" style={inputStyle} value={form.collaborativeArrangementReviewDate} onChange={e => set('collaborativeArrangementReviewDate', e.target.value)} />
              </Field>
            </div>
          </Row>
        </div>

        {/* ── Section 8: Sign & Generate ── */}
        <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '28px', marginBottom: '24px' }}>
          <h2 style={sectionHeaderStyle}>8. Declaration & Generate</h2>

          <Field label="Document Date">
            <input type="date" style={{ ...inputStyle, maxWidth: '200px' }} value={form.signatureDate} onChange={e => set('signatureDate', e.target.value)} />
          </Field>

          <div className="info-box" style={{ marginBottom: '24px' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              By generating this document I confirm that the information provided accurately reflects my current scope of practice,
              is supported by documented education and experience, and will be reviewed in accordance with NMBA Standards for Practice.
            </p>
          </div>

          {!isComplete && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '16px' }}>
              Complete required fields (Name, AHPRA Number, Metaspecialty, State) to generate your PDF.
            </p>
          )}

          {ready && isComplete && (
            <ScopeDownloadButton formData={form} />
          )}
        </div>

      </div>
    </>
  );
}
