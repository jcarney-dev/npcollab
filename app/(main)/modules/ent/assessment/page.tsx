import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'ENT Assessment',
};

export default function ENTAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👂 ENT (Ears, Nose & Throat)</h1>
        <p>Assessment framework, SOAP note, resources, and quiz for ENT presentations</p>
      </div>
      <ModuleTabs moduleId="ent" />
      <div className="content-prose">
        <h2>ENT History Questions</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👂</div><h4>Ear Symptoms</h4></div>
            <ul>
              <li>Otalgia — onset, severity, character, radiation</li>
              <li>Hearing loss — one or both ears, sudden or gradual?</li>
              <li>Discharge — colour, consistency, odour</li>
              <li>Tinnitus — character, duration, pulsatile?</li>
              <li>Vertigo and dizziness — type, triggers, associated nausea</li>
              <li>Recent URTI, swimming, or ear instrumentation</li>
              <li>Previous ear infections or surgery</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👃</div><h4>Nasal and Sinus Symptoms</h4></div>
            <ul>
              <li>Congestion — duration, unilateral or bilateral?</li>
              <li>Discharge — anterior or posterior, colour, consistency</li>
              <li>Anosmia or hyposmia</li>
              <li>Facial pain or pressure — worse on bending?</li>
              <li>Epistaxis — frequency, site, volume, precipitants</li>
              <li>Allergy history — seasonal vs perennial</li>
              <li>NSAID sensitivity — nasal polyp risk</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👄</div><h4>Throat and Voice</h4></div>
            <ul>
              <li>Sore throat — onset, severity, dysphagia</li>
              <li>Odynophagia vs dysphagia</li>
              <li>Voice change — hoarseness onset and duration</li>
              <li>Drooling or difficulty opening mouth</li>
              <li>Uvula position — central or deviated?</li>
              <li>Fever, tonsillar exudate</li>
              <li>McIsaac score criteria for strep risk</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>Background History</h4></div>
            <ul>
              <li>Immunosuppression — increased risk of unusual pathogens</li>
              <li>Diabetes — increased risk malignant otitis externa</li>
              <li>Anticoagulants — epistaxis management implications</li>
              <li>Occupation noise exposure — hearing loss</li>
              <li>Smoking history — head and neck cancer risk</li>
              <li>Childhood ear disease or grommets</li>
            </ul>
          </div>
        </div>
        <h2>ENT Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔦</div><h4>Ear Examination</h4></div>
            <ul>
              <li>Inspect pinna, post-auricular area, EAC</li>
              <li>Otoscopy: TM colour, light reflex, mobility, perforation</li>
              <li>Pneumatic otoscopy for effusion assessment</li>
              <li>Tragal tenderness for otitis externa</li>
              <li>Tuning fork tests: Rinne and Weber</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💡</div><h4>Throat Examination</h4></div>
            <ul>
              <li>Inspect lips, buccal mucosa, teeth and gums</li>
              <li>Tonsils — size 1 to 4, exudate, asymmetry</li>
              <li>Posterior pharyngeal wall</li>
              <li>Uvula — central or deviated</li>
              <li>Cervical lymphadenopathy — size, tenderness, mobility</li>
              <li>Laryngoscopy if hoarseness or stridor</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
