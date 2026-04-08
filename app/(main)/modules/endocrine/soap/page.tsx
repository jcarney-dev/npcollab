import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'SOAP Note | Endocrine Module',
  description: 'Example SOAP note for type 2 diabetes management in NP practice',
};

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      { label: 'Presenting Complaint', content: '58-year-old female presenting for 3-monthly diabetes review. Reports fatigue and increased thirst over the past 6 weeks.' },
      { label: 'History of Presenting Complaint', content: 'Known T2DM diagnosed 9 years ago. Currently on metformin 1g BD and gliclazide MR 30mg daily. HbA1c was 62 mmol/mol at last visit 4 months ago — target not achieved. Reports poor dietary adherence over summer and reduced physical activity due to knee pain. BSL readings on home monitor ranging 9–14 mmol/L fasting. No polyuria, nocturia x2–3. Fatigue affecting daily function.' },
      { label: 'Hypoglycaemia History', content: 'Two episodes in the past month — both associated with missed meals and gliclazide. Mild symptoms (tremor, sweating) — self-treated with glucose tablets. No severe episodes, no loss of consciousness. Hypoglycaemia awareness intact.' },
      { label: 'Complications Review', content: [
        'Neuropathy: mild bilateral foot tingling, present for 2 years — not worsening',
        'Retinopathy: last retinal screen 18 months ago — mild non-proliferative changes, ophthalmology review overdue',
        'Nephropathy: last ACR 6 months ago — microalbuminuria (ACR 4.2 mg/mmol)',
        'Cardiovascular: no known IHD, no history of stroke or TIA',
        'Foot: no ulcers, no active wounds'
      ]},
      { label: 'Social and Lifestyle', content: 'Retired teacher. Lives with husband. Non-smoker. Drinks 2 glasses wine on weekends. Diet: high carbohydrate, low vegetable intake. Exercise: minimal — limited by R knee OA. Weight has increased 4kg since last visit.' },
      { label: 'Medications', content: 'Metformin 1g BD, gliclazide MR 30mg mane, perindopril 5mg daily, rosuvastatin 20mg nocte, paracetamol PRN for knee pain.' }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      { label: 'Vital Signs', content: 'BP 138/82 mmHg | HR 76 bpm regular | Weight 84kg (up 4kg) | Height 162cm | BMI 32 | Waist circumference 97cm' },
      { label: 'General Appearance', content: 'Well-appearing. No acute distress. Alert and oriented. No cushingoid features. No signs of thyroid disease.' },
      { label: 'Cardiovascular', content: 'Heart sounds dual, no murmurs. No peripheral oedema. Peripheral pulses present bilaterally.' },
      { label: 'Diabetic Foot Examination', content: [
        'Inspection: intact skin bilaterally, no ulcers, no deformity, mild dry skin heels',
        'Pulses: dorsalis pedis and posterior tibial palpable bilaterally',
        'Monofilament: reduced sensation at plantar aspect of 1st and 3rd MTP bilaterally — 3/10 sites detected R, 4/10 L',
        'Vibration: reduced at 1st MTP bilaterally',
        'Ankle reflexes: diminished bilaterally',
        'Risk category: moderate — annual podiatry review recommended'
      ]},
      { label: 'Investigations', content: [
        'HbA1c today: 68 mmol/mol (8.4%) — above target, worsened from 62',
        'eGFR: 61 mL/min/1.73m² (CKD G2, stable)',
        'ACR (first morning): 5.1 mg/mmol — microalbuminuria, stable',
        'Fasting lipids: LDL 2.1, HDL 1.0, TG 2.4, Total 4.8 — LDL above target',
        'TSH: 2.1 mIU/L — normal',
        'FBE: Hb 128, no leucocytosis'
      ]}
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      { label: 'Primary Problems', content: [
        '1. T2DM — suboptimal glycaemic control, HbA1c 68 mmol/mol, above target of 53',
        '2. Peripheral neuropathy — moderate, bilateral, documented on examination',
        '3. Microalbuminuria — stable, ongoing nephropathy risk',
        '4. Hypertension — borderline control on perindopril',
        '5. Dyslipidaemia — LDL above target despite statin',
        '6. Obesity — BMI 32, weight gain 4kg',
        '7. Retinal screening overdue — last 18 months ago, mild NPDR noted'
      ]},
      { label: 'Glycaemic Control Analysis', content: 'HbA1c has deteriorated from 62 to 68 mmol/mol over 4 months. Contributing factors: dietary non-adherence, weight gain, reduced activity, inadequate current regimen. Gliclazide at low dose — consider intensification. SGLT2 inhibitor appropriate given: suboptimal HbA1c, weight, eGFR 61 (suitable), cardiovascular risk. Will provide cardiorenal benefit.' },
      { label: 'Hypoglycaemia Risk', content: 'Two hypoglycaemic episodes on gliclazide — patient aware but frequency a concern. Switching from sulfonylurea to SGLT2i will reduce hypoglycaemia risk. Counsel on sick day rules, meal timing.' }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      { label: 'Medication Changes', content: [
        'Cease gliclazide MR 30mg — hypoglycaemia risk and suboptimal glycaemic benefit',
        'Start empagliflozin 10mg mane — SGLT2 inhibitor; review in 3 months, uptitrate to 25mg if tolerated',
        'Increase rosuvastatin to 40mg nocte — LDL above target for CVD risk level',
        'Continue metformin 1g BD and perindopril 5mg daily',
        'Discuss genital hygiene — SGLT2i increases risk of mycotic infections'
      ]},
      { label: 'Referrals and Investigations', content: [
        'Ophthalmology referral — retinal review overdue, mild NPDR on last screen',
        'Podiatry referral — moderate neuropathy, annual review recommended',
        'Dietitian referral — dietary review and low-carbohydrate counselling',
        'Repeat HbA1c, eGFR, ACR, fasting lipids in 3 months',
        'Urine MCS — no current symptoms but baseline given SGLT2i starting'
      ]},
      { label: 'Education and Self-Management', content: [
        'Discussed mechanism and benefits of empagliflozin — cardiorenal protection, weight loss, BSL lowering',
        'Sick day rules: cease empagliflozin if unwell, vomiting, or surgical procedure — DKA risk',
        'Continue home BSL monitoring — fasting and 2-hour post-prandial',
        'Hypoglycaemia management reviewed — no gliclazide so lower risk going forward',
        'Physical activity: referred to aquatic physiotherapy given knee OA',
        'Weight loss goal: 4–5% of body weight (3.4–4.2kg) over next 3 months'
      ]},
      { label: 'Follow-up', content: 'Review in 3 months with HbA1c, eGFR, ACR, fasting lipids. GP notified of medication changes. Confirm ophthalmology and podiatry referrals accepted. Provide written action plan for sick days and hypoglycaemia.' }
    ]
  }
];

export default function EndocrineSoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔬 Endocrine</h1>
        <p>Diabetes, thyroid disease, adrenal disorders, and metabolic conditions</p>
      </div>
      <ModuleTabs moduleId="endocrine" />


      <div className="content-prose">
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Type 2 Diabetes Review</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: 58-year-old female with suboptimal T2DM control presenting for 3-monthly review. Click each section to expand.</p>
      </div>
      <SoapNote title="Type 2 Diabetes — 3-Monthly Review" sections={sections} />
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>⚠️ <strong>Educational purposes only.</strong> Always apply your own clinical judgement and refer to current RACGP and Diabetes Australia guidelines. Medication decisions should account for individual patient factors including renal function, contraindications, and patient preferences.</p>
      </div>
      </div>

    </>
  );
}
