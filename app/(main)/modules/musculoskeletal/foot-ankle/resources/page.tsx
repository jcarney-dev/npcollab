import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Australasian Podiatry Council',
    url: 'https://www.apodc.com.au',
    description: 'Australian podiatry clinical guidelines for foot and ankle conditions including plantar fasciitis, Achilles tendinopathy, diabetic foot assessment, and orthotic prescription. Referral pathways for complex foot and ankle presentations.',
    type: 'Professional Organisation'
  },
  {
    title: 'Sports Medicine Australia',
    url: 'https://sma.org.au',
    description: 'Sports injury management guidelines and return-to-sport protocols for ankle sprains, Achilles tendinopathy, and tendon ruptures. Evidence-based resources for POLICE protocol, proprioception rehabilitation, and ankle bracing guidance.',
    type: 'Professional Organisation'
  },
  {
    title: 'Australian Orthopaedic Association',
    url: 'https://www.aoa.org.au',
    description: 'Orthopaedic referral guidelines for foot and ankle fractures, Lisfranc injuries, Achilles tendon rupture management, and posterior tibial tendon dysfunction. Guidance on when surgical referral is indicated.',
    type: 'Professional Organisation'
  },
  {
    title: 'Ottawa Ankle Rules — MDCalc',
    url: 'https://www.mdcalc.com/calc/1and2/ottawa-ankle-rule',
    description: 'Ottawa Ankle and Foot Rules clinical decision support tool. Apply the rules to every ankle and foot injury to guide X-ray decision-making. Sensitivity exceeds 99% for clinically significant fractures.',
    type: 'Clinical Decision Tool'
  },
  {
    title: 'Therapeutic Guidelines — Rheumatology and MSK',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian prescribing guidance for foot and ankle MSK conditions including corticosteroid injection guidance for plantar fasciitis and Morton\'s neuroma, and analgesia prescribing. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Australian Physiotherapy Association',
    url: 'https://www.physiotherapy.asn.au',
    description: 'Physiotherapy resources for ankle rehabilitation and return to sport. Find a sports physiotherapist experienced in ankle sprain rehabilitation, Achilles tendinopathy (Alfredsson protocol), and proprioception training programs.',
    type: 'Professional Organisation'
  },
  {
    title: 'Diabetes Australia — Diabetic Foot',
    url: 'https://www.diabetesaustralia.com.au',
    description: 'Diabetic foot assessment and management resources — critical for NPs in primary care. Guidance on monofilament testing, ABI measurement, high-risk foot classification, and multidisciplinary diabetic foot team referral.',
    type: 'Clinical Guideline'
  },
  {
    title: 'NPS MedicineWise — Musculoskeletal Prescribing',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based analgesic prescribing and corticosteroid injection guidance for foot and ankle conditions. Relevant for plantar fasciitis, Morton\'s neuroma injection, and Achilles tendinopathy (where corticosteroid is contraindicated).',
    type: 'Clinical Guideline'
  }
];

export default function MskFootAnkleResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Foot &amp; Ankle</h1>
        <p>Foot and ankle pain, sprains, plantar fasciitis, and common foot presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

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
