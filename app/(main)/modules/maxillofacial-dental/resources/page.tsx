import ModuleTabs from '@/components/ModuleTabs';

const resources = [
  {
    title: 'Australian Dental Association (ADA)',
    url: 'https://www.ada.org.au',
    description: 'Peak dental body in Australia. Patient information, dentist finder, position statements on dental health policy.',
    type: 'Professional Organisation'
  },
  {
    title: 'Therapeutic Guidelines: Oral and Dental',
    url: 'https://www.tg.org.au',
    description: 'Authoritative Australian guidance on dental infections, antibiotic prescribing for dental conditions, endocarditis prophylaxis, and oral medicine. Subscription required.',
    type: 'Clinical Guideline'
  },
  {
    title: 'AIHW — Oral Health and Dental Care in Australia',
    url: 'https://www.aihw.gov.au/reports/dental-oral-health/oral-health-and-dental-care-in-australia',
    description: 'Australian Institute of Health and Welfare national data on oral health prevalence, dental access, and workforce. Useful for understanding the public health context.',
    type: 'Epidemiology'
  },
  {
    title: 'Cancer Council Australia — Head and Neck Cancer',
    url: 'https://www.cancer.org.au/cancer-information/types-of-cancer/head-and-neck-cancer',
    description: 'Information on oral and oropharyngeal cancers including risk factors (tobacco, alcohol, HPV), symptoms, diagnosis pathways, and treatment. Includes clinician resources.',
    type: 'Cancer Resources'
  },
  {
    title: 'Dental Health Services Victoria',
    url: 'https://www.dhsv.org.au',
    description: 'Comprehensive oral health clinical guidelines developed for dental practitioners. Includes guidance on managing dental emergencies and systemic conditions affecting oral health.',
    type: 'Clinical Guideline'
  },
  {
    title: 'RACGP — Oral Health in General Practice',
    url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/oral-health',
    description: 'RACGP guidelines on oral health screening and management in general practice. Relevant to NPs providing primary care with dental presentations.',
    type: 'Clinical Guideline'
  },
  {
    title: 'Royal Australasian College of Surgeons — Oral and Maxillofacial Surgery',
    url: 'https://www.surgeons.org/surgical-specialties/oral-and-maxillofacial-surgery',
    description: 'Information on oral and maxillofacial surgical speciality, referral pathways, and scope. Relevant when considering specialist referral for complex cases.',
    type: 'Specialist Resource'
  },
  {
    title: 'ADA — Emergency Dental Care',
    url: 'https://www.ada.org.au/dental-care/emergency-care',
    description: 'ADA guidance on dental emergencies including toothache, abscess, dental trauma, and avulsed teeth. Useful for primary care management and urgent referral decisions.',
    type: 'Emergency Care'
  }
];

export default function MaxillofacialDentalResourcesPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦷 Maxillofacial &amp; Dental</h1>
        <p>Dental emergencies, orofacial infections, oral mucosal conditions, facial trauma, and oral cancer recognition for NP practice.</p>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />

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
