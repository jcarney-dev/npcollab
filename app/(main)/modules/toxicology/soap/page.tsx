import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'Paracetamol Overdose — Intentional Self-Harm',
  meta: '19-year-old female — 10g paracetamol, 3 hours post-ingestion, level above treatment line',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '19-year-old female brought in by flatmate after taking an overdose approximately 3 hours ago.'
        },
        {
          label: 'History',
          content: [
            'Patient reports taking approximately 20 tablets of paracetamol 500mg (10g total) 3 hours ago following an argument with her boyfriend. States she "just wanted to sleep" and denies wanting to die but is tearful and distressed. No other substances taken — flatmate confirms no alcohol or other medications visible.',
            'No vomiting since ingestion. Able to give history coherently.',
            'Flatmate found her sitting on the bed looking unwell, surrounded by two empty paracetamol packets. Called for help immediately. Brought patient directly to clinic.'
          ]
        },
        {
          label: 'Past History',
          content: 'Previous episode of self-harm (cutting) 6 months ago. Known anxiety and depression — sertraline 50mg daily (ongoing prescription from GP). No previous overdose.'
        },
        {
          label: 'Medications',
          content: 'Sertraline 50mg daily. No other medications. NKDA.'
        },
        {
          label: 'Concerns',
          content: 'Patient embarrassed and distressed. Flatmate very anxious. Patient initially reluctant to give full history — reassured regarding confidentiality in current emergency context.'
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Vital Signs',
          content: 'BP 118/74 | HR 88 | Temp 36.9°C | RR 16 | SpO2 99% on room air | GCS 15'
        },
        {
          label: 'Examination',
          content: [
            'General: Alert, oriented, tearful. No signs of acute toxicity from paracetamol (expected at 3 hours — hepatotoxicity develops 24–72 hours post-ingestion). Abdomen soft, mild epigastric tenderness on deep palpation. No jaundice (too early).',
            'Neurological: Normal. No clonus, no nystagmus. Pupils equal and reactive 4mm bilaterally — no anticholinergic or opioid signs. No features of serotonin syndrome (clonus, hyperreflexia, hyperthermia) despite sertraline use.',
            '12-lead ECG: Normal sinus rhythm. QTc 410ms. No QRS widening. No arrhythmia.'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'Paracetamol level (3 hours post-ingestion): 312 mg/L — plotted on Rumack-Matthew nomogram — ABOVE treatment line. NAC indicated.',
            'Salicylate level: undetectable',
            'Blood glucose: 5.4 mmol/L',
            'LFTs: ALT 22, AST 24, ALP 68, Bilirubin 10 — all normal (baseline — hepatotoxicity not yet present)',
            'EUC: all normal, creatinine 62 µmol/L',
            'INR: 1.1 (normal — INR rises with hepatotoxicity, monitor during NAC treatment)',
            'Urine drug screen: positive for cannabis (sertraline cross-reactivity not expected — no interaction concern for serotonin syndrome without other serotonergic agents)'
          ]
        }
      ]
    },
    {
      letter: 'A',
      title: 'Assessment',
      fields: [
        {
          label: 'Problem List',
          content: [
            '1. Paracetamol overdose — 10g at 3 hours post-ingestion. Level 312 mg/L ABOVE Rumack-Matthew treatment line at 3 hours. NAC is indicated — urgent commencement essential. Hepatotoxicity not yet present but will develop without treatment.',
            '2. Intentional self-harm — requires psychiatric assessment. Background depression and anxiety, previous self-harm, moderate distress. Suicide risk assessment required before discharge.',
            '3. No current evidence of hepatotoxicity — liver function will be monitored during NAC treatment protocol.',
            '4. Sertraline — check serotonin syndrome features (none present — examination normal).'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Immediate Medical Management',
          content: [
            'Call 000 — emergency transfer to ED for NAC infusion. NAC is most effective within 8 hours of ingestion — already 3 hours post-ingestion, urgent commencement essential.',
            'N-Acetylcysteine (NAC) protocol: 150mg/kg IV over 60 minutes (loading dose), then 50mg/kg over 4 hours, then 100mg/kg over 16 hours — 21-hour total protocol.',
            'Pre-notify ED of presentation: paracetamol overdose, level 312 mg/L at 3 hours, NAC indicated, no other co-ingestion, sertraline patient.',
            'NAC anaphylactoid reaction: warn ED team — flushing, urticaria, bronchospasm — usually occurs with loading dose, managed by slowing infusion and antihistamines (not a true allergy, NAC can be restarted).',
            'Repeat paracetamol level and LFTs, INR at end of NAC protocol to assess need for extended NAC course.'
          ]
        },
        {
          label: 'Psychiatric Management',
          content: [
            'Mental health assessment by psychiatry team in ED — do not discharge without psychiatric review.',
            'Safety assessment: current suicidal ideation, plan, intent, access to means.',
            'Risk stratification: note previous self-harm episode (6 months ago), current precipitant (relationship conflict), distress level, support network (flatmate present and engaged).',
            'Contact mental health crisis team in ED.',
            'Inform GP of presentation with patient consent.',
            'Continue sertraline — do not withhold (important for underlying depression management).'
          ]
        },
        {
          label: 'Communication and Documentation',
          content: [
            'Flatmate: briefly explained patient is receiving urgent treatment and will be monitored — cannot share clinical details without patient consent. Flatmate thanked for acting quickly.',
            'Documented clinical assessment, paracetamol level and nomogram interpretation, toxicological management, psychiatric risk factors, and transfer plan clearly.',
            'Handover to ambulance crew: exact time of ingestion (3 hours ago), dose (10g paracetamol), level and nomogram result, current vitals, psychiatric context (intentional self-harm), sertraline use.'
          ]
        }
      ]
    }
  ]
};

export default function ToxicologySoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>⚗️ Toxicology</h1>
        <p>Toxidrome recognition, overdose management, antidotes, and the NP role in poisoning presentations.</p>
      </div>

      <ModuleTabs moduleId="toxicology" />


      <div className="content-prose">
      <SoapNote
        title={soapData.title}
        meta={soapData.meta}
        sections={soapData.sections}
      />

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="toxicology" />

    </div>
  );
}
