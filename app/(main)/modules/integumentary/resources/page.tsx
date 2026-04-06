import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Integumentary — Resources' };

const resources = [
  {
    title: 'Australasian College of Dermatologists',
    url: 'https://www.dermcoll.edu.au',
    description: 'Australian dermatology guidelines, referral pathways, and patient education resources.',
  },
  {
    title: 'Skin Cancer College Australasia',
    url: 'https://www.skincancercollege.org',
    description: 'Skin cancer detection, dermoscopy training, and clinical guidelines for Australian practitioners.',
  },
  {
    title: 'Therapeutic Guidelines — Dermatology',
    url: 'https://www.tg.org.au',
    description: 'Australian prescribing guidance for skin infections, inflammatory conditions, and wound management.',
  },
  {
    title: 'Cancer Council Australia — Skin Cancer',
    url: 'https://www.cancer.org.au/cancer-information/types-of-cancer/skin-cancer',
    description: 'Skin cancer prevention, detection, and management resources including the SunSmart program.',
  },
  {
    title: 'Wounds Australia',
    url: 'https://www.woundsaustralia.com.au',
    description: 'Australian wound management guidelines, best practice documents, and clinical resources.',
  },
  {
    title: 'NPS MedicineWise — Dermatology',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based prescribing for topical corticosteroids, antifungals, and skin infection antibiotics.',
  },
  {
    title: 'DermNet NZ',
    url: 'https://dermnetnz.org',
    description: 'Comprehensive dermatology reference — highly regarded by Australian clinicians, with excellent clinical images.',
  },
  {
    title: 'Eczema Association Australasia',
    url: 'https://www.eczema.org.au',
    description: 'Patient and clinician resources for eczema management including action plans and trigger guides.',
  },
];

export default function IntegumentaryResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Integumentary</div>
        <h1>🩹 Resources</h1>
        <p>Curated Australian resources for dermatology, skin cancer, and wound management.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />

      <ul className="resource-list">
        {resources.map((r) => (
          <li key={r.url} className="resource-link">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">
              {r.title}
            </a>
            <p className="resource-desc">{r.description}</p>
          </li>
        ))}
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Links were current at time of publication — verify current guidelines before clinical use.
      </div>
    </>
  );
}
