import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Paediatrics — Resources' };

const resources = [
  {
    title: 'Royal Children\'s Hospital Melbourne — Clinical Practice Guidelines',
    url: 'https://www.rch.org.au/clinicalguide/',
    description: 'Comprehensive, evidence-based clinical guidelines covering all common paediatric presentations. Free access. Used by paediatric clinicians across Australia.',
  },
  {
    title: 'Therapeutic Guidelines — Paediatrics',
    url: 'https://www.tg.org.au',
    description: 'Australian evidence-based prescribing and management guidance for paediatric conditions, including weight-based dosing tables.',
  },
  {
    title: 'Australian Immunisation Handbook',
    url: 'https://immunisationhandbook.health.gov.au',
    description: 'Comprehensive guidance on all vaccines on the National Immunisation Program, catch-up schedules, contraindications, and administration. Essential for NP immunisation practice.',
  },
  {
    title: 'Australian Immunisation Register (AIR)',
    url: 'https://www.servicesaustralia.gov.au/australian-immunisation-register',
    description: 'Record and verify vaccination history for individuals. NPs are required to record all administered vaccines in AIR.',
  },
  {
    title: 'Raising Children Network',
    url: 'https://raisingchildren.net.au',
    description: 'Evidence-based Australian resource for parents on child development, health, and behaviour. Useful for patient education materials.',
  },
  {
    title: 'PECARN Paediatric Decision Rules',
    url: 'https://www.pecarn.org',
    description: 'Evidence-based paediatric emergency decision tools including the PECARN head injury rule for children presenting after head trauma.',
  },
  {
    title: 'PREDICT — Paediatric Research in Emergency Departments International Collaborative',
    url: 'https://www.predict.org.au',
    description: 'Australian and New Zealand paediatric emergency research network. Clinical decision rules and evidence for paediatric emergency presentations.',
  },
  {
    title: 'NPS MedicineWise — Paediatric Prescribing',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based prescribing resources including weight-based dosing guidance and management of common childhood conditions.',
  },
];

export default function PaediatricsResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👶 Paediatrics</h1>
        <p>Assessment and management of common paediatric presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">
              {r.title}
            </a>
            <p className="resource-desc">{r.description}</p>
          </li>
        ))}
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Links were current at time of publication — verify current guidelines before clinical use.
      </div>
      </div>

    </>
  );
}
