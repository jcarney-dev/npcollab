import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = { title: 'GI & Hepatobiliary — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '45-year-old female with 3 episodes of severe right upper quadrant pain over the past 6 weeks, most recently last night.',
      },
      {
        label: 'History of Presenting Complaint',
        content: [
          'Episodic severe RUQ pain, cramping in character, radiating to the right shoulder and scapula.',
          'Each episode lasts approximately 2–3 hours then completely resolves.',
          'Nausea with each episode — no vomiting.',
          'Triggered by fatty meals — last night had fish and chips.',
          'No fever. No jaundice. No change in urine or stool colour. No diarrhoea.',
          'Between episodes she is entirely well with no abdominal discomfort.',
          'No weight loss.',
        ],
      },
      {
        label: 'Past History',
        content: 'Type 2 diabetes (metformin 500mg BD), hypertension (perindopril 5mg daily), hyperlipidaemia (atorvastatin 20mg nocte). No previous abdominal surgery.',
      },
      {
        label: 'Social History',
        content: 'Works as a school teacher. BMI 31. Non-smoker. Minimal alcohol — 1–2 standard drinks per week. Married with two children.',
      },
      {
        label: 'Allergies',
        content: 'NKDA.',
      },
      {
        label: 'Patient Concerns',
        content: '"The pain is unbearable when it happens — I Googled it and I think it might be gallstones."',
      },
    ],
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 136/84 mmHg | HR 78 bpm | Temp 36.7°C | RR 14 | SpO₂ 99% RA',
      },
      {
        label: 'General',
        content: 'Well-appearing, comfortable at rest. No jaundice. No pallor.',
      },
      {
        label: 'Abdominal Examination',
        content: [
          'Inspection: mild central adiposity, no distension, no visible masses, no surgical scars.',
          'Bowel sounds: present and normal.',
          'Percussion: tympanic throughout, no shifting dullness.',
          'Palpation: soft, mild tenderness on deep palpation RUQ. No guarding. No rigidity.',
          'Murphy\'s sign: negative (no inspiratory arrest).',
          'No organomegaly palpable. No rebound tenderness.',
        ],
      },
      {
        label: 'Investigations',
        content: [
          'LFTs: ALT 28, AST 24, ALP 82, GGT 45, bilirubin 14 — all normal.',
          'FBE: normal.',
          'CRP: 4 (normal).',
          'Ultrasound abdomen: ordered — pending.',
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
        content: 'Biliary colic — symptomatic cholelithiasis (K80.20).',
      },
      {
        label: 'Differential Diagnoses Considered',
        content: [
          'Acute cholecystitis — excluded: no fever, Murphy\'s sign negative, normal WCC and CRP, episodes fully resolve.',
          'GORD — less likely: pain too severe, radiates to shoulder, no heartburn, no response to antacids.',
          'Peptic ulcer disease — less likely: no epigastric pain, no NSAID use, episodic and fully resolving.',
          'Hepatitis — excluded: normal LFTs, no jaundice, no risk factors.',
        ],
      },
      {
        label: 'Risk Factors',
        content: 'Risk factors for cholelithiasis present: female, age 45, overweight (BMI 31), type 2 diabetes — "four Fs" (Female, Fat, Forty, Fertile).',
      },
    ],
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Investigations',
        content: [
          'Ultrasound abdomen — to confirm gallstones and assess biliary tree. If confirms cholelithiasis, refer for elective cholecystectomy.',
          'LFTs already normal — repeat if symptoms change or jaundice develops.',
        ],
      },
      {
        label: 'Immediate Management',
        content: [
          'Diclofenac 50mg oral with food for pain during episodes (check renal function — metformin patient).',
          'Avoid fatty foods to reduce episode frequency while awaiting surgery.',
          'Low-fat diet education provided.',
        ],
      },
      {
        label: 'Referral',
        content: [
          'Refer to general surgery for elective laparoscopic cholecystectomy once ultrasound confirms cholelithiasis.',
          'Referral letter sent today.',
        ],
      },
      {
        label: 'Safety Netting — Return Urgently or Go to ED if',
        content: [
          'Fever develops with RUQ pain — acute cholecystitis.',
          'Jaundice develops — biliary obstruction or choledocholithiasis.',
          'Pain becomes constant and not resolving — escalation to cholecystitis.',
          'Severe vomiting preventing oral intake.',
        ],
      },
      {
        label: 'Patient Education',
        content: 'Discussed likely diagnosis of gallstones, need for ultrasound confirmation, surgical management, and dietary modification in the interim. Patient understands and agrees with plan.',
      },
    ],
  },
];

export default function GiSoapPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">GI &amp; Hepatobiliary</div>
        <h1>🫃 SOAP Note</h1>
        <p>Example clinical note: 45-year-old female presenting with biliary colic.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />

      <SoapNote
        title="GI Presentation — Biliary Colic"
        meta="45-year-old female | Symptomatic cholelithiasis | Normal LFTs | Referred for elective cholecystectomy"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Gastrointestinal).
      </div>
    </>
  );
}
