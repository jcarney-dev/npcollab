import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'eviQ Cancer Treatments Online',
    url: 'https://www.eviq.org.au',
    desc: 'Australian standard for oncology treatment protocols including chemotherapy regimens, supportive care, and febrile neutropenia management. Free access for Australian health professionals — register with your professional email.'
  },
  {
    title: 'Cancer Australia',
    url: 'https://www.canceraustralia.gov.au',
    desc: 'Australian government agency providing evidence-based cancer guidelines, screening information, and clinical practice resources for health professionals.'
  },
  {
    title: 'Haematology Society of Australia and New Zealand (HSANZ)',
    url: 'https://www.hsanz.org.au',
    desc: 'Clinical guidelines, position statements, and educational resources for haematological malignancies including leukaemia, lymphoma, and myeloma management in Australia and New Zealand.'
  },
  {
    title: 'Clinical Oncology Society of Australia (COSA)',
    url: 'https://www.cosa.org.au',
    desc: 'Australian multidisciplinary oncology society providing clinical guidelines, survivorship resources, and educational content for all oncology health professionals including NPs.'
  },
  {
    title: 'National Bowel Cancer Screening Program (NBCSP)',
    url: 'https://www.health.gov.au/our-work/national-bowel-cancer-screening-program',
    desc: 'Australian government bowel cancer screening program — iFOBT every 2 years from age 45. Resources for health professionals to support patient participation.'
  },
  {
    title: 'BreastScreen Australia',
    url: 'https://www.health.gov.au/our-work/breastscreen-australia',
    desc: 'National breast cancer screening program providing free 2-yearly mammograms for women aged 50–74. Information for health professionals on referral and follow-up.'
  },
  {
    title: 'Leukaemia Foundation',
    url: 'https://www.leukaemia.org.au',
    desc: 'Australian patient support organisation for blood cancers — patient education resources, support services, and clinical information for health professionals managing patients with haematological malignancy.'
  },
  {
    title: 'Cancer Council Australia',
    url: 'https://www.cancer.org.au',
    desc: 'Australian evidence-based clinical guidelines for cancer management across all tumour types. Free access to clinical practice guidelines — an essential reference for NPs in oncology settings.'
  }
];

export default function OncoHaematologyResourcesPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🩸</span>
        <div>
          <span className="label">Clinical Module — Resources</span>
          <h1>Onco-Haematology Resources</h1>
          <p>Curated Australian oncology and haematology resources for NP practice — treatment protocols, screening programs, and clinical guidelines.</p>
        </div>
      </div>

      <ModuleTabs moduleId="onco-haematology" />

      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">{r.title}</a>
            <p className="resource-desc">{r.desc}</p>
          </li>
        ))}
      </ul>

      <div className="info-box">
        <strong>eviQ — Essential Resource for Australian Oncology NPs</strong>
        <p>eviQ (eviq.org.au) is the Australian standard for chemotherapy protocols and supportive care guidelines. All NPs working in oncology settings should register for free access. eviQ protocols are maintained by Cancer Institute NSW and reflect current Australian practice for chemotherapy administration, antiemetics, febrile neutropenia management, and more.</p>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
