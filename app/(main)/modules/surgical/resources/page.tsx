import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

const resources = [
  {
    title: 'Royal Australasian College of Surgeons (RACS)',
    url: 'https://www.surgeons.org',
    desc: 'Australian surgical standards, clinical guidelines, and patient information resources. RACS is the leading body for surgical education and standards in Australia and New Zealand.'
  },
  {
    title: 'Therapeutic Guidelines — Antibiotic (Surgical Prophylaxis)',
    url: 'https://www.tg.org.au',
    desc: 'Australian evidence-based antibiotic prescribing guidelines including surgical prophylaxis, SSI treatment, and perioperative antibiotic selection. Subscription required — available via most hospital intranets.'
  },
  {
    title: 'Wounds Australia',
    url: 'https://www.woundsaustralia.com.au',
    desc: 'Australian peak body for wound management. Clinical guidelines, wound assessment tools, and education resources for post-operative wound care and surgical site infections.'
  },
  {
    title: 'NICE Guideline NG125 — Perioperative Care in Adults',
    url: 'https://www.nice.org.uk/guidance/ng125',
    desc: 'Comprehensive perioperative care guidelines covering pre-operative assessment, intraoperative management, and post-operative care. Widely referenced in Australian surgical practice.'
  },
  {
    title: 'Australian Commission on Safety and Quality in Health Care (ACSQHC) — Surgical Safety Checklist',
    url: 'https://www.safetyandquality.gov.au',
    desc: 'WHO Surgical Safety Checklist implementation resources, patient safety alerts, and surgical quality standards for Australian health services.'
  },
  {
    title: 'Colorectal Surgery Society of Australia and New Zealand (CSSANZ)',
    url: 'https://www.cssanz.org',
    desc: 'Specialist guidelines for colorectal conditions including diverticular disease, colorectal cancer management, and post-operative care standards.'
  },
  {
    title: 'NPS MedicineWise — Perioperative Medication Management',
    url: 'https://www.nps.org.au',
    desc: 'Australian resources for perioperative medication management including anticoagulant bridging, antiplatelet cessation, and VTE prophylaxis decision support.'
  },
  {
    title: 'ANZICS — Australian and New Zealand Intensive Care Society',
    url: 'https://www.anzics.com.au',
    desc: 'Critical care and post-operative ICU management guidelines relevant to high-risk surgical patients and post-operative sepsis management in Australian settings.'
  }
];

export default function SurgicalResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔪 Surgical</h1>
        <p>Perioperative assessment, acute surgical presentations, post-operative complications, and VTE prophylaxis for NP practice.</p>
      </div>

      <ModuleTabs moduleId="surgical" />


      <div className="content-prose">
      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">{r.title}</a>
            <p className="resource-desc">{r.desc}</p>
          </li>
        ))}
      </ul>

      <div className="info-box">
        <strong>Australian Clinical Resources</strong>
        <p>All resources reflect current Australian guidelines and practice standards. For surgical antibiotic prescribing, always refer to the current edition of Therapeutic Guidelines: Antibiotic via your institution&apos;s access. Contact your hospital antimicrobial stewardship team for complex cases.</p>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="surgical" />

    </div>
  );
}
