import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Back SOAP Note',
  meta: '38M | Right L5 radiculopathy with foot drop | Warehouse worker',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '38-year-old male warehouse worker presenting with 3 weeks of low back pain radiating to the right leg, with progressive weakness of the right foot.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Onset 3 weeks ago lifting a heavy pallet — immediate low back pain with a "snap" sensation',
            'Over subsequent days developed right leg pain radiating from lower back through the right buttock, posterior thigh, and dorsum of foot to big toe',
            'Leg pain described as sharp, shooting, electric — aggravated by sitting and coughing',
            'Progressive weakness of right foot — noting difficulty lifting foot when walking, has tripped twice',
            'Paraesthesia over dorsum of right foot and big toe',
            'No bilateral leg symptoms, no saddle numbness, no bladder or bowel dysfunction — asked specifically',
            'PHQ-9 score 8 (mild depression) — worried about his job and workers compensation'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'No prior back surgery or significant back history',
            'No known malignancy',
            'Non-smoker',
            'BMI 28'
          ]
        },
        {
          label: 'Medications',
          content: [
            'Ibuprofen 400mg TDS (partially effective)',
            'No regular medications'
          ]
        },
        {
          label: 'Occupational & Social History',
          content: [
            'Full-time warehouse worker — significant lifting, bending, and prolonged standing',
            'Currently on light duties — concerned about ongoing employment',
            'Workers compensation claim lodged',
            'Lives with partner and two children',
            'Fear-avoidance beliefs present — avoiding all activity due to pain'
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
            'BP: 124/78 mmHg',
            'HR: 78 bpm',
            'Temp: 36.7°C',
            'No fever — infection less likely'
          ]
        },
        {
          label: 'Observation &amp; Gait',
          content: [
            'Antalgic gait — leaning to left, weight off right leg',
            'High stepping gait right foot — compensating for foot drop',
            'Unable to walk on right heel — dorsiflexion weakness confirmed',
            'Able to toe walk bilaterally — plantar flexion intact (L5-S1 spared)'
          ]
        },
        {
          label: 'Lumbar Examination',
          content: [
            'Lumbar range of motion: flexion 50% normal (pain + radicular reproduction), extension moderately restricted',
            'Right paravertebral muscle spasm and tenderness L4-L5 level',
            'Mild right sciatic scoliosis (lateral shift away from symptomatic side)'
          ]
        },
        {
          label: 'Neurological Examination',
          content: [
            'Motor: right ankle dorsiflexion 4/5 (weakness), left 5/5. Right plantar flexion 5/5. Right knee extension 5/5.',
            'Sensory: reduced sensation right dorsum of foot and first web space (L4-L5 dermatome)',
            'Reflexes: knee jerk 2+ bilaterally, ankle jerk 2+ bilaterally — preserved (no L5-S1 involvement)',
            'Saddle sensation intact, anal tone not tested (no cauda equina symptoms)',
            'Plantar responses: downgoing bilaterally'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Right SLR: positive at 40° — reproduces right leg radicular pain to foot',
            'Left SLR: negative',
            'Crossed SLR: positive — right leg pain with left leg elevation (significant disc herniation)',
            'FABER: negative bilaterally'
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
          content: 'Right L4-L5 lumbar disc herniation with L5 radiculopathy and foot drop (ankle dorsiflexion 4/5)'
        },
        {
          label: 'Severity Assessment',
          content: [
            'Progressive neurological deficit (foot drop) — requires urgent MRI and neurosurgical review',
            'Positive crossed SLR indicates significant disc herniation',
            'Yellow flags present: depression (PHQ-9 8), fear-avoidance beliefs, workers compensation, occupational concerns',
            'No cauda equina features — reassuring but requires ongoing monitoring'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Urgent MRI',
          content: [
            'Urgent MRI lumbar spine — progressive neurological deficit (foot drop) requires urgent imaging',
            'Referral letter to indicate clinical urgency',
            'MRI to characterise level and extent of disc herniation and degree of nerve root compression'
          ]
        },
        {
          label: 'Neurosurgical Referral',
          content: [
            'Urgent referral to neurosurgery given progressive neurological deficit',
            'Foot drop that is progressive or failing to improve is a relative indication for surgical intervention',
            'Patient counselled that 90% of disc herniations resolve conservatively — but progressive deficit requires surgical assessment'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Continue ibuprofen 400mg TDS with food',
            'Add paracetamol 1g QID (regular, not PRN) for background analgesia',
            'Short-course oxycodone 5mg up to QID PRN for severe breakthrough pain — review at 1 week, avoid prolonged use',
            'Discuss risks of opioid use — constipation, sedation, dependence risk'
          ]
        },
        {
          label: 'Physiotherapy',
          content: [
            'Urgent physiotherapy referral',
            'Neural mobilisation, cervical traction-equivalent lumbar techniques, core stabilisation',
            'Emphasise staying active — avoid bed rest',
            'Physio to assist with activity modification for return to work planning'
          ]
        },
        {
          label: 'Psychosocial Management',
          content: [
            'Address yellow flags: PHQ-9 8 — monitor for worsening depression, consider psychology referral if not improving',
            'Fear-avoidance beliefs: reassure that staying active does not worsen the disc herniation',
            'Workers compensation: clear documentation of presentation, functional limitations, and management plan',
            'Discuss realistic prognosis — most improve significantly within 6–12 weeks'
          ]
        },
        {
          label: 'Safety Netting',
          content: [
            'Return immediately if: bilateral leg weakness, saddle numbness, urinary retention or incontinence, faecal incontinence — cauda equina emergency',
            'Return urgently if: worsening foot drop or new neurological symptoms',
            'Review in 1 week to reassess neurological status and confirm MRI booked'
          ]
        }
      ]
    }
  ]
};

export default function MskBackSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Back SOAP Note</h1>
          <p className="page-subtitle">Example clinical case: L5 radiculopathy with foot drop in a warehouse worker</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

      <div className="content-body">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
