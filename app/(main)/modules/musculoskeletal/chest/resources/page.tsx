import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Royal Australasian College of Surgeons — Trauma Guidelines',
    url: 'https://www.surgeons.org',
    description: 'Australian trauma surgical guidelines for rib fracture management including intercostal nerve blocks, thoracic epidural analgesia, and operative management. Guidance on admission criteria and complications including haemothorax and pneumothorax.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Therapeutic Guidelines — Analgesic',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for chest wall pain including rib fracture analgesia (multimodal protocols), intercostal nerve block guidance, and post-herpetic neuralgia management. Essential for NP prescribing. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Cardiac Society of Australia and New Zealand — Chest Pain Guidelines',
    url: 'https://www.csanz.edu.au',
    description: 'Chest pain assessment and ACS management guidelines — essential for systematically excluding cardiac causes before making an MSK chest wall diagnosis. Rapid chest pain assessment protocols and troponin interpretation guidance.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Australian and New Zealand Society for Geriatric Medicine',
    url: 'https://www.anzsgm.org',
    description: 'Rib fracture management in elderly patients — specific considerations for osteoporotic fractures, respiratory complications in older adults, and multidisciplinary care. Guidance on analgesia in elderly patients and falls prevention post-discharge.',
    type: 'Professional Organisation'
  },
  {
    title: 'Osteoporosis Australia',
    url: 'https://www.osteoporosis.org.au',
    description: 'Fragility fracture management including rib fractures, DXA scanning, anti-osteoporotic therapy (bisphosphonates, denosumab), and corticosteroid-induced osteoporosis prevention and treatment. Fracture Liaison Service referral guidance.',
    type: 'Clinical Guideline'
  },
  {
    title: 'NPS MedicineWise — Herpes Zoster',
    url: 'https://www.nps.org.au',
    description: 'Shingles treatment (valaciclovir prescribing), post-herpetic neuralgia management (gabapentin, pregabalin, amitriptyline, topical agents), and vaccination guidance. Relevant to NP prescribing for thoracic dermatomal zoster.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Immunise Australia — Shingrix Vaccination',
    url: 'https://www.health.gov.au/topics/immunisation',
    description: 'Shingles vaccination schedule, eligibility, and funding for Australian adults aged 50 and over. Shingrix (recombinant adjuvanted zoster vaccine) — two-dose schedule recommended for prevention of herpes zoster and post-herpetic neuralgia.',
    type: 'Clinical Guideline'
  },
  {
    title: 'ANZICS — Thoracic Trauma Management',
    url: 'https://www.anzics.com.au',
    description: 'ICU-level thoracic trauma management guidelines applicable to severe rib fracture cases with respiratory failure, haemothorax, and flail chest. Guidance on regional analgesia, ventilatory support, and chest drain management.',
    type: 'Professional Organisation'
  }
];

export default function MskChestResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Chest Wall</h1>
        <p>Chest wall pain, costochondritis, rib fractures, and musculoskeletal causes of chest pain</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

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
