import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Australian Poisons Information Centre — 13 11 26',
    url: 'https://www.poisonsinfo.org.au',
    desc: '24/7 Australian poisons information service — call for any poisoning query. Available nationwide. Staffed by clinical toxicologists and specialist pharmacists. Free service.'
  },
  {
    title: 'Australian Society of Clinical & Experimental Pharmacologists and Toxicologists',
    url: 'https://www.ascept.org.au',
    desc: 'Australian clinical toxicology society providing professional guidelines, education resources, and toxicology updates for health professionals.'
  },
  {
    title: 'NSW Health — Toxicology and Wilderness Medicine Guidelines (ACI)',
    url: 'https://www.aci.health.nsw.gov.au',
    desc: 'Comprehensive NSW Health toxicology clinical guidelines including antidote information, management protocols, and emergency toxicology pathways.'
  },
  {
    title: 'Therapeutic Guidelines — Toxicology and Wilderness',
    url: 'https://www.tg.org.au',
    desc: 'Australian management guidance for common poisoning presentations. Subscription required — available via most Australian hospital intranets.'
  },
  {
    title: 'NPS MedicineWise — Medication Safety and Overdose',
    url: 'https://www.nps.org.au',
    desc: 'Australian resources for medication safety, overdose prevention, and safe prescribing. Relevant for NPs managing high-risk medications including opioids and lithium.'
  },
  {
    title: 'Beyond Blue — Mental Health Crisis Resources',
    url: 'https://www.beyondblue.org.au',
    desc: 'Mental health support resources for patients presenting with intentional overdose. Crisis line: 1300 22 4636. Relevant for post-overdose psychiatric assessment and safety planning.'
  },
  {
    title: 'Lifeline Australia',
    url: 'https://www.lifeline.org.au',
    desc: 'Crisis support and suicide prevention service — 13 11 14 (24/7). Essential resource for NPs managing patients following intentional self-harm or overdose.'
  },
  {
    title: 'Australian Resuscitation Council (ANZCOR) — Resuscitation Guidelines',
    url: 'https://www.resus.org.au',
    desc: 'Resuscitation guidelines including management of toxicological cardiac arrest. Updated regularly — essential reference for NPs managing poisoning emergencies.'
  }
];

export default function ToxicologyResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>⚗️ Toxicology</h1>
        <p>Toxidrome recognition, overdose management, antidotes, and the NP role in poisoning presentations.</p>
      </div>

      <ModuleTabs moduleId="toxicology" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url + r.title} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">{r.title}</a>
            <p className="resource-desc">{r.desc}</p>
          </li>
        ))}
      </ul>

      <div className="info-box">
        <strong>Save This Number: 13 11 26</strong>
        <p>The Australian Poisons Information Centre (13 11 26) is the single most important toxicology resource for NPs. Call for any poisoning query — 24 hours a day, 7 days a week. Do not hesitate to call for uncertain cases, unusual presentations, or for reassurance about management decisions. The service is free and staffed by specialists.</p>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

    </div>
  );
}
