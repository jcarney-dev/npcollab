import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Heart Foundation Australia — Cardiovascular Risk',
    url: 'https://www.heartfoundation.org.au',
    desc: 'Australian CVD risk guidelines, lipid management, and cardiovascular prevention resources',
  },
  {
    title: 'Australian Cardiovascular Disease Risk Calculator',
    url: 'https://www.cvdcheck.org.au',
    desc: 'Australian CVD risk calculator based on Framingham equation — essential clinical tool',
  },
  {
    title: 'Vascular Surgery Society of Australia and New Zealand (VSSA)',
    url: 'https://www.vssa.org.au',
    desc: 'Vascular surgery referral pathways and clinical guidelines for PAD and aortic disease',
  },
  {
    title: 'Therapeutic Guidelines — Cardiovascular',
    url: 'https://www.tg.org.au',
    desc: 'Australian prescribing guidance for lipid management, antiplatelet therapy, and anticoagulation',
  },
  {
    title: 'Stroke Foundation Australia — TIA and Stroke',
    url: 'https://strokefoundation.org.au',
    desc: 'TIA and stroke management guidelines, FAST campaign, and clinical resources',
  },
  {
    title: 'National Vascular Disease Prevention Alliance',
    url: 'https://www.nvdpa.org.au',
    desc: 'Australian guidelines for absolute CVD risk assessment and management',
  },
  {
    title: 'NPS MedicineWise — Cardiovascular Prescribing',
    url: 'https://www.nps.org.au',
    desc: 'Evidence-based statin prescribing, antiplatelet therapy, and cardiovascular medicines information',
  },
  {
    title: 'Thrombosis and Haemostasis Society of Australia and NZ',
    url: 'https://www.thanz.org.au',
    desc: 'DVT and PE management guidelines and anticoagulation resources',
  },
];

export default function CardiovascularResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫀 Cardiovascular</h1>
        <p>Vascular disease, DVT, cerebrovascular disease, and CVD risk management</p>
      </div>

      <ModuleTabs moduleId="cardiovascular" />


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

    </div>
  );
}
