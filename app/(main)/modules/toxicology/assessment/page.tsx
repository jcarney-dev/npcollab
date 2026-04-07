import ModuleTabs from '@/components/ModuleTabs';

export default function ToxicologyAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">⚗️</span>
        <div>
          <span className="label">Clinical Module — Assessment</span>
          <h1>Toxicology Assessment</h1>
          <p>Systematic toxicological history, toxidrome examination, pupil assessment, and investigations for poisoning presentations.</p>
        </div>
      </div>

      <ModuleTabs moduleId="toxicology" />

      <h2>Toxicology History</h2>

      <h3>Exposure History (Key Questions)</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>What and How Much</h4>
          <ul>
            <li>What was taken? (substance name, formulation — immediate vs extended release)</li>
            <li>How much? (tablet count, volume — estimate if unknown)</li>
            <li>Any other substances? (poly-drug overdose is common)</li>
            <li>Route of exposure: ingested, inhaled, injected, skin contact, eye</li>
            <li>Any treatment given before arrival? (home management, first aid)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>When and Why</h4>
          <ul>
            <li>When? (time of ingestion — critical for paracetamol nomogram, NAC decision)</li>
            <li>Was it intentional or accidental?</li>
            <li>Any emesis since ingestion? (affects absorbed dose)</li>
            <li>Context: home alone, witnessed, delayed presentation</li>
            <li>Access to medications, household chemicals, substances</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Past Medical History</h4>
          <ul>
            <li>Previous overdose attempts</li>
            <li>Psychiatric history — depression, suicide risk factors</li>
            <li>Medications — prescribed and OTC (potential co-ingestion)</li>
            <li>Substance use history — alcohol, opioids, stimulants</li>
            <li>Allergies — particularly to antidotes (NAC — anaphylactoid reaction)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Always Call</h4>
          <ul>
            <li>Poisons Information Centre: 13 11 26 (24/7)</li>
            <li>Complex cases, unusual agents, uncertain management</li>
            <li>Industrial or agricultural chemicals</li>
            <li>Plant or animal envenomation</li>
            <li>Paediatric ingestions — even small amounts of some substances are dangerous</li>
          </ul>
        </div>
      </div>

      <h2>Toxicological Examination</h2>

      <h3>Vital Signs (All Critically Important)</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Cardiovascular</h4>
          <ul>
            <li>BP and HR: hypertension and tachycardia (sympathomimetic, anticholinergic), hypotension (opioid, TCA, beta-blocker)</li>
            <li>ECG: QTc prolongation (TCA, antipsychotics), QRS widening (TCA), arrhythmias</li>
            <li>Bradycardia: opioid, cholinergic, beta-blocker, calcium channel blocker</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Respiratory and Temperature</h4>
          <ul>
            <li>RR and SpO2: respiratory depression (opioid, sedatives)</li>
            <li>Temperature: hyperthermia (serotonin syndrome, anticholinergic, sympathomimetic), hypothermia (opioid, alcohol, sedative)</li>
            <li>GCS — level of consciousness, airway protection</li>
          </ul>
        </div>
      </div>

      <h3>Pupil Assessment</h3>
      <div className="info-box">
        <ul>
          <li><strong>Miosis (pinpoint pupils)</strong> — opioids, cholinergics, clonidine, pontine haemorrhage</li>
          <li><strong>Mydriasis (dilated pupils)</strong> — anticholinergics, sympathomimetics, serotonin syndrome, hypoxia</li>
          <li><strong>Normal pupils</strong> — sedative-hypnotic toxidrome (benzodiazepines, alcohol, GHB) — key distinguishing feature from opioids</li>
        </ul>
      </div>

      <h3>Systematic Toxicological Examination</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Skin</h4>
          <ul>
            <li>Dry skin (anticholinergic)</li>
            <li>Diaphoretic (sympathomimetic, serotonin syndrome, cholinergic, NMS)</li>
            <li>Track marks / injection sites (IV drug use)</li>
            <li>Cherry-red skin (CO poisoning — late and unreliable sign)</li>
            <li>Flushing (anticholinergic, niacin, alcohol)</li>
            <li>Jaundice (paracetamol hepatotoxicity — 24–72 hours post-ingestion)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Neurological</h4>
          <ul>
            <li>Clonus, hyperreflexia (serotonin syndrome — key finding)</li>
            <li>Muscle rigidity &apos;lead pipe&apos; (NMS)</li>
            <li>Fasciculations (organophosphate)</li>
            <li>Tremor (lithium, sympathomimetic, alcohol withdrawal)</li>
            <li>Nystagmus (phenytoin, alcohol, PCP)</li>
            <li>Seizures — TCA, cocaine, theophylline, alcohol withdrawal, isoniazid</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Oral and Respiratory</h4>
          <ul>
            <li>Oropharyngeal burns (caustic ingestion)</li>
            <li>Hypersalivation (cholinergic, organophosphate)</li>
            <li>Dry mouth (anticholinergic)</li>
            <li>Bronchospasm / wheeze (cholinergic, beta-blocker)</li>
            <li>Breath odour: garlic (organophosphate), acetone (DKA, isopropanol), bitter almonds (cyanide)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Gastrointestinal</h4>
          <ul>
            <li>Bowel sounds: absent (anticholinergic, ileus), hyperactive (cholinergic)</li>
            <li>Urinary retention (anticholinergic)</li>
            <li>Incontinence (cholinergic, seizure)</li>
            <li>Abdominal tenderness (paracetamol hepatotoxicity, iron)</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Mandatory in All Intentional Overdose</h4>
          <ul>
            <li>12-lead ECG — QTc, QRS widening, arrhythmias</li>
            <li>Paracetamol level — even if no paracetamol reportedly taken</li>
            <li>Salicylate level — aspirin is commonly co-ingested</li>
            <li>Blood glucose — hypoglycaemia (insulin, sulphonylurea, alcohol)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Bloods</h4>
          <ul>
            <li>EUC — renal function, electrolytes (lithium toxicity, rhabdomyolysis)</li>
            <li>LFTs — paracetamol hepatotoxicity baseline</li>
            <li>Coagulation — paracetamol hepatotoxicity, anticoagulant ingestion</li>
            <li>Lithium level (if lithium toxicity suspected)</li>
            <li>CK — rhabdomyolysis (prolonged unconsciousness, sympathomimetics)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Blood Gas and Specific Tests</h4>
          <ul>
            <li>ABG — metabolic acidosis (salicylate, metformin, CO, methanol), co-oximetry for CO</li>
            <li>Carboxyhaemoglobin — CO poisoning (requires co-oximetry blood gas — NOT pulse oximetry)</li>
            <li>Urine drug screen — qualitative only (confirms presence, not toxicity)</li>
            <li>Lactate — organophosphate, metformin, cyanide toxicity</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Imaging</h4>
          <ul>
            <li>CXR — aspiration pneumonia, pulmonary oedema</li>
            <li>AXR — radio-opaque tablets (iron, enteric-coated medications)</li>
            <li>CT head — altered consciousness, head injury, haemorrhage</li>
          </ul>
        </div>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
