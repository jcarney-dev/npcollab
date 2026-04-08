import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Aged Care' };

export default function AgedCarePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🏥 Aged Care</h1>
        <p>Assessment and management of common aged care presentations in the Nurse Practitioner context, including delirium, dementia, falls, polypharmacy, and advance care planning.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />


      <div className="content-prose">
      <div className="highlight-box">
        <h4>⚠️ Red Flags — Immediate Action Required</h4>
        <ul>
          <li>Acute confusion or delirium — sudden change from baseline (always a medical emergency requiring cause identification)</li>
          <li>Unexplained fall with head injury — anticoagulated patients require urgent CT brain</li>
          <li>Syncope or collapse — exclude cardiac cause (ECG, lying/standing BP)</li>
          <li>Acute functional decline — new inability to perform ADLs without clear explanation</li>
          <li>Sepsis in older adults — may present atypically without fever (hypothermia, confusion, falls)</li>
          <li>Urinary retention — especially in older men; can precipitate delirium</li>
          <li>Signs of elder abuse — unexplained injuries, financial irregularities, carer conflict, fearfulness</li>
          <li>Rapid weight loss — &gt;5% body weight in 1 month or &gt;10% in 6 months</li>
          <li>New onset dysphagia — aspiration risk; urgent speech pathology assessment</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs working in aged care settings can independently assess and manage most common conditions including delirium, dementia, falls, continence, pain, polypharmacy, and advance care planning. Geriatrician input is valuable for complex cases, capacity assessment in contested situations, and initiation of dementia medications. NPs are well placed to coordinate multidisciplinary care and drive quality use of medicines in residential aged care.
      </div>

      <h2>Common Presentations</h2>

      <h3>Delirium</h3>
      <p>Delirium is an acute neuropsychiatric syndrome characterised by disturbance in attention, awareness, and cognition that develops over a short period and represents a change from baseline. It is a medical emergency — always indicating an underlying medical cause.</p>
      <p><strong>DSM-5 features:</strong> acute onset and fluctuating course; inattention; disorganised thinking; altered level of consciousness. Hyperactive (agitated, combative), hypoactive (withdrawn, lethargic — most commonly missed), and mixed subtypes.</p>
      <p><strong>4AT score:</strong> validated bedside tool for delirium detection. Score ≥4 is highly sensitive for delirium. Assess: Alertness, AMT4 (Abbreviated Mental Test-4), Attention (months of year backwards), Acute change or fluctuating course.</p>
      <p><strong>Common precipitants (I WATCH DEATH):</strong> Infection (UTI, pneumonia, skin), Withdrawal (alcohol, benzodiazepines), Acute metabolic (electrolyte disturbance, renal/hepatic failure), Trauma (fracture, head injury), CNS pathology (stroke, tumour, seizure), Hypoxia, Deficiencies (B12, thiamine), Endocrine (thyroid, adrenal, glucose), Acute vascular (MI, PE), Toxins/drugs (opioids, anticholinergics, steroids), Heavy metals.</p>
      <p><strong>Management:</strong> Identify and treat cause. Non-pharmacological measures first: reorientation (clocks, calendars, familiar faces), sensory aids (glasses, hearing aids), adequate lighting, familiar routines, mobilisation, adequate hydration. Pharmacological (only if severe agitation with risk of harm): low-dose haloperidol or quetiapine — use minimum effective dose for shortest period. Avoid benzodiazepines (worsen delirium) except in alcohol withdrawal or benzodiazepine withdrawal.</p>

      <h3>Dementia</h3>
      <p>Dementia affects approximately 400,000 Australians. Alzheimer's disease accounts for 60–70%, vascular dementia 15–20%, Lewy body dementia 5–10%, frontotemporal dementia 5–10%. Accurate diagnosis matters for prognosis, treatment, and family planning.</p>
      <p><strong>Core features:</strong> Cognitive decline in ≥2 domains (memory, language, visuospatial, executive function, behaviour) sufficient to impair daily function, representing a decline from a previous level, not explained by delirium or psychiatric illness.</p>
      <p><strong>Distinguishing features by type:</strong> Alzheimer's — insidious onset, progressive episodic memory loss (new learning), later language and spatial function. Vascular — stepwise decline, cardiovascular risk factors, neurological signs. Lewy body — fluctuating cognition, parkinsonism, visual hallucinations, REM sleep behaviour disorder (often precedes cognitive decline). Frontotemporal — personality and behaviour changes (disinhibition, apathy), early relative preservation of memory, onset often &lt;65 years.</p>
      <p><strong>NP management role:</strong> Cognitive screening (MoCA, MMSE), medication review (address reversible causes — B12, thyroid, medications), referral to ACAT (Aged Care Assessment Team) and geriatrician/neurologist for complex cases, initiation and monitoring of cholinesterase inhibitors (donepezil, rivastigmine) where endorsed, BPSD (Behavioural and Psychological Symptoms of Dementia) management, carer support, advance care planning, driving referral (mandatory reporting requirements vary by state), safety assessment.</p>
      <p><strong>BPSD:</strong> Agitation, aggression, wandering, psychosis, depression, and anxiety occur in up to 90% of people with dementia. Non-pharmacological approaches first (person-centred care, environmental modification, music therapy, structured activity). Antipsychotics only for severe distress or safety risk — increased mortality risk in elderly with dementia (black box warning); use lowest effective dose, regular review, and document risk-benefit discussion.</p>

      <h3>Falls</h3>
      <p>Falls affect one in three Australians over 65 annually. Consequences include fractures (hip fracture carries 20–30% 1-year mortality), head injury, fear of falling (leading to inactivity and further deconditioning), and loss of independence.</p>
      <p><strong>Risk factors:</strong> Previous fall (strongest predictor), gait and balance impairment, muscle weakness, visual impairment, cognitive impairment, orthostatic hypotension, medications (polypharmacy ≥4 medications, particularly sedatives, opioids, antihypertensives, diuretics, antidepressants, antipsychotics), environmental hazards.</p>
      <p><strong>Assessment:</strong> Timed Up and Go (TUG) test — &gt;12 seconds indicates significantly elevated fall risk. Berg Balance Scale for detailed assessment. Orthostatic BP (lying to standing — drop ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 minutes = orthostatic hypotension). Medication review (falls risk medications). Vision assessment. Cognitive screen. Foot and footwear review.</p>
      <p><strong>Multifactorial intervention:</strong> Evidence-based falls prevention is multifactorial. Exercise (balance and strength training — Otago programme), medication review (deprescribe where possible), vision correction, home safety assessment (OT), treatment of orthostatic hypotension, vitamin D supplementation if deficient, hip protectors for high-risk patients in residential care. Refer to falls prevention programme where available.</p>

      <h3>Polypharmacy and Deprescribing</h3>
      <p>Polypharmacy (commonly defined as ≥5 regular medications) affects more than 50% of older Australians, rising to 90% of residential aged care residents. Inappropriate polypharmacy is associated with falls, delirium, hospitalisation, and reduced quality of life.</p>
      <p><strong>Potentially Inappropriate Medications (PIMs) in older adults — Beers Criteria and STOPP/START:</strong> First-generation antihistamines (diphenhydramine), benzodiazepines, sedating antidepressants (amitriptyline — anticholinergic burden), antipsychotics (unless for specific indication), NSAIDs (GI bleeding, renal impairment, fluid retention), oral hypoglycaemics causing hypoglycaemia (gliclazide, glipizide — tighten glycaemic targets in frail elderly), proton pump inhibitors without indication.</p>
      <p><strong>Deprescribing approach:</strong> Review indication for each medication. Assess for adverse effects and drug interactions. Consider patient goals and life expectancy. Use evidence-based tools (STOPP/START, Medstopper, NPS MedicineWise deprescribing guidelines). Taper rather than cease abruptly where appropriate. Monitor after ceasing. Patient and family engagement essential.</p>

      <h3>Advance Care Planning</h3>
      <p>Advance care planning (ACP) is a process of reflection and communication about future health care values, goals, and wishes. It is a core NP competency in aged care settings. Documentation should be in place before loss of decision-making capacity.</p>
      <p><strong>Key documents (variable by state):</strong> Advance Care Directive (ACD) — documents values and wishes; Enduring Power of Attorney (medical/personal); Goals of Care (GOC) form — identifies preferred goals (curative, restorative, comfort) and ceiling of treatment; Resuscitation Plan (in Victoria: ACRP — Advance Care Resuscitation Plan); Residential Aged Care facility documentation.</p>
      <p><strong>NP role:</strong> Initiate ACP conversations early, while capacity is intact. Explore values and goals (not just interventions). Identify substitute decision-maker. Complete and lodge documentation appropriately. Communicate with treating team and family. Review regularly — particularly after significant health events. Refer to specialist palliative care for complex cases or end-of-life planning.</p>

      <div className="highlight-box" style={{marginTop:'1.5rem'}}>
        <h4>Key Australian Resources</h4>
        <ul>
          <li><strong>Aged Care Quality and Safety Commission</strong> — agedcarequality.gov.au — standards, complaints, guidance</li>
          <li><strong>My Aged Care</strong> — myagedcare.gov.au — referral portal, ACAT assessment, services</li>
          <li><strong>Therapeutic Guidelines: Aged Care</strong> — evidence-based prescribing for older adults</li>
          <li><strong>STOPP/START criteria</strong> — validated screening tool for inappropriate prescribing in older adults</li>
          <li><strong>Advance Care Planning Australia</strong> — advancecareplanning.org.au — state-specific ACD forms, resources</li>
          <li><strong>Dementia Australia</strong> — dementia.org.au — consumer and clinician resources, national helpline (1800 100 500)</li>
          <li><strong>NPS MedicineWise — Deprescribing</strong> — evidence-based deprescribing guidance, consumer materials</li>
          <li><strong>Falls Prevention Network Australia</strong> — fallsnetwork.neura.edu.au — Otago exercise programme, clinical tools</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Clinical content references Therapeutic Guidelines (Aged Care), Aged Care Quality Standards, and Australian Commission on Safety and Quality in Health Care resources.
      </div>
      </div>

    </>
  );
}
