import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'SOAP Note | Cardiac Module',
  description: 'Example SOAP note for chest pain and ACS workup',
};

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      { label: 'Presenting Complaint', content: '62-year-old male presents with a 45-minute history of central chest pain radiating to his left arm.' },
      { label: 'History of Presenting Complaint', content: 'Onset at rest 45 minutes ago, sudden. Central retrosternal pressure — describes it as "like someone sitting on my chest" (8/10). Radiates to left arm and jaw. Associated diaphoresis, nausea, and mild dyspnoea. No pleuritic component. No relief with position change. One spray of his wife\'s GTN taken 10 minutes ago — minimal relief.' },
      { label: 'Cardiac Risk Factors', content: [
        'Known hypertension — on amlodipine 10mg daily, not well controlled recently',
        'Type 2 diabetes — HbA1c 8.4% at last review 3 months ago',
        'Hyperlipidaemia — on rosuvastatin 20mg daily',
        'Ex-smoker — 30 pack-year history, ceased 8 years ago',
        'Family history: father died of MI aged 58',
        'BMI 31 — central obesity'
      ]},
      { label: 'Relevant History', content: 'No previous MI or angina. No known coronary artery disease. No previous cardiac investigations. No NSAID use. No cocaine or stimulant use. Regular medications: amlodipine, metformin, rosuvastatin, perindopril.' },
      { label: "Patient Concerns", content: '"Is this a heart attack? My father died from one." Patient visibly anxious and diaphoretic.' }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      { label: 'Vital Signs', content: 'BP 162/94 mmHg (R arm) 160/92 mmHg (L arm) | HR 98 bpm regular | RR 20 | Temp 36.9°C | SpO2 96% RA' },
      { label: 'General Appearance', content: 'Unwell appearance. Diaphoretic. Pale. Sitting upright. Mildly dyspnoeic at rest. GCS 15.' },
      { label: 'Cardiovascular Examination', content: [
        'JVP: not elevated',
        'Apex beat: 5th ICS, MCL — not displaced',
        'Heart sounds: S1 S2 present, no added sounds, no murmurs',
        'Peripheral pulses: equal and present bilaterally',
        'No peripheral oedema',
        'Lung bases: clear bilaterally'
      ]},
      { label: 'ECG Findings', content: '12-lead ECG performed at 09:14: Sinus rhythm 98bpm. ST depression 1.5mm in leads V4–V6 and lateral leads I and aVL. No ST elevation. No new LBBB. T-wave flattening inferiorly. QTc 430ms.' },
      { label: 'Investigations', content: 'High sensitivity troponin I drawn at 09:18 — result pending. IV access established. Aspirin 300mg given orally.' }
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      { label: 'Primary Diagnosis', content: 'Acute Coronary Syndrome — likely NSTEMI pending troponin result (I20.0 / I21.4)' },
      { label: 'Risk Stratification — HEART Score', content: [
        'H — History: highly suspicious for ACS = 2',
        'E — ECG: ST depression in lateral leads = 2',
        'A — Age: 62 years = 1',
        'R — Risk factors: HTN, T2DM, hyperlipidaemia, FHx, ex-smoker = 2',
        'T — Troponin: pending at time of assessment',
        'Minimum HEART score = 7 (high risk) — early invasive strategy indicated'
      ]},
      { label: 'Differentials Considered', content: [
        'STEMI — excluded: no ST elevation, no new LBBB on current ECG; serial ECG and troponin required',
        'Aortic dissection — less likely: bilateral BPs equal, no tearing quality, no pulse deficit; chest X-ray requested',
        'Pulmonary embolism — less likely: no pleuritic component, no hypoxia, no risk factors for VTE',
        'Stable angina — excluded: pain at rest, not relieved by GTN, duration >20 minutes',
        'GORD — excluded: character, radiation, associated diaphoresis and ECG changes'
      ]}
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      { label: 'Immediate Management', content: [
        '000 called — emergency transfer to ED with ACS capability',
        'Aspirin 300mg given (loading dose) — already administered',
        'GTN 400mcg sublingual — given, repeat every 5 min x3 if SBP >90mmHg',
        'IV access established, 0.9% NaCl KVO',
        'Continuous cardiac monitoring — defibrillator available',
        'Supplemental O2 only if SpO2 <94%',
        'Faxed ECG and clinical summary sent ahead to receiving ED',
        'Do NOT give P2Y12 inhibitor or anticoagulant prior to coronary anatomy known'
      ]},
      { label: 'Handover to Paramedics / ED', content: [
        'ISBAR handover completed',
        'ECG copy provided',
        'Time of symptom onset: 09:00',
        'Time of first medical contact: 09:10',
        'Time of ECG: 09:14',
        'Troponin drawn at 09:18 — result to be communicated to receiving team',
        'Medications given: Aspirin 300mg at 09:15, GTN x2 at 09:20 and 09:25'
      ]},
      { label: 'Family Communication', content: 'Wife present and informed of diagnosis and transfer. Provided with name of receiving hospital. Encouraged to follow by private vehicle. Emotional support provided.' },
      { label: 'Documentation', content: 'Contemporaneous notes completed. ECG retained in file. Incident documented. GP notified by phone. Medical records flagged for urgent follow-up post-discharge.' }
    ]
  }
];

export default function CardiacSoapPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>❤️ Cardiac</h1>
        <p>Chest pain differentials, ACS, heart failure, arrhythmias, hypertension, and ECG basics</p>
      </div>
      <ModuleTabs moduleId="cardiac" />

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Chest Pain / ACS Workup</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: 62-year-old male with high-risk chest pain presenting to NP clinic. Click each section to expand.</p>
      </div>
      <SoapNote title="Chest Pain — ACS Workup" sections={sections} />
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>⚠️ <strong>Important:</strong> This SOAP note demonstrates assessment and initial management only. In a real ACS presentation, the priority is immediate 000 activation and transfer — documentation should not delay emergency care.</p>
      </div>
    </>
  );
}
