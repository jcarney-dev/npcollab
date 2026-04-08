import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Palliative Care' };

export default function PalliativeCarePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🕊️ Palliative Care</h1>
        <p>Symptom management, advance care planning, and end-of-life care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />


      <div className="content-prose">
      <div className="highlight-box">
        <h4>⚠️ Red Flags — Act Immediately</h4>
        <ul>
          <li>Acute severe pain uncontrolled on current regimen — breakthrough dose and urgent review</li>
          <li>Respiratory distress — subcutaneous midazolam and morphine, position, fan</li>
          <li>Acute spinal cord compression — back pain with neurological symptoms, urgent dexamethasone and transfer</li>
          <li>Superior vena cava obstruction — facial swelling, dyspnoea, urgent dexamethasone</li>
          <li>Hypercalcaemia of malignancy — confusion, nausea, polyuria, IV fluids and bisphosphonate</li>
          <li>Massive haemorrhage — dark towels, midazolam for distress, family support</li>
          <li>Seizure in end-stage disease — midazolam subcutaneous, safety, review anticonvulsants</li>
          <li>Signs of dying — mottling, Cheyne-Stokes breathing, peripherally shut down — initiate comfort care pathway</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> Australian NPs working in palliative care have a central role in comprehensive symptom assessment and management, advance care planning facilitation, goals of care conversations, prescribing palliative medications including opioids and subcutaneous medications, supporting families and carers, and coordinating care across settings — community, residential aged care, and inpatient settings.
      </div>

      <h2>Core Principles</h2>
      <p>Palliative care aims to improve quality of life for patients and families facing life-limiting illness through prevention and relief of suffering — physical, psychological, social, and spiritual. It is not exclusively end-of-life care — it is appropriate from the time of diagnosis of a life-limiting condition, alongside curative or disease-modifying treatment.</p>

      <h2>Common Symptoms and Management</h2>

      <h3>Pain</h3>
      <p>The most common symptom in palliative care. Always assess using validated tools — NRS (0–10), or the Abbey Pain Scale for cognitively impaired patients. Follow the WHO analgesic ladder. Opioids are the mainstay for moderate-severe cancer pain.</p>
      <ul>
        <li><strong>Regular (around the clock) dosing</strong> for background pain control</li>
        <li><strong>Breakthrough dose</strong> = 1/6 of total 24-hour opioid dose, available every 1–4 hours PRN</li>
        <li><strong>Subcutaneous route</strong> preferred when oral route is lost — convert to CSCI (continuous subcutaneous infusion) via syringe driver</li>
        <li><strong>Morphine</strong> is first-line opioid in Australia for cancer pain. Oxycodone and hydromorphone are alternatives.</li>
        <li>Review and titrate every 24–48 hours in acute settings</li>
        <li><strong>Adjuvant analgesics:</strong> dexamethasone (nerve compression), amitriptyline/gabapentin (neuropathic), NSAIDs (bone pain)</li>
      </ul>

      <h3>Dyspnoea</h3>
      <p>Affects up to 70% of patients with advanced cancer. Low-dose morphine (2–4mg oral or 1–2mg subcutaneous) reduces the sensation of breathlessness — evidence is clear that it does not hasten death when used appropriately. Midazolam addresses the anxiety component. Positioning (sitting upright), a fan directed at the face, and supplemental oxygen only if hypoxic (SpO₂ &lt;90%) — oxygen is not routinely beneficial in normoxic patients.</p>

      <h3>Nausea and Vomiting</h3>
      <p>Identify the most likely cause to guide antiemetic choice. Opioid-induced: metoclopramide or haloperidol. Bowel obstruction: cyclizine, haloperidol, octreotide — avoid prokinetics in obstruction. Raised intracranial pressure: dexamethasone, cyclizine. Metabolic (hypercalcaemia, uraemia): haloperidol. Anticipatory/anxiety: lorazepam, midazolam.</p>

      <h3>Delirium</h3>
      <p>Common in the last days of life — hyperactive (agitated), hypoactive (withdrawn), or mixed. Treat reversible causes where appropriate to goals of care: infection, dehydration, urinary retention, constipation, medication toxicity. Pharmacological management: haloperidol first-line, midazolam for refractory agitated delirium. Family education and support are essential.</p>

      <h3>Constipation</h3>
      <p>Almost universal with opioid use — tolerance does not develop to this side effect. Always prescribe a laxative when starting opioids. Coloxyl with senna (docusate + senna) first-line. Titrate up as opioid dose increases. Methylnaltrexone (subcutaneous) for opioid-induced constipation refractory to oral laxatives.</p>

      <h3>Oral Care</h3>
      <p>Dry mouth (xerostomia) affects up to 80% of palliative patients. Regular mouth care every 2–4 hours in dying patients — ice chips, artificial saliva, small sips of water, mouth swabs. Oral candidiasis: nystatin oral suspension or fluconazole.</p>

      <h2>Advance Care Planning</h2>
      <p>ACP is the process of reflecting on and communicating values, wishes, and preferences for future healthcare. Key documents in Australia:</p>
      <ul>
        <li><strong>Advance Care Directive (ACD)</strong> — legally binding in most states; patient documents their wishes</li>
        <li><strong>Enduring Power of Attorney (Medical/Health)</strong> — appoints a substitute decision maker</li>
        <li><strong>Goals of Care form</strong> — clinical document recording agreed treatment goals</li>
        <li><strong>Resuscitation plan (NFR/DNAR/AND)</strong> — Not for Resuscitation order</li>
      </ul>
      <p>NPs have a key role in initiating and facilitating ACP conversations. These conversations should happen early — not just at end of life.</p>

      <h2>Recognising the Dying Phase</h2>
      <p>The dying phase (last days to hours) is recognised by: profound weakness and being bed-bound, reduced or absent oral intake, reduced consciousness and increased sleep, peripheral mottling beginning at the knees, cooling of extremities, Cheyne-Stokes breathing, and reduced or no urine output.</p>
      <p>Management at end of life: discontinue non-essential medications, continue essential symptom control via CSCI, ensure anticipatory prescribing (PRN medications charted and available at home), mouth care, pressure area care, family communication and support, and attendance to spiritual and cultural needs.</p>

      <h2>Voluntary Assisted Dying (VAD)</h2>
      <p>VAD is legal in all Australian states and territories. NPs may have a role in discussions and referral depending on jurisdiction and scope. Eligibility criteria vary by state but generally include: adult, Australian resident, decision-making capacity, diagnosis of advanced progressive disease expected to cause death within 12 months (6 months for non-neurodegenerative conditions), and suffering that cannot be relieved acceptably. NPs must be familiar with their jurisdiction&apos;s legislation and conscientious objection provisions.</p>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including CareSearch, Palliative Care Australia, and Therapeutic Guidelines (Palliative Care).
      </div>
      </div>

    </>
  );
}
