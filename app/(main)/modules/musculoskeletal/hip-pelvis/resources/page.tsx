import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'GLA:D Australia — Hip and Knee OA',
    url: 'https://gladaustralia.com.au',
    description: 'Good Life with osteoArthritis in Denmark — the Australian-adapted evidence-based exercise and education program for hip and knee OA. Strong evidence base. Find accredited GLA:D providers and refer patients directly.',
    type: 'Exercise Program'
  },
  {
    title: 'Australian Orthopaedic Association — Hip',
    url: 'https://www.aoa.org.au',
    description: 'Hip surgery guidelines, patient resources, and referral pathways for hip conditions including total hip replacement, hip fracture, and FAI surgery.',
    type: 'Professional Organisation'
  },
  {
    title: 'Arthritis Australia',
    url: 'https://arthritisaustralia.com.au',
    description: 'OA management resources and patient education including hip OA self-management programs, exercise guides, and information on joint replacement decision-making.',
    type: 'Patient Education'
  },
  {
    title: 'Osteoporosis Australia — Hip Fracture',
    url: 'https://www.osteoporosis.org.au',
    description: 'Hip fracture prevention, osteoporosis treatment guidelines, calcium and vitamin D recommendations, anti-resorptive therapy guidance, and fragility fracture assessment tools aligned with Australian PBS.',
    type: 'Clinical Resource'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for hip OA, inflammatory conditions, gout, and musculoskeletal conditions. PBS-aligned prescribing recommendations. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Musculoskeletal Australia',
    url: 'https://msk.org.au',
    description: 'Australian MSK health resources for clinicians and patients including hip pain management, osteoporosis, and arthritis. Support helpline and consumer information.',
    type: 'Patient Education'
  },
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Physiotherapy referral for hip conditions including OA rehabilitation, GTPS management, FAI physiotherapy, and post-operative hip replacement rehabilitation.',
    type: 'Professional Organisation'
  },
  {
    title: 'RACGP — Hip Pain Resources',
    url: 'https://www.racgp.org.au',
    description: 'RACGP primary care guidelines for hip pain assessment, management, and specialist referral pathways including hip OA, hip fracture, and pelvic girdle pain.',
    type: 'Clinical Guideline'
  }
];

export default function MskHipPelvisResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Hip &amp; Pelvis</h1>
        <p>Hip and pelvis pain, osteoarthritis, trochanteric bursitis, and hip fracture</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-prose">
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
