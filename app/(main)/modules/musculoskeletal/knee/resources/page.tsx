import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Australian Orthopaedic Association',
    url: 'https://www.aoa.org.au',
    description: 'Orthopaedic surgical guidelines, referral pathways, and patient resources for knee conditions including ACL reconstruction, total knee replacement, and meniscal surgery.',
    type: 'Professional Organisation'
  },
  {
    title: 'Sports Medicine Australia',
    url: 'https://www.sma.org.au',
    description: 'Sports injury management guidelines and return-to-sport criteria for Australian practitioners. Resources on ACL rehabilitation, knee injury prevention, and sports medicine practice.',
    type: 'Professional Organisation'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for knee OA, gout, pseudogout, and inflammatory joint conditions. Aligned with PBS prescribing. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Arthritis Australia — Knee Osteoarthritis',
    url: 'https://arthritisaustralia.com.au',
    description: 'Evidence-based knee OA management resources including exercise programs, self-management strategies, and information on total knee replacement decision-making.',
    type: 'Patient Education'
  },
  {
    title: 'Musculoskeletal Australia',
    url: 'https://msk.org.au',
    description: 'Australian MSK health resources including knee pain management. Support line and consumer resources for patients with knee conditions.',
    type: 'Patient Education'
  },
  {
    title: 'GLA:D Australia — Knee and Hip OA',
    url: 'https://gladaustralia.com.au',
    description: 'Good Life with osteoArthritis in Denmark — the Australian-adapted evidence-based exercise and education program for knee and hip OA. Strong evidence base. Find accredited GLA:D providers across Australia.',
    type: 'Exercise Program'
  },
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Physiotherapy referral and rehabilitation resources for knee injuries and OA. Find a musculoskeletal physiotherapist for ACL rehabilitation, tendinopathy management, and OA exercise programs.',
    type: 'Professional Organisation'
  },
  {
    title: 'RACGP — Musculoskeletal Care',
    url: 'https://www.racgp.org.au',
    description: 'RACGP primary care guidelines for knee pain assessment, management, and referral pathways. Includes guidance on imaging criteria and conservative management.',
    type: 'Clinical Guideline'
  }
];

export default function MskKneeResourcesPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Knee Resources</h1>
          <p className="page-subtitle">Curated Australian resources for knee clinical practice</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-body">
        <section className="content-section">
          <h2>Australian Resources</h2>
          <p>All resources listed are Australian or provide Australia-specific guidance relevant to NP practice.</p>

          <div className="resource-list">
            {resources.map((r) => (
              <a
                key={r.url + r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-item"
              >
                <div className="resource-header">
                  <span className="resource-title">{r.title}</span>
                  <span className="resource-type">{r.type}</span>
                </div>
                <p className="resource-description">{r.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
