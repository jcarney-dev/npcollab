import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Neurology' };

export default function NeurologyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧬 Neurology</h1>
        <p>Assessment and management of common neurological presentations in the Nurse Practitioner context, including headache, stroke, epilepsy, Parkinson's disease, and peripheral neuropathy.</p>
      </div>

      <ModuleTabs moduleId="neurology" />


      <div className="content-prose">
      <div className="highlight-box">
        <h4>⚠️ Red Flags — Immediate Action Required</h4>
        <ul>
          <li>Thunderclap headache — worst headache of life, sudden onset (subarachnoid haemorrhage until proven otherwise)</li>
          <li>New neurological deficit — facial droop, arm weakness, speech disturbance, ataxia (stroke — activate Code Stroke pathway)</li>
          <li>Headache with fever, neck stiffness, photophobia (meningitis/encephalitis)</li>
          <li>Headache with papilloedema, progressive neurological deficit, or altered consciousness (raised intracranial pressure)</li>
          <li>New seizure in adult without prior epilepsy diagnosis</li>
          <li>Status epilepticus — seizure lasting &gt;5 minutes, or recurrent seizures without recovery</li>
          <li>Acute spinal cord compression — bilateral weakness, sensory level, bowel/bladder dysfunction</li>
          <li>Cauda equina syndrome — saddle anaesthesia, urinary retention, bilateral leg weakness</li>
          <li>Guillain-Barré syndrome — ascending weakness, areflexia, respiratory compromise</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently assess, investigate, and manage many common neurological conditions including tension headache, migraine, stable epilepsy monitoring, peripheral neuropathy, and post-stroke follow-up. New neurological deficit, first-ever seizure, progressive neurological disease, and suspected CNS infection require urgent medical/specialist review. Neuroimaging requests (CT, MRI) are within NP scope where clinically indicated.
      </div>

      <h2>Common Presentations</h2>

      <h3>Headache</h3>
      <p>Headache is one of the most common presentations in NP practice. The vast majority are primary headache disorders (migraine, tension-type, cluster) — secondary causes must be excluded with red flag assessment.</p>
      <p><strong>Primary headache disorders — International Headache Society (IHS) Classification:</strong></p>
      <p><strong>Migraine:</strong> Unilateral (60%), pulsating, moderate–severe intensity, aggravated by routine activity, lasting 4–72 hours. Associated nausea/vomiting and/or photophobia and phonophobia. Migraine with aura (30%) — focal neurological symptoms (visual, sensory, speech, motor) developing over ≥5 minutes, lasting &lt;60 minutes, preceding or accompanying headache.</p>
      <p><strong>Tension-type headache (TTH):</strong> Bilateral, pressing/tightening quality, mild–moderate severity, not aggravated by activity, no vomiting, no more than one of photophobia or phonophobia. Most common primary headache. Episodic or chronic (≥15 days/month for ≥3 months).</p>
      <p><strong>Cluster headache:</strong> Severe unilateral orbital, supraorbital, or temporal pain lasting 15–180 minutes. Associated ipsilateral autonomic features: lacrimation, rhinorrhoea, nasal congestion, ptosis, miosis, conjunctival injection. Restlessness — patient paces (contrasts with migraine where lying still preferred). Cluster periods days to weeks, with remission periods.</p>
      <p><strong>Medication overuse headache (MOH):</strong> Headache ≥15 days/month in patients with pre-existing primary headache who regularly overuse acute/symptomatic headache medications (simple analgesics ≥15 days/month, triptans ≥10 days/month). Withdrawal of the overused medication is essential. Common and underrecognised.</p>

      <h3>Migraine Management</h3>
      <p><strong>Acute treatment:</strong> Early treatment improves response. First-line: NSAID ± antiemetic (metoclopramide) OR triptan (sumatriptan, rizatriptan). For severe attacks: nasal or SC sumatriptan if oral route not tolerated. Aspirin 900mg is an evidence-based option.</p>
      <p><strong>Preventive treatment (≥4 attacks/month, significant disability, or medication overuse):</strong> First-line: propranolol (contraindicated in asthma), topiramate (contraindicated in pregnancy — highly teratogenic, requires contraceptive counselling), amitriptyline. Second-line: valproate (teratogenic — see Mental Health module), candesartan. CGRP monoclonal antibodies (erenumab, fremanezumab) — PBS listed for chronic migraine meeting criteria.</p>

      <h3>Epilepsy</h3>
      <p>Epilepsy is defined as two or more unprovoked seizures more than 24 hours apart, or one unprovoked seizure with a high risk of recurrence. Seizure classification (ILAE 2017): focal onset, generalised onset, unknown onset. Focal to bilateral tonic-clonic (previously secondarily generalised) is a common seizure type.</p>
      <p><strong>First seizure assessment:</strong> Always requires urgent medical/specialist review and neuroimaging. EEG is essential. A single unprovoked seizure does not meet the criteria for epilepsy — however, if EEG or imaging shows high-risk features, treatment may be considered after one seizure.</p>
      <p><strong>Common antiepileptic drugs (AEDs) and NP monitoring role:</strong> Lamotrigine (requires slow titration — risk of Stevens-Johnson syndrome), sodium valproate (teratogenic), levetiracetam (behavioural side effects), carbamazepine (drug interactions, hyponatraemia risk), phenytoin (narrow therapeutic index, gingival hyperplasia, monitoring required).</p>
      <p><strong>NP monitoring role (stable epilepsy):</strong> Seizure diary review, AED adherence, drug level monitoring where relevant (phenytoin, carbamazepine), side effect monitoring, driving restrictions (advise patient — 12-month seizure-free period required in most states before driving), lifestyle advice (sleep, alcohol, stress), medication interactions, contraception counselling for women of reproductive age on teratogenic AEDs (valproate, topiramate, carbamazepine).</p>

      <h3>Stroke and TIA</h3>
      <p>Stroke is a time-critical emergency — "time is brain." The FAST acronym (Face, Arms, Speech, Time) identifies the most common stroke presentations. The NIHSS (National Institutes of Health Stroke Scale) quantifies deficits.</p>
      <p><strong>TIA:</strong> Transient neurological symptoms of vascular origin that resolve completely within 24 hours (typically within 60 minutes). High short-term risk of completed stroke — 10-15% risk within 90 days, highest in first 48 hours. ABCD2 score risk-stratifies TIA. Urgent assessment (ideally same day) and secondary prevention essential.</p>
      <p><strong>Secondary prevention post-stroke/TIA:</strong> Antiplatelet therapy (aspirin ± dipyridamole, or clopidogrel); anticoagulation if AF; statin therapy; ACE inhibitor/ARB for hypertension; carotid endarterectomy if significant ipsilateral carotid stenosis (≥50-70%); lifestyle modification. Blood pressure and lipid targets are stringent in secondary prevention.</p>
      <p><strong>Post-stroke NP management:</strong> Ongoing BP monitoring and management (target &lt;130/80 mmHg), adherence to antiplatelets/anticoagulants, statin therapy, diabetes management, AF monitoring (anticoagulation), depression and cognitive screening post-stroke (common), referral to rehabilitation services, driving restrictions counselling.</p>

      <h3>Parkinson's Disease</h3>
      <p>Parkinson's disease (PD) is the second most common neurodegenerative disease, predominantly affecting those over 60. Cardinal features: bradykinesia (required for diagnosis) plus at least one of: rest tremor (4–6 Hz, pill-rolling), rigidity (cogwheel), or postural instability.</p>
      <p><strong>Non-motor features</strong> (often overlooked): hyposmia (often pre-motor), constipation, REM sleep behaviour disorder, depression and anxiety (50%), cognitive impairment, autonomic dysfunction (orthostatic hypotension, urinary symptoms), pain.</p>
      <p><strong>NP role in PD management:</strong> Medication compliance, motor and non-motor symptom monitoring, dose timing adherence (strict timing is essential — "off" periods with delayed medications), falls risk assessment, swallowing difficulties (referral to speech pathology), nutrition, physiotherapy and exercise referral, carer support, multidisciplinary team coordination. Initiation and titration of dopaminergic therapy should be in consultation with neurologist.</p>
      <p><strong>Medication cautions:</strong> Avoid dopamine antagonists (metoclopramide, haloperidol, prochlorperazine) — can precipitate or worsen PD features. Use domperidone (not metoclopramide) for nausea in PD patients.</p>

      <h3>Peripheral Neuropathy</h3>
      <p>Common causes in NP practice: diabetes (most common), alcohol, B12 deficiency, hypothyroidism, uraemia, medications (metformin — B12 malabsorption; chemotherapy; isoniazid), hereditary (Charcot-Marie-Tooth).</p>
      <p><strong>Typical presentation:</strong> Distal, symmetric, sensory-predominant. "Glove and stocking" distribution. Symptoms: paraesthesia, numbness, burning pain, allodynia. Motor features (weakness) suggest demyelinating or vasculitic cause.</p>
      <p><strong>Assessment:</strong> History for cause, monofilament and vibration testing, ankle reflexes, gait. Bloods: glucose/HbA1c, B12, folate, TFTs, EUC, LFTs, serum protein electrophoresis (SPEP) if uncertain cause.</p>
      <p><strong>Management:</strong> Treat underlying cause (optimise diabetes control, B12 replacement, alcohol cessation). Neuropathic pain: pregabalin or gabapentin (first-line), duloxetine (evidence for diabetic neuropathy), amitriptyline (low dose). Topical: lidocaine patches, capsaicin cream. Foot care essential for diabetic neuropathy.</p>

      <div className="highlight-box" style={{marginTop:'1.5rem'}}>
        <h4>Key Australian Resources</h4>
        <ul>
          <li><strong>Therapeutic Guidelines: Neurology</strong> — evidence-based management of headache, epilepsy, stroke, Parkinson&apos;s, neuropathy</li>
          <li><strong>Stroke Foundation — strokefoundation.org.au</strong> — clinical guidelines, Fast Facts, patient resources</li>
          <li><strong>Epilepsy Action Australia — epilepsy.org.au</strong> — patient and clinician resources, driving guidelines</li>
          <li><strong>Parkinson&apos;s Australia — parkinsons.org.au</strong> — consumer and clinician resources</li>
          <li><strong>Migraine & Headache Australia</strong> — patient education, headache diary tools</li>
          <li><strong>RACGP Red Book — Stroke prevention</strong> — preventive care guidelines for cardiovascular/stroke risk</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Clinical content references Therapeutic Guidelines (Neurology), Stroke Foundation clinical guidelines, and ILAE classification.
      </div>
      </div>

    </>
  );
}
