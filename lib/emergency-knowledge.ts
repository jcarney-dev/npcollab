export interface KnowledgeDrug {
  name: string;
  dose: string;
}

export interface KnowledgeSystem {
  id: string;
  name: string;
  category: 'Core' | 'Special';
  summary: string;
  keyDecisionRules: string[];
  keyDrugs: KnowledgeDrug[];
  redFlags: string[];
  references: string[];
}

export const KNOWLEDGE_SYSTEMS: KnowledgeSystem[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    category: 'Core',
    summary:
      'ACS pathophysiology (plaque rupture → thrombosis), STEMI vs NSTEMI vs unstable angina, arrhythmia mechanisms (SVT, AF/flutter, VT/VF, AV block I–III), HFrEF/HFpEF and acute pulmonary oedema, cardiogenic shock (SCAI A–E), hypertensive urgency vs emergency, and syncope. ECG within 10 minutes for chest pain per NHFA/CSANZ 2025 ACS guideline. PCI within 90 min for STEMI; fibrinolysis if PCI >120 min away.',
    keyDecisionRules: [
      'HEART score (≤3 low risk; ≥7 high)',
      'EDACS-ADP and Improved ADP with hs-troponin',
      'TIMI and GRACE (ACS risk)',
      'CHA₂DS₂-VASc and HAS-BLED (AF)',
      'Killip class (ACS severity)',
      'Canadian Syncope Risk Score',
    ],
    keyDrugs: [
      { name: 'Aspirin', dose: '300 mg PO (ACS loading)' },
      { name: 'GTN', dose: 'SL 400 mcg; avoid if SBP <90 or RV infarct' },
      { name: 'Amiodarone', dose: '300 mg IV (pulseless VT/VF); synchronised DCCV for VT with pulse' },
      { name: 'Adrenaline', dose: '1 mg IV q3–5 min (ALS, per ANZCOR 11.2)' },
      { name: 'Atropine', dose: '0.6 mg IV (symptomatic bradycardia)' },
      { name: 'Adenosine', dose: '6 mg → 12 mg → 18 mg rapid IV push (SVT)' },
    ],
    redFlags: [
      'STEMI on ECG — activate cath lab immediately',
      'De Winter T-waves, Wellens pattern, aVR elevation (LMCA occlusion)',
      'New LBBB — apply Sgarbossa criteria',
      'Hypertensive emergency — MAP reduction ≤25% in first hour (except aortic dissection: SBP <120, HR <60)',
      'VT with pulse — synchronised DCCV 200 J biphasic (per ANZCOR 11.2)',
    ],
    references: [
      'NHFA/CSANZ 2025 ACS Guideline',
      'ANZCOR Guideline 14 (ACS)',
      'ANZCOR 11.2 (ALS)',
      'eTG Complete — Cardiovascular',
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    category: 'Core',
    summary:
      'Asthma vs COPD pathophysiology, type 1 vs type 2 respiratory failure, pneumonia syndromes, PE, and pneumothorax (primary spontaneous, secondary, tension, traumatic). ABG interpretation (pH, PaO₂, PaCO₂, A–a gradient) and CXR pattern recognition are core competencies. Tension pneumothorax: immediate needle decompression at 4th–5th ICS mid-axillary, then ICC.',
    keyDecisionRules: [
      'Australian Asthma Handbook severity classification',
      'CURB-65 (CAP — hospitalisation threshold ≥2)',
      'SMART-COP (CAP intensive respiratory or vasopressor support)',
      'Wells score for PE + PERC rule',
      'Age-adjusted D-dimer (age × 10 µg/L for age >50)',
      'PESI / sPESI (PE risk stratification)',
      'BAP-65 / DECAF (COPD)',
    ],
    keyDrugs: [
      { name: 'Salbutamol', dose: '4–12 puffs pMDI + spacer q20 min ×3 (asthma)' },
      { name: 'Ipratropium', dose: 'neb 500 mcg q20 min ×3 (moderate–severe asthma/COPD)' },
      { name: 'Prednisolone', dose: '37.5–50 mg PO (asthma); 30–50 mg PO ×5 days (COPD)' },
      { name: 'Magnesium sulfate', dose: '2 g IV over 20 min (severe asthma)' },
      { name: 'Apixaban', dose: '10 mg BD ×7 days then 5 mg BD (PE — intermediate/high probability)' },
      { name: 'Alteplase', dose: '100 mg IV over 2 h (massive PE with haemodynamic instability)' },
    ],
    redFlags: [
      'Silent chest in asthma = impending respiratory arrest',
      'SpO₂ <92% despite high-flow O₂ — consider NIV or intubation',
      'COPD: controlled O₂ target 88–92% (avoid hyperoxia → hypercapnic respiratory failure)',
      'PE + haemodynamic instability → thrombolysis (alteplase 100 mg)',
      'Tension pneumothorax — do not wait for CXR; needle decompression immediately',
    ],
    references: [
      'Australian Asthma Handbook v3.0 (2026)',
      'TSANZ COPD Guidelines',
      'eTG Complete — Respiratory',
      'ANZCOR Guidelines',
    ],
  },
  {
    id: 'neurological',
    name: 'Neurological',
    category: 'Core',
    summary:
      'Stroke (ischaemic 85%, ICH 15%, SAH), TIA, seizure types and status epilepticus (≥5 min continuous), altered consciousness, primary vs secondary headaches, vertigo (peripheral vs central), meningitis/encephalitis. Tenecteplase 0.25 mg/kg IV bolus is now first-line thrombolytic (replaced alteplase) per Stroke Foundation Australian/NZ Living Guidelines 2025. Extended thrombolysis window 9–24 hours with LVO.',
    keyDecisionRules: [
      'ROSIER (stroke recognition)',
      'NIHSS (stroke severity)',
      'ABCD2 (TIA — Stroke Foundation recommends urgent imaging for all)',
      'GCS ≤8 = consider intubation',
      'Canadian CT Head Rule (head injury)',
      'Canadian C-Spine Rule and NEXUS',
      'HINTS exam (Head Impulse, Nystagmus, Test of Skew) for AVS vertigo',
    ],
    keyDrugs: [
      { name: 'Tenecteplase', dose: '0.25 mg/kg IV bolus (max 25 mg) — first-line thrombolytic (Stroke Foundation 2025)' },
      { name: 'Midazolam', dose: '5–10 mg IV/IM or buccal/IN (status epilepticus, first-line)' },
      { name: 'Levetiracetam', dose: '60 mg/kg IV (max 4.5 g) over 15 min (status epilepticus, second-line)' },
      { name: 'Ceftriaxone', dose: '2 g IV BD + dexamethasone 10 mg IV before first dose (bacterial meningitis)' },
      { name: 'Aciclovir', dose: '10 mg/kg IV TDS (if HSV encephalitis suspected)' },
      { name: 'Dexamethasone', dose: '10 mg IV before/with first antibiotic dose (bacterial meningitis)' },
    ],
    redFlags: [
      'Thunderclap headache — SAH until proven otherwise; CT head + LP if CT negative',
      'Fever + neck stiffness + non-blanching rash = meningococcaemia → ceftriaxone immediately',
      'Cushing\'s triad (hypertension, bradycardia, irregular breathing) = raised ICP emergency',
      'HINTS-positive central vertigo (abnormal HI, direction-changing nystagmus, skew) = posterior fossa stroke',
      'Pre-thrombolysis BP must be <185/110 mmHg',
    ],
    references: [
      'Stroke Foundation Australian/NZ Living Guidelines 2025',
      'eTG Complete — Neurological',
      'ANZCOR Guidelines',
    ],
  },
  {
    id: 'gastrointestinal',
    name: 'Gastrointestinal',
    category: 'Core',
    summary:
      'UGIB (variceal vs non-variceal), LGIB, bowel obstruction (mechanical SBO/LBO vs ileus, volvulus), pancreatitis (Atlanta criteria), biliary disease (Charcot\'s triad, Reynold\'s pentad), appendicitis, IBD flares. Diagnostics: erect CXR for free gas, AXR (small bowel >3 cm; large bowel >6 cm; caecum >9 cm; coffee-bean sign for sigmoid volvulus), CT abdomen + POCUS (gallbladder, AAA, FAST).',
    keyDecisionRules: [
      'Glasgow-Blatchford Score (GBS = 0 → discharge consideration for UGIB)',
      'Pre-endoscopy Rockall and AIMS65 (UGIB risk)',
      'Alvarado Score and Paediatric Appendicitis Score',
      'Glasgow-Imrie / APACHE II / BISAP (pancreatitis severity)',
      'Tokyo Guidelines (cholangitis severity)',
      'Truelove-Witts (UC flare severity)',
      'Oakland Score (safe LGIB discharge)',
    ],
    keyDrugs: [
      { name: 'Terlipressin', dose: '2 mg IV q4 h + ceftriaxone (variceal UGIB)' },
      { name: 'PPI infusion', dose: 'Pantoprazole 80 mg IV bolus then 8 mg/h (non-variceal UGIB post-endoscopy)' },
      { name: 'Piperacillin-tazobactam', dose: '4.5 g IV q8 h (cholangitis/severe infection)' },
      { name: 'IV Hartmann\'s', dose: 'Aggressive isotonic crystalloid (pancreatitis — goal-directed)' },
      { name: 'IV hydrocortisone', dose: '100 mg QID + VTE prophylaxis (severe IBD flare)' },
    ],
    redFlags: [
      'Free gas on erect CXR = visceral perforation → urgent surgical consult',
      'Caecum >9 cm = imminent perforation',
      'Coffee-bean sign on AXR = sigmoid volvulus',
      'Haemodynamic instability + UGIB = resuscitate before endoscopy; massive GI bleed = activate MTP',
      'Charcot\'s triad (fever + jaundice + RUQ pain) = ascending cholangitis; Reynold\'s pentad adds hypotension + confusion = septic shock',
    ],
    references: [
      'eTG Complete — Gastrointestinal',
      'Tokyo Guidelines (TG18)',
      'eTG Antibiotic',
    ],
  },
  {
    id: 'musculoskeletal',
    name: 'Musculoskeletal',
    category: 'Core',
    summary:
      'Fracture patterns (transverse, oblique, spiral, comminuted, greenstick; Salter-Harris I–V in paediatrics), Gustilo-Anderson I–III open fractures, common dislocations (shoulder anterior 95%), soft-tissue injury grading, compartment syndrome (5 P\'s; ΔP <30 mmHg), septic arthritis. X-ray rule of 2s; commonly missed: scaphoid, radial head fat pads, Lisfranc, posterior shoulder dislocation (light bulb sign), Salter-Harris I.',
    keyDecisionRules: [
      'Ottawa Ankle / Foot / Knee Rules',
      'Pittsburgh Knee Rule',
      'Canadian C-Spine Rule and NEXUS (cervical spine clearance)',
      'Kocher Criteria (paediatric septic arthritis)',
    ],
    keyDrugs: [
      { name: 'Cefazolin', dose: '1 g IV (open fracture Gustilo I–II); add gentamicin + metronidazole for Gustilo III or farm contamination' },
      { name: 'Tetanus dTpa', dose: 'Booster if >5 years (dirty wound) or >10 years (clean); add TIG if not fully immunised' },
      { name: 'Flucloxacillin', dose: '2 g IV QID (septic arthritis — vancomycin if MRSA risk)' },
    ],
    redFlags: [
      'Compartment syndrome: 5 P\'s (pain out of proportion, pressure, paresthesia, paralysis, pallor) — ΔP <30 mmHg = fasciotomy',
      'Open fracture: photograph, saline-soaked dressing, IV cefazolin, tetanus, urgent orthopaedics',
      'Septic arthritis in child: fever + limp + cannot weight-bear + raised CRP/WCC = joint washout urgently (Kocher ≥3 = high risk)',
      'Posterior shoulder dislocation: seizure/electrocution mechanism + light bulb sign on AP — requires Y-view or CT',
    ],
    references: [
      'ATLS 10th Edition',
      'eTG Complete — Musculoskeletal',
      'Australian Immunisation Handbook',
    ],
  },
  {
    id: 'genitourinary',
    name: 'Genitourinary',
    category: 'Core',
    summary:
      'UTI classification (uncomplicated/complicated/pyelonephritis/urosepsis/catheter-associated/prostatitis), renal colic (calcium oxalate 80%; <5 mm passes 80%, 5–10 mm 50%, >10 mm low), acute urinary retention, testicular torsion (peak 12–18 years, 6-hour golden window), STIs. β-hCG mandatory in any female of reproductive age with abdominopelvic pain.',
    keyDecisionRules: [
      'TWIST score ≥5 = high risk testicular torsion → straight to OT',
      'β-hCG: mandatory in reproductive-age female with abdominopelvic pain',
    ],
    keyDrugs: [
      { name: 'Trimethoprim', dose: '300 mg PO daily ×3 days (uncomplicated lower UTI female)' },
      { name: 'Nitrofurantoin', dose: '100 mg QID ×5 days (alternative for uncomplicated UTI)' },
      { name: 'Ceftriaxone', dose: '1 g IV daily (pyelonephritis — total 10–14 days)' },
      { name: 'Tamsulosin', dose: '400 mcg PO daily (MET for 5–10 mm renal stones)' },
      { name: 'Ceftriaxone + Azithromycin', dose: '500 mg IM + 1 g PO (gonococcal STI)' },
    ],
    redFlags: [
      'Testicular torsion: do NOT delay surgery for imaging if high clinical suspicion — manual detorsion ("open the book") as temporiser',
      'Renal colic + fever/leucocytosis = obstructed infected kidney → emergency urology (sepsis risk)',
      'Urinary retention + fever/rigors = urosepsis',
    ],
    references: [
      'eTG Complete — Genitourinary',
      'ASHM STI Guidelines',
      'eTG Antibiotic',
    ],
  },
  {
    id: 'dermatological',
    name: 'Dermatological',
    category: 'Core',
    summary:
      'Wound healing phases and impairment factors; cellulitis vs erysipelas vs abscess; burn depth and Wallace Rule of 9s (palmar surface ≈1%; Lund-Browder for paediatrics); necrotising fasciitis types I–IV; SJS/TEN. ANZBA EMSB: cool burns with running water 20°C for 20 minutes within 3 hours; refer to burns unit for major/special-area/inhalation/electrical/chemical/NAI burns.',
    keyDecisionRules: [
      'Eron Classification I–IV (cellulitis — guides IV vs oral antibiotics)',
      'LRINEC score (necrotising fasciitis — poor real-world sensitivity; use clinical suspicion)',
      'Parkland formula: 4 mL/kg/% TBSA Hartmann\'s (half over first 8 h from time of burn)',
      'SCORTEN (SJS/TEN mortality prediction)',
    ],
    keyDrugs: [
      { name: 'Di/flucloxacillin', dose: '500 mg QID PO (mild cellulitis Eron I); 2 g IV QID (moderate–severe Eron II–III)' },
      { name: 'Meropenem + lincomycin + vancomycin', dose: 'Empiric necrotising fasciitis (urgent surgical debridement — do not await imaging)' },
      { name: 'Cling-film', dose: 'Longitudinal cover (burns — never circumferential)' },
    ],
    redFlags: [
      'Necrotising fasciitis: pain out of proportion, crepitus, dusky/bullous skin, rapid progression, systemic sepsis — surgical debridement immediately',
      'Non-blanching petechial rash + fever = meningococcaemia until proven otherwise',
      'Mucosal involvement + Nikolsky\'s sign = SJS/TEN — stop causative drug, dermatology/burns unit',
      'Inhalation injury: carbonaceous sputum, singed nasal hairs, stridor — early intubation before oedema',
      'Burns ≥10% TBSA adult / ≥5% paediatric = IV fluid resuscitation',
    ],
    references: [
      'eTG Complete — Dermatology',
      'ANZBA Emergency Management of Severe Burns (EMSB)',
      'Australian Immunisation Handbook',
    ],
  },
  {
    id: 'haematological',
    name: 'Haematological / Oncological',
    category: 'Special',
    summary:
      'Anaemia by MCV (microcytic/normocytic/macrocytic), DVT/PE pathophysiology, neutropenic sepsis (ANC <0.5 ×10⁹/L with fever ≥38.0 sustained 1 h or single ≥38.5), anticoagulant reversal, sickle cell crises, tumour lysis, hypercalcaemia of malignancy, SVC obstruction, spinal cord compression. Transfuse Hb <70 (or <80 with cardiac disease/symptomatic) per NBA Patient Blood Management guidelines.',
    keyDecisionRules: [
      'Wells DVT and Wells PE (with PERC, age-adjusted D-dimer)',
      'PESI / sPESI (PE risk stratification)',
      'MASCC Score ≥21 = low-risk febrile neutropenia',
      'HAS-BLED (bleeding risk on anticoagulation)',
      '4Ts Score (HIT — heparin-induced thrombocytopenia)',
    ],
    keyDrugs: [
      { name: '4-factor PCC (Beriplex)', dose: '25–50 IU/kg IV + vitamin K 5–10 mg IV (warfarin major bleed — replaced Prothrombinex-VF June 2024)' },
      { name: 'Idarucizumab', dose: '5 g IV (dabigatran reversal)' },
      { name: 'Andexanet alfa', dose: 'Where available (apixaban/rivaroxaban reversal); otherwise 4FPCC 50 IU/kg + TXA 1 g' },
      { name: 'Piperacillin-tazobactam', dose: '4.5 g IV (neutropenic sepsis — within 30–60 min)' },
      { name: 'Alteplase', dose: '50 mg bolus or 100 mg/2h (massive PE)' },
    ],
    redFlags: [
      'Neutropenic sepsis: ANC <0.5 + single temp ≥38.5 or sustained ≥38.0 = empiric antibiotics within 30 min (not 60 min)',
      'Spinal cord compression: back pain + neurological deficit in cancer patient = emergency MRI + dexamethasone',
      'SVC obstruction: facial/arm swelling + JVP elevation + collar collateral veins',
      'Tumour lysis: hyperkalaemia, hyperphosphataemia, hypocalcaemia, hyperuricaemia post-chemotherapy',
    ],
    references: [
      'eviQ Neutropenic Sepsis Protocol',
      'Lifeblood / THANZ 2025 Anticoagulation Reversal Guidelines',
      'NBA Patient Blood Management Guidelines',
    ],
  },
  {
    id: 'endocrine',
    name: 'Endocrine / Metabolic',
    category: 'Core',
    summary:
      'DKA (BSL >11 + ketones ≥3 mmol/L + pH <7.3 or HCO₃ <15) — including euglycaemic DKA on SGLT2 inhibitors; HHS (BSL >33, osmolality >320); hypoglycaemia (Whipple\'s triad); hyperkalaemia with ECG progression; hyponatraemia (correct ≤10 mmol/L per 24 h to avoid osmotic demyelination); thyroid storm; adrenal crisis. Do NOT start insulin in DKA if K⁺ <3.3 — replace potassium first.',
    keyDecisionRules: [
      'Burch-Wartofsky Score ≥45 = thyroid storm',
      'DKA severity: mild pH 7.25–7.30, moderate 7.10–7.25, severe <7.10',
    ],
    keyDrugs: [
      { name: 'IV 0.9% saline', dose: '1 L/h initially in DKA; reassess at 1 h' },
      { name: 'Fixed-rate insulin', dose: '0.1 U/kg/h IV infusion (NO bolus in DKA); switch to dextrose-containing fluid when BSL <14' },
      { name: 'KCl', dose: '40 mmol/L (DKA — do NOT start insulin if K⁺ <3.3)' },
      { name: 'Calcium gluconate 10%', dose: '10 mL IV over 2–3 min (hyperkalaemia membrane stabilisation)' },
      { name: '3% hypertonic saline', dose: '150 mL bolus × up to 3 (severe hyponatraemia + seizures; target +4–6 mmol/L in first hour)' },
      { name: 'Hydrocortisone', dose: '100 mg IV stat then 50 mg QID (adrenal crisis — do NOT wait for cortisol result)' },
    ],
    redFlags: [
      'Euglycaemic DKA on SGLT2 inhibitors: normal BSL with ketoacidosis — ADS alert; hold SGLT2i',
      'DKA + falling GCS in paediatrics = cerebral oedema (mannitol 0.5–1 g/kg or 3% saline)',
      'Hyperkalaemia + wide QRS / bradycardia = give calcium gluconate immediately before anything else',
      'Adrenal crisis: do NOT await cortisol result before giving hydrocortisone',
    ],
    references: [
      'Australian Diabetes Society SGLT2i DKA Alert',
      'eTG Complete — Endocrinology',
      'eTG Complete — Electrolytes',
    ],
  },
  {
    id: 'toxicological',
    name: 'Toxicological',
    category: 'Core',
    summary:
      'Paracetamol (NAPQI hepatotoxicity; toxic dose ≥200 mg/kg or ≥10 g; two-bag NAC regimen), opioid (triad: miosis + respiratory depression + ↓GCS), TCA (Na⁺ channel blockade — wide QRS, R-wave aVR ≥3 mm), CCB (high-dose insulin euglycaemia), Australian elapid envenomation (pressure-bandage-immobilisation; one vial antivenom), funnel-web spider, serotonin syndrome, NMS, alcohol withdrawal. Poisons Information Centre 13 11 26.',
    keyDecisionRules: [
      'Rumack-Matthew nomogram (AU/NZ-modified: 150 mg/L line at 4 hours)',
      'CIWA-Ar (alcohol withdrawal severity)',
      'Hunter Serotonin Toxicity Criteria',
    ],
    keyDrugs: [
      { name: 'NAC two-bag regimen', dose: '200 mg/kg over 4 h then 100 mg/kg over 16 h (double 2nd bag if >2× nomogram line)' },
      { name: 'Naloxone', dose: '0.4–2 mg IV/IM/IN (opioid); titrate to adequate respiration, not full reversal' },
      { name: 'Sodium bicarbonate', dose: '1–2 mmol/kg IV bolus (TCA — QRS >100 ms or R-wave aVR ≥3 mm)' },
      { name: 'CSL polyvalent antivenom', dose: 'One vial IV (sufficient for all Australian snakes — per ASP-20)' },
      { name: 'Intralipid 20%', dose: '1.5 mL/kg IV bolus then 0.25 mL/kg/min infusion (LAST)' },
      { name: 'Insulin euglycaemia', dose: '1 U/kg bolus then 0.5–10 U/kg/h (CCB overdose)' },
    ],
    redFlags: [
      'Pressure-bandage-immobilisation for ALL possible Australian snakebite — do NOT remove until antivenom ready',
      'TCA: QRS >100 ms or R-wave aVR ≥3 mm = sodium bicarbonate immediately',
      'Paracetamol above nomogram line = NAC regardless of symptoms',
      'Opioid triad + SpO₂ <90% = naloxone + BVM',
      'All deliberate self-poisoning = medical clearance + mental health assessment before discharge',
    ],
    references: [
      'Australian Snakebite Project (ASP-20)',
      'Poisons Information Centre 13 11 26',
      'TGA Database of Adverse Event Notifications (DAEN)',
      'eTG Complete — Toxicology',
    ],
  },
  {
    id: 'mental-health',
    name: 'Mental Health / Psychiatric',
    category: 'Special',
    summary:
      'Suicide risk assessment, psychosis differential (always exclude organic causes — delirium, encephalitis, thyroid storm, autoimmune), acute behavioural disturbance (excited delirium, sympathomimetic toxidrome, hypoxia, hypoglycaemia — medical mimics common), deliberate self-harm. State Mental Health Acts vary: NSW MHA 2007 (Schedule 1/s81); VIC Mental Health and Wellbeing Act 2022; QLD MHA 2016; WA MHA 2014; SA MHA 2009.',
    keyDecisionRules: [
      'Mental state examination (MSE) — structured assessment',
      'State Mental Health Act criteria for involuntary assessment',
    ],
    keyDrugs: [
      { name: 'Droperidol', dose: '10 mg IM (preferred IM agent per Calver/Isbister DORM trial)' },
      { name: 'Olanzapine', dose: '10 mg PO/IM (do NOT combine IM olanzapine + IM benzodiazepine — respiratory arrest risk)' },
      { name: 'Midazolam', dose: '5–10 mg IM (caution: respiratory depression; continuous monitoring required)' },
      { name: 'Ketamine', dose: '4–5 mg/kg IM (rescue agent for refractory ABD per Isbister 2016)' },
      { name: 'Diazepam', dose: '10–20 mg PO (oral preferred for agitation where safe)' },
    ],
    redFlags: [
      'New-onset psychosis + fever/autonomic instability = NMS vs encephalitis vs thyroid storm (organic cause must be excluded)',
      'Visual hallucinations (not auditory) = higher probability of organic cause',
      'Non-blanching rash + altered consciousness + psychosis = meningococcaemia',
      'NEVER combine IM olanzapine + IM benzodiazepine (respiratory depression/arrest)',
      'Post-sedation monitoring: continuous SpO₂, ECG, capnography ideal',
    ],
    references: [
      'Calver/Isbister DORM Trial (droperidol)',
      'State Mental Health Acts',
      'eTG Complete — Psychiatry',
    ],
  },
  {
    id: 'obstetric',
    name: 'Obstetric / Gynaecological',
    category: 'Special',
    summary:
      'Ectopic pregnancy (β-hCG discriminatory zone ≈1500 IU/L by TVUS), miscarriage subtypes, hyperemesis gravidarum (thiamine before glucose), pre-eclampsia (BP ≥140/90 + proteinuria/end-organ dysfunction after 20 weeks), eclampsia, PPH (≥500 mL vaginal / ≥1000 mL CS — 4 Ts: Tone, Trauma, Tissue, Thrombin), BBA. Anti-D administration for all Rh-negative patients with ectopic/miscarriage/antepartum haemorrhage.',
    keyDecisionRules: [
      'β-hCG ≥1500 IU/L + no IUP on TVUS = ectopic until proven otherwise',
      'Severe pre-eclampsia features: BP ≥160/110, platelets <100, ↑LFTs, pulmonary oedema, renal impairment',
    ],
    keyDrugs: [
      { name: 'MgSO₄', dose: '4 g IV loading over 20 min then 1 g/h ×24 h post-delivery (eclampsia; therapeutic 1.5–3.5 mmol/L)' },
      { name: 'Oxytocin', dose: '5–10 IU slow IV or 10 IU IM (first-line PPH)' },
      { name: 'Tranexamic acid', dose: '1 g IV (PPH — per WOMAN trial; repeat 1 g if no response at 30 min)' },
      { name: 'Labetalol', dose: '20 mg IV (hypertensive disorders of pregnancy; nifedipine or hydralazine alternative)' },
      { name: 'Anti-D immunoglobulin', dose: 'Per RANZCOG guideline (Rh-negative + sensitising event)' },
    ],
    redFlags: [
      'Ectopic + haemodynamic instability + positive β-hCG = surgical emergency — IV access, O neg blood, urgent surgery',
      'Eclampsia = IV access + MgSO₄ loading dose + urgent obstetric review + delivery',
      'PPH: escalate early — do not wait for "standard" blood loss threshold if patient deteriorating',
      'Hyperemesis + Wernicke\'s risk: always give thiamine 100 mg IV before glucose',
    ],
    references: [
      'RANZCOG C-Gyn 38 (April 2024) — ectopic and miscarriage',
      'RANZCOG C-Obs 43 — PPH',
      'SOMANZ Hypertensive Disorders of Pregnancy Guideline',
    ],
  },
  {
    id: 'paediatric',
    name: 'Paediatric',
    category: 'Special',
    summary:
      'Fever <3 months + T ≥38°C → full septic workup. Croup: oral dexamethasone for ALL severities at presentation. Bronchiolitis: supportive care only per PREDICT 2016 (no routine salbutamol/steroids/antibiotics). NAI: TEN-4 bruising rule, mandatory reporting (state-specific). Weight estimation: APLS formula (3×age + 7) kg. Fluid boluses 10–20 mL/kg balanced solution (max 40–60 mL/kg before inotropes) for paediatric sepsis.',
    keyDecisionRules: [
      'PECARN Head Injury Rule (endorsed by PREDICT — APHIRST study, Babl 2021)',
      'Westley Croup Score',
      'APLS weight formula: (3 × age) + 7 kg',
      'TEN-4 bruising rule (NAI)',
      'Queensland Paediatric Sepsis Pathway',
      'NICE Traffic Light System (febrile illness)',
    ],
    keyDrugs: [
      { name: 'Dexamethasone', dose: '0.15–0.6 mg/kg PO/IV single dose at presentation (croup — ALL severities)' },
      { name: 'Nebulised adrenaline 1:1000', dose: '5 mL neb (moderate–severe croup; ≥4 h observation post-treatment)' },
      { name: 'IV fluid bolus', dose: '10–20 mL/kg balanced crystalloid (paediatric sepsis; reassess; max 40–60 mL/kg before inotropes)' },
      { name: 'Intranasal fentanyl', dose: '1.5 mcg/kg IN (paediatric analgesia — avoids cannulation)' },
    ],
    redFlags: [
      'Pre-mobile infant (not yet rolling) with bruising = sentinel injury (NAI) — mandatory report',
      'Infant <3 months + T ≥38°C = full septic workup (blood cultures, LP, urine, CXR) regardless of WCC',
      'Barking cough + stridor + drooling + toxic appearance = consider epiglottitis (do NOT examine throat)',
      'Bronchiolitis <12 months: salbutamol and steroids NOT recommended; HFNC for hypoxia',
    ],
    references: [
      'PREDICT (Paediatric Research in Emergency Departments International Collaborative)',
      'RCH Melbourne Clinical Practice Guidelines',
      'Children\'s Health Queensland QPEC',
      'Don\'t Forget the Bubbles',
    ],
  },
  {
    id: 'trauma',
    name: 'Trauma',
    category: 'Core',
    summary:
      'Primary survey <C>ABCDE (catastrophic haemorrhage control first). Avoid the lethal diamond: hypothermia, hypovolaemia, acidosis, coagulopathy, hypocalcaemia. Permissive hypotension SBP 80–90 mmHg for penetrating non-TBI trauma. Damage control resuscitation 1:1:1 (RBC:FFP:platelets). TXA 1 g IV within 3 hours (CRASH-2/3 — not beneficial after 3 hours). Pelvic binder at greater trochanters for suspected pelvic ring disruption.',
    keyDecisionRules: [
      'NEXUS and Canadian C-Spine Rule (cervical clearance)',
      'GCS ≤8 = consider intubation for airway protection',
      'Gustilo-Anderson Classification (open fractures)',
      'Major Trauma Triage Criteria — physiological, anatomical, mechanism, comorbidity',
    ],
    keyDrugs: [
      { name: 'Tranexamic acid', dose: '1 g IV over 10 min within 3 hours of injury (CRASH-2/3)' },
      { name: 'Calcium chloride', dose: '1 g IV (after each 4 units PRBC in MTP — prevent hypocalcaemia)' },
      { name: 'Mannitol', dose: '0.5–1 g/kg IV (raised ICP in TBI); maintain CPP; target SBP ≥110 in TBI' },
      { name: '3% hypertonic saline', dose: 'Alternative to mannitol for raised ICP (150–250 mL bolus)' },
    ],
    redFlags: [
      'SBP <90 + tachycardia + mechanism = haemorrhagic shock — resuscitate with blood products (not crystalloid-only)',
      'GCS ≤8 = intubate (protect airway); avoid hypoxia SpO₂ <90% and hypotension SBP <110 in TBI',
      'TXA: NOT beneficial if >3 hours from injury — may cause harm',
      'Pelvic ring disruption: apply binder at greater trochanters BEFORE imaging',
    ],
    references: [
      'ATLS / EMST 10th Edition',
      'VSTORM (Victorian Surgical Trauma and Outcomes Research and Management)',
      'NSW ITIM Protocol',
      'ANZCOR 9.1.1',
      'NBA Patient Blood Management — Critical Bleeding Module',
    ],
  },
  {
    id: 'sepsis',
    name: 'Sepsis & Infectious Disease',
    category: 'Core',
    summary:
      'Sepsis-3: life-threatening organ dysfunction caused by dysregulated host response to infection. Septic shock: sepsis + persistent hypotension requiring vasopressors to maintain MAP ≥65 + lactate >2 mmol/L despite adequate resuscitation. Hour-1 bundle: lactate, blood cultures before antibiotics, broad-spectrum antibiotics within 1 hour, 30 mL/kg crystalloid if hypotension or lactate ≥4, vasopressors if MAP <65 after fluids.',
    keyDecisionRules: [
      'qSOFA ≥2 (RR ≥22, SBP ≤100, GCS <15) = bedside flag for sepsis (not screening tool)',
      'NEWS2 / Q-ADDS (track-and-trigger escalation)',
      'Sepsis Six Bundle',
      'ACSQHC Sepsis Clinical Care Standard 2022 (8 quality statements)',
    ],
    keyDrugs: [
      { name: 'Piperacillin-tazobactam', dose: '4.5 g IV q8 h (empiric broad-spectrum sepsis first-line)' },
      { name: 'Ceftriaxone', dose: '2 g IV BD + dexamethasone 10 mg IV before/with first dose (bacterial meningitis)' },
      { name: 'Benzylpenicillin', dose: '2.4 g IV q4 h (add to ceftriaxone if Listeria risk: age >50 or immunosuppressed)' },
      { name: 'Noradrenaline', dose: 'Vasopressor of choice for septic shock (MAP ≥65 target)' },
    ],
    redFlags: [
      'Fever + purpuric non-blanching rash = meningococcaemia → ceftriaxone IM/IV IMMEDIATELY (do not wait for LP)',
      'Lactate ≥4 mmol/L = high mortality regardless of BP — escalate immediately',
      'Neutropenic sepsis: antibiotics within 30 min (not 60 min standard)',
      'COVID-19 2026: dexamethasone if O₂ requirement; antivirals (nirmatrelvir/ritonavir) for high-risk per ATAGI/NCEC living guideline',
    ],
    references: [
      'ACSQHC Sepsis Clinical Care Standard 2022',
      'CEC SEPSIS KILLS Pathway (NSW)',
      'Queensland Adult Sepsis Pathway',
      'Australian Sepsis Network',
    ],
  },
  {
    id: 'ophthalmological',
    name: 'Ophthalmological',
    category: 'Special',
    summary:
      'Globe injury (Seidel test, shield — no patch, nil oral, urgent ophthalmology), acute vision loss (CRAO time-critical <6 hours; treat as stroke), chemical burns (alkali > acid — immediate copious irrigation via Morgan lens ≥30 min until pH neutral 7.0–7.4), acute angle closure glaucoma, orbital vs preseptal cellulitis. Visual acuity (Snellen) BOTH eyes always documented; assess pupils (RAPD), EOM, IOP, fluorescein, slit lamp, fundoscopy.',
    keyDecisionRules: [
      'Seidel test (globe integrity — positive = full-thickness laceration)',
      'RAPD assessment (optic nerve or retinal pathology)',
    ],
    keyDrugs: [
      { name: 'Acetazolamide', dose: '500 mg IV/PO + topical pilocarpine 2% + timolol 0.5% + brimonidine (acute angle closure)' },
      { name: 'Prednisolone eye drops', dose: '1% (acute anterior uveitis and angle closure)' },
      { name: 'Ceftriaxone + flucloxacillin', dose: 'IV (orbital cellulitis per eTG — urgent CT orbit, ENT/ophthalmology)' },
    ],
    redFlags: [
      'Chemical burns: IRRIGATION IMMEDIATELY before any assessment or documentation — use Morgan lens, ≥30 min, until pH 7.0–7.4',
      'CRAO: time-critical (<6 hours) — ocular massage, IOP lowering, treat as stroke (GCA workup), urgent ophthalmology',
      'Open globe: NO PRESSURE on eye, rigid shield only, nil oral, IV antiemetic, urgent surgery',
      'Acute angle closure: supine, IOP measurement, reduce IOP urgently (acetazolamide + topicals), definitive laser PI',
    ],
    references: [
      'eTG Complete — Ophthalmology',
      'Royal Australian and New Zealand College of Ophthalmologists (RANZCO) guidelines',
    ],
  },
  {
    id: 'ent',
    name: 'ENT',
    category: 'Special',
    summary:
      'Epistaxis (90% anterior, Kiesselbach\'s plexus — stepwise: pinch → co-phenylcaine → silver nitrate → anterior packing → posterior packing); airway foreign bodies (ANZCOR 4); sudden sensorineural hearing loss (emergency — steroid-responsive within 72 hours); peritonsillar abscess (trismus, hot-potato voice, uvular deviation); avulsed permanent tooth (replant <30 min in milk/saline).',
    keyDecisionRules: [
      'ANZCOR 4 (choking algorithm)',
      'Disc battery vs other foreign body: disc battery is an emergency regardless of location',
    ],
    keyDrugs: [
      { name: 'Co-phenylcaine spray', dose: 'Topical vasoconstrictor/anaesthetic (anterior epistaxis)' },
      { name: 'Silver nitrate', dose: 'Cautery one side only (anterior epistaxis)' },
      { name: 'Antibiotics', dose: 'With nasal packing >24 hours (TSS prevention)' },
      { name: 'IV ceftriaxone', dose: 'Peritonsillar abscess (I&D + antibiotics)' },
    ],
    redFlags: [
      'Disc battery in ear or nose: IMMEDIATE emergency removal (liquefactive necrosis begins within 2 hours)',
      'Posterior epistaxis requiring posterior packing: admit (nasopulmonary reflex risk — SpO₂ monitoring)',
      'Sudden SNHL: refer ENT within 24–72 hours for systemic steroids (steroid-responsive if treated promptly)',
      'Retropharyngeal abscess (paediatric): airway emergency — stridor + drooling + neck stiffness',
      'Avulsed tooth: replant within 30 min in Hank\'s Balanced Salt Solution/milk/saline (NOT water)',
    ],
    references: [
      'eTG Complete — ENT',
      'ANZCOR 4 (Foreign Body Airway Obstruction)',
    ],
  },
  {
    id: 'pain',
    name: 'Pain Management',
    category: 'Core',
    summary:
      'Multimodal analgesia: paracetamol, NSAIDs (avoid in CKD/GI bleeding/asthma sensitivity), opioids titrated, sub-dissociative ketamine 0.1–0.3 mg/kg IV, methoxyflurane (Penthrox max 6 mL/episode), nitrous oxide. Procedural sedation per ACEM G19/P19 and ANZCA PS09: pre-procedure assessment, monitoring (SpO₂, ETCO₂, ECG, BP), 2 staff (1 dedicated airway), resuscitation equipment. Fascia iliaca block for #NOF (supported by Gawthorne 2021 Australian RCT).',
    keyDecisionRules: [
      'NRS / Wong-Baker FACES / FLACC / Abbey Pain Scale / PAINAD (select appropriate for patient)',
      'Ramsay Sedation Scale (procedural sedation monitoring)',
      'ACEM G19 Procedural Sedation Checklist',
    ],
    keyDrugs: [
      { name: 'Ketamine (sub-dissociative)', dose: '0.1–0.3 mg/kg IV (analgesia — avoids respiratory depression)' },
      { name: 'Methoxyflurane', dose: 'Penthrox: max 6 mL per episode, 15 mL per week' },
      { name: 'Propofol', dose: '0.5–1 mg/kg IV (procedural sedation)' },
      { name: 'Fentanyl (intranasal)', dose: '1.5 mcg/kg IN (paediatric procedural analgesia)' },
      { name: 'Ropivacaine 0.375%', dose: '30 mL (fascia iliaca compartment block — Gawthorne et al. 2021)' },
      { name: 'Intralipid 20%', dose: '1.5 mL/kg IV bolus then 0.25 mL/kg/min (LAST rescue)' },
    ],
    redFlags: [
      'LAST (local anaesthetic systemic toxicity): perioral tingling, metallic taste, seizures, cardiovascular collapse → Intralipid immediately + call for help',
      'NEVER combine IM olanzapine + IM benzodiazepine (respiratory arrest risk)',
      'Opioid stewardship: ≤3-day discharge supply, document indication, RTPM check (SafeScript/QScript/ScriptCheckWA)',
      'Procedural sedation: dedicated airway person must NOT be the proceduralist',
    ],
    references: [
      'ACEM G19 / P19 (Procedural Sedation)',
      'ANZCA PS09',
      'ACI NSW Fascia Iliaca Block Toolkit',
      'Gawthorne et al. 2021 (FICB RCT)',
    ],
  },
];
