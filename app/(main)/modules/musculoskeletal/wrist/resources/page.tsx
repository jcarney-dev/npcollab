import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Australian Hand Surgery Society',
    url: 'https://www.handsurgery.org.au',
    description: 'Hand surgery referral guidelines, patient resources, and clinical information for wrist and hand conditions including scaphoid fractures, tendon injuries, nerve entrapments, and Dupuytren\'s contracture.',
    type: 'Professional Organisation'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for wrist and hand MSK conditions including corticosteroid injections for De Quervain\'s, trigger finger, and carpal tunnel syndrome. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Hand therapy and physiotherapy resources for wrist and hand rehabilitation. Find a hand therapist experienced in tendinopathy management, post-fracture rehabilitation, and splinting.',
    type: 'Professional Organisation'
  },
  {
    title: 'Australian Orthopaedic Association',
    url: 'https://www.aoa.org.au',
    description: 'Orthopaedic surgical referral guidelines for fractures and soft tissue hand injuries including Colles fracture management, scaphoid fixation, and UCL repair.',
    type: 'Professional Organisation'
  },
  {
    title: 'Sports Medicine Australia',
    url: 'https://sma.org.au',
    description: 'Sports-related hand and wrist injury management and return-to-sport protocols. Resources for scaphoid fractures, mallet finger, UCL injuries, and wrist sprains in athletic populations.',
    type: 'Professional Organisation'
  },
  {
    title: 'NPS MedicineWise — Musculoskeletal',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based analgesic prescribing and corticosteroid injection guidance for hand and wrist conditions. Relevant for De Quervain\'s, trigger finger, and carpal tunnel syndrome management.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Osteoporosis Australia',
    url: 'https://www.osteoporosis.org.au',
    description: 'Fragility fracture management — essential for Colles fractures in osteoporotic patients. Guidance on DXA scanning, bisphosphonate prescribing, and Fracture Liaison Service referral.',
    type: 'Patient Education'
  },
  {
    title: 'RACGP — Musculoskeletal Clinical Guidelines',
    url: 'https://www.racgp.org.au/clinical-resources',
    description: 'Australian primary care guidelines for common wrist and hand presentations including carpal tunnel syndrome, fracture assessment, tendinopathy management, and imaging referral criteria.',
    type: 'Clinical Guideline'
  }
];

export default function MskWristResourcesPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Wrist &amp; Hand Resources</h1>
          <p className="page-subtitle">Curated Australian resources for wrist and hand clinical practice</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

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
