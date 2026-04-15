import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Alcohol and Other Drugs Clinical Module',
  description: 'Australian NP drugs and alcohol module — alcohol use disorder, substance dependence, brief intervention, and harm reduction. SOAP notes and quiz.',
  openGraph: {
    title: 'Alcohol and Other Drugs Clinical Module | NPCollab',
    description: 'Australian NP drugs and alcohol module — alcohol use disorder, substance dependence, brief intervention, and harm reduction. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/drugs-alcohol',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/drugs-alcohol',
  },
};

export default function DrugsAlcoholPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧪 Drugs &amp; Alcohol</h1>
        <p>Substance use disorders — assessment and management in NP practice</p>
      </div>

      <ModuleTabs moduleId="drugs-alcohol" />


      <div className="content-prose">
      <p>Substance use disorders are among the most prevalent and impactful health conditions seen in Australian NP practice, across emergency, primary care, mental health, and community settings. This module covers alcohol use disorder, opioid dependence, stimulant misuse, and cannabis use — including assessment frameworks, withdrawal management, pharmacotherapy (including buprenorphine/naloxone and naltrexone), and the principles of harm minimisation that underpin Australian policy. Brief intervention skills and knowledge of state-specific drug and alcohol services are essential for all NPs.</p>

      <div className="highlight-box" style={{ marginBottom: '2rem' }}>
        <strong>Red Flags — Act Urgently</strong>
        <ul>
          <li>Alcohol withdrawal seizure — diazepam IV/IM, call 000</li>
          <li>Delirium tremens — agitation, fever, hallucinations, autonomic instability — emergency transfer</li>
          <li>Opioid overdose — unresponsive, pinpoint pupils, respiratory depression — naloxone, call 000</li>
          <li>Stimulant toxicity — chest pain, severe hypertension, arrhythmia — emergency transfer</li>
          <li>Wernicke&apos;s encephalopathy — confusion, ophthalmoplegia, ataxia — IV thiamine urgently</li>
          <li>Acute alcohol poisoning — GCS impairment, aspiration risk — call 000</li>
          <li>Serotonin syndrome — agitation, clonus, hyperthermia, tachycardia — emergency transfer</li>
          <li>Suicidal ideation in intoxicated patient — immediate safety assessment</li>
        </ul>
      </div>

      <section>
        <h2>Core Principles for NP Practice</h2>
        <p>Substance use disorders are common, undertreated, and highly stigmatised. NPs are well-positioned to provide non-judgmental, evidence-based care in primary care and community settings. Key principles:</p>
        <ul>
          <li>Use non-stigmatising language — &quot;person with alcohol use disorder&quot; not &quot;alcoholic&quot;</li>
          <li>Brief intervention is highly effective — even 5 minutes makes a difference</li>
          <li>Harm reduction is a valid and evidence-based approach</li>
          <li>Pharmacotherapy (buprenorphine, naltrexone, acamprosate) significantly improves outcomes</li>
          <li>Treat co-occurring mental health conditions — they are the rule, not the exception</li>
          <li>Recovery is possible — relapse is part of the process, not failure</li>
        </ul>
      </section>

      <section>
        <h2>Alcohol</h2>

        <h3>Screening</h3>
        <ul>
          <li><strong>AUDIT</strong> (Alcohol Use Disorders Identification Test) — 10 questions, comprehensive</li>
          <li><strong>AUDIT-C</strong> — 3-question brief screen</li>
          <li>Single question: &quot;How often do you have 6 or more standard drinks on one occasion?&quot; — positive screen if any frequency &gt;never</li>
          <li>Australian guidelines: no more than 4 standard drinks on any day, no more than 10 per week</li>
        </ul>

        <h3>Brief Intervention — FRAMES</h3>
        <ul>
          <li><strong>Feedback</strong> — give personalised feedback on risks</li>
          <li><strong>Responsibility</strong> — emphasise personal responsibility for change</li>
          <li><strong>Advice</strong> — give clear advice to change</li>
          <li><strong>Menu</strong> — offer a range of options</li>
          <li><strong>Empathy</strong> — use empathic counselling style</li>
          <li><strong>Self-efficacy</strong> — reinforce belief in ability to change</li>
        </ul>

        <h3>Alcohol Use Disorder</h3>
        <p>Alcohol use disorder (AUD) encompasses hazardous, harmful, and dependent drinking. Pharmacotherapy options:</p>
        <ul>
          <li><strong>Naltrexone</strong> (oral or depot): reduces craving and reward. Avoid if opioid-dependent or liver disease. PBS-listed.</li>
          <li><strong>Acamprosate</strong>: reduces protracted withdrawal symptoms, best started after detox. PBS-listed.</li>
          <li><strong>Disulfiram</strong>: aversion therapy — causes unpleasant reaction with alcohol. Requires commitment and monitoring.</li>
          <li><strong>Nalmefene</strong>: reduces heavy drinking days — newer agent.</li>
        </ul>

        <h3>Alcohol Withdrawal</h3>
        <p>Risk of withdrawal in physically dependent drinkers who reduce or stop abruptly. CIWA-Ar scale assesses severity. Symptoms: tremor, sweating, anxiety, nausea (mild); hallucinations (moderate); seizures, delirium tremens (severe — life-threatening).</p>
        <p>Management: diazepam symptom-triggered protocol for moderate-severe withdrawal (10–20mg PO initially, repeat as needed using CIWA-Ar score). Thiamine 300mg IV before any glucose — prevents Wernicke&apos;s encephalopathy. Hospital admission for severe withdrawal, seizure history, comorbidities, or social issues.</p>

        <h3>Wernicke&apos;s Encephalopathy</h3>
        <p>Thiamine deficiency — medical emergency. Classic triad: confusion, ophthalmoplegia (nystagmus, lateral gaze palsy), ataxia. Only one-third have complete triad. Treat ANY suspected case with IV thiamine 500mg TDS for 3–5 days (do not wait for confirmation). Oral thiamine is poorly absorbed and inadequate for treatment.</p>
      </section>

      <section>
        <h2>Opioids</h2>

        <h3>Opioid Use Disorder</h3>
        <p>Opioid use disorder (OUD) can involve heroin, illicit fentanyl, or prescription opioids. Opioid agonist treatment (OAT) is the gold standard — significantly reduces mortality, crime, and blood-borne virus transmission.</p>
        <ul>
          <li><strong>Buprenorphine-naloxone (Suboxone)</strong>: First-line OAT. Sublingual formulation. Partial opioid agonist — ceiling effect on respiratory depression, safer than methadone. Monthly depot injection (Brixta, Sublocade) improves adherence.</li>
          <li><strong>Methadone</strong>: Full opioid agonist, higher overdose risk, more complex prescribing. Supervised dosing required. Requires specific prescriber authority.</li>
        </ul>
        <p>NPs can prescribe buprenorphine in most Australian states with appropriate training and authority. This is a significant area of NP scope expansion that improves access to treatment.</p>

        <h3>Opioid Overdose Recognition and Management</h3>
        <p>Recognise: unconscious or unresponsive, slow/shallow breathing or apnoea, pinpoint pupils, cyanosis, gurgling respirations.</p>
        <ol>
          <li>Call 000</li>
          <li>Stimulate — sternal rub, call name</li>
          <li>Position in recovery position if breathing, or airway management if not</li>
          <li>Naloxone (Narcan) — 400mcg IM or intranasal. Repeat every 2–3 minutes up to 3 doses if no response. Duration shorter than most opioids — patient may re-sedate</li>
          <li>Rescue breathing if apnoeic</li>
          <li>Stay until ambulance arrives</li>
        </ol>
        <p>Naloxone is available over the counter in Australian pharmacies. NPs should prescribe take-home naloxone to all patients on opioids and their carers.</p>
      </section>

      <section>
        <h2>Stimulants</h2>

        <h3>Methamphetamine</h3>
        <p>High rates of use in Australia — particularly in rural and remote areas. Presentations: acute intoxication (agitation, paranoia, tachycardia, hypertension, hyperthermia), chronic use (dental erosion, skin picking, cognitive impairment, psychosis).</p>
        <p>Management of acute methamphetamine toxicity: calm environment, benzodiazepines for agitation (diazepam or lorazepam), cooling for hyperthermia, antihypertensives for severe hypertension, antipsychotics for psychosis. No specific antidote. Methamphetamine-induced psychosis: can be indistinguishable from primary psychosis — treat with antipsychotics. Most resolves with abstinence — some persists.</p>

        <h3>Cocaine</h3>
        <p>Less prevalent in Australia than methamphetamine. Cardiovascular complications are the primary concern — myocardial infarction (even in young people), arrhythmias, aortic dissection. Avoid beta-blockers in acute cocaine toxicity — causes unopposed alpha-adrenergic stimulation worsening hypertension and coronary spasm.</p>
      </section>

      <section>
        <h2>Cannabis</h2>
        <p>Most widely used illicit drug in Australia. Cannabis use disorder is common — characterised by dependence, tolerance, and withdrawal (irritability, anxiety, insomnia, appetite loss). Associated with psychosis risk (particularly high-THC products), cognitive impairment in adolescents, and respiratory disease from smoking. No approved pharmacotherapy — CBT and motivational interviewing are evidence-based. <strong>Cannabinoid hyperemesis syndrome</strong>: cyclical vomiting in heavy cannabis users, relieved by hot showers — haloperidol effective acutely.</p>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement. Refer to Therapeutic Guidelines and state/territory alcohol and drug service guidelines for current protocols.</p>
      </div>
      </div>

      <ModuleNav moduleId="drugs-alcohol" />

      <ModuleSponsorSlot moduleSlug="drugs-alcohol" />

    </div>
  );
}
