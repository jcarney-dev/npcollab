import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'SOAP Note | MSK Shoulder Module',
  description: 'Example SOAP note for shoulder pain assessment in NP practice',
};

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      { label: 'Presenting Complaint', content: '48-year-old male tradesman presenting with a 6-week history of right shoulder pain.' },
      { label: 'History of Presenting Complaint', content: 'Gradual onset of right anterolateral shoulder pain over 6 weeks — no specific injury. Pain is aching in quality (6/10), worse with overhead reaching, lifting heavy objects, and lying on the right shoulder at night. Awakening 2–3 times per night. No radiation below the elbow, no paraesthesia. No instability or clicking. Partially relieved by ibuprofen 400mg. Has tried no physiotherapy. No prior shoulder problems. Working as a plumber — overhead work daily.' },
      { label: 'Functional Impact', content: 'Struggling with overhead work on the tools. Unable to reach behind back to dress. Difficulty sleeping due to night pain. Has taken 4 days off work in the past 2 weeks.' },
      { label: 'Relevant History', content: 'T2DM — well controlled, HbA1c 56 mmol/mol, on metformin. No thyroid disease. Non-smoker. Drinks 4 standard drinks/week. No regular corticosteroid use. No previous MSK surgery.' },
      { label: 'Medications', content: 'Metformin 1g BD, ibuprofen 400mg PRN (taking daily), no regular paracetamol.' }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      { label: 'Vital Signs', content: 'BP 128/76 mmHg | HR 72 bpm | Temp afebrile | No systemic illness' },
      { label: 'Inspection', content: 'Mild protective posturing of right shoulder. No wasting of supraspinous or infraspinous fossa. No swelling, bruising, or erythema. Normal shoulder contour — no deformity.' },
      { label: 'Palpation', content: 'Tenderness on palpation of right greater tuberosity (supraspinatus insertion) and anterior acromion. No AC joint tenderness. No bicipital groove tenderness. No warmth.' },
      { label: 'Range of Motion', content: [
        'Active flexion: 170° (L 180°)',
        'Painful arc: 70–120° abduction — pain at lateral deltoid',
        'Passive abduction: full, 180° — pain at 70–120° arc',
        'Active external rotation: 50° (L 60°) — pain at end range',
        'Internal rotation: hand to L3 level (R), T8 (L) — restricted',
        'Cross-arm adduction: full, no AC joint pain'
      ]},
      { label: 'Special Tests', content: [
        'Neer impingement: positive — anterolateral pain reproduced',
        'Hawkins-Kennedy: positive — pain reproduced at 90° with internal rotation',
        'Empty can (Jobe\'s): negative — no weakness, mild pain with supraspinatus loading',
        'External rotation lag sign: negative — maintains position',
        'Drop arm: negative — able to slowly lower arm',
        'AC joint cross-arm: negative — no AC pain',
        'Anterior apprehension: negative — no instability'
      ]},
      { label: 'Cervical Spine Screen', content: 'Full cervical ROM, no pain with neck movement. No referred pain with Spurling test. Upper limb reflexes normal. Sensation intact C5–T1 dermatomes.' }
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      { label: 'Primary Diagnosis', content: 'Right subacromial impingement syndrome / rotator cuff tendinopathy — likely supraspinatus. Positive Neer and Hawkins-Kennedy tests. Painful arc. Greater tuberosity tenderness. No evidence of complete tear (negative lag sign, negative drop arm), no instability.' },
      { label: 'Contributing Factors', content: [
        'Overhead occupation (plumber) — repetitive mechanical load on supraspinal outlet',
        'T2DM — increases risk of tendinopathy and adhesive capsulitis',
        'Inadequate management to date — NSAIDs PRN without formal rehabilitation',
        'Daily NSAID use — renal and GI risk concerns with metformin co-prescription and T2DM nephropathy risk'
      ]},
      { label: 'Differentials Excluded', content: [
        'AC joint pathology — no AC tenderness, negative cross-arm adduction test',
        'Adhesive capsulitis — passive ROM maintained in all planes (not globally restricted)',
        'Cervical radiculopathy — normal cervical screen, no neurological signs, no distal radiation',
        'Complete rotator cuff tear — strength maintained, negative lag and drop arm'
      ]}
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      { label: 'Investigations', content: [
        'Right shoulder ultrasound — characterise rotator cuff (partial vs full tear), bursitis assessment, exclude calcific tendinopathy',
        'Review results before proceeding to injection or referral'
      ]},
      { label: 'Medications', content: [
        'Cease ibuprofen — daily NSAID use in T2DM with CKD risk (check eGFR) not appropriate long-term',
        'Paracetamol 1g QID PRN — preferred analgesia',
        'If eGFR adequate and acute flare: consider short course naproxen with PPI cover only',
        'Subacromial corticosteroid injection considered if no improvement after 4–6 weeks physiotherapy'
      ]},
      { label: 'Physiotherapy Referral', content: [
        'Urgent physiotherapy referral — rotator cuff strengthening programme',
        'Focus: posterior capsule stretching, scapular stabilisation, progressive rotator cuff loading',
        'Activity modification: reduce overhead work load during acute phase where practicable',
        'Avoid complete rest — graded activity is superior to rest for tendinopathy'
      ]},
      { label: 'Subacromial Injection', content: [
        'Subacromial corticosteroid injection if inadequate improvement after 4–6 weeks physiotherapy',
        'Triamcinolone 40mg (1mL) + 5mL 1% lignocaine — posterior or lateral approach',
        'Benefits: short-term (4–6 week) pain and function improvement',
        'Limit to maximum 2 injections per year — risk of tendon weakening with repeated use',
        'Review in 6 weeks post-injection to assess response'
      ]},
      { label: 'Follow-up and Education', content: [
        'Review in 4–6 weeks with ultrasound results',
        'Occupational health discussion — return-to-work plan with modified duties if required',
        'Red flags discussed: acute weakness, inability to abduct, deformity, fever — present immediately',
        'Explain natural history: rotator cuff tendinopathy often resolves with appropriate rehabilitation but may take 3–6 months',
        'Orthopaedic referral if: full thickness tear on ultrasound, failure of conservative management at 3 months, diagnostic uncertainty'
      ]}
    ]
  }
];

export default function MskShoulderSoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Shoulder</h1>
        <p>Rotator cuff disease, impingement, AC joint injuries, frozen shoulder, and instability</p>
      </div>
      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Shoulder Pain / Rotator Cuff Tendinopathy</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: 48-year-old male tradesman with right shoulder pain. Click each section to expand.</p>
      </div>
      <SoapNote title="Right Shoulder Pain — Rotator Cuff Tendinopathy" sections={sections} />
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>⚠️ <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Confirm imaging findings before proceeding to injection therapy. Management of rotator cuff pathology should be guided by the specific tear pattern, patient age, activity level, and response to conservative therapy.</p>
      </div>
    </>
  );
}
