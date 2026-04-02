import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Aged Care — Assessment' };

export default function AgedCareAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Aged Care</div>
        <h1>🏥 Assessment</h1>
        <p>Comprehensive geriatric assessment covering cognition, function, falls, polypharmacy, continence, nutrition, and psychosocial domains.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />

      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Presenting Problem</h4>
          <ul>
            <li>Nature of current concern — who is worried and why</li>
            <li>Onset and progression — acute vs insidious</li>
            <li>Change from baseline — what was function like 6 and 12 months ago</li>
            <li>Fluctuation — consistent vs good days and bad days (raises delirium/Lewy body suspicion)</li>
            <li>Impact on independence — ADLs and IADLs</li>
            <li>Carer concerns — family members often provide crucial collateral history</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cognitive History</h4>
          <ul>
            <li>Memory — forgetfulness, repetition, getting lost in familiar places</li>
            <li>Language — word-finding difficulty, circumlocution</li>
            <li>Executive function — managing finances, medications, driving, planning tasks</li>
            <li>Visuospatial — getting lost, difficulty with spatial tasks</li>
            <li>Behaviour — personality change, disinhibition, apathy, agitation</li>
            <li>Hallucinations — visual (Lewy body), auditory</li>
            <li>Sleep — REM sleep behaviour disorder (acting out dreams — Lewy body)</li>
            <li>Timeline — age of onset, rate of progression, stepwise vs gradual</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Falls History</h4>
          <ul>
            <li>Number of falls in past 12 months</li>
            <li>Circumstances — getting up at night, turning, reaching, outdoor vs indoor</li>
            <li>Warning symptoms — dizziness, light-headedness, palpitations, loss of consciousness</li>
            <li>Injuries — fractures, head injury, lacerations</li>
            <li>Fear of falling — avoidance of activities, self-restriction</li>
            <li>Time on floor — inability to get up (hypothermia, rhabdomyolysis risk)</li>
            <li>Home environment — steps, rugs, lighting, bathroom rails</li>
            <li>Footwear — heeled, slip-on, inappropriate footwear</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Functional History (ADLs/IADLs)</h4>
          <ul>
            <li><strong>Basic ADLs:</strong> bathing, dressing, grooming, toileting, transferring, feeding, continence</li>
            <li><strong>IADLs:</strong> meal preparation, medication management, finances, telephone use, transport, shopping, housekeeping</li>
            <li>Recent changes — what has been lost or become difficult</li>
            <li>Current supports — home care package, NDIS, informal carer</li>
            <li>Living situation — alone, with family, residential care</li>
            <li>Driving status — still driving? Concerns?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Medication Review</h4>
          <ul>
            <li>All medications — prescribed, OTC, herbal, supplements, eye drops</li>
            <li>Falls risk medications — sedatives, opioids, antihypertensives, diuretics, antidepressants, antipsychotics</li>
            <li>Anticholinergic burden — use Anticholinergic Risk Scale (ARS) or similar tool</li>
            <li>QTc-prolonging agents — antipsychotics, some antibiotics, antidepressants</li>
            <li>Drugs causing electrolyte disturbance — diuretics, SSRIs (hyponatraemia)</li>
            <li>Medication adherence — blister packs, dosette box, carer administration</li>
            <li>Who manages medications at home</li>
            <li>Recent changes — any new medications preceding acute change</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Continence History</h4>
          <ul>
            <li>Urinary — frequency, urgency, urge incontinence, stress incontinence, nocturia, retention symptoms (hesitancy, poor stream, incomplete emptying)</li>
            <li>Faecal — constipation, overflow incontinence, urgency</li>
            <li>Impact on function and quality of life</li>
            <li>Pad use — type, frequency of change</li>
            <li>Fluid intake and type — caffeinated beverages worsen urgency</li>
            <li>Medications contributing — diuretics, anticholinergics, opioids (constipation)</li>
            <li>Recurrent UTIs — frequency, antibiotic use, post-void residual volume</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Nutrition and Swallowing</h4>
          <ul>
            <li>Appetite — reduced, absent, anorexia</li>
            <li>Weight change — weigh at every visit; calculate % loss over 3 and 6 months</li>
            <li>Dysphagia — solids, liquids, or both; coughing during/after meals; wet/gurgly voice</li>
            <li>MNA (Mini Nutritional Assessment) — validated screening tool</li>
            <li>Dentition — ill-fitting dentures, oral pain affecting intake</li>
            <li>Social factors — eating alone, meals on wheels, cooking ability, access to food</li>
            <li>Dietary restrictions — modified texture, thickened fluids</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Pain Assessment</h4>
          <ul>
            <li>Verbal pain scale if cognitively intact (NRS 0–10)</li>
            <li>For cognitively impaired — PAINAD scale (observe breathing, vocalisation, facial expression, body language, consolability)</li>
            <li>Location, nature, aggravating and relieving factors</li>
            <li>Impact on function, sleep, mood</li>
            <li>Current and previous analgesia — efficacy and side effects</li>
            <li>Non-pharmacological pain management strategies in use</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Mood and Psychosocial</h4>
          <ul>
            <li>Depression screen — GDS-15 (Geriatric Depression Scale) for cognitively intact patients</li>
            <li>Anxiety — generalised worry, fear of falling, social withdrawal</li>
            <li>Social engagement — isolation, loss of friends, bereavement</li>
            <li>Carer stress — primary carer wellbeing and support needs</li>
            <li>Elder abuse — financial, physical, emotional, sexual, neglect</li>
            <li>Advance care planning — existing documents, wishes known</li>
            <li>Goals of care — patient&apos;s own priorities and values</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Past Medical and Social History</h4>
          <ul>
            <li>Cardiovascular risk factors — HTN, diabetes, hyperlipidaemia, AF, heart failure</li>
            <li>Previous fractures — osteoporosis risk</li>
            <li>Sensory impairment — visual, hearing (aids used?)</li>
            <li>Alcohol history — AUDIT-C</li>
            <li>Smoking history</li>
            <li>Previous occupation — relevant to cognitive reserve, exposures</li>
            <li>Education level — relevant to cognitive testing interpretation</li>
            <li>Country of birth and primary language — affects validated tool interpretation</li>
          </ul>
        </div>
      </div>

      <h2>Physical Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General Appearance</h4>
          <ul>
            <li>Nutritional status — cachexia, sarcopenia (temporal wasting, reduced limb muscle bulk)</li>
            <li>Hydration — dry mucous membranes, skin turgor (unreliable in elderly), urine colour</li>
            <li>Grooming and self-care — indicator of functional status</li>
            <li>Alertness level — GCS, baseline comparison</li>
            <li>Affect and behaviour during examination</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Orthostatic Blood Pressure</h4>
          <ul>
            <li>Lying: after 5 minutes supine</li>
            <li>Standing: at 1 minute and 3 minutes</li>
            <li>Positive: systolic drop ≥20 mmHg OR diastolic drop ≥10 mmHg within 3 minutes of standing</li>
            <li>Note: some older patients are asymptomatic despite significant drops — ask about symptoms with standing</li>
            <li>Symptomatic orthostatic hypotension is a significant falls and syncope risk</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Mobility and Balance</h4>
          <ul>
            <li>Gait observation — stride length, width, heel strike, arm swing, turning</li>
            <li>Timed Up and Go (TUG) — &gt;12 seconds indicates high fall risk</li>
            <li>Sit to stand — number of times in 30 seconds (5 times sit to stand test)</li>
            <li>Single leg stance — &lt;5 seconds indicates elevated fall risk</li>
            <li>Walking aid — type, condition, appropriate height</li>
            <li>Footwear assessment during gait</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cognitive Examination</h4>
          <ul>
            <li>MoCA (Montreal Cognitive Assessment) — validated for mild cognitive impairment; max 30, &lt;26 suggests impairment</li>
            <li>MMSE — familiar but less sensitive for MCI; max 30, &lt;24 suggests impairment</li>
            <li>AMT10 (Abbreviated Mental Test-10) — quick bedside screen</li>
            <li>Clock drawing test — executive function and visuospatial ability</li>
            <li>4AT — delirium screen (alertness, AMT4, attention, acute change)</li>
            <li>Consider education and language effects on test interpretation</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Neurological Exam</h4>
          <ul>
            <li>Cranial nerves — visual acuity (Snellen), visual fields, fundoscopy if indicated</li>
            <li>Tone — rigidity (Parkinsonism), spasticity (UMN)</li>
            <li>Power — proximal and distal weakness (sarcopenia, neuropathy)</li>
            <li>Reflexes — may be diminished with age; compare sides</li>
            <li>Sensation — vibration (128 Hz fork at malleolus), proprioception, monofilament</li>
            <li>Coordination — finger-nose, heel-shin</li>
            <li>Tremor — rest vs action, distribution</li>
            <li>Extrapyramidal signs — masked facies, reduced arm swing, rigidity, bradykinesia</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Systems Review</h4>
          <ul>
            <li>Cardiovascular — rhythm (AF), heart failure signs (JVP, peripheral oedema, crackles), aortic stenosis murmur</li>
            <li>Respiratory — chest expansion, air entry, signs of infection</li>
            <li>Abdominal — constipation (palpable faecal loading), bladder palpation (retention), liver and spleen</li>
            <li>DRE — prostate size/consistency in men, faecal impaction if overflow suspected</li>
            <li>Skin — pressure injuries (Braden Scale for risk), bruising (falls or abuse), leg ulcers</li>
            <li>Oral — dentition, mucosa, fit of dentures</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <h3>Delirium Workup</h3>
      <ul>
        <li>FBC — infection (WCC), anaemia</li>
        <li>EUC — hypo/hypernatraemia (common in elderly), uraemia, dehydration</li>
        <li>LFTs — hepatic encephalopathy</li>
        <li>Glucose — hypo/hyperglycaemia</li>
        <li>Calcium — hyper/hypocalcaemia</li>
        <li>TFTs — hypothyroidism</li>
        <li>CRP and ESR — infection, inflammation</li>
        <li>Urine MCS — UTI (note: asymptomatic bacteriuria is common in elderly and does not require treatment)</li>
        <li>Blood cultures — if sepsis suspected</li>
        <li>CXR — pneumonia</li>
        <li>ECG — arrhythmia, ischaemia</li>
        <li>CT brain — if new focal deficit, head injury, or no clear metabolic cause</li>
      </ul>

      <h3>Dementia Workup</h3>
      <ul>
        <li>MoCA or MMSE — baseline and serial</li>
        <li>Bloods to exclude reversible causes: TFTs, B12, folate, FBC, EUC, LFTs, glucose, calcium, VDRL/syphilis serology (if risk factors), HIV (if risk factors)</li>
        <li>CT brain — exclude structural causes; may show atrophy pattern</li>
        <li>MRI brain — preferred if available; better structural detail, white matter changes</li>
        <li>Specialist referral for complex cases — neuropsychological testing, FDG-PET, CSF biomarkers in selected cases</li>
      </ul>

      <h3>Falls Investigations</h3>
      <ul>
        <li>ECG — arrhythmia, long QT, heart block</li>
        <li>Lying and standing BP (orthostatic hypotension)</li>
        <li>Blood glucose — hypoglycaemia</li>
        <li>FBC and EUC — anaemia, electrolytes</li>
        <li>X-ray of injured areas — fracture exclusion post-fall</li>
        <li>CT brain — if head injury, anticoagulated, or neurological signs</li>
        <li>Vitamin D level — deficiency common in aged care residents</li>
        <li>Bone density (DXA) — if fracture risk assessment required</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Aged Care Quality and Safety Commission, Therapeutic Guidelines (Aged Care), Australian Commission on Safety and Quality in Health Care.
      </div>
    </>
  );
}
