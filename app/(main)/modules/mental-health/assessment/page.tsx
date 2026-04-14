import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'Mental Health — Assessment' };

export default function MentalHealthAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧠 Mental Health</h1>
        <p>Assessment and management of common mental health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />


      <div className="content-prose">
      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Presenting Complaint</h4>
          <ul>
            <li>Nature of current symptoms — mood, anxiety, perceptual disturbance, behavioural change</li>
            <li>Duration and onset — gradual or acute</li>
            <li>Precipitating factors — stressors, substance use, medication changes</li>
            <li>Effect on function — work, relationships, self-care, ADLs</li>
            <li>Previous episodes of similar presentation</li>
            <li>What the patient and family are most concerned about</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Depression Screen (PHQ-9 domains)</h4>
          <ul>
            <li>Depressed mood (most of the day, nearly every day)</li>
            <li>Anhedonia — loss of interest or pleasure</li>
            <li>Weight/appetite change (significant gain or loss)</li>
            <li>Sleep disturbance (insomnia or hypersomnia)</li>
            <li>Psychomotor agitation or retardation</li>
            <li>Fatigue or loss of energy</li>
            <li>Worthlessness or excessive/inappropriate guilt</li>
            <li>Concentration difficulty or indecisiveness</li>
            <li>Suicidal ideation or thoughts of death</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Anxiety Screen (GAD-7 domains)</h4>
          <ul>
            <li>Feeling nervous, anxious, or on edge</li>
            <li>Not being able to stop or control worrying</li>
            <li>Worrying too much about different things</li>
            <li>Trouble relaxing</li>
            <li>Being so restless it is hard to sit still</li>
            <li>Becoming easily annoyed or irritable</li>
            <li>Feeling afraid as if something awful might happen</li>
            <li>Avoidance behaviours — what situations are avoided</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Psychosis Screen</h4>
          <ul>
            <li>Perceptual disturbances — hearing/seeing things others cannot</li>
            <li>Beliefs — strange, unusual, or persecutory beliefs</li>
            <li>Ideas of reference — special messages via TV/radio/people</li>
            <li>Thought disorder — racing thoughts, thought insertion/withdrawal/broadcasting</li>
            <li>Passivity experiences — feeling controlled by external forces</li>
            <li>Disorganised behaviour — self-care, bizarre actions</li>
            <li>Duration and impact on function</li>
            <li>History of similar episodes or prior psychiatric admission</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Suicide & Self-Harm Risk</h4>
          <ul>
            <li>Passive ideation — wishes to be dead, life not worth living</li>
            <li>Active ideation — thoughts of killing or harming self</li>
            <li>Plan — specific method considered or researched</li>
            <li>Intent — intention to act on plan</li>
            <li>Access to means — firearms, medications, other</li>
            <li>Previous attempts — nature, lethality, rescue factors</li>
            <li>Non-suicidal self-harm — cutting, burning, other</li>
            <li>Recent overdose or self-harm incident</li>
            <li>Precipitating stressors — relationship loss, financial, legal</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Protective Factors</h4>
          <ul>
            <li>Reasons for living — what keeps them going</li>
            <li>Future orientation — plans, goals</li>
            <li>Children or dependants at home</li>
            <li>Religious or cultural beliefs</li>
            <li>Social support — family, friends, community</li>
            <li>Engagement with treatment — willing to accept help</li>
            <li>Problem-solving ability and coping strategies</li>
            <li>Capacity to keep self safe — safety planning</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Psychiatric History</h4>
          <ul>
            <li>Previous diagnoses — when, by whom</li>
            <li>Previous hospitalisations — voluntary or involuntary</li>
            <li>Previous medications — response, side effects, reasons for cessation</li>
            <li>Current medications — psychiatric and other</li>
            <li>Current treating team — psychiatrist, psychologist, case manager</li>
            <li>Mental Health Treatment Plan — current or previous</li>
            <li>Community treatment order status</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Substance Use History</h4>
          <ul>
            <li>Alcohol — quantity, frequency, AUDIT-C screening</li>
            <li>Cannabis — frequency, amount, last use, age of first use</li>
            <li>Stimulants — methamphetamine, cocaine, MDMA</li>
            <li>Opioids — prescribed or illicit, route of administration</li>
            <li>Benzodiazepines — prescribed or non-prescribed</li>
            <li>Other substances — inhalants, novel psychoactive substances</li>
            <li>Impact on function, finances, relationships</li>
            <li>Previous withdrawal episodes, treatment attempts</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Social & Developmental History</h4>
          <ul>
            <li>Current living situation — alone, family, supported accommodation</li>
            <li>Employment or occupation</li>
            <li>Relationships — partner, children, family support</li>
            <li>Trauma history — childhood adversity, domestic violence, assault</li>
            <li>Cultural background and beliefs (especially for risk assessment)</li>
            <li>Legal issues — current charges, incarceration history</li>
            <li>Financial stressors</li>
            <li>Carer responsibilities</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Family History</h4>
          <ul>
            <li>Psychiatric illness in first-degree relatives</li>
            <li>Family history of suicide or self-harm</li>
            <li>Family history of substance use disorders</li>
            <li>Family response to treatment (antidepressants, antipsychotics)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Medical History & Medications</h4>
          <ul>
            <li>Current medical conditions — thyroid, neurological, metabolic</li>
            <li>Medications that can cause psychiatric symptoms — steroids, beta-blockers, stimulants, antiretrovirals</li>
            <li>Recent medication changes</li>
            <li>Current psychiatric medications — dose, duration, adherence</li>
            <li>Allergies and previous adverse reactions</li>
            <li>Pregnancy or breastfeeding status</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Mania/Hypomania Screen (MDQ)</h4>
          <ul>
            <li>Periods of feeling unusually elevated, expansive, or irritable mood</li>
            <li>Decreased need for sleep — felt rested after only a few hours</li>
            <li>Increased talkativeness or pressure of speech</li>
            <li>Racing thoughts or flight of ideas</li>
            <li>Distractibility — attention easily drawn to irrelevant stimuli</li>
            <li>Increased goal-directed activity or psychomotor agitation</li>
            <li>Excessive involvement in risky activities (spending, sexual, business)</li>
            <li>Grandiosity — inflated self-esteem</li>
          </ul>
        </div>
      </div>

      <h2>Mental State Examination (MSE)</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Appearance & Behaviour</h4>
          <ul>
            <li>Appearance — grooming, hygiene, dress (appropriate to context)</li>
            <li>Build and nutrition — note if significantly underweight</li>
            <li>Eye contact — avoided, sustained, staring</li>
            <li>Psychomotor activity — agitation, retardation, stereotypies</li>
            <li>Attitude to examiner — cooperative, guarded, hostile, suspicious</li>
            <li>Behaviour — unusual or bizarre behaviours observed</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Speech</h4>
          <ul>
            <li>Rate — normal, slow (retardation), fast (pressure)</li>
            <li>Volume — normal, soft, loud</li>
            <li>Rhythm — normal, monotone</li>
            <li>Quantity — spontaneous, reduced, verbose</li>
            <li>Latency — delay before responding</li>
            <li>Quality — slurred (intoxication), dysarthria</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Mood & Affect</h4>
          <ul>
            <li>Mood — subjective: patient&apos;s own words (e.g. &quot;depressed, anxious, angry&quot;)</li>
            <li>Affect — objective: your observation (e.g. blunted, flat, dysphoric, euthymic, elevated)</li>
            <li>Congruence — is affect congruent with stated mood and context</li>
            <li>Range — full, restricted, labile</li>
            <li>Reactivity — does affect respond to emotional stimuli during interview</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Thought Form</h4>
          <ul>
            <li>Rate — normal, slow, racing</li>
            <li>Stream — logical, circumstantial, tangential, derailed (loosening of associations)</li>
            <li>Continuity — perseveration, flight of ideas, thought blocking</li>
            <li>Coherence — understandable vs incoherent/word salad</li>
            <li>Neologisms — invented words</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Thought Content</h4>
          <ul>
            <li>Suicidal ideation — passive or active, plan, intent</li>
            <li>Homicidal ideation — passive or active, specific target</li>
            <li>Delusions — persecutory, grandiose, reference, somatic, nihilistic, jealous</li>
            <li>Obsessions — intrusive thoughts, compulsive behaviours</li>
            <li>Preoccupations — ruminative, morbid</li>
            <li>Overvalued ideas</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Perceptions</h4>
          <ul>
            <li>Hallucinations — auditory (most common in psychosis), visual, olfactory, gustatory, tactile</li>
            <li>Nature of auditory hallucinations — commentary, command, conversational</li>
            <li>Illusions — misperception of real stimuli</li>
            <li>Depersonalisation — feeling detached from self</li>
            <li>Derealisation — environment feels unreal</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cognition</h4>
          <ul>
            <li>Orientation — time (date, day, year), place, person</li>
            <li>Attention and concentration — WORLD backwards, serial 7s</li>
            <li>Memory — registration, short-term, long-term</li>
            <li>Formal cognitive testing if indicated — MMSE, MoCA (especially in older adults)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Insight & Judgement</h4>
          <ul>
            <li>Insight — does the patient recognise they are unwell?</li>
            <li>Attribution — does the patient attribute symptoms to mental illness?</li>
            <li>Treatment — does the patient accept need for treatment?</li>
            <li>Judgement — ability to make reasonable decisions about care</li>
            <li>Capacity — does the patient have capacity to consent to/refuse treatment?</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <h3>Baseline Blood Tests (new presentation or changed mental state)</h3>
      <ul>
        <li><strong>FBC:</strong> anaemia (fatigue, low mood), infection (delirium)</li>
        <li><strong>EUC:</strong> hypo/hypernatraemia, uraemia — can cause psychiatric symptoms</li>
        <li><strong>LFTs:</strong> hepatic encephalopathy, alcohol-related disease, medication monitoring</li>
        <li><strong>Glucose/HbA1c:</strong> metabolic screen, especially on antipsychotics</li>
        <li><strong>TFTs:</strong> hypothyroidism (depression, cognitive decline), hyperthyroidism (anxiety, mania)</li>
        <li><strong>B12 and folate:</strong> deficiency associated with depression and cognitive decline</li>
        <li><strong>Calcium:</strong> hypercalcaemia (depression, psychosis), hypocalcaemia (anxiety, tetany)</li>
        <li><strong>UDS (urine drug screen):</strong> cannabis, amphetamines, opioids, benzodiazepines, cocaine — at baseline or if new psychiatric symptoms</li>
        <li><strong>Blood alcohol level:</strong> if acute intoxication suspected</li>
        <li><strong>BHCG:</strong> all women of reproductive age with new or changed psychiatric presentation</li>
        <li><strong>Syphilis serology and HIV:</strong> if risk factors or neurosyphilis/HIV encephalopathy suspected</li>
      </ul>

      <h3>Monitoring on Psychiatric Medications</h3>
      <ul>
        <li><strong>Antipsychotics:</strong> Fasting glucose, fasting lipids, weight, waist circumference, BP — baseline and every 3–6 months. ECG (QTc) at baseline and as clinically indicated.</li>
        <li><strong>Clozapine:</strong> Mandatory FBC monitoring via Clozapine Patient Monitoring Service (CPMS) — weekly for 18 weeks, fortnightly to 12 months, then monthly. Absolute neutrophil count (ANC) must be in safe range before dispensing.</li>
        <li><strong>Lithium:</strong> Serum lithium levels (target 0.6–0.8 mmol/L for maintenance), TFTs, renal function — at initiation and every 6 months when stable.</li>
        <li><strong>Valproate:</strong> LFTs, FBC, serum valproate level. Teratogenic — mandatory contraceptive counselling in women of reproductive age (Valproate Pregnancy Prevention Programme).</li>
        <li><strong>SSRIs/SNRIs:</strong> Routine bloods not required. Monitor weight, BP (venlafaxine), sodium (hyponatraemia risk especially in elderly).</li>
      </ul>

      <h3>Imaging</h3>
      <ul>
        <li><strong>CT brain:</strong> first-episode psychosis, new cognitive decline, neurological signs on examination, atypical features, or suspicion of organic cause</li>
        <li><strong>MRI brain:</strong> preferred to CT if available for new-onset psychosis or suspected structural abnormality</li>
        <li><strong>EEG:</strong> suspected temporal lobe epilepsy (olfactory/visual hallucinations, automatisms), encephalitis</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: DSM-5, Therapeutic Guidelines (Psychotropic), RANZCP clinical practice guidelines.
      </div>
      </div>

      <ModuleNav moduleId="mental-health" />

    </>
  );
}
