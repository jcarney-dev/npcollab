import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Ophthalmology Assessment',
};

export default function EyesAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👁️ Ophthalmology</h1>
        <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways</p>
      </div>
      <ModuleTabs moduleId="eyes" />
      <div className="content-prose">
        <h2>Ophthalmic History</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❓</div><h4>Presenting Complaint Questions</h4></div>
            <ul>
              <li>When did the problem start and how quickly?</li>
              <li>Is one or both eyes affected?</li>
              <li>Any change in vision — blurring, loss, distortion?</li>
              <li>Is there pain? Describe character — ache, sharp, grittiness</li>
              <li>Any discharge? Colour and consistency?</li>
              <li>Photophobia or phonophobia?</li>
              <li>Watering or dry eye symptoms?</li>
              <li>Halos, floaters, or flashes of light?</li>
              <li>Associated headache?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>Relevant Background History</h4></div>
            <ul>
              <li>Previous eye conditions or surgery</li>
              <li>Glasses or contact lens use and hygiene</li>
              <li>Diabetes, hypertension, or autoimmune disease</li>
              <li>Current medications including eye drops</li>
              <li>Family history of glaucoma or AMD</li>
              <li>Any recent trauma or chemical exposure</li>
              <li>Occupation — screen time, UV exposure</li>
              <li>Systemic symptoms — fever, joint pain, rash</li>
            </ul>
          </div>
        </div>
        <h2>Physical Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔍</div><h4>Examination Steps</h4></div>
            <ul>
              <li>Visual acuity — Snellen chart corrected and uncorrected</li>
              <li>Visual fields — confrontation testing</li>
              <li>External inspection — lids, lashes, periorbital area</li>
              <li>Pupil assessment — PEARL, direct and consensual</li>
              <li>Extraocular movements — H-pattern</li>
              <li>Conjunctiva and sclera — evert upper lid</li>
              <li>Cornea — fluorescein staining if indicated</li>
              <li>Fundoscopy — disc, macula, vessels, periphery</li>
              <li>IOP if tonometry available and glaucoma suspected</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Investigations to Consider</h4></div>
            <ul>
              <li>Fluorescein staining — corneal abrasion or ulcer</li>
              <li>Swab for MC&amp;S — bacterial conjunctivitis</li>
              <li>Blood glucose — new diabetic eye disease</li>
              <li>FBE, ESR, CRP — scleritis or uveitis</li>
              <li>ANA, RF — associated autoimmune disease</li>
              <li>Tonometry — glaucoma screening</li>
              <li>Referral for formal visual field testing</li>
              <li>OCT if available for AMD or glaucoma</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
