import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Wrist & Hand SOAP Note',
  meta: '34F | Right De Quervain\'s tenosynovitis | Physiotherapist and new mother',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '34-year-old female presenting with 8 weeks of right radial wrist pain, worsening with thumb and wrist use.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Gradually worsening right radial wrist pain over 8 weeks — no acute trauma',
            'Onset coincided with return to work after maternity leave — works as a physiotherapist with heavy manual handling demands',
            'Baby is now 6 months old — lifting frequently throughout the day',
            'Pain localised over the radial aspect of the wrist and into the thumb',
            'Rated 5/10 at rest, 8/10 with lifting or thumb use',
            'No tingling or numbness in the hand or fingers',
            'No triggering or locking of any finger',
            'Paracetamol provides minimal relief',
            'Right dominant hand — significant functional impact on both work and childcare activities'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'No significant medical history',
            'Vaginal delivery 6 months ago — uncomplicated',
            'No prior wrist or hand conditions',
            'No recent illness'
          ]
        },
        {
          label: 'Medications',
          content: [
            'Paracetamol 1g PRN (using most days)',
            'No regular medications',
            'Not breastfeeding — NSAIDs safe to use'
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
            'BP: 118/74 mmHg',
            'HR: 74 bpm',
            'Temp: afebrile'
          ]
        },
        {
          label: 'Right Wrist Inspection and Palpation',
          content: [
            'Mild swelling over right radial styloid and first dorsal compartment',
            'Point tenderness over the first dorsal compartment and radial styloid — exquisitely tender',
            'No bruising, erythema, or skin changes',
            'Anatomical snuffbox: not tender — scaphoid fracture excluded clinically'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Finkelstein\'s test: strongly positive right — reproduces patient\'s pain at the radial styloid and into the thumb',
            'Phalen\'s test: negative bilaterally — no carpal tunnel symptoms',
            'Tinel\'s at wrist: negative — no median nerve symptoms',
            'Grip strength: reduced right due to pain (patient unable to complete full grip without pain)'
          ]
        },
        {
          label: 'Neurological Assessment',
          content: [
            'Sensation: intact in all finger distributions bilaterally',
            'No thenar or hypothenar wasting'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'X-ray right wrist (AP and lateral): no fracture, no bony abnormality, no arthritic change'
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
          content: 'Right De Quervain\'s tenosynovitis — stenosing tenosynovitis of the first dorsal compartment (APL and EPB tendons). Positive Finkelstein\'s test, point tenderness over first dorsal compartment, consistent with occupational (physiotherapist) and new-mother history of repetitive thumb loading'
        },
        {
          label: 'Additional Considerations',
          content: [
            'No evidence of scaphoid fracture — anatomical snuffbox non-tender, X-ray normal',
            'No carpal tunnel syndrome — Phalen\'s and Tinel\'s negative, no nocturnal symptoms',
            'Bilateral functional demands (occupation and infant care) — immobilisation strategies need to be practical'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Splinting',
          content: [
            'Thumb spica splint — immobilises first dorsal compartment, to be worn during work activities and at rest when pain is severe',
            'Allows IP joint free to enable infant care tasks',
            'Hand therapy referral for custom thermoplastic splint if prefabricated splint inadequate'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Ibuprofen 400mg TDS with food for 2 weeks — not breastfeeding, safe to use',
            'Paracetamol 1g QID as baseline analgesia, staggered with ibuprofen',
            'Ice to radial styloid — 15 minutes three times daily during acute phase'
          ]
        },
        {
          label: 'Corticosteroid Injection',
          content: [
            'Offered and accepted — 8 weeks duration with failed conservative management',
            'Triamcinolone 20mg + 1mL lignocaine 1% injected into the first dorsal compartment sheath',
            'Ultrasound guidance used to confirm correct compartment placement',
            'Advised: post-injection pain flare 24–48 hours (ice, paracetamol), avoid heavy use for 48 hours',
            'Expected 70–80% resolution within 2–4 weeks'
          ]
        },
        {
          label: 'Activity Modification',
          content: [
            'Modify lifting technique at work — carry loads with wrist in neutral, avoid pinching with wrist radially deviated',
            'Ergonomic assessment at workplace — consider load distribution changes',
            'Modify infant lifting technique — use both hands and elbows rather than wrist pinch-grip'
          ]
        },
        {
          label: 'Physiotherapy',
          content: 'Referral for tendon gliding exercises, postural correction, and gradual load rehabilitation once acute phase resolves after injection'
        },
        {
          label: 'Further Management if No Response',
          content: 'If no improvement at 6–8 weeks post-injection — refer to hand surgery for first dorsal compartment surgical release. Surgical outcomes are excellent for refractory De Quervain\'s.'
        },
        {
          label: 'Follow-Up',
          content: '6 weeks — assess response to injection and splinting, review return to full function, confirm physiotherapy attendance'
        }
      ]
    }
  ]
};

export default function MskWristSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Wrist &amp; Hand SOAP Note</h1>
          <p className="page-subtitle">Example clinical case: De Quervain&apos;s tenosynovitis in a physiotherapist and new mother</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

      <div className="content-body">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
