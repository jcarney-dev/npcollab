import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

const resources = [
  {
    title: 'SEPSIS KILLS — NSW Agency for Clinical Innovation',
    url: 'https://www.aci.health.nsw.gov.au/networks/sepsis',
    desc: 'Australian sepsis recognition and management resources, Sepsis Six protocol',
  },
  {
    title: 'Therapeutic Guidelines — Antibiotic',
    url: 'https://www.tg.org.au',
    desc: 'Australian empirical antibiotic prescribing for common infectious presentations',
  },
  {
    title: 'RACGP — Clinical Guidelines',
    url: 'https://www.racgp.org.au/clinical-resources',
    desc: 'Australian primary care guidelines covering common general medical presentations',
  },
  {
    title: 'UpToDate — General Internal Medicine',
    url: 'https://www.uptodate.com',
    desc: 'Comprehensive clinical decision support for complex and undifferentiated presentations',
  },
  {
    title: 'Rheumatology Australia',
    url: 'https://rheumatology.org.au',
    desc: 'Australian rheumatology guidelines and patient resources for inflammatory conditions',
  },
  {
    title: 'Arthritis Australia — Gout',
    url: 'https://arthritisaustralia.com.au',
    desc: 'Gout management guidelines and patient resources for Australian practitioners',
  },
  {
    title: 'NPS MedicineWise — Medicines in Acute Illness',
    url: 'https://www.nps.org.au',
    desc: 'Sick day rules for medications, antibiotic stewardship, and acute prescribing guidance',
  },
  {
    title: 'ASCIA — Anaphylaxis Guidelines',
    url: 'https://www.allergy.org.au',
    desc: 'Australian anaphylaxis management guidelines and action plans',
  },
];

export default function GeneralMedicalResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩺 General Medical</h1>
        <p>Undifferentiated and multisystem presentations in NP practice</p>
      </div>

      <ModuleTabs moduleId="general-medical" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url + r.title} className="resource-link">
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

      <ModuleNav moduleId="general-medical" />

    </div>
  );
}
