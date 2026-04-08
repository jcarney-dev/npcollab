import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Chest Wall SOAP Note',
  meta: '68F | Left 7th and 8th rib fractures + small haemothorax | Osteoporosis, COPD',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '68-year-old female presenting with left-sided chest pain after a fall 24 hours ago.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Fell from a step ladder while gardening — landed on the left side',
            'Immediate left lateral chest pain after the fall',
            'Pain has been worsening overnight — currently 8/10, severe on deep inspiration, coughing, and movement',
            'Breathing is shallow — pain limits ability to take a deep breath',
            'Slept poorly — could not find a comfortable position',
            'No dyspnoea at rest. No haemoptysis. No fever.',
            'Pain is clearly positional and does not radiate — no cardiac symptoms'
          ]
        },
        {
          label: 'Past Medical History',
          content: [
            'Osteoporosis — on alendronate 70mg weekly and calcium/vitamin D supplementation',
            'Hypertension — on perindopril 10mg daily',
            'COPD (mild, GOLD stage I) — on tiotropium inhaler daily',
            'Non-smoker for 20 years (30 pack-year history)',
            'BMI 22'
          ]
        },
        {
          label: 'Medications',
          content: [
            'Alendronate 70mg weekly',
            'Perindopril 10mg daily',
            'Calcium carbonate + cholecalciferol (calcium/vitamin D supplement)',
            'Tiotropium 18mcg inhaled daily (Spiriva)'
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
            'BP: 136/84 mmHg',
            'HR: 92 bpm',
            'Temp: 36.8°C',
            'RR: 20 breaths/min',
            'SpO2: 95% on room air (COPD patient — concerning for this baseline)'
          ]
        },
        {
          label: 'General',
          content: [
            'In pain, splinting the left chest',
            'Shallow breathing pattern — splinted respiration',
            'No respiratory distress at rest',
            'Appears anxious'
          ]
        },
        {
          label: 'Respiratory Examination',
          content: [
            'Reduced air entry left lower zone',
            'Dull to percussion at the left base',
            'No absent breath sounds bilaterally — no wheeze',
            'No tracheal deviation'
          ]
        },
        {
          label: 'Chest Wall Examination',
          content: [
            'Point tenderness on palpation of left 7th and 8th ribs at the mid-axillary line — exquisitely tender',
            'Crepitus palpable over the left 8th rib (suggests fracture)',
            'No paradoxical chest wall movement — not a flail chest',
            'No surgical emphysema'
          ]
        },
        {
          label: 'Cardiovascular Examination',
          content: [
            'Regular rate and rhythm',
            'No murmur. No raised JVP.'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'ECG: sinus tachycardia (HR 92). No ischaemic changes.',
            'CXR: left 7th and 8th rib fractures visible. Small left pleural effusion/haemothorax noted at the left base. No pneumothorax identified.'
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
          content: 'Left 7th and 8th rib fractures — clinically confirmed (point tenderness, crepitus) and radiologically confirmed on CXR.'
        },
        {
          label: 'Complications',
          content: [
            'Small left haemothorax — clinically stable at present. Requires monitoring for progression.',
            'SpO2 95% on room air — reduced, consistent with COPD baseline + haemothorax + splinted breathing.'
          ]
        },
        {
          label: 'Comorbidity Risk Assessment',
          content: [
            'COPD — significantly increases risk of respiratory complications from rib fractures and splinted breathing. Atelectasis and pneumonia risk is substantially elevated.',
            'Osteoporosis — fragility fracture from a relatively minor fall from a step ladder. Bone protection therapy currently in place (alendronate) — requires review.'
          ]
        },
        {
          label: 'Admission Criteria Met',
          content: 'Elderly patient (68 years), ≥2 rib fractures, underlying COPD, SpO2 95%, small haemothorax, pain inadequately controlled in outpatient setting. Hospital admission mandatory.'
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Emergency Transfer — Call 000',
          content: [
            'Hospital admission required — admission criteria clearly met',
            'Call 000 for ambulance transfer — do not allow patient to self-transport',
            'Notify receiving hospital of: elderly female, left 7th and 8th rib fractures, small haemothorax, COPD, SpO2 95%, on alendronate'
          ]
        },
        {
          label: 'Immediate Management While Awaiting Transfer',
          content: [
            'Oxygen: 1–2L/min via nasal prongs — titrate SpO2 to 88–92% (COPD patient — avoid high-flow oxygen, risk of hypercapnic respiratory failure)',
            'Analgesia: paracetamol 1g IV + ketorolac 15mg IV (renal function to be checked) — adequate analgesia is the immediate priority',
            'Position: sitting upright — improves respiratory mechanics and reduces haemothorax expansion'
          ]
        },
        {
          label: 'Hospital Management — Handover Communication',
          content: [
            'Serial CXR — monitor haemothorax progression (drainage if enlarging)',
            'Intercostal nerve block or thoracic epidural (anaesthesia referral) — provides superior analgesia, enables deep breathing, reduces pneumonia risk',
            'Incentive spirometry and chest physiotherapy — essential for COPD patient, commence as soon as pain is controlled',
            'Respiratory monitoring — early detection of deterioration (SpO2, RR trend)',
            'If haemothorax enlarges — intercostal catheter (ICD) drainage'
          ]
        },
        {
          label: 'Osteoporosis Review',
          content: [
            'Fragility rib fracture from a minor fall — review adequacy of current bone protection',
            'Consider switching from alendronate to zoledronic acid IV annually (better adherence, proven fracture reduction, no GI side effects)',
            'Confirm calcium and vitamin D supplementation is adequate',
            'Falls assessment and prevention program — referral to allied health post-discharge'
          ]
        }
      ]
    }
  ]
};

export default function MskChestSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Chest Wall SOAP Note</h1>
          <p className="page-subtitle">Example clinical case: Rib fractures with haemothorax in an elderly patient with COPD and osteoporosis</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

      <div className="content-body">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
