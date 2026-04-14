import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

const resources = [
  {
    title: 'Australian Alcohol and Drug Foundation',
    url: 'https://adf.org.au',
    desc: 'Evidence-based drug and alcohol information, treatment directory, and clinician resources',
  },
  {
    title: 'NDARC — National Drug and Alcohol Research Centre',
    url: 'https://ndarc.med.unsw.edu.au',
    desc: 'Australian research, guidelines, and clinical resources for substance use disorders',
  },
  {
    title: 'Therapeutic Guidelines — Drug and Alcohol',
    url: 'https://www.tg.org.au',
    desc: 'Australian prescribing guidance for alcohol withdrawal, opioid agonist therapy, and substance use pharmacotherapy',
  },
  {
    title: 'ADF — DrugInfo Fact Sheets',
    url: 'https://adf.org.au/drug-facts',
    desc: 'Drug-specific fact sheets and clinical information for Australian practitioners',
  },
  {
    title: 'RACGP — Alcohol and Other Drugs',
    url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/alcohol',
    desc: 'Australian primary care guidance for managing patients with alcohol and drug use disorders',
  },
  {
    title: 'Turning Point — Alcohol and Drug Centre',
    url: 'https://www.turningpoint.org.au',
    desc: 'Victorian alcohol and drug treatment service with clinical resources and training',
  },
  {
    title: 'NADK — National Alcohol and Drug Knowledgebase',
    url: 'https://nadk.flinders.edu.au',
    desc: 'Evidence-based training and resources for Australian clinicians working in AOD settings',
  },
  {
    title: 'Harm Reduction Australia',
    url: 'https://www.harmreductionaustralia.org.au',
    desc: 'Harm reduction principles, needle and syringe programs, and naloxone access information',
  },
];

export default function DrugsAlcoholResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧪 Drugs &amp; Alcohol</h1>
        <p>Substance use disorders — assessment and management in NP practice</p>
      </div>

      <ModuleTabs moduleId="drugs-alcohol" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">
              {r.title}
            </a>
            <p className="resource-desc">{r.desc}</p>
          </li>
        ))}
      </ul>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
      </div>

      <ModuleNav moduleId="drugs-alcohol" />

    </div>
  );
}
