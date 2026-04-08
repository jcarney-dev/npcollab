import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Foot & Ankle SOAP Note',
  meta: '22M | Right Grade II lateral ankle sprain | Basketball injury',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '22-year-old male presenting 2 hours after right ankle inversion injury playing basketball.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Landed on another player\'s foot — right ankle inverted sharply',
            'Immediate pain over the lateral ankle — was able to limp off the court with assistance',
            'Has been applying ice since the injury',
            'Pain currently 6/10 at rest, 8/10 with weight bearing',
            'Mild-to-moderate swelling over the lateral ankle',
            'No medial ankle pain. No midfoot pain. No pain at the base of the 5th metatarsal',
            'First significant ankle injury — no prior ankle instability',
            'Keen to return to basketball as soon as possible'
          ]
        },
        {
          label: 'Past Medical History',
          content: [
            'No significant medical history',
            'Fit and active — plays basketball twice per week',
            'Non-smoker, no regular medications',
            'NKDA'
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
          content: 'Stable. Afebrile.'
        },
        {
          label: 'Inspection',
          content: [
            'Swelling localised to the lateral ankle — predominantly over the ATFL region (anterior to lateral malleolus)',
            'Early bruising appearing over the lateral ankle',
            'No plantar arch bruising — Lisfranc injury excluded clinically',
            'No medial swelling'
          ]
        },
        {
          label: 'Ottawa Ankle Rule Application',
          content: [
            'No posterior malleolar tenderness — lateral or medial',
            'No base of 5th metatarsal tenderness',
            'No navicular tenderness',
            'Patient walked 4 steps in clinic — painful but possible',
            'Ottawa Ankle Rule: does NOT meet criteria for X-ray — imaging not indicated'
          ]
        },
        {
          label: 'Palpation',
          content: [
            'Maximum tenderness over the ATFL (anterior to the lateral malleolus)',
            'CFL moderately tender (inferior to the lateral malleolus)',
            'No posterior malleolar tenderness (lateral or medial)',
            'No medial ankle or deltoid tenderness',
            'No base of 5th metatarsal tenderness',
            'No navicular tenderness'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Anterior drawer test: 2+ laxity compared to the left side, soft endpoint — consistent with ATFL partial tear',
            'Talar tilt: mildly increased with pain on testing — CFL involvement',
            'Simmonds-Thompson: not performed — no posterior heel or Achilles symptoms',
            'ROM: dorsiflexion restricted to 5° (normal 20°), plantarflexion 35°, inversion and eversion painful and guarded',
            'Neurovascular: sensation and pulses intact bilaterally'
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
          content: 'Grade II right lateral ankle sprain — partial ATFL tear with probable CFL involvement. Moderate ligamentous laxity on anterior drawer (2+), partial weight bearing capacity, localised lateral swelling and bruising.'
        },
        {
          label: 'Secondary Assessment',
          content: [
            'Ottawa Ankle and Foot Rules applied — fracture criteria NOT met. X-ray not indicated.',
            'No features of Lisfranc injury — no plantar arch bruising, no midfoot tenderness, able to partially weight bear',
            'No posterior malleolar tenderness — distal fibula fracture excluded clinically'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'POLICE Protocol — Acute Management',
          content: [
            'Protection: lace-up ankle brace applied in clinic — protects against re-inversion while allowing normal movement',
            'Optimal Loading: weight bear as tolerated — avoid prolonged non-weight bearing (delays recovery)',
            'Ice: 20 minutes every 2–3 hours for the first 48 hours — not direct ice on skin',
            'Compression: tubigrip or compression bandage applied from toes to mid-calf',
            'Elevation: rest with foot elevated above heart level where possible, especially first 48 hours'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Ibuprofen 400mg TDS with food for 5 days — anti-inflammatory and analgesic effect in the acute phase',
            'Paracetamol 1g QID — staggered with ibuprofen for around-the-clock analgesia',
            'Avoid opioids — not indicated for acute ankle sprain'
          ]
        },
        {
          label: 'Physiotherapy Referral',
          content: [
            'Urgent physiotherapy referral — within 3–5 days',
            'Program: early ROM exercises, progressive weight bearing, peroneal strengthening, proprioception training (balance board), graded return-to-sport program',
            'Evidence: supervised physiotherapy reduces ankle sprain re-injury rate from approximately 70% to 30%'
          ]
        },
        {
          label: 'Bracing',
          content: [
            'Lace-up ankle brace to be worn for all sport activities for 6 months after returning to basketball',
            'Evidence: external ankle support significantly reduces re-sprain risk in the first 12 months after Grade II–III ankle sprain'
          ]
        },
        {
          label: 'Safety Netting',
          content: [
            'Return immediately if: no improvement in weight bearing by 72 hours, significant increase in swelling, new midfoot pain developing (Lisfranc concern), any neurovascular change',
            'Do not return to basketball until: pain-free walking and jogging, able to hop on the affected leg without pain, proprioception equal bilaterally — typically 4–8 weeks for Grade II'
          ]
        },
        {
          label: 'Follow-Up',
          content: 'Physiotherapy review within 1 week. NP review at 4 weeks if not progressing as expected or if physiotherapy has identified concerns about ligamentous instability requiring further imaging.'
        }
      ]
    }
  ]
};

export default function MskFootAnkleSoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Foot &amp; Ankle</h1>
        <p>Foot and ankle pain, sprains, plantar fasciitis, and common foot presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

      <div className="content-prose">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
