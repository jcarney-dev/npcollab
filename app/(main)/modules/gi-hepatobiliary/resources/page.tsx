import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'GI & Hepatobiliary — Resources' };

const resources = [
  {
    title: 'Gastroenterological Society of Australia (GESA)',
    url: 'https://www.gesa.org.au',
    description: 'Australian gastroenterology guidelines, patient resources, and clinical practice updates.',
  },
  {
    title: 'Therapeutic Guidelines — Gastrointestinal',
    url: 'https://www.tg.org.au',
    description: 'Australian prescribing and management guidance for GI conditions.',
  },
  {
    title: 'Hepatitis Australia',
    url: 'https://www.hepatitisaustralia.com',
    description: 'Hepatitis B and C resources, testing guidance, and DAA prescribing information for clinicians.',
  },
  {
    title: 'Liver Foundation Australia',
    url: 'https://www.liver.org.au',
    description: 'NAFLD/MASLD, cirrhosis, and liver disease resources and patient education.',
  },
  {
    title: 'Cancer Council Australia — Bowel Cancer Screening',
    url: 'https://www.cancer.org.au/cancer-information/types-of-cancer/bowel-cancer',
    description: 'National Bowel Cancer Screening Program guidance and resources for NPs.',
  },
  {
    title: 'NPS MedicineWise — GI Prescribing',
    url: 'https://www.nps.org.au',
    description: 'Evidence-based prescribing for PPI use, H. pylori treatment, and IBS management.',
  },
  {
    title: "Crohn's and Colitis Australia",
    url: 'https://www.crohnsandcolitis.com.au',
    description: 'IBD clinical resources, patient support, and management guidelines.',
  },
  {
    title: 'RACGP — Red Book Preventive Activities',
    url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/red-book',
    description: 'Colorectal cancer screening recommendations and preventive GI health activities.',
  },
];

export default function GiResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫃 GI &amp; Hepatobiliary</h1>
        <p>Assessment and management of common gastrointestinal and hepatobiliary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />


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

    </>
  );
}
