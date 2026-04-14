import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = { title: 'GU & Nephrology — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '32-year-old female with 3rd episode of UTI in 6 months, presenting with dysuria, frequency, and urgency for 2 days.',
      },
      {
        label: 'History of Presenting Complaint',
        content: [
          'Onset 2 days ago with dysuria (burning on urination), frequency every 30–60 minutes, and urgency.',
          'Mild suprapubic discomfort. No loin pain. No fever. No haematuria this episode.',
          'Sexually active — symptoms often occur 1–2 days after intercourse.',
          'Previous episodes responded to trimethoprim but last episode required cefalexin after trimethoprim failed.',
        ],
      },
      {
        label: 'Recurrent UTI History',
        content: [
          'Three episodes in 6 months — January (trimethoprim, resolved), March (trimethoprim failed, cefalexin prescribed), now June.',
          'No history of kidney stones, no structural urinary tract abnormality known.',
          'No diabetes. Not pregnant. No immunosuppression.',
        ],
      },
      {
        label: 'Medications and Allergies',
        content: 'No known allergies. Not on regular medications. Uses combined oral contraceptive pill.',
      },
      {
        label: 'Patient Concerns',
        content: '"This keeps coming back — I am worried something is wrong and I am sick of taking antibiotics."',
      },
    ],
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 116/72 | HR 76 | Temp 36.8°C | RR 14 | SpO₂ 99%',
      },
      {
        label: 'Abdominal Examination',
        content: 'Mild suprapubic tenderness on palpation. No CVA tenderness. No renal angle tenderness.',
      },
      {
        label: 'Urinalysis (Dipstick)',
        content: 'Leucocytes +++, Nitrites +, Blood +, Protein trace. Glucose negative.',
      },
      {
        label: 'Urine MCS',
        content: 'Sent (result pending). Previous MCS — E. coli sensitive to cefalexin, trimethoprim resistant.',
      },
    ],
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      {
        label: 'Problem List',
        content: [
          '1. Acute lower UTI — likely E. coli, previous trimethoprim resistance documented.',
          '2. Recurrent UTI — 3rd episode in 6 months. Meets criteria for recurrent UTI. Post-coital pattern strongly suggested.',
          '3. No features of upper UTI (pyelonephritis) — no fever, no CVA tenderness.',
        ],
      },
    ],
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Acute Treatment',
        content: [
          'Cefalexin 500mg QID for 3 days (based on previous sensitivity — avoid trimethoprim given documented resistance).',
          'Await MCS result and ensure sensitivities match. If resistant, will review and change.',
        ],
      },
      {
        label: 'Recurrent UTI Management',
        content: [
          'Post-coital prophylaxis: cefalexin 250mg single dose within 2 hours of intercourse — evidence-based, effective for post-coital recurrent UTI.',
          'Counsel on behavioural measures: void after intercourse, adequate hydration, avoid spermicides (increase UTI risk).',
          'Advise cranberry products — modest evidence but safe adjunct.',
        ],
      },
      {
        label: 'Investigations',
        content: [
          'Renal and bladder ultrasound — exclude structural abnormality (3rd recurrence).',
          'Review urine MCS result when available.',
        ],
      },
      {
        label: 'Follow-Up',
        content: [
          'Review in 4 weeks or earlier if symptoms not resolving.',
          'If post-coital prophylaxis fails — consider low-dose nightly prophylaxis (cefalexin 125mg nocte) or self-initiation therapy.',
          'If persistent recurrence despite prophylaxis — refer to urology.',
        ],
      },
      {
        label: 'Patient Education',
        content: 'Discussed recurrent UTI pattern, relationship to intercourse, post-coital prophylaxis rationale, behavioural measures, and ultrasound rationale. Patient agrees with plan. Written information provided.',
      },
    ],
  },
];

export default function GuNephrologySoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫘 GU &amp; Nephrology</h1>
        <p>Assessment and management of urinary tract, renal, and male genitourinary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gu-nephrology" />


      <div className="content-prose">
      <SoapNote
        title="GU Presentation — Recurrent UTI"
        meta="32-year-old female | 3rd UTI in 6 months | Post-coital pattern | Cefalexin treatment + post-coital prophylaxis"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Urinary Tract), Australian STI Management Guidelines.
      </div>
      </div>

      <ModuleNav moduleId="gu-nephrology" />

    </>
  );
}
