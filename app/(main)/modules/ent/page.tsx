import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'ENT Clinical Module',
  description: 'Australian NP ENT clinical module — ear, nose, and throat presentations including otitis media, sinusitis, pharyngitis, and referral criteria. SOAP notes, resources, and quiz.',
  openGraph: {
    title: 'ENT Clinical Module | NPCollab',
    description: 'Australian NP ENT clinical module — ear, nose, and throat presentations including otitis media, sinusitis, pharyngitis, and referral criteria. SOAP notes, resources, and quiz.',
    url: 'https://npcollab.com/modules/ent',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/ent',
  },
};

export default function ENTPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👂 ENT (Ears, Nose & Throat)</h1>
        <p>Assessment framework, SOAP note, resources, and quiz for ENT presentations</p>
      </div>
      <ModuleTabs moduleId="ent" />
      <div className="content-prose">
        <p>ENT presentations are among the most frequent in primary care. NPs must be confident in differentiating viral from bacterial illness, managing common conditions independently, and identifying serious presentations requiring urgent referral.</p>
        <div className="highlight-box">
          <h4>⚠️ Red Flags — Refer Urgently</h4>
          <ul>
            <li>Mastoiditis (post-auricular swelling, protrusion of pinna)</li>
            <li>Peritonsillar abscess (uvula deviation, trismus, drooling)</li>
            <li>Epiglottitis (drooling, stridor, toxic appearance)</li>
            <li>Sudden sensorineural hearing loss (refer within 24–48 hours)</li>
            <li>Epistaxis unresponsive to first-aid management</li>
            <li>Neck mass persistent beyond 3 weeks</li>
            <li>Stridor in any patient</li>
            <li>Hoarseness more than 3 weeks in a smoker</li>
          </ul>
        </div>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👂</div><h4>Ear Conditions</h4></div>
            <ul>
              <li>Acute otitis media</li>
              <li>Otitis media with effusion</li>
              <li>Otitis externa</li>
              <li>Cerumen impaction</li>
              <li>Tympanic membrane perforation</li>
              <li>Sudden SNHL ⚠️</li>
              <li>Mastoiditis ⚠️</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👄</div><h4>Throat Conditions</h4></div>
            <ul>
              <li>Viral pharyngitis and tonsillitis</li>
              <li>Group A Strep pharyngitis</li>
              <li>Infectious mononucleosis (EBV)</li>
              <li>Peritonsillar abscess ⚠️</li>
              <li>Epiglottitis ⚠️</li>
              <li>Laryngitis and hoarseness</li>
            </ul>
          </div>
        </div>
      </div>
    
      <ModuleNav moduleId="ent" />

      <ModuleSponsorSlot moduleSlug="ent" />
    </>
  );
}
