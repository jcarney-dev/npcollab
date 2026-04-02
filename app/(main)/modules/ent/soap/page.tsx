import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = {
  title: 'ENT SOAP Note',
};

const sections = [
  { letter: "S", title: "Subjective", fields: [
    { label: "Presenting Complaint", content: "28-year-old male with 3-day history of severe sore throat and fever." },
    { label: "History", content: "Severe odynophagia (8/10), worse on swallowing. Fever 38.9°C at home. No cough, no rhinorrhoea, no hoarseness. Mouth opens normally. No drooling. One episode of vomiting yesterday." },
    { label: "Relevant History", content: "Documented penicillin allergy — NKDA otherwise. Smoker 5 cigarettes per day. Works in a childcare centre." },
    { label: "Patient Concerns", content: "Requests antibiotics. Cannot afford more time off work. Shared decision-making discussed." }
  ]},
  { letter: "O", title: "Objective", fields: [
    { label: "Vital Signs", content: "BP 126/78 | HR 96 | Temp 38.7°C | RR 16 | SpO2 99% RA" },
    { label: "Examination", content: ["General: flushed, uncomfortable, no respiratory distress", "Tonsils 3+ bilaterally with white exudate, no uvula deviation", "No trismus, no peritonsillar bulge, no drooling", "Tender anterior cervical lymph nodes bilaterally, largest ~1.5cm", "No splenomegaly, no rash"] },
    { label: "McIsaac Score", content: "Fever >38 (+1) | No cough (+1) | Anterior cervical lymphadenopathy (+1) | Tonsillar exudate (+1) | Age 15–44 (0) = Score 4/5 — High probability Group A Strep" }
  ]},
  { letter: "A", title: "Assessment", fields: [
    { label: "Primary Diagnosis", content: "Acute bacterial tonsillitis — likely Group A Streptococcal pharyngitis (J03.00)" },
    { label: "Differentials Considered", content: ["EBV mononucleosis — considered but no splenomegaly, no posterior cervical nodes", "Peritonsillar abscess — excluded: no uvula deviation, no trismus, no unilateral fullness", "Viral pharyngitis — less likely given McIsaac 4/5 and purulent exudate"] }
  ]},
  { letter: "P", title: "Plan", fields: [
    { label: "Management", content: ["Penicillin allergy confirmed — Cefalexin 500mg BD for 10 days (confirm NKDA)", "Paracetamol 1g QID regularly for first 3 days", "Ibuprofen 400mg TDS with food if tolerated", "Warm fluids and throat lozenges"] },
    { label: "Investigations", content: "Throat swab MC&S sent. FBE and monospot if no improvement by 48–72h." },
    { label: "Safety Netting", content: ["Return immediately: stridor, drooling, neck swelling, unilateral throat worsening", "Return 48–72h if no improvement on antibiotics", "Exclude from childcare until afebrile 24h and on antibiotics 24h"] }
  ]}
];

export default function ENTSoapPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👂 ENT (Ears, Nose & Throat)</h1>
        <p>Assessment framework, SOAP note, resources, and quiz for ENT presentations</p>
      </div>
      <ModuleTabs moduleId="ent" />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Acute Sore Throat</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: acute bacterial tonsillitis in an adult with penicillin allergy working in childcare. Click each section to expand.</p>
      </div>
      <SoapNote title="Acute Sore Throat — Adult Patient" sections={sections} />
    </>
  );
}
