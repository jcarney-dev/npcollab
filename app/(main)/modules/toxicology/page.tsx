import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';
import ContributorCard from '@/components/ContributorCard';

export const metadata: Metadata = {
  title: 'Toxicology Clinical Module',
  description: 'Australian NP toxicology module — overdose management, toxic ingestions, envenomation, and poison centre guidance. Assessment, SOAP notes, and quiz.',
  openGraph: {
    title: 'Toxicology Clinical Module | NPCollab',
    description: 'Australian NP toxicology module — overdose management, toxic ingestions, envenomation, and poison centre guidance. Assessment, SOAP notes, and quiz.',
    url: 'https://npcollab.com/modules/toxicology',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/toxicology',
  },
};

export default function ToxicologyPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>⚗️ Toxicology</h1>
        <p>Toxidrome recognition, overdose management, antidotes, and the NP role in poisoning presentations.</p>
      </div>

      <ModuleTabs moduleId="toxicology" />


      <div className="content-prose">
      <p>Toxicological presentations are high-stakes scenarios that require rapid systematic assessment and a clear understanding of common toxidromes. Australian NPs in emergency, urgent care, and mental health settings regularly encounter intentional overdose, accidental poisoning, and iatrogenic drug toxicity. This module covers toxidrome recognition, antidote use, decontamination principles, and the NP's role in the acute management of poisoning — always in conjunction with Poisons Information Centre (13 11 26) guidance and emergency physician support where available.</p>

      <div className="highlight-box">
        <h2>🚨 Red Flags — Act Urgently — Call 000</h2>
        <ul>
          <li><strong>Unconscious or unresponsive patient following ingestion</strong> — airway, breathing, circulation, call 000</li>
          <li><strong>Respiratory depression</strong> — RR &lt;12, cyanosis, apnoea — opioid toxidrome until proven otherwise</li>
          <li><strong>Seizure following ingestion</strong> — benzodiazepines, call 000</li>
          <li><strong>Haemodynamic instability</strong> — hypotension, arrhythmia after ingestion</li>
          <li><strong>QTc prolongation &gt;500ms on ECG</strong> after ingestion (TCA, antipsychotic, some antibiotics)</li>
          <li><strong>Caustic ingestion</strong> — acid or alkali — severe oropharyngeal burns, do not induce vomiting</li>
          <li><strong>Suspected carbon monoxide poisoning</strong> — headache, confusion in enclosed space — SpO2 unreliable, co-oximetry required</li>
          <li><strong>Serotonin syndrome</strong> — hyperthermia, clonus, agitation, tachycardia — emergency</li>
          <li><strong>Cholinergic toxidrome</strong> — SLUDGE, bronchospasm, fasciculations — organophosphate until proven otherwise</li>
          <li><strong>Lithium toxicity</strong> — tremor, confusion, rigidity — narrow therapeutic index</li>
        </ul>
      </div>

      <div className="info-box">
        <h2>🇦🇺 Australian Poisons Information Centre: 13 11 26</h2>
        <p>Available 24/7 across Australia. Call for any poisoning query — uncertain management, unusual presentations, industrial exposures, antidote advice, and medication errors. Free service staffed by clinical toxicologists and specialist pharmacists. Every NP should have this number saved.</p>
      </div>

      <h2>The NP Role in Toxicology</h2>
      <p>
        Toxicology presentations are common in emergency, primary care, and mental health settings. NPs must be able to recognise toxidromes — the pattern of symptoms pointing to a class of toxin — initiate immediate life-saving measures before transfer, know when and how to use antidotes, contact the Poisons Information Centre (13 11 26), and assess intentional overdose including the psychiatric component.
      </p>

      <h2>Toxidrome Recognition</h2>
      <p>A toxidrome is a constellation of clinical signs pointing to a class of toxin. Recognising the pattern guides management before the specific agent is known.</p>

      <h3>Opioid Toxidrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> CNS depression, respiratory depression, miosis (pinpoint pupils), decreased bowel sounds, bradycardia, hypothermia.</p>
        <p><strong>Common agents:</strong> heroin, morphine, oxycodone, fentanyl, codeine, tramadol, methadone.</p>
        <p><strong>Antidote:</strong> Naloxone — 0.4–2mg IV/IM/intranasal, repeat every 2–3 minutes. Titrate to respiratory rate and consciousness (not to full reversal in dependent patients — causes acute withdrawal).</p>
      </div>

      <h3>Anticholinergic Toxidrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> &ldquo;Blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone.&rdquo; Mydriasis (dilated pupils), dry flushed skin, urinary retention, tachycardia, hyperthermia, confusion, hallucinations.</p>
        <p><strong>Common agents:</strong> antihistamines (diphenhydramine), tricyclic antidepressants (in overdose), antipsychotics, hyoscine, atropine.</p>
        <p><strong>Management:</strong> Physostigmine (specialist use only). Supportive care: benzodiazepines for agitation, cooling, catheter for retention.</p>
      </div>

      <h3>Cholinergic Toxidrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + bronchospasm, miosis, bradycardia, muscle fasciculations, weakness.</p>
        <p><strong>Common agents:</strong> organophosphate pesticides, nerve agents, carbamates.</p>
        <p><strong>Antidote:</strong> Atropine (titrated to dry secretions) + Pralidoxime (for organophosphates — reactivates cholinesterase before ageing). Large doses of atropine may be required. Decontaminate first. Emergency transfer.</p>
      </div>

      <h3>Sympathomimetic Toxidrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> Tachycardia, hypertension, hyperthermia, mydriasis, agitation, diaphoresis, tremor. Seizures in severe cases.</p>
        <p><strong>Common agents:</strong> cocaine, methamphetamine, MDMA (ecstasy), amphetamines.</p>
        <p><strong>Management:</strong> Benzodiazepines for agitation and seizures, cooling for hyperthermia. Avoid beta-blockers with cocaine. No specific antidote.</p>
      </div>

      <h3>Serotonin Syndrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> Triad — altered mental status, autonomic dysfunction (tachycardia, diaphoresis, hyperthermia), neuromuscular abnormalities (clonus, hyperreflexia, myoclonus). Hunter Criteria for diagnosis.</p>
        <p><strong>Common agents:</strong> SSRIs, SNRIs, MAOIs, tramadol, triptans, MDMA — often drug combinations.</p>
        <p><strong>Management:</strong> Cease serotonergic medications, benzodiazepines, cyproheptadine, cooling. Emergency transfer.</p>
      </div>

      <h3>Sedative-Hypnotic Toxidrome</h3>
      <div className="info-box">
        <p><strong>Signs:</strong> CNS depression, slurred speech, ataxia, confusion, respiratory depression (in severe overdose). Normal pupils (distinguish from opioids — miosis).</p>
        <p><strong>Common agents:</strong> benzodiazepines, alcohol, barbiturates, GHB, zolpidem.</p>
        <p><strong>Antidote:</strong> Flumazenil — for benzodiazepine overdose in specific circumstances only (NOT routine — can precipitate seizures in benzodiazepine-dependent patients). Supportive care is primary management.</p>
      </div>

      <h2>Common Poisoning Scenarios</h2>

      <h3>Paracetamol Overdose</h3>
      <p>
        Most common intentional overdose in Australia. Potentially fatal hepatotoxicity occurs 24–72 hours after ingestion — the patient often appears well initially. NAC (N-acetylcysteine) is highly effective if given within 8–10 hours. Use the Rumack-Matthew nomogram (paracetamol level vs time post-ingestion) to determine if NAC is needed. Staggered overdose or unknown time of ingestion — treat empirically with NAC. Always contact Poisons Information Centre (13 11 26).
      </p>

      <h3>Tricyclic Antidepressant (TCA) Overdose</h3>
      <p>
        Potentially lethal — QRS prolongation (&gt;100ms), hypotension, arrhythmias, seizures. Anticholinergic signs present. Sodium bicarbonate is the specific treatment for cardiac toxicity — alkalinises the blood to reduce TCA binding to sodium channels. Emergency transfer — ICU monitoring required.
      </p>

      <h3>Lithium Toxicity</h3>
      <p>
        Narrow therapeutic index. Therapeutic range 0.6–1.2 mmol/L. Toxicity: &gt;1.5 (mild), &gt;2.0 (moderate — confusion, ataxia), &gt;2.5 (severe — seizures, renal failure). Classic precipitants: dehydration, NSAIDs, thiazide diuretics, ACEi/ARBs. Treatment: hydration, hold lithium, nephrology review. Haemodialysis for severe toxicity.
      </p>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="toxicology" />

      <ContributorCard moduleSlug="toxicology" />
      <ModuleSponsorSlot moduleSlug="toxicology" />

    </div>
  );
}
