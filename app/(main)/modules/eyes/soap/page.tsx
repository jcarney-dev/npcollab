import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = {
  title: 'Ophthalmology SOAP Note',
};

const sections = [
  { letter: "S", title: "Subjective", fields: [
    { label: "Presenting Complaint", content: "34-year-old female with 2-day history of right eye redness and discharge." },
    { label: "History", content: "Gradual onset, right eye only. Yellow-green mucopurulent discharge worst on waking. Grittiness and mild itch. Denies pain, photophobia, or visual change. No halos or floaters." },
    { label: "Relevant History", content: "Daily contact lens wearer, continued wearing despite symptoms. No previous eye conditions. No known allergies. Niece had similar symptoms 5 days ago." },
    { label: "Patient Concerns", content: "Concerned about needing antibiotics and when contact lenses can be resumed." }
  ]},
  { letter: "O", title: "Objective", fields: [
    { label: "Vital Signs", content: "BP 118/72 | HR 74 | Temp 36.8°C | SpO2 98% RA" },
    { label: "Examination", content: ["VA: R 6/6, L 6/6 unaided", "Pupils: PEARL 4mm bilaterally, no RAPD", "EOM: full range, no diplopia", "R eye: diffuse conjunctival injection, mucopurulent discharge, lids erythematous. Cornea clear. No foreign body.", "L eye: normal", "Pre-auricular lymph nodes: not palpable bilaterally"] }
  ]},
  { letter: "A", title: "Assessment", fields: [
    { label: "Primary Diagnosis", content: "Acute bacterial conjunctivitis, right eye (H10.029)" },
    { label: "Differentials Considered", content: ["Viral conjunctivitis — less likely given purulent discharge and epidemiological contact", "Allergic conjunctivitis — less likely given unilateral purulent presentation", "Acute angle-closure glaucoma — excluded: no pain, halos, nausea; VA intact; cornea clear"] }
  ]},
  { letter: "P", title: "Plan", fields: [
    { label: "Management", content: ["Chloramphenicol 0.5% eye drops QID for 5 days", "Cease contact lenses until 48h post-symptom resolution; discard current lens and case", "Hygiene education: handwashing, own towels, avoid touching eyes"] },
    { label: "Safety Netting", content: ["Return immediately if: vision changes, pain increases, photophobia develops, no improvement by 48h", "Review in 5–7 days or earlier if required"] }
  ]}
];

export default function EyesSoapPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👁️ Ophthalmology</h1>
        <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways</p>
      </div>
      <ModuleTabs moduleId="eyes" />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Acute Red Eye</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: acute bacterial conjunctivitis in a contact lens wearer. Click each section to expand.</p>
      </div>
      <SoapNote title="Acute Red Eye — Adult Patient" sections={sections} />
    </>
  );
}
