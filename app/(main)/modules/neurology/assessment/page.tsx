import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Neurology — Assessment' };

export default function NeurologyAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧬 Neurology</h1>
        <p>Assessment and management of common neurological presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="neurology" />


      <div className="content-prose">
      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Headache History</h4>
          <ul>
            <li>Onset — sudden (thunderclap), gradual, or progressive</li>
            <li>Duration — seconds, minutes, hours, days</li>
            <li>Location — unilateral, bilateral, occipital, frontal</li>
            <li>Quality — throbbing, pressing, stabbing, band-like</li>
            <li>Severity — 0–10, impact on function</li>
            <li>Associated features — nausea, vomiting, photophobia, phonophobia, aura, autonomic (lacrimation, nasal discharge, ptosis)</li>
            <li>Aggravating factors — activity, position, Valsalva, cough</li>
            <li>Relieving factors — rest, dark room, analgesics, triptans</li>
            <li>Frequency and pattern — episodic or chronic (≥15 days/month)</li>
            <li>First ever vs recurrent — if recurrent, any change in character</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Headache Red Flags (SSNOOP10)</h4>
          <ul>
            <li><strong>S</strong>ystemic symptoms — fever, weight loss, night sweats</li>
            <li><strong>S</strong>econdary risk factors — HIV, malignancy, immunosuppression</li>
            <li><strong>N</strong>eurological symptoms or signs — focal deficit, altered consciousness, papilloedema</li>
            <li><strong>O</strong>nset — sudden (thunderclap), or new onset after age 50</li>
            <li><strong>O</strong>lder age — new headache &gt;50 years (temporal arteritis)</li>
            <li><strong>P</strong>attern change — progressive worsening, new pattern</li>
            <li><strong>P</strong>ostural component — worse lying flat (raised ICP) or standing (low pressure)</li>
            <li>Precipitated by <strong>V</strong>alsalva — cough, sneeze, exertion (Chiari, raised ICP)</li>
            <li>Pregnancy or postpartum</li>
            <li>Previous history of cancer</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Seizure History</h4>
          <ul>
            <li>Eyewitness account — what did the observer see?</li>
            <li>Onset — warning (aura), focal or generalised from onset</li>
            <li>Duration — including post-ictal phase</li>
            <li>Movements — tonic, clonic, tonic-clonic, absence, myoclonic</li>
            <li>Eyes — deviation, open, blinking</li>
            <li>Loss of consciousness or awareness</li>
            <li>Tongue biting — lateral tongue bite (epileptic) vs tip (syncope)</li>
            <li>Incontinence — urinary or faecal</li>
            <li>Post-ictal state — confusion, drowsiness, Todd&apos;s paresis, headache, duration</li>
            <li>Triggers — sleep deprivation, alcohol, illness, missed medications, flashing lights</li>
            <li>Previous seizures — diagnosis, AED therapy</li>
            <li>Family history of epilepsy</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Stroke / TIA History (FAST+)</h4>
          <ul>
            <li><strong>Time</strong> of onset — last known well time (critical for thrombolysis eligibility)</li>
            <li><strong>F</strong>acial droop — unilateral</li>
            <li><strong>A</strong>rm weakness — unilateral</li>
            <li><strong>S</strong>peech — dysarthria, aphasia, dysphasia</li>
            <li>Visual disturbance — monocular vs binocular, field defect, diplopia</li>
            <li>Ataxia — limb or gait</li>
            <li>Dysphagia, dysarthria, vertigo — posterior circulation</li>
            <li>Headache with onset of deficit (haemorrhagic stroke)</li>
            <li>Symptoms fully resolved? (TIA) — time to resolution</li>
            <li>Risk factors — AF, hypertension, diabetes, hyperlipidaemia, smoking, previous stroke/TIA</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Movement Disorder History</h4>
          <ul>
            <li>Tremor — rest vs action/intention, unilateral vs bilateral, onset side</li>
            <li>Stiffness — rigidity, time of day variation, morning stiffness</li>
            <li>Slowness — bradykinesia, micrographia, reduced arm swing</li>
            <li>Balance and falls — frequency, circumstances, injuries</li>
            <li>Non-motor features — hyposmia (loss of smell), constipation, sleep disturbance (REM behaviour disorder), mood, cognition</li>
            <li>Drug history — antipsychotics, metoclopramide (drug-induced parkinsonism)</li>
            <li>Family history of movement disorder</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Neuropathy History</h4>
          <ul>
            <li>Onset — acute, subacute, chronic</li>
            <li>Distribution — distal vs proximal, symmetric vs asymmetric</li>
            <li>Symptoms — numbness, paraesthesia, burning, allodynia, weakness</li>
            <li>Pattern — glove and stocking, focal (mononeuropathy)</li>
            <li>Associated medical conditions — diabetes, alcohol, autoimmune</li>
            <li>Medications — metformin, chemotherapy, isoniazid, amiodarone</li>
            <li>Falls risk — assess impact on gait and balance</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Dizziness / Vertigo History</h4>
          <ul>
            <li>Type — true vertigo (spinning) vs presyncope (light-headedness) vs disequilibrium</li>
            <li>Duration of episodes — seconds (BPPV), minutes (TIA, Ménière&apos;s), hours (Ménière&apos;s), days (vestibular neuritis)</li>
            <li>Triggers — head movement (BPPV), standing (orthostatic), Valsalva</li>
            <li>Associated features — nausea, vomiting, tinnitus, hearing loss, ear fullness (Ménière&apos;s), neurological symptoms</li>
            <li>Medications — antihypertensives, vestibular suppressants</li>
            <li>Head impulse, nystagmus, test of skew — HINTS exam to differentiate central vs peripheral vertigo</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Medication History</h4>
          <ul>
            <li>Current AEDs — dose, duration, adherence, last level if relevant</li>
            <li>Antiplatelet or anticoagulant therapy — dose, indication, adherence</li>
            <li>Analgesics — frequency (MOH risk), type (opioid vs NSAID vs paracetamol)</li>
            <li>Dopamine antagonists — metoclopramide, haloperidol, prochlorperazine (parkinsonian side effects)</li>
            <li>Medications causing neuropathy — metformin, amiodarone, isoniazid, chemotherapy</li>
            <li>OCP or hormone therapy (migraine with aura — increased stroke risk)</li>
          </ul>
        </div>
      </div>

      <h2>Neurological Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General</h4>
          <ul>
            <li>Level of consciousness — GCS (Eyes, Verbal, Motor)</li>
            <li>Orientation — time, place, person</li>
            <li>Higher cortical function — language, attention, memory</li>
            <li>Gait — observation entering room, stride, arm swing, turning</li>
            <li>Romberg test — eyes open then closed</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cranial Nerves (I–XII)</h4>
          <ul>
            <li>I — olfaction (test with familiar scents if indicated)</li>
            <li>II — visual acuity (Snellen), visual fields (confrontation), fundoscopy (papilloedema, haemorrhage)</li>
            <li>III, IV, VI — eye movements (all directions), ptosis, pupil size and reactivity (RAPD)</li>
            <li>V — facial sensation (all three divisions), corneal reflex, jaw movements</li>
            <li>VII — facial symmetry (forehead, eye closure, smile), nasolabial fold flattening</li>
            <li>VIII — hearing (finger rub), Rinne and Weber if indicated</li>
            <li>IX, X — palate elevation, gag reflex, dysarthria, dysphagia</li>
            <li>XI — SCM and trapezius power</li>
            <li>XII — tongue protrusion (deviation toward weakness), fasciculations, atrophy</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Motor Examination</h4>
          <ul>
            <li>Inspection — wasting, fasciculations, hypertrophy, posture</li>
            <li>Tone — normal, spastic (pyramidal), rigid (cogwheel/lead pipe), flaccid</li>
            <li>Power — MRC scale 0–5 in all major muscle groups (proximal and distal, upper and lower limbs)</li>
            <li>Drift test — pronator drift (upper motor neuron sign)</li>
            <li>Coordination — finger-nose-finger, heel-shin, rapid alternating movements (dysdiadochokinesia)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Reflexes</h4>
          <ul>
            <li>Deep tendon reflexes — biceps (C5/6), triceps (C7), brachioradialis (C6), knee (L3/4), ankle (S1)</li>
            <li>Scale: 0 (absent), 1+ (diminished), 2+ (normal), 3+ (brisk), 4+ (clonus)</li>
            <li>Plantar response — Babinski sign (extensor = UMN lesion)</li>
            <li>Clonus — sustained vs unsustained, ankle or knee</li>
            <li>Hoffman sign — upper limb UMN indicator</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Sensory Examination</h4>
          <ul>
            <li>Light touch — cotton wool, dermatomal distribution</li>
            <li>Pinprick — sharp vs dull, sensory level if spinal cord suspected</li>
            <li>Vibration sense — 128 Hz tuning fork at bony prominences (MTP, medial malleolus, tibial tuberosity, ASIS)</li>
            <li>Proprioception — joint position sense at distal IP joints, toes</li>
            <li>Two-point discrimination if median nerve or cortical lesion suspected</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Meningism</h4>
          <ul>
            <li>Neck stiffness — passive flexion resistance</li>
            <li>Kernig&apos;s sign — inability to extend knee with hip flexed at 90°</li>
            <li>Brudzinski&apos;s sign — passive neck flexion causes hip and knee flexion</li>
            <li>Photophobia — ask patient, dim lights</li>
            <li>Jolt accentuation — worsening headache with rapid head rotation (sensitive for meningitis)</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <h3>Headache Investigations</h3>
      <ul>
        <li><strong>CT brain non-contrast:</strong> first-line for thunderclap headache (SAH), new neurological deficit, papilloedema, altered consciousness, or suspicion of intracranial pathology</li>
        <li><strong>CT angiography:</strong> if vascular malformation or aneurysm suspected following CT brain</li>
        <li><strong>Lumbar puncture (LP):</strong> if CT negative and SAH still suspected (&gt;6 hours after onset) — xanthochromia is diagnostic. Also for suspected meningitis if no contraindications</li>
        <li><strong>ESR and CRP:</strong> if temporal arteritis suspected (new headache over 50 with temporal artery tenderness, jaw claudication, visual symptoms)</li>
        <li><strong>MRI brain:</strong> progressive headache, atypical features, or where CT is insufficient (posterior fossa lesions)</li>
      </ul>

      <h3>Seizure Investigations</h3>
      <ul>
        <li><strong>EEG:</strong> essential for seizure classification and epilepsy diagnosis. Interical EEG may be normal — sleep-deprived EEG increases yield. Video EEG is the gold standard.</li>
        <li><strong>MRI brain:</strong> preferred to CT for first seizure evaluation — better for cortical dysplasia, hippocampal sclerosis, low-grade tumours</li>
        <li><strong>Blood tests:</strong> glucose (hypoglycaemia as provoking cause), Na (hyponatraemia), Ca, Mg, EUC (uraemia), LFTs, FBC, toxicology screen, AED levels (if on treatment)</li>
        <li><strong>12-lead ECG:</strong> exclude QT prolongation, cardiac arrhythmia (syncopal seizure mimic)</li>
      </ul>

      <h3>Stroke Investigations</h3>
      <ul>
        <li><strong>CT brain non-contrast (urgent):</strong> excludes haemorrhage before thrombolysis decision. May be normal in early ischaemic stroke.</li>
        <li><strong>CT angiography head/neck:</strong> identifies large vessel occlusion, carotid stenosis</li>
        <li><strong>12-lead ECG:</strong> identifies AF (cardioembolic source)</li>
        <li><strong>Carotid Doppler ultrasound:</strong> carotid stenosis assessment for surgical planning</li>
        <li><strong>Echocardiography:</strong> cardioembolic source (thrombus, PFO, valvular disease)</li>
        <li><strong>Bloods:</strong> FBC, EUC, LFTs, glucose, lipids, coagulation studies, HbA1c</li>
        <li><strong>Holter/prolonged cardiac monitoring:</strong> paroxysmal AF detection post-stroke</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Neurology), Stroke Foundation Australia.
      </div>
      </div>

    </>
  );
}
