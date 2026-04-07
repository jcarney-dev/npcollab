import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'ACSQHC — Low Back Pain Clinical Care Standard',
    url: 'https://www.safetyandquality.gov.au/standards/clinical-care-standards/low-back-pain-clinical-care-standard',
    description: 'Australian Commission on Safety and Quality in Health Care national standard for low back pain management. Defines quality care indicators, recommends imaging criteria, and promotes biopsychosocial management. Essential Australian reference.',
    type: 'Clinical Standard'
  },
  {
    title: 'Therapeutic Guidelines: Rheumatology',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian guidance on pharmacological management of low back pain, inflammatory spondyloarthropathy, and musculoskeletal conditions. Includes prescribing recommendations aligned with PBS. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Spine Society of Australia',
    url: 'https://www.spinesociety.org.au',
    description: 'Peak organisation for spinal surgery and spinal medicine in Australia. Resources on surgical indications, patient information on spinal conditions, and referral pathways for specialist spinal assessment.',
    type: 'Professional Organisation'
  },
  {
    title: 'Arthritis Australia — Back Pain',
    url: 'https://www.arthritisaustralia.com.au/types-of-arthritis/back-pain/',
    description: 'Patient-focused resources on low back pain management including self-management strategies, exercise recommendations, and ankylosing spondylitis resources. Useful for patient education handouts.',
    type: 'Patient Education'
  },
  {
    title: 'painHEALTH — Low Back Pain',
    url: 'https://painhealth.csse.uwa.edu.au',
    description: 'Australian pain management resource developed by University of Western Australia. Evidence-based biopsychosocial self-management strategies for chronic low back pain. Includes patient tools and clinician resources.',
    type: 'Pain Management'
  },
  {
    title: 'Musculoskeletal Australia',
    url: 'https://www.msk.org.au',
    description: 'National Australian musculoskeletal health organisation. Resources for patients and clinicians on a range of musculoskeletal conditions including back pain, arthritis, and osteoporosis. Support line and consumer resources.',
    type: 'Patient Education'
  },
  {
    title: 'Osteoporosis Australia',
    url: 'https://www.osteoporosis.org.au',
    description: 'Australian osteoporosis resource including fracture risk assessment, treatment guidelines for vertebral fractures, calcium and vitamin D recommendations, and anti-resorptive therapy guidance relevant to Australian PBS.',
    type: 'Clinical Resource'
  },
  {
    title: 'RACGP — Ankylosing Spondylitis Clinical Guide',
    url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/musculoskeletal-conditions',
    description: 'RACGP guidance on identification and management of inflammatory musculoskeletal conditions including ankylosing spondylitis and axial spondyloarthritis in the primary care setting.',
    type: 'Clinical Guideline'
  }
];

export default function MskBackResourcesPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Back Resources</h1>
          <p className="page-subtitle">Curated Australian resources for low back pain clinical practice</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

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
