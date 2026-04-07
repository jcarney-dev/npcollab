import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Knee SOAP Note',
  meta: '28M | Right ACL rupture | Football player',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '28-year-old male football player presenting with acute right knee injury 3 hours ago.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Planted foot to change direction during a match — heard an audible "pop" and immediate severe pain',
            'Unable to continue playing',
            'Significant rapid knee swelling developed within 1 hour — consistent with haemarthrosis',
            'Describes a feeling of the knee "giving way" and instability',
            'Walked to the car with difficulty',
            'No direct impact to the knee — non-contact mechanism',
            'No previous right knee injuries'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'No significant medical history',
            'No prior knee injuries or surgery',
            'Works as a personal trainer — high physical activity demands'
          ]
        },
        {
          label: 'Medications',
          content: 'Nil regular medications'
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
            'BP: 122/76 mmHg',
            'HR: 88 bpm',
            'Temp: afebrile',
            'SpO₂: 99% on room air'
          ]
        },
        {
          label: 'Right Knee Examination',
          content: [
            'Significant effusion — patellar tap positive, ballottement positive',
            'Bruising: medial and anterolateral aspects',
            'Temperature slightly increased compared to left knee',
            'ROM: flexion to 90° limited by swelling and pain; extension full',
            'No joint line tenderness medially or laterally',
            'No bony tenderness over fibular head, patella, or tibial plateau'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Lachman test: positive — soft endpoint, 10mm anterior translation compared to left (normal firm endpoint)',
            'Anterior drawer: positive',
            'McMurray test: negative bilaterally',
            'Valgus stress test: stable at 0° and 30°',
            'Varus stress test: stable at 0° and 30°'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'X-ray right knee (AP and lateral): no fracture, no loose bodies, significant soft tissue swelling',
            'Ottawa Knee Rules: X-ray not strictly mandated but obtained given mechanism and haemarthrosis'
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
          content: 'Right ACL rupture — clinical examination highly consistent (haemarthrosis, positive Lachman test with soft endpoint, audible pop, non-contact pivoting mechanism)'
        },
        {
          label: 'Additional Considerations',
          content: [
            'No associated fracture on X-ray',
            'Concurrent medial meniscal tear possible — McMurray negative but haemarthrosis limits examination; MRI required to exclude',
            'MCL and LCL intact on stress testing — isolated ACL injury likely'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Immediate Management',
          content: [
            'RICE: rest, ice (20 minutes every 2 hours), compression bandage, elevation',
            'Crutches — partial weight-bearing as tolerated',
            'NSAIDs: naproxen 500mg BD with food for 7–10 days',
            'Paracetamol 1g QID regular for analgesia'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'MRI right knee — confirm ACL rupture, exclude meniscal tears and chondral damage',
            'Arrange within 1 week to plan definitive management'
          ]
        },
        {
          label: 'Referral',
          content: [
            'Sports medicine physician or orthopaedic surgeon referral — surgical reconstruction vs conservative management decision based on age, activity level, and MRI findings',
            'This patient (28yo, high activity demands, personal trainer) is a likely candidate for ACL reconstruction',
            'Pre-operative physiotherapy (prehabilitation) — restore range of motion, reduce swelling, strengthen quadriceps before surgery if proceeding'
          ]
        },
        {
          label: 'Education',
          content: [
            'Explained ACL injury, likely surgical pathway, rehabilitation timeline',
            'Return to competitive football: 9–12 months minimum post-reconstruction with functional testing and psychological readiness criteria',
            'Without surgery: 20–30% risk of further meniscal injury with instability episodes — particularly important for this patient&apos;s occupational requirements'
          ]
        },
        {
          label: 'Follow-Up',
          content: '1 week — MRI result review, specialist appointment confirmed, reassess ROM and swelling'
        }
      ]
    }
  ]
};

export default function MskKneeSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Knee SOAP Note</h1>
          <p className="page-subtitle">Example clinical case: ACL rupture in a football player</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-body">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
