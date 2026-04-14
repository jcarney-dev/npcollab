import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

const resources = [
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Physiotherapy referral and rehabilitation resources for elbow tendinopathy and nerve entrapment. Find a musculoskeletal physiotherapist experienced in progressive tendon loading programmes for lateral and medial epicondylalgia.',
    type: 'Professional Organisation'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for musculoskeletal pain, tendinopathy, gout, and inflammatory joint conditions including elbow presentations. PBS-aligned prescribing recommendations. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Sports Medicine Australia',
    url: 'https://www.sma.org.au',
    description: 'Sports injury management resources including elbow tendinopathy, UCL injuries in throwing athletes, and return-to-sport criteria for overhead and racquet sports. Relevant to lateral and medial epicondylalgia management.',
    type: 'Professional Organisation'
  },
  {
    title: 'Musculoskeletal Australia',
    url: 'https://msk.org.au',
    description: 'Australian MSK health consumer organisation providing patient education resources for elbow pain, tendinopathy, and arthritis. Support line and self-management information for patients.',
    type: 'Patient Education'
  },
  {
    title: 'Australian Orthopaedic Association',
    url: 'https://www.aoa.org.au',
    description: 'Orthopaedic surgical guidelines and referral pathways for elbow conditions including radial head fractures, distal biceps tendon rupture, elbow dislocation, and cubital tunnel decompression.',
    type: 'Professional Organisation'
  },
  {
    title: 'RACGP — Musculoskeletal Care',
    url: 'https://www.racgp.org.au',
    description: 'RACGP primary care guidelines for elbow pain assessment, tendinopathy management, imaging referral criteria, and specialist referral pathways. Includes guidance on avoiding inappropriate corticosteroid injection for tendinopathy.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Neuroscience Research Australia — Nerve Entrapment',
    url: 'https://www.neura.edu.au',
    description: 'Australian research and clinical information on peripheral nerve entrapment syndromes including cubital tunnel syndrome. Relevant for assessment, conservative management, and surgical referral criteria.',
    type: 'Research Organisation'
  },
  {
    title: 'Hand Therapy Australia',
    url: 'https://www.handtherapy.org.au',
    description: 'Australian hand and upper limb therapy association. Find accredited hand therapists for elbow splinting, post-surgical rehabilitation, elbow contracture management, and ergonomic assessment relevant to occupational elbow conditions.',
    type: 'Professional Organisation'
  }
];

export default function MskElbowResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Elbow</h1>
        <p>Lateral epicondylitis, medial epicondylitis, olecranon bursitis, and elbow pain presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/elbow" />

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
      <ModuleNav moduleId="musculoskeletal/elbow" />

    </div>
  );
}
