import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'Palliative Care — Resources' };

const resources = [
  {
    title: 'Palliative Care Australia',
    url: 'https://palliativecare.org.au',
    description: 'Australian palliative care standards, clinical resources, and state-based service directory.',
  },
  {
    title: 'CareSearch — Palliative Care Knowledge Network',
    url: 'https://www.caresearch.com.au',
    description: 'Evidence-based palliative care resources for clinicians including drug information, symptom management, and research. Excellent CSCI drug compatibility information.',
  },
  {
    title: 'Therapeutic Guidelines — Palliative Care',
    url: 'https://www.tg.org.au',
    description: 'Australian prescribing guidance for palliative symptom management including opioid conversion tables and syringe driver medications.',
  },
  {
    title: 'Advance Care Planning Australia',
    url: 'https://www.advancecareplanning.org.au',
    description: 'State-specific ACP resources, directive templates, and clinician education for advance care planning in Australia.',
  },
  {
    title: 'Voluntary Assisted Dying — Australian Government',
    url: 'https://www.health.gov.au/topics/voluntary-assisted-dying',
    description: 'Australian Government VAD information including state legislation links, eligibility criteria, and conscientious objection provisions.',
  },
  {
    title: 'Australian and New Zealand Society of Palliative Medicine (ANZSPM)',
    url: 'https://www.anzspm.org.au',
    description: 'Specialist palliative medicine society — clinical guidelines, education, and referral pathways.',
  },
  {
    title: 'Grace — End of Life Planning',
    url: 'https://www.grace.org.au',
    description: 'Practical end of life planning resources for patients, families, and clinicians in Australia.',
  },
  {
    title: 'Palliative Care Expert Group — Therapeutic Guidelines',
    url: 'https://www.tg.org.au',
    description: 'Subcutaneous infusion compatibility, syringe driver drug combinations, and palliative dose guidance for Australian practitioners.',
  },
];

export default function PalliativeCareResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🕊️ Palliative Care</h1>
        <p>Symptom management, advance care planning, and end-of-life care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url + r.title} className="resource-link">
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

      <ModuleNav moduleId="palliative-care" />

    </>
  );
}
