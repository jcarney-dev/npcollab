import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Neurology — Resources' };

export default function NeurologyResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧬 Neurology</h1>
        <p>Assessment and management of common neurological presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="neurology" />


      <div className="content-prose">
      <h2>Clinical Guidelines</h2>
      <div className="resource-list">
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Therapeutic Guidelines: Neurology</div>
          <div className="resource-desc">Comprehensive evidence-based guidance on headache, epilepsy, stroke, Parkinson's disease, movement disorders, peripheral neuropathy, and dementia in the Australian context. Subscription via most health services.</div>
        </a>
        <a href="https://www.strokefoundation.org.au/clinical-resources" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Stroke Foundation — Clinical Guidelines for Stroke Management</div>
          <div className="resource-desc">Australian evidence-based guidelines for acute stroke management, rehabilitation, and secondary prevention. Includes the Clinical Care Standard for Stroke. Freely available online.</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/guidelines-for-preventive-activities-in-general-pra" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">RACGP Red Book — Cardiovascular and Stroke Risk</div>
          <div className="resource-desc">Preventive care guidelines relevant to stroke risk factor management — hypertension, lipids, diabetes, anticoagulation for AF.</div>
        </a>
        <a href="https://www.ilae.org/guidelines" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">ILAE — International League Against Epilepsy Guidelines</div>
          <div className="resource-desc">International guidelines for seizure and epilepsy classification, diagnosis, and treatment. Freely accessible. The 2017 classification system is the current standard.</div>
        </a>
        <a href="https://www.mja.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Medical Journal of Australia — Neurology Articles</div>
          <div className="resource-desc">Peer-reviewed Australian neurology practice articles. Search for headache, epilepsy, stroke, Parkinson's disease for relevant clinical reviews.</div>
        </a>
      </div>

      <h2>Headache</h2>
      <div className="resource-list">
        <a href="https://www.headacheaustralia.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Headache Australia</div>
          <div className="resource-desc">Australian patient and clinician headache resource. Includes headache diary downloads, information on migraine, tension-type, cluster, and medication overuse headache. Useful for patient education.</div>
        </a>
        <a href="https://ichd-3.org" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">ICHD-3 — International Classification of Headache Disorders (3rd edition)</div>
          <div className="resource-desc">Freely accessible diagnostic criteria for all headache disorders. Essential reference for confirming migraine, tension-type, cluster, and medication overuse headache diagnoses.</div>
        </a>
        <a href="https://www.nps.org.au/news/triptans-for-acute-migraine" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NPS MedicineWise — Triptans for Acute Migraine</div>
          <div className="resource-desc">Evidence-based guidance on appropriate triptan prescribing, including choice of agent, dosing, and medication overuse prevention. Freely available.</div>
        </a>
      </div>

      <h2>Epilepsy</h2>
      <div className="resource-list">
        <a href="https://www.epilepsy.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Epilepsy Action Australia</div>
          <div className="resource-desc">Australian peak body for epilepsy. Includes state-by-state driving licence guidelines, first aid resources, seizure diary tools, and support services. Essential for patient counselling.</div>
        </a>
        <a href="https://www.epilepsy.org.au/about-epilepsy/treatments/driving-with-epilepsy/" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Epilepsy Action — Driving and Epilepsy</div>
          <div className="resource-desc">State-specific driving restrictions for people with epilepsy in Australia. Standard requirement is 12 months seizure-free before driving. NPs must document driving advice given.</div>
        </a>
        <a href="https://www.nps.org.au/professionals/antiepileptic-medicines" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NPS MedicineWise — Antiepileptic Medicines</div>
          <div className="resource-desc">Practical prescribing guidance for antiepileptic drugs including drug interactions, pregnancy considerations, and monitoring requirements. Freely accessible.</div>
        </a>
      </div>

      <h2>Stroke</h2>
      <div className="resource-list">
        <a href="https://strokefoundation.org.au/what-we-do/treatment-programs/clinical-care-standards/stroke-clinical-care-standard" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Stroke Foundation — Stroke Clinical Care Standard</div>
          <div className="resource-desc">Australian Commission on Safety and Quality in Health Care standard for stroke care. Defines quality indicators for acute and post-acute stroke management. Relevant to NP post-stroke follow-up.</div>
        </a>
        <a href="https://www.heartfoundation.org.au/conditions/stroke" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Heart Foundation — Stroke Resources</div>
          <div className="resource-desc">Australian resources for AF management, anticoagulation for stroke prevention, and cardiovascular risk reduction. Includes consumer-facing materials for patient education.</div>
        </a>
        <a href="https://strokefoundation.org.au/what-we-do/help-after-stroke" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Stroke Foundation — Help After Stroke</div>
          <div className="resource-desc">StrokeLine (1800 787 653) — telephone information and referral service for stroke survivors and carers. EnableMe online community. Useful for patient referral.</div>
        </a>
      </div>

      <h2>Parkinson's Disease</h2>
      <div className="resource-list">
        <a href="https://www.parkinsons.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Parkinson's Australia</div>
          <div className="resource-desc">National peak body. Includes clinician resources, consumer information, state-based support services, and the Parkinson's Nurse programme. ParkinsonNet model of multidisciplinary care information.</div>
        </a>
        <a href="https://movementdisordersociety.org/resources/clinical-tools/" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Movement Disorder Society — Clinical Tools</div>
          <div className="resource-desc">Validated rating scales for Parkinson's disease including MDS-UPDRS (motor and non-motor assessment), Non-Motor Symptom Scale (NMSS), and PDQ-39 (quality of life). Freely accessible.</div>
        </a>
      </div>

      <h2>Validated Tools</h2>
      <div className="resource-list">
        <a href="https://www.migraineresearch.com.au/midas" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">MIDAS — Migraine Disability Assessment Scale</div>
          <div className="resource-desc">5-item tool quantifying headache-related disability over 3 months. Grades I–IV (I = minimal, IV = severe). Useful for establishing preventive therapy indication and monitoring treatment response. Freely available.</div>
        </a>
        <a href="https://www.ninds.nih.gov/health-information/public-education/brain-basics/know-stroke" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NIHSS — NIH Stroke Scale</div>
          <div className="resource-desc">11-item standardised neurological deficit scoring tool for acute stroke. Score 0–42. Essential for acute stroke documentation. Free online training and certification available.</div>
        </a>
        <a href="https://www.abcd2score.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">ABCD2 Score — TIA Risk Stratification</div>
          <div className="resource-desc">Risk stratification tool for short-term stroke risk following TIA. Age, BP, clinical features, duration, diabetes. Score ≥4 = moderate-high risk, warrants urgent assessment. Freely accessible calculator.</div>
        </a>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Resources current as of 2025 — verify currency before clinical use.
      </div>
      </div>

    </>
  );
}
