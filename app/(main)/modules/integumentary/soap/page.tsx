import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = { title: 'Integumentary — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '58-year-old male with 3 days of increasing redness, swelling, and pain in the right lower leg.',
      },
      {
        label: 'History of Presenting Complaint',
        content: [
          'Onset 3 days ago with erythema and warmth over right shin — initially mild, now significantly more extensive.',
          'Throbbing pain rated 6/10.',
          'Low-grade fever 37.9°C at home yesterday.',
          'Has tinea pedis between right toes — noticed a small crack in the skin that may have been the entry point.',
          'No bullae, no black discolouration, no crepitus. No lymphangitis (red streaking).',
          'No previous cellulitis.',
          'Has been applying antiseptic cream at home with no improvement.',
        ],
      },
      {
        label: 'Past History',
        content: 'Type 2 diabetes (HbA1c 58 at last review 3 months ago), hypertension. Medications: metformin 1g BD, perindopril 10mg daily. NKDA.',
      },
      {
        label: 'Social History',
        content: 'Works as a plumber. BMI 29. Non-smoker. Moderate alcohol.',
      },
    ],
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 142/88 | HR 88 | Temp 37.8°C | RR 16 | SpO₂ 98%',
      },
      {
        label: 'Skin Examination',
        content: [
          'Right lower leg: well-demarcated erythema extending from right ankle to mid-shin, approximately 15 × 10cm.',
          'Marked warmth and oedema of affected area.',
          'Tenderness on palpation throughout erythematous area.',
          'No bullae, no fluctuance, no necrosis, no crepitus.',
          'Right 4th interdigital space: macerated, scaling skin — tinea pedis.',
          'Border marked with skin marker at time of assessment.',
        ],
      },
      {
        label: 'Lymphatics',
        content: 'No inguinal lymphadenopathy. No lymphangitis.',
      },
      {
        label: 'Investigations',
        content: [
          'WCC: 13.2 (elevated) — neutrophilia.',
          'CRP: 78.',
          'Blood glucose: 9.4 (mildly elevated).',
          'Renal function: normal (eGFR 74).',
        ],
      },
    ],
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      {
        label: 'Primary Diagnosis',
        content: 'Cellulitis right lower leg, non-severe — likely Streptococcus pyogenes (L03.119).',
      },
      {
        label: 'Contributing Factors',
        content: 'Tinea pedis as portal of entry; type 2 diabetes (impaired immune response).',
      },
      {
        label: 'Criteria for Outpatient Management',
        content: 'Systemically well, afebrile on presentation (low-grade at home), no bullae or crepitus, no lymphangitis, normal renal function, reliable follow-up available.',
      },
    ],
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Antibiotics',
        content: [
          'Cefalexin 500mg oral QID for 7 days — covers Strep and Staph, appropriate for diabetic patient.',
          'Reviewed allergy status — NKDA, no penicillin allergy — cefalexin appropriate.',
        ],
      },
      {
        label: 'Wound and Skin Care',
        content: [
          'Treat tinea pedis — clotrimazole 1% cream BD to interdigital spaces for 4 weeks (eliminates portal of entry and reduces recurrence risk).',
          'Elevate right leg as much as possible — above heart level when resting.',
          'Cool compresses for comfort.',
        ],
      },
      {
        label: 'Monitoring',
        content: [
          'Border marked — photograph taken for comparison.',
          'Return in 48 hours for review — sooner if spreading beyond marked border, fever increases, bullae develop, or feeling unwell.',
          'If no improvement or worsening at 48-hour review — hospital admission for IV antibiotics.',
        ],
      },
      {
        label: 'Safety Netting — Return Immediately if',
        content: [
          'Red streaking spreading up the leg (lymphangitis).',
          'Developing bullae or black skin.',
          'Fever >38.5°C or feeling systemically unwell.',
          'Confusion or rapid deterioration.',
          'Spreading significantly beyond marked border.',
        ],
      },
      {
        label: 'Diabetes Management',
        content: 'Blood glucose slightly elevated — ongoing diabetes management to be reviewed at routine appointment. Discussed that diabetes impairs immune response and increases cellulitis risk and recurrence.',
      },
      {
        label: 'Review',
        content: 'Booked 48-hour review appointment.',
      },
    ],
  },
];

export default function IntegumentarySoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩹 Integumentary</h1>
        <p>Assessment and management of common dermatological presentations, skin malignancy, and wound care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />


      <div className="content-prose">
      <SoapNote
        title="Dermatological Presentation — Cellulitis"
        meta="58-year-old male | Cellulitis right lower leg | Tinea pedis portal of entry | Type 2 diabetes | Outpatient cefalexin"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Dermatology and Antibiotic).
      </div>
      </div>

    </>
  );
}
