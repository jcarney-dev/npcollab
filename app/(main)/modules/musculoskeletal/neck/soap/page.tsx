import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Neck SOAP Note',
  meta: '48F | Right C6 radiculopathy | 6 weeks duration',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '48-year-old female presenting with 6 weeks of right-sided neck pain radiating to the right arm and thumb and index finger, with associated weakness.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Onset 6 weeks ago — no specific trauma, gradual onset associated with increased computer work',
            'Neck pain rated 5/10 at rest, 8/10 with movement',
            'Right arm pain radiating from the neck across the right shoulder and down the lateral forearm to the thumb and index finger',
            'Paraesthesia in right thumb and index finger — constant tingling',
            'Weakness noted in right wrist — difficulty typing and carrying objects',
            'Symptoms worse with neck extension and right lateral rotation',
            'Some relief when abducting the right arm and placing hand on head',
            'No bilateral arm symptoms, no hand clumsiness, no gait disturbance, no bladder or bowel dysfunction',
            'Sleep disrupted by arm pain — lying on left side is most comfortable'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'Hypertension — well controlled on perindopril 5mg daily',
            'No prior neck surgery',
            'No known malignancy',
            'Non-smoker, occasional alcohol'
          ]
        },
        {
          label: 'Medications',
          content: [
            'Perindopril 5mg daily',
            'Ibuprofen 400mg TDS (partially effective, commenced 2 weeks ago)',
            'Paracetamol 1g QID (partially effective)'
          ]
        },
        {
          label: 'Occupational History',
          content: [
            'Full-time office administrator — prolonged computer work, poor ergonomic setup',
            'Works from home 3 days per week — no dedicated workstation assessment',
            'Increased work demands over the past 3 months'
          ]
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Vital Signs',
          content: [
            'BP: 128/80 mmHg',
            'HR: 72 bpm',
            'No fever'
          ]
        },
        {
          label: 'Cervical Examination',
          content: [
            'Reduced right cervical rotation (50°, normal ~80°) and right lateral flexion (30°, normal ~45°)',
            'Right paravertebral muscle tenderness at C5-C6 level',
            'Right upper trapezius and levator scapulae tightness and tenderness',
            'No midline bony tenderness'
          ]
        },
        {
          label: 'Neurological Examination',
          content: [
            'Motor: right wrist extension 4/5 (mild weakness), left 5/5. Bilateral elbow extension, shoulder abduction, and grip strength 5/5.',
            'Sensory: reduced sensation right thumb and index finger — C6 dermatome. Left side normal.',
            'Reflexes: right brachioradialis reflex reduced (1+), left 2+. Biceps and triceps 2+ bilaterally.',
            'UMN signs: Hoffman&apos;s negative bilaterally. Lower limb reflexes 2+ bilaterally. Gait normal.',
            'No bilateral upper or lower limb symptoms'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Spurling&apos;s test: positive right — reproduction of right arm pain to thumb with axial compression + extension + right lateral rotation',
            'Distraction test: positive right — relief of right arm pain with manual head distraction',
            'Shoulder abduction relief sign: positive right — arm pain relieved with right hand on head',
            'Lhermitte&apos;s sign: negative'
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
          content: 'Right C6 cervical radiculopathy — likely from C5-C6 disc herniation or foraminal stenosis'
        },
        {
          label: 'Clinical Evidence',
          content: [
            'Dermatomal distribution: thumb and index finger (C6)',
            'Myotomal weakness: wrist extension 4/5 (C6)',
            'Reflex: reduced brachioradialis (C6)',
            'Positive Spurling&apos;s and distraction tests bilaterally confirming foraminal compression pattern',
            'No myelopathy features — reassuring'
          ]
        },
        {
          label: 'Severity',
          content: [
            'Moderate — neurological deficit (mild wrist extension weakness, sensory loss) present but not progressive',
            'Six weeks duration — appropriate point to initiate MRI given neurological deficit',
            'No red flags for myelopathy, infection, or malignancy'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'MRI Cervical Spine',
          content: [
            'MRI cervical spine — ordered given neurological deficit (wrist weakness 4/5, sensory loss C6 dermatome) and 6 weeks duration',
            'Referral letter to specify: right C6 radiculopathy, neurological deficit, clinical urgency',
            'MRI to characterise level and degree of disc herniation or foraminal stenosis'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Continue ibuprofen 400mg TDS with food',
            'Continue paracetamol 1g QID',
            'Add pregabalin 75mg nocte (titrate to 75mg BD if tolerated) for neuropathic component — tingling and burning pain in C6 distribution',
            'Counsel on pregabalin: sedation, dizziness, avoid driving until established on dose'
          ]
        },
        {
          label: 'Physiotherapy',
          content: [
            'Urgent physiotherapy referral',
            'Cervical traction — manual and mechanical',
            'Neural mobilisation techniques',
            'Postural correction and cervical stabilisation exercises',
            'Ergonomic assessment for home workstation',
            'Avoid prolonged neck extension or ipsilateral rotation'
          ]
        },
        {
          label: 'Occupational Modifications',
          content: [
            'Workstation ergonomic review — monitor at eye level, keyboard and mouse close, chair height adjusted',
            'Frequent breaks from sustained postures — every 30-45 minutes',
            'Avoid prolonged neck flexion (looking down at phone or tablet)',
            'Physiotherapist to provide specific ergonomic guidance'
          ]
        },
        {
          label: 'Surgical Referral',
          content: [
            'Plan: if no improvement at 6–12 weeks or progressive neurological deficit — refer to neurosurgery',
            'ACDF (anterior cervical discectomy and fusion) or posterior foraminotomy are surgical options',
            'Patient counselled that most cervical radiculopathy resolves conservatively — surgery is not first-line'
          ]
        },
        {
          label: 'Safety Netting',
          content: [
            'Return immediately if: bilateral arm symptoms develop, hand clumsiness (dropping objects, difficulty with buttons), gait disturbance, bladder or bowel dysfunction — myelopathy emergency',
            'Return urgently if: worsening weakness (below 4/5), new neurological deficit, or new level involvement',
            'Review in 4 weeks to assess response to physiotherapy and review MRI results'
          ]
        }
      ]
    }
  ]
};

export default function MskNeckSoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Neck</h1>
        <p>Cervical spine pain, radiculopathy, whiplash, and serious cervical pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

      <div className="content-prose">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
