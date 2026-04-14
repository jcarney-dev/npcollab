import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = { title: 'Paediatrics — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '18-month-old male brought in by his mother with a 1-day history of barky cough and noisy breathing.',
      },
      {
        label: 'History of Presenting Complaint',
        content: [
          'Onset yesterday evening with barky, seal-like cough and hoarse voice.',
          'Mother noticed a harsh noise when he cries — not audible at rest.',
          'Low-grade fever 37.8°C at home. No response to paracetamol trialled for comfort.',
          'No stridor at rest. No drooling. No difficulty swallowing. Eating and drinking reduced but still accepting breast.',
          'No vomiting. No rash. No contact with illness. No foreign body ingestion witnessed.',
          'Sleeping poorly overnight due to coughing. Otherwise alert and interactive when awake.',
          'Up to date with NIP immunisations — Hib and diphtheria vaccinations current.',
        ],
      },
      {
        label: 'Past History',
        content: [
          'Born at 38 weeks, uncomplicated vaginal delivery, no NICU admission.',
          'No previous hospitalisation. No previous croup or recurrent wheeze.',
          'No asthma, no eczema. No significant medical history.',
        ],
      },
      {
        label: 'Medications and Allergies',
        content: 'Nil regular medications. NKDA.',
      },
      {
        label: 'Parent Concerns',
        content: '"I am worried the noisy breathing might get worse overnight — I don\'t know when I should bring him back or call an ambulance."',
      },
    ],
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'HR 118 bpm | RR 28 | Temp 37.8°C | SpO₂ 99% RA | Weight 11.2kg',
      },
      {
        label: 'General',
        content: 'Well-appearing toddler, alert, interactive, appropriately distressed by examination. No cyanosis. No pallor. No drooling.',
      },
      {
        label: 'Respiratory',
        content: [
          'No stridor at rest.',
          'Stridor audible only when crying — inspiratory.',
          'No suprasternal, intercostal, or subcostal recession at rest.',
          'Equal air entry bilaterally. No wheeze. No crackles.',
          'SpO₂ 99% on room air throughout examination.',
        ],
      },
      {
        label: 'ENT',
        content: 'Throat mildly erythematous — no exudate, no tonsillar enlargement. Ear canals and TMs normal. No cervical lymphadenopathy.',
      },
      {
        label: 'Westley Croup Score',
        content: [
          'Stridor: 1 (only with agitation)',
          'Retractions: 0 (none)',
          'Air entry: 0 (normal)',
          'Cyanosis: 0 (none)',
          'Level of consciousness: 0 (normal)',
          'Total score: 1 — MILD CROUP',
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
        content: 'Mild viral croup (laryngotracheobronchitis) — Westley score 1. Most likely parainfluenza virus.',
      },
      {
        label: 'Differential Diagnoses Considered',
        content: [
          'Bacterial tracheitis — excluded: no high fever, no toxicity, no stridor at rest, no drooling.',
          'Epiglottitis — excluded: immunised (Hib), no drooling, not sitting in tripod position, no toxic appearance.',
          'Foreign body aspiration — no witnessed choking event, onset gradual with URI prodrome, no sudden onset.',
          'Anaphylaxis — no trigger, no urticaria, no angioedema, no respiratory distress.',
        ],
      },
    ],
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Treatment',
        content: [
          'Dexamethasone 0.15mg/kg oral — 11.2kg × 0.15 = 1.68mg, rounded to 2mg oral (dexamethasone 2mg/5mL solution, give 5mL).',
          'Single dose sufficient for mild croup — no repeat dose scheduled.',
          'Parent given dose in clinic — observed tolerating oral medication.',
        ],
      },
      {
        label: 'Monitoring',
        content: [
          'Observed in clinic for 30 minutes post-dexamethasone.',
          'Reassessed at 30 minutes: SpO₂ 99%, no stridor at rest, well-appearing — suitable for discharge.',
        ],
      },
      {
        label: 'Safety Netting — Return Immediately or Call 000 if',
        content: [
          'Stridor develops at rest (audible without distress)',
          'Increased work of breathing — recession, nasal flaring, rapid breathing',
          'SpO₂ drops or child becomes cyanotic',
          'Child becomes drowsy, difficult to rouse, or unable to be comforted',
          'Drooling or difficulty swallowing develops',
          'Not improving or deteriorating after 24–48 hours',
        ],
      },
      {
        label: 'Parent Education',
        content: [
          'Explained diagnosis of croup — viral illness causing upper airway swelling.',
          'Cool night air or steam may provide temporary symptomatic relief — humidifier acceptable.',
          'Dexamethasone reduces airway swelling and shortens illness — encourage fluids and rest.',
          'Croup typically peaks on nights 2–3 then improves — most cases resolve within 3–5 days.',
          'Written safety netting instructions provided and verbally reviewed.',
        ],
      },
      {
        label: 'Follow-up',
        content: 'Return to clinic or GP in 48 hours if not improving, or as per safety netting criteria above.',
      },
    ],
  },
];

export default function PaediatricsSoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👶 Paediatrics</h1>
        <p>Assessment and management of common paediatric presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />


      <div className="content-prose">
      <SoapNote
        title="Paediatric Acute Presentation — Croup"
        meta="18-month-old male | Mild croup (Westley score 1) | Dexamethasone 2mg oral | Discharged with safety netting"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Weight-based dosing must be calculated individually for each patient.
      </div>
      </div>

      <ModuleNav moduleId="paediatrics" />

    </>
  );
}
