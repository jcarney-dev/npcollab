import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'GU & Nephrology — Resources' };

const resources = [
  {
    title: 'Kidney Health Australia',
    url: 'https://kidney.org.au',
    description: 'CKD guidelines, patient resources, and clinical tools for Australian practitioners including the CKD management guide.',
  },
  {
    title: 'Therapeutic Guidelines — Urinary Tract',
    url: 'https://www.tg.org.au',
    description: 'Australian antibiotic guidance for UTI, pyelonephritis, and urological infections.',
  },
  {
    title: 'CARI Guidelines — CKD',
    url: 'https://www.cariguidelines.org',
    description: 'Caring for Australians and New Zealanders with Kidney Impairment — evidence-based CKD management guidelines.',
  },
  {
    title: 'Prostate Cancer Foundation of Australia',
    url: 'https://www.pcfa.org.au',
    description: 'PSA testing guidance, prostate cancer information, and clinical resources for Australian practitioners.',
  },
  {
    title: 'Urological Society of Australia and New Zealand (USANZ)',
    url: 'https://www.usanz.org.au',
    description: 'Urology clinical guidelines and referral information for Australian practitioners.',
  },
  {
    title: 'Australian STI Management Guidelines',
    url: 'https://www.sti.guidelines.org.au',
    description: 'Evidence-based STI testing and management including urethritis and genital infections.',
  },
  {
    title: 'NPS MedicineWise — Kidney and Urinary',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based prescribing for UTI, renal dose adjustments, and nephrotoxic medication guidance.',
  },
  {
    title: 'Kidney Supportive Care',
    url: 'https://kidney.org.au/your-kidneys/support',
    description: 'Renal supportive and palliative care resources for patients with advanced CKD.',
  },
];

export default function GuNephrologyResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫘 GU &amp; Nephrology</h1>
        <p>Assessment and management of urinary tract, renal, and male genitourinary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gu-nephrology" />


      <div className="content-prose">
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
      </div>

      <ModuleNav moduleId="gu-nephrology" />

    </>
  );
}
