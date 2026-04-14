import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

const resources = [
  {
    title: 'Musculoskeletal Australia — Neck Pain',
    url: 'https://www.msk.org.au/neck-pain/',
    description: 'Australian patient and clinician resources on neck pain management, including self-management strategies, exercise information, and links to specialist services. Supports biopsychosocial approach to neck pain.',
    type: 'Patient Education'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for neck pain, cervical radiculopathy, and musculoskeletal conditions. Includes analgesic prescribing recommendations, neuropathic agents, and anti-inflammatory guidance aligned with PBS. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Spine Society of Australia',
    url: 'https://www.spinesociety.org.au',
    description: 'Peak Australian organisation for spinal surgery and medicine. Resources on surgical indications for cervical radiculopathy and myelopathy, referral pathways, and patient information on cervical spine conditions.',
    type: 'Professional Organisation'
  },
  {
    title: 'Whiplash Australia',
    url: 'https://www.whiplash.com.au',
    description: 'Australian resource specifically focused on whiplash-associated disorder. Provides information on WAD classification, evidence-based management, return to activity, and resources for patients and clinicians managing WAD in Australia.',
    type: 'Clinical Resource'
  },
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Peak physiotherapy body in Australia. Find a physio tool for specialist musculoskeletal and spinal physiotherapy referrals. Position statements on cervical spine management. Clinical practice resources for manual therapy and exercise.',
    type: 'Professional Organisation'
  },
  {
    title: 'RACGP — Neck Pain Management in General Practice',
    url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/musculoskeletal-conditions',
    description: 'RACGP guidance on evidence-based neck pain management in primary care, including red flag identification, imaging criteria, and referral pathways for cervical radiculopathy and myelopathy.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Arthritis Australia — Cervical Spondylosis',
    url: 'https://www.arthritisaustralia.com.au',
    description: 'Patient-focused information on cervical spondylosis and cervical arthritis, including management strategies, physiotherapy, and self-management. Useful for patient education on age-related degenerative cervical disease.',
    type: 'Patient Education'
  },
  {
    title: 'Neurosurgical Society of Australasia',
    url: 'https://www.nsa.org.au',
    description: 'Peak neurosurgical body in Australasia. Information on surgical management of cervical myelopathy and radiculopathy, including ACDF and laminoplasty. Useful for understanding referral expectations and surgical decision-making.',
    type: 'Specialist Resource'
  }
];

export default function MskNeckResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Neck</h1>
        <p>Cervical spine pain, radiculopathy, whiplash, and serious cervical pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

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
      <ModuleNav moduleId="musculoskeletal/neck" />

    </div>
  );
}
