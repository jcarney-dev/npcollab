import Link from 'next/link';

export const metadata = {
  title: 'Level 1 — Emergency Stream | NPCollab',
};

export interface ClinicalContent {
  keyPoints: string[];
  decisionRules?: string[];
  keyDrugs?: string[];
  assessmentFocus: string[];
  frameworkRef: string;
}

export interface Level1Procedure {
  slug: string;
  name: string;
  description: string;
  clinicalContent?: ClinicalContent;
}

export const LEVEL_1_PROCEDURES: Level1Procedure[] = [
  {
    slug: 'airway-assessment',
    name: 'Airway Assessment',
    description: 'Systematic assessment of airway patency, risk stratification, and initial management.',
    clinicalContent: {
      keyPoints: [
        'LOOK/LISTEN/FEEL: visible obstruction, stridor, air movement, accessory muscle use, tracheal position',
        'Risk stratify: blood/vomit/foreign body, reduced GCS (≤8 = consider intubation), burns/anaphylaxis/epiglottitis',
        'Sniffing position optimises airway alignment; jaw thrust for trauma, head tilt-chin lift for non-trauma',
        'Suction oropharynx before other manoeuvres if secretions/blood present',
        'Identify predicted difficult airway early (HEAVEN/LEMON criteria) — call for senior help proactively',
      ],
      assessmentFocus: [
        'Systematic LOOK/LISTEN/FEEL approach performed in correct order',
        'Appropriate patient positioning for airway opening',
        'Recognises high-risk features (GCS ≤8, stridor, anaphylaxis, face/neck burns)',
        'Communicates findings and escalates appropriately',
      ],
      frameworkRef: 'Airway assessment and risk stratification — Level 1 core competency; basis for all other airway procedures (§4.2)',
    },
  },
  {
    slug: 'iv-access',
    name: 'IV Access & Cannulation',
    description: 'Peripheral intravenous cannulation and securing access.',
    clinicalContent: {
      keyPoints: [
        'Site selection: antecubital fossa (large bore, rapid infusion), forearm, dorsum of hand',
        'Choose gauge for indication: 14–16 G for resuscitation, 20–22 G for routine medications',
        'Tourniquet 10–15 cm above site; confirm flashback before advancing cannula over needle',
        'Flush with 10 mL 0.9% NaCl to confirm patency; secure with transparent dressing',
        'Failed after 2 attempts in time-critical situation = consider intraosseous access',
      ],
      assessmentFocus: [
        'Aseptic non-touch technique throughout',
        'Appropriate gauge selection for clinical indication',
        'Confirms patency before use',
        'Secures safely and documents time of insertion',
      ],
      frameworkRef: 'Peripheral IV cannulation — Level 1 independent core competency (§4.2 Circulation and vascular access)',
    },
  },
  {
    slug: 'venepuncture',
    name: 'Venepuncture',
    description: 'Safe blood collection technique, tube selection, and sample handling.',
    clinicalContent: {
      keyPoints: [
        'Order of draw: blood cultures → citrate (blue) → SST (gold) → heparin (green) → EDTA (purple) → fluoride (grey)',
        'Label at bedside with patient-verified identification — never pre-label tubes',
        'Blood cultures: skin prep with 2% chlorhexidine + 70% alcohol, allow to dry fully; inoculate aerobic then anaerobic',
        'Haemolysis prevention: correct gauge (21–23 G), avoid excessive mixing, transport promptly',
      ],
      assessmentFocus: [
        'Correct patient identification and tube labelling at bedside',
        'Correct order of draw',
        'Aseptic technique for blood cultures',
        'Appropriate transport and documentation',
      ],
      frameworkRef: 'Venepuncture and peripheral blood cultures — Level 1 independent core competency (§4.2)',
    },
  },
  {
    slug: 'ecg-interpretation',
    name: 'ECG Interpretation',
    description: 'Systematic 12-lead ECG acquisition and interpretation.',
    clinicalContent: {
      keyPoints: [
        'ECG within 10 minutes of presentation for chest pain per NHFA/CSANZ 2025 ACS guideline',
        'Systematic reading: rate → rhythm → axis → PR interval → QRS width → ST/T changes → QTc',
        'STEMI criteria: ≥1 mm ST elevation in ≥2 contiguous limb leads; ≥2 mm in V1–V4',
        'High-risk equivalents: posterior MI (V7–V9), de Winter T-waves, Wellens pattern (biphasic/deeply inverted T V2–V3), aVR elevation ≥1 mm (LMCA/proximal LAD)',
        'Sgarbossa criteria for new/presumed LBBB; modified Sgarbossa uses ≥25% concordant ST elevation threshold',
      ],
      decisionRules: ['HEART score (≤3 low risk; ≥7 high)', 'EDACS-ADP with hs-troponin', 'TIMI', 'GRACE'],
      assessmentFocus: [
        'Correct lead placement confirmed before interpretation',
        'Systematic approach (rate, rhythm, axis, intervals, ST/T changes)',
        'Identifies STEMI and high-risk equivalents correctly',
        'Communicates urgency and activates cath lab pathway when indicated',
      ],
      frameworkRef: '12-lead ECG acquisition and interpretation — Level 1 independent core competency (§4.2 Circulation); knowledge base §3.1 Cardiovascular',
    },
  },
  {
    slug: 'wound-assessment',
    name: 'Wound Assessment & Closure',
    description: 'Wound classification, irrigation, haemostasis, and simple closure techniques.',
    clinicalContent: {
      keyPoints: [
        'Neurovascular assessment distal to wound before any closure',
        'Wound irrigation: 250–500 mL normal saline via 19G cannula attached to 50 mL syringe (high-pressure)',
        'Closure options: monofilament suture (non-absorbable face/hand), tissue adhesive (low-tension), staples (scalp), Steri-Strips',
        'Tetanus: booster if >5 years (dirty wound) or >10 years (clean); TIG if not fully immunised per Australian Immunisation Handbook',
        'Wounds requiring referral: tendon/joint/nerve involvement, >6 h contaminated, bites, facial cosmetic areas',
      ],
      assessmentFocus: [
        'Neurovascular assessment documented before and after closure',
        'Appropriate closure method for wound type/location',
        'Irrigation technique correct',
        'Tetanus status addressed',
      ],
      frameworkRef: 'Simple wound closure (sutures, tissue adhesive, staples, Steri-Strips) and irrigation — Level 1 independent core competency (§4.2 Wound and musculoskeletal)',
    },
  },
  {
    slug: 'urinary-catheterisation',
    name: 'Urinary Catheterisation',
    description: 'Indwelling urinary catheter insertion (male and female) and management.',
    clinicalContent: {
      keyPoints: [
        'Male: use 10 mL lignocaine gel, apply ≥5 min before insertion; advance until urine drains before inflating balloon',
        'Female: identify urethral meatus before draping; leave a misplaced catheter (vaginal) in situ as landmark, use new sterile catheter',
        'Never inflate balloon until urine drains freely — prevents urethral injury',
        'Document residual volume; rapid decompression of >1 L may cause haematuria ex vacuo',
      ],
      assessmentFocus: [
        'Maintains sterile technique throughout',
        'Confirms position before balloon inflation',
        'Secures catheter and connects to closed drainage system',
        'Documents residual volume and insertion time',
      ],
      frameworkRef: 'Indwelling urinary catheter (male and female) — Level 1 independent core competency (§4.2 GI/GU)',
    },
  },
  {
    slug: 'nasogastric-tube',
    name: 'Nasogastric Tube Insertion',
    description: 'NG tube insertion, position confirmation, and care.',
    clinicalContent: {
      keyPoints: [
        'Measure insertion length: nose → earlobe → xiphisternum + 5 cm',
        'Lubricate with water-soluble gel; advance during swallowing if patient cooperative',
        'Position confirmation: pH aspirate ≤5.5 preferred; CXR if pH equivocal (not auscultation alone)',
        'Contraindications: base of skull fracture, severe midfacial trauma — use orogastric route',
        'Airway misplacement: patient coughs/cannot speak/SpO₂ falls — remove immediately',
      ],
      assessmentFocus: [
        'Measures correctly and marks tube',
        'Confirms position with pH testing before use',
        'Recognises and responds to signs of airway misplacement',
        'Secures safely and documents position',
      ],
      frameworkRef: 'Nasogastric tube insertion and position confirmation — Level 1 independent core competency (§4.2 GI/GU)',
    },
  },
  {
    slug: 'oxygen-therapy',
    name: 'Oxygen Therapy',
    description: 'Oxygen delivery devices, flow rates, target saturations, and monitoring.',
    clinicalContent: {
      keyPoints: [
        'Standard adult target: SpO₂ 93–95%; COPD/type 2 respiratory failure target 88–92% (controlled O₂)',
        'Do NOT give O₂ if SpO₂ ≥90% in most patients — hyperoxia causes vasoconstriction and increased ROS',
        'Device selection: nasal prongs 1–6 L/min (FiO₂ 24–44%), simple face mask 5–10 L/min (35–60%), NRB 10–15 L/min (≈80–90%), HFNC/Optiflow up to 60 L/min',
        'CO poisoning: SpO₂ reads falsely normal — apply 15 L/min NRB regardless of SpO₂',
        'Ongoing monitoring: SpO₂ + clinical (RR, WOB, GCS); ABG if SpO₂ unreliable',
      ],
      assessmentFocus: [
        'Selects appropriate delivery device for clinical need',
        'Sets correct target saturation range (differentiates COPD vs standard)',
        'Titrates O₂ to target — does not give unnecessarily',
        'Monitors response and escalates if target not achieved',
      ],
      frameworkRef: 'Oxygen therapy via all devices including HFNC/Optiflow — Level 1 independent core competency (§4.2 Airway and breathing)',
    },
  },
  {
    slug: 'bvm-ventilation',
    name: 'BVM Ventilation',
    description: 'Bag-valve-mask ventilation for apnoeic or inadequately breathing patients.',
    clinicalContent: {
      keyPoints: [
        'Two-person technique preferred: one maintains E-C clamp mask seal, one squeezes bag',
        'Tidal volume: visible chest rise only (~400–600 mL adult); avoid over-ventilation (gastric distension, reduced venous return)',
        'Rate: 10 breaths/min (adult arrest); 20–30/min (paediatric arrest); do not hyperventilate',
        '15 L/min O₂ with reservoir bag achieves FiO₂ ≈85%',
        'Insert OPA/NPA before BVM in unconscious patient to improve mask seal',
      ],
      assessmentFocus: [
        'Correct mask size and E-C clamp technique',
        'Visible chest rise with each breath — avoids excessive tidal volume',
        'Achieves adequate rate without hyperventilation',
        'Positions airway adjunct correctly',
      ],
      frameworkRef: 'BVM ventilation — Level 1 independent core competency (§4.2 Airway and breathing)',
    },
  },
  {
    slug: 'oropharyngeal-airway',
    name: 'Oropharyngeal / Nasopharyngeal Airway',
    description: 'Insertion and sizing of OPA and NPA airway adjuncts.',
    clinicalContent: {
      keyPoints: [
        'OPA sizing: corner of mouth to centre of ear; only in unconscious patients — gag reflex triggers vomiting',
        'OPA insertion (adults): upside-down then rotate 180° once past hard palate; or use tongue depressor and insert directly',
        'NPA sizing: tip of nose to tragus of ear; lubricate well; advance bevel facing septum',
        'NPA contraindicated in suspected base of skull fracture (raccoon eyes, Battle\'s sign, CSF otorrhoea)',
        'NPA preferred if gag reflex present, trismus, or active seizure',
      ],
      assessmentFocus: [
        'Correct size selected for patient',
        'Appropriate device choice for clinical context',
        'Insertion technique correct — no trauma to palate or nasopharynx',
        'Improved airflow confirmed after insertion',
      ],
      frameworkRef: 'Oropharyngeal and nasopharyngeal airway insertion — Level 1 independent core competency (§4.2)',
    },
  },
  {
    slug: 'abg-sampling',
    name: 'Arterial Blood Gas Sampling',
    description: 'Radial arterial blood gas sampling and ABG interpretation.',
    clinicalContent: {
      keyPoints: [
        'Modified Allen\'s test before radial puncture to confirm collateral ulnar flow',
        'Palpate radial pulse; insert at 45° angle, bevel up; self-filling syringe; obtain ≥0.5 mL',
        'Remove air bubbles immediately; cap and label; analyse within 15 min (or ice if delayed)',
        'ABG interpretation: pH (7.35–7.45), PaO₂ (>80 on room air), PaCO₂ (35–45), HCO₃⁻ (22–26), A–a gradient (<2.5 + age/4)',
        'Steps: (1) pH → primary acidosis/alkalosis (2) PaCO₂ → respiratory component (3) HCO₃⁻ → metabolic component (4) check for compensation',
      ],
      assessmentFocus: [
        'Modified Allen\'s test performed before puncture',
        'Safe technique — no excessive force',
        'Air bubbles removed; sample handled correctly',
        'Systematic ABG interpretation covering acid-base and oxygenation',
      ],
      frameworkRef: 'Arterial blood gas sampling (with local sign-off) — Level 1 independent core competency (§4.2 Circulation)',
    },
  },
  {
    slug: 'intraosseous-access',
    name: 'Intraosseous (EZ-IO) Access',
    description: 'Intraosseous vascular access as an alternative to peripheral IV in time-critical patients.',
    clinicalContent: {
      keyPoints: [
        'Indications: failed peripheral IV after 2 attempts in time-critical situation (arrest, shocked child, status epilepticus)',
        'Sites: proximal tibia (2 cm below tibial tuberosity, medial flat surface) preferred; proximal humerus in adults (higher flow)',
        'EZ-IO: position needle perpendicular to bone, drill at 90°; remove trocar, confirm with aspiration, flush 10 mL NaCl',
        'All IV medications and fluids given via IO — same doses as IV',
        'Conscious patient pain on infusion: lidocaine 0.5 mg/kg IO slowly (max 40 mg) before flushing',
      ],
      assessmentFocus: [
        'Correct site selection and positioning',
        'Confirms placement (aspiration, flush, absence of extravasation)',
        'Flushes before infusion',
        'Documents and plans replacement within 24 hours',
      ],
      frameworkRef: 'Intraosseous (EZ-IO) access with local sign-off — Level 1 independent core competency (§4.2)',
    },
  },
  {
    slug: 'defibrillation',
    name: 'External Defibrillation (AED / Manual)',
    description: 'AED and manual defibrillation for shockable cardiac arrest rhythms.',
    clinicalContent: {
      keyPoints: [
        'Shockable rhythms: VF, pulseless VT — defibrillate 200 J biphasic ASAP (ANZCOR 11.2)',
        'Non-shockable rhythms (PEA, asystole): no shock; continue CPR + adrenaline 1 mg IV q3–5 min',
        'Pad placement: right infraclavicular + left lateral chest wall apex',
        'Resume CPR immediately after each shock — do not pause to recheck rhythm',
        'Amiodarone 300 mg IV after 3rd shock; 150 mg after 5th shock (refractory VF/pVT)',
      ],
      keyDrugs: [
        'Adrenaline 1 mg IV q3–5 min (all cardiac arrest)',
        'Amiodarone 300 mg IV after 3rd shock, 150 mg after 5th shock (VF/pVT)',
      ],
      assessmentFocus: [
        'Recognises shockable rhythm correctly',
        'Minimises CPR interruption during pad placement and shock',
        'Charges while CPR continues; clears all personnel before discharging',
        'Communicates clearly as resuscitation team leader',
      ],
      frameworkRef: 'External defibrillation (AED/manual), BLS/ALS arrest leadership — Level 1 independent core competency (§4.2 Circulation)',
    },
  },
  {
    slug: 'abscess-incision-drainage',
    name: 'Abscess Incision & Drainage',
    description: 'Simple cutaneous abscess incision, drainage, cavity irrigation, and packing.',
    clinicalContent: {
      keyPoints: [
        'Diagnosis: fluctuant, tender, warm, erythematous; POCUS confirms fluid-filled cavity and depth',
        'Anaesthesia: ring block around abscess (not directly into infected tissue — acidic pH reduces LA efficacy)',
        'Incision: linear along skin tension lines; length ≈ cavity diameter; break up loculations with curved haemostat',
        'Irrigate cavity with normal saline via syringe; loose packing with ribbon gauze if cavity >2 cm',
        'Antibiotics NOT routinely required for simple abscess; add di/flucloxacillin if cellulitis >2 cm or systemic features',
      ],
      assessmentFocus: [
        'Confirms fluctuance before incision',
        'Adequate anaesthesia via ring block',
        'Complete cavity drainage and irrigation',
        'Appropriate packing and wound review arranged',
      ],
      frameworkRef: 'Simple cutaneous abscess incision and drainage — Level 1 independent core competency (§4.2 Wound and musculoskeletal)',
    },
  },
  {
    slug: 'splinting-backslabs',
    name: 'Splinting & POP Back-slabs',
    description: 'Application of off-the-shelf splints, slings, and plaster of Paris (POP) back-slabs.',
    clinicalContent: {
      keyPoints: [
        'POP back-slabs are partial (non-circumferential) — allow for post-injury swelling',
        'Forearm slab: posterior surface metacarpal heads to proximal forearm; wrist neutral/slight extension',
        'Below-knee slab: posterior + stirrup configuration; ankle at 90°',
        'Cotton wool padding at bony prominences, joints, and fracture ends; moisten POP with tepid water',
        'Post-application: neurovascular check (colour, cap refill, sensation, movement); instruct patient on cast care and warning signs',
      ],
      assessmentFocus: [
        'Adequate padding at bony prominences',
        'Correct limb position/alignment',
        'Non-circumferential application (back-slab, not full cast)',
        'Post-application neurovascular check documented',
      ],
      frameworkRef: 'Splints, slings, POP back-slabs, traction splint application — Level 1 independent core competency (§4.2 Wound and musculoskeletal)',
    },
  },
  {
    slug: 'digital-block',
    name: 'Digital / Ring Block',
    description: 'Digital nerve block for anaesthesia of fingers and toes.',
    clinicalContent: {
      keyPoints: [
        'Web space technique: inject 1–2 mL plain lignocaine each side of base of digit (total ≤4 mL per digit)',
        'Use PLAIN lignocaine only — no adrenaline for digits (risk of digital ischaemia)',
        'Maximum lignocaine dose: 3 mg/kg plain; onset 5–10 min; duration 1–2 hours',
        'Assess block adequacy before procedure: light touch, cold spray; allow more time if incomplete',
        'LAST: perioral tingling, metallic taste, seizures, cardiovascular collapse → Intralipid 20% immediately',
      ],
      keyDrugs: ['Lignocaine 1% plain: 1–2 mL per web space (≤3 mg/kg total)'],
      assessmentFocus: [
        'Identifies correct anatomical landmarks',
        'Uses plain lignocaine only (no adrenaline)',
        'Assesses block adequacy before proceeding',
        'Monitors for signs of LAST',
      ],
      frameworkRef: 'Digital/ring block — Level 1 independent core competency (§4.2 Analgesia); knowledge base §3.18',
    },
  },
  {
    slug: 'blood-glucose-monitoring',
    name: 'Blood Glucose Monitoring',
    description: 'Point-of-care blood glucose testing, interpretation, and management of abnormal results.',
    clinicalContent: {
      keyPoints: [
        'BSL <4.0 mmol/L = hypoglycaemia: 15–20 g rapid-acting carbohydrate PO if conscious; dextrose 50% 25–50 mL IV if not',
        'BSL >11 mmol/L = hyperglycaemia: check ketones (BSL >11 + ketones ≥3 + pH <7.3 = DKA)',
        'Euglycaemic DKA on SGLT2 inhibitors: normal BSL but elevated ketones — ADS alert; hold SGLT2i',
        'Intubated/unconscious: 10% dextrose 100 mL IV preferred over 50% (less vein damage)',
        'Always address underlying cause (insulin error, missed meal, infection precipitating DKA)',
      ],
      keyDrugs: [
        'Dextrose 50% 25–50 mL IV (severe hypoglycaemia)',
        '10% dextrose 100 mL IV (intubated/unconscious)',
        'Glucagon 1 mg IM (no IV access)',
      ],
      assessmentFocus: [
        'Correct sampling technique (no topical glucose contamination)',
        'Correctly interprets result and initiates management',
        'Checks ketones when BSL >11',
        'Repeats BSL to confirm response to treatment',
      ],
      frameworkRef: 'Blood glucose monitoring — Level 1 independent core competency (§4.2 Diagnostics); knowledge base §3.9',
    },
  },
  {
    slug: 'eye-irrigation',
    name: 'Eye Irrigation (Morgan Lens)',
    description: 'Ocular irrigation for chemical eye injuries and foreign body removal.',
    clinicalContent: {
      keyPoints: [
        'Chemical burns: IRRIGATE IMMEDIATELY — do not delay for assessment, history, or documentation',
        'Alkali burns (bleach, cement, oven cleaner) cause liquefactive necrosis and penetrate deeper than acid',
        'Morgan lens technique: amethocaine eye drops → insert Morgan lens → connect to 1 L normal saline/Hartmann\'s → irrigate ≥30 min',
        'Target pH 7.0–7.4 in inferior fornix (litmus paper); repeat irrigation if pH >7.4 persists after initial irrigation',
        'Post-irrigation: fluorescein staining + slit lamp; urgent ophthalmology for all significant chemical injuries',
      ],
      assessmentFocus: [
        'Begins irrigation immediately — not delayed for history-taking',
        'Morgan lens positioned correctly',
        'Checks pH at appropriate intervals',
        'Achieves pH 7.0–7.4 before stopping irrigation',
      ],
      frameworkRef: 'Eye irrigation (Morgan lens), fluorescein staining — Level 1 independent core competency (§4.2 Ophthalmic); knowledge base §3.16',
    },
  },
  {
    slug: 'anterior-epistaxis',
    name: 'Anterior Epistaxis Management',
    description: 'Management of nosebleed including pinch, vasoconstrictor, cautery, and anterior packing.',
    clinicalContent: {
      keyPoints: [
        '90% of epistaxis is anterior from Kiesselbach\'s plexus; stepwise management',
        'Step 1: Pinch fleshy part of nose continuously for 15 minutes, patient leaning forward',
        'Step 2: Co-phenylcaine spray (topical vasoconstrictor + anaesthetic) if pinching alone fails',
        'Step 3: Silver nitrate cautery — ONE side only per episode (bilateral risks septal perforation)',
        'Step 4: Anterior nasal pack (Merocel or Rapid Rhino); antibiotics if packing >24 hours (TSS prevention)',
      ],
      assessmentFocus: [
        'Correct pinch technique (fleshy part, continuous 15 min)',
        'Stepwise escalation',
        'Silver nitrate one side only',
        'Recognises posterior epistaxis (requires admission and specialist review)',
      ],
      frameworkRef: 'Anterior epistaxis management — Level 1 independent core competency (§4.2 ENT); knowledge base §3.17',
    },
  },
  {
    slug: 'methoxyflurane-analgesia',
    name: 'Methoxyflurane & Nitrous Oxide Analgesia',
    description: 'Inhaled analgesia for procedural pain and acute injury (Penthrox and Entonox).',
    clinicalContent: {
      keyPoints: [
        'Methoxyflurane (Penthrox): max 6 mL per episode, max 15 mL per week; onset 6–10 breaths',
        'Contraindications — methoxyflurane: renal/hepatic disease, malignant hyperthermia susceptibility',
        'Nitrous oxide (Entonox 50:50 N₂O/O₂): self-administered via demand valve; onset 30–60 s; avoid in pneumothorax, bowel obstruction, middle ear disease',
        'Methoxyflurane keeps patient mobile and cooperative (useful for fracture manipulation, wound care)',
        'Document dose administered and pain score before and after',
      ],
      keyDrugs: [
        'Methoxyflurane (Penthrox): max 6 mL/episode, 15 mL/week',
        'Nitrous oxide / O₂ 50:50 (Entonox): demand valve self-administration',
      ],
      assessmentFocus: [
        'Screens for contraindications before use',
        'Demonstrates correct inhaler technique to patient',
        'Assesses pain score before and after',
        'Monitors for side effects (lightheadedness, nausea)',
      ],
      frameworkRef: 'Nitrous oxide (Entonox), methoxyflurane (Penthrox) — Level 1 independent core competency (§4.2 Analgesia); knowledge base §3.18',
    },
  },
];

export default function Level1Page() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 1</div>
        <h1>Level 1 — Foundation Skills</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Independent core competencies expected of all endorsed Emergency NPs
        </p>
      </div>
      <div className="content-prose">
        <p>
          Level 1 covers the foundation skills required for safe emergency NP practice, derived from the{' '}
          <strong>NMBA Nurse Practitioner Standards for Practice (2021)</strong> and the Australian College of Nurse
          Practitioners ENP Clinical Practice Standards (2025). These are independent/core competencies — all endorsed
          Australian ED NPs are expected to perform these safely and autonomously.
        </p>
        <p>
          For each procedure you can complete a Mini CEX or DOPS assessment and send it to your mentor for sign-off.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
          {LEVEL_1_PROCEDURES.map((proc) => (
            <Link
              key={proc.slug}
              href={`/streams/emergency/level-1/${proc.slug}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '18px 20px',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>
                  {proc.name}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {proc.description}
                </div>
              </div>
              <div style={{ flexShrink: 0, fontSize: '13px', color: 'var(--gold)', fontWeight: 600, marginTop: '2px' }}>
                View →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
