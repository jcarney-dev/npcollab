import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Ophthalmology',
};

export default function EyesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👁️ Ophthalmology</h1>
        <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways</p>
      </div>
      <ModuleTabs moduleId="eyes" />
      <div className="content-prose">
        <h2>Clinical Overview</h2>
        <p>Ophthalmic presentations are common in primary care. As a Nurse Practitioner, you must distinguish <strong>benign self-limiting conditions</strong> (e.g. viral conjunctivitis) from <strong>urgent sight-threatening emergencies</strong> (e.g. acute angle-closure glaucoma) requiring immediate referral.</p>
        <div className="highlight-box">
          <h4>⚠️ Red Flags — Refer Urgently</h4>
          <ul>
            <li>Sudden loss of vision (partial or complete)</li>
            <li>Painful red eye with decreased visual acuity</li>
            <li>Fixed, dilated or irregularly shaped pupil</li>
            <li>Halos around lights with headache and nausea</li>
            <li>Eye trauma, chemical injury, or foreign body</li>
            <li>Proptosis or orbital swelling</li>
            <li>Diplopia of new onset</li>
            <li>Curtain or shadow across the visual field</li>
          </ul>
        </div>
        <h2>Common Presentations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔴</div><h4>Red Eye Differentials</h4></div>
            <ul>
              <li>Viral conjunctivitis (most common)</li>
              <li>Bacterial conjunctivitis</li>
              <li>Allergic conjunctivitis</li>
              <li>Subconjunctival haemorrhage</li>
              <li>Episcleritis and Scleritis</li>
              <li>Acute anterior uveitis</li>
              <li>Acute angle-closure glaucoma ⚠️</li>
              <li>Microbial keratitis ⚠️</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👁️</div><h4>Vision Change Causes</h4></div>
            <ul>
              <li>Refractive error (common, benign)</li>
              <li>Cataracts (gradual, painless)</li>
              <li>Age-related macular degeneration</li>
              <li>Diabetic retinopathy</li>
              <li>Central retinal artery or vein occlusion ⚠️</li>
              <li>Retinal detachment ⚠️</li>
              <li>Optic neuritis (consider MS)</li>
              <li>Glaucoma (insidious field loss)</li>
            </ul>
          </div>
        </div>
        <div className="info-box">
          <p>👉 Continue to the <Link href="/modules/eyes/assessment/">Assessment tab</Link> for targeted history and examination.</p>
        </div>
      </div>
    
      <ModuleSponsorSlot moduleSlug="eyes" />
    </>
  );
}
