import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = { title: 'Mental Health' };

export default function MentalHealthPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧠 Mental Health</h1>
        <p>Assessment and management of common mental health presentations in the Nurse Practitioner context, including depression, anxiety, psychosis, and crisis intervention.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />


      <div className="content-prose">
      <div className="highlight-box">
        <h4>⚠️ Red Flags — Immediate Action Required</h4>
        <ul>
          <li>Active suicidal ideation with plan or intent</li>
          <li>Active homicidal ideation</li>
          <li>Acute psychosis with risk to self or others</li>
          <li>Severe self-neglect (not eating, drinking, or engaging in ADLs)</li>
          <li>Acute serotonin syndrome — agitation, hyperthermia, clonus</li>
          <li>Neuroleptic malignant syndrome — hyperthermia, rigidity, altered consciousness</li>
          <li>Acute alcohol withdrawal with seizures or delirium tremens</li>
          <li>First presentation psychosis in adolescent or young adult</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> As an NP, you can independently assess, diagnose, and manage most common mental health presentations including depression, anxiety disorders, and stable chronic mental illness. Acute psychosis, first-episode psychosis, and complex presentations typically warrant specialist input. Always document risk assessment thoroughly. Involuntary treatment under the Mental Health Act is a Medical Officer function — NPs can initiate assessment under relevant state legislation in some jurisdictions.
      </div>

      <h2>Common Presentations</h2>

      <h3>Depression</h3>
      <p>Major Depressive Disorder (MDD) affects approximately 1 in 7 Australians at some point in their life. Diagnosis requires ≥5 of 9 DSM-5 criteria present for ≥2 weeks, with at least one being depressed mood or anhedonia.</p>
      <p><strong>DSM-5 criteria:</strong> depressed mood, anhedonia, weight/appetite change, sleep disturbance, psychomotor change, fatigue, worthlessness/guilt, concentration difficulty, suicidal ideation/thoughts of death.</p>
      <p><strong>Severity:</strong> PHQ-9 is the validated tool — mild (5–9), moderate (10–14), moderately severe (15–19), severe (≥20). PHQ-9 item 9 screens directly for suicidal ideation.</p>
      <p><strong>First-line management:</strong> Mild–moderate: psychological intervention (CBT via Better Access, Lifeline, Beyond Blue), lifestyle (exercise has strong evidence), watchful waiting. Moderate–severe: antidepressant therapy plus psychological intervention. SSRIs are first-line (sertraline, escitalopram). Allow 4–6 weeks for therapeutic response. Review at 2 weeks after initiation.</p>
      <p><strong>Special considerations:</strong> Screen for bipolar — antidepressants alone can precipitate mania. Ask about previous hypomanic episodes, family history. Use MDQ screening tool if concerned.</p>

      <h3>Anxiety Disorders</h3>
      <p>Generalised Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, and PTSD are the most frequently encountered anxiety disorders in primary/NP practice. GAD7 is the validated screening tool — mild (5–9), moderate (10–14), severe (≥15).</p>
      <p><strong>GAD:</strong> Excessive, uncontrollable worry about multiple domains, ≥6 months, with ≥3 associated symptoms (restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance). First-line: CBT, SSRI/SNRI. Avoid benzodiazepines as first-line — dependence risk, does not treat underlying disorder.</p>
      <p><strong>Panic Disorder:</strong> Recurrent unexpected panic attacks with persistent concern about further attacks or maladaptive behavioural change. First-line: CBT (specifically including interoceptive exposure), SSRI. Benzodiazepines may be used short-term for acute attacks but carry dependence risk.</p>
      <p><strong>PTSD:</strong> Following traumatic event — intrusion symptoms, avoidance, negative alterations in cognition/mood, altered arousal/reactivity, ≥1 month. Trauma-focused CBT and EMDR are first-line psychological therapies. SSRIs are pharmacological first-line (sertraline endorsed by Australian guidelines). Refer to trauma-specialised psychologist.</p>

      <h3>Psychotic Disorders</h3>
      <p>Schizophrenia and schizoaffective disorder are complex conditions requiring specialist psychiatric involvement, particularly for diagnosis and initiation of antipsychotic therapy. NPs may be involved in ongoing monitoring, medication adherence, and coordination of care in stable patients on established treatment.</p>
      <p><strong>Positive symptoms:</strong> hallucinations (most commonly auditory), delusions, disorganised speech/behaviour. <strong>Negative symptoms:</strong> flat affect, alogia, avolition, anhedonia. <strong>Cognitive symptoms:</strong> impaired working memory, attention, executive function.</p>
      <p><strong>Management of stable schizophrenia in NP practice:</strong> Medication adherence monitoring, metabolic monitoring (weight, waist circumference, BP, fasting glucose, lipids — antipsychotics carry significant metabolic risk), depot injection administration, Mental State Examination documentation, risk assessment, early warning sign review, and coordination with Case Manager/psychiatrist.</p>
      <p><strong>Monitoring on antipsychotics:</strong> Baseline and ongoing ECG (QTc prolongation risk with many antipsychotics), prolactin if symptomatic, FBC for clozapine (mandatory registry monitoring), metabolic panel every 3–6 months.</p>

      <h3>Substance Use Disorders</h3>
      <p>Alcohol Use Disorder (AUD) and other substance use disorders are commonly encountered. AUDIT-C is a brief validated screen for hazardous alcohol use. CAGE questionnaire (Cut down, Annoyed, Guilty, Eye-opener) is a simple 4-question screen.</p>
      <p><strong>Brief intervention:</strong> For hazardous/harmful use without dependence — FRAMES approach (Feedback, Responsibility, Advice, Menu of options, Empathy, Self-efficacy). Effective in primary care settings.</p>
      <p><strong>Alcohol withdrawal:</strong> CIWA-Ar scale guides management. Mild withdrawal (CIWA-Ar &lt;10): oral diazepam or oxazepam symptom-triggered. Severe withdrawal or delirium tremens: requires hospital admission. Wernicke&apos;s encephalopathy prevention — thiamine supplementation mandatory before any glucose in at-risk patients (parenteral Thiamine 500mg TDS IV/IM for 3 days in high-risk patients).</p>
      <p><strong>Opioid Use Disorder:</strong> Opioid Agonist Treatment (OAT) with buprenorphine-naloxone (Suboxone) is evidence-based. NPs can prescribe OAT under relevant state schedules, typically requiring specific authority. Refer to state-based OAT guidelines. Naloxone provision and training for all patients at risk of overdose.</p>

      <h3>Risk Assessment</h3>
      <p>A structured suicide risk assessment is required for any patient with suicidal ideation, self-harm, or significant depression/psychosis.</p>
      <p><strong>Protective factors:</strong> Future orientation, children at home, religious beliefs, strong social support, engagement with treatment, reasons for living.</p>
      <p><strong>Risk factors:</strong> Previous attempt (strongest predictor), family history of suicide, current substance misuse, access to means, hopelessness, recent loss/stressor, male sex, older age, Indigenous background (higher rates in Australia), chronic pain, recent discharge from psychiatric admission.</p>
      <p><strong>Documentation:</strong> Explicitly document: nature and content of ideation (passive vs active), plan, intent, access to means, protective factors, clinical judgement of risk level (low/moderate/high), and safety plan. A safety plan should be co-developed with the patient and include: warning signs, coping strategies, reasons for living, support people, professional contacts, and means restriction advice.</p>

      <div className="highlight-box" style={{marginTop:'1.5rem'}}>
        <h4>Key Australian Resources</h4>
        <ul>
          <li><strong>Beyond Blue (1300 22 4636)</strong> — depression, anxiety support</li>
          <li><strong>Lifeline (13 11 14)</strong> — crisis support, 24/7</li>
          <li><strong>SANE Australia (1800 187 263)</strong> — complex mental illness support</li>
          <li><strong>headspace</strong> — youth mental health (12–25 years)</li>
          <li><strong>Better Access to Mental Health Care</strong> — Medicare-funded psychology (up to 10 sessions/year under GP/NP Mental Health Treatment Plan)</li>
          <li><strong>Therapeutic Guidelines: Psychotropic</strong> — evidence-based prescribing guidance</li>
          <li><strong>RACGP Mental Health Care in General Practice</strong> — comprehensive clinical guidance</li>
          <li><strong>5th National Mental Health and Suicide Prevention Plan</strong> — national policy framework</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including Therapeutic Guidelines (Psychotropic) and the Royal Australian and New Zealand College of Psychiatrists (RANZCP) clinical practice guidelines.
      </div>
      </div>

    
      <ModuleSponsorSlot moduleSlug="mental-health" />
    </>
  );
}
