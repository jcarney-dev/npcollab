import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Hip &amp; Pelvis SOAP Note',
  meta: '68F | Right hip OA — moderate severity | Functional limitation',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '68-year-old female with 18 months of right groin and anterior thigh pain with increasing functional limitation.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Activity-related pain — worsens with prolonged walking (>500m) and climbing stairs',
            'Morning stiffness 15–20 minutes — resolves with movement',
            'Right leg feels stiff after prolonged sitting',
            'Difficulty putting on shoes and socks — reduced hip internal rotation and flexion',
            'No night pain at rest — reassuring against malignancy or inflammatory arthritis',
            'Walking distance has reduced progressively over 18 months',
            'BMI 31'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'Hypertension — well controlled on amlodipine 5mg daily',
            'No prior hip surgery or fracture',
            'No known malignancy',
            'Postmenopausal — 8 years'
          ]
        },
        {
          label: 'Current Management',
          content: [
            'Paracetamol 1g PRN — partial relief',
            'No prior physiotherapy',
            'No prior specialist referral'
          ]
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Gait and Posture',
          content: [
            'Antalgic gait — slight lean to the right with shortened right stance phase',
            'Mild Trendelenburg sign right — compensated by trunk lean'
          ]
        },
        {
          label: 'Hip Range of Motion',
          content: [
            'Right flexion: 90° (normal 120°)',
            'Right internal rotation: 10° (normal 35°) — significantly reduced',
            'Right abduction: 25° (normal 45°)',
            'Left: flexion 120°, internal rotation 35°, abduction 40° — normal comparison'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'FADIR test: positive right — groin pain reproduced on hip flexion, adduction, internal rotation',
            'FABER test: negative bilaterally',
            'Trendelenburg test: mildly positive right — gluteus medius weakness'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'X-ray right hip (AP pelvis and lateral): superior joint space narrowing 2mm, moderate osteophytes medially, mild subchondral sclerosis',
            'Impression: moderate right hip OA'
          ]
        }
      ]
    },
    {
      letter: 'A',
      title: 'Assessment',
      fields: [
        {
          label: 'Primary Diagnosis',
          content: 'Right hip OA — moderate severity based on clinical and radiological assessment'
        },
        {
          label: 'Functional Impact',
          content: [
            'Significant functional limitation — reduced walking distance, difficulty with ADLs (footwear)',
            'Inadequate current management — paracetamol PRN only, no exercise therapy or physiotherapy',
            'No red flags for malignancy, infection, or inflammatory arthritis'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Exercise Therapy',
          content: [
            'Physiotherapy referral — hip strengthening program (gluteals, hip abductors, quadriceps)',
            'GLA:D program referral if available locally — evidence-based exercise and education for hip OA',
            'Aquatic physiotherapy as an alternative if land-based exercise limited by pain',
            'Emphasise that exercise is first-line and most effective treatment — not just an adjunct'
          ]
        },
        {
          label: 'Weight Management',
          content: [
            'BMI 31 — weight loss target 5–10% of body weight',
            'Dietitian referral',
            'Counsel: each 1kg weight reduction reduces hip joint load significantly'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Continue paracetamol 1g QID regular (not PRN) for background analgesia',
            'Add naproxen 500mg BD with food for 4 weeks — check renal function and BP at review (elderly patient on antihypertensive)',
            'Topical diclofenac gel as alternative if systemic NSAID poorly tolerated'
          ]
        },
        {
          label: 'Specialist Referral',
          content: [
            'Orthopaedic referral for THR assessment — moderate-severe OA with significant functional limitation and inadequate response to current management',
            'Patient should have a documented trial of exercise therapy and weight loss before surgical listing',
            'Shared decision-making regarding timing of surgery'
          ]
        },
        {
          label: 'Education',
          content: [
            'OA management — exercise is first-line, activity modification, appropriate footwear',
            'Activity pacing — balance activity with rest during pain flares',
            'GLA:D or Arthritis Australia self-management resources provided'
          ]
        },
        {
          label: 'Follow-Up',
          content: '4–6 weeks — review analgesic response, confirm physiotherapy commenced, renal function and BP check (NSAID monitoring)'
        }
      ]
    }
  ]
};

export default function MskHipPelvisSoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Hip &amp; Pelvis</h1>
        <p>Hip and pelvis pain, osteoarthritis, trochanteric bursitis, and hip fracture</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-prose">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
