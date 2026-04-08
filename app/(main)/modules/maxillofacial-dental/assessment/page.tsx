import ModuleTabs from '@/components/ModuleTabs';

export default function MaxillofacialDentalAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦷 Maxillofacial &amp; Dental</h1>
        <p>Dental emergencies, orofacial infections, oral mucosal conditions, facial trauma, and oral cancer recognition for NP practice.</p>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />

      <div className="content-prose">

        <section className="content-section">
          <h2>History</h2>

          <h3>Pain Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Site &amp; Radiation</div>
              <p>Location of pain — tooth, jaw, face, throat. Radiation to ear, neck, or temple. Bilateral vs unilateral involvement.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Onset &amp; Duration</div>
              <p>Sudden onset suggests pulpitis or acute abscess. Gradual onset over weeks/months may indicate chronic infection, malignancy, or TMJ pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Character</div>
              <p>Reversible pulpitis: sharp, brief pain provoked by hot/cold, resolves within seconds. Irreversible pulpitis: spontaneous, prolonged, throbbing pain persisting after stimulus removed.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Aggravating &amp; Relieving Factors</div>
              <p>Pain on biting (periodontal/periapical). Cold relief = irreversible pulpitis (lingering cold sensitivity). Heat relief = rarely helpful. Pain with mouth opening = TMJ, trismus, or pericoronitis.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Associated Symptoms</div>
              <p>Fever, malaise, trismus, dysphagia, odynophagia, swelling, taste of pus (pointing abscess), voice change (submandibular/parapharyngeal involvement).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Severity &amp; Impact</div>
              <p>0–10 pain scale. Effect on eating, sleep, speech. Work or school absence. Prior analgesic use and response.</p>
            </div>
          </div>

          <h3>Oral Health History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Dental History</div>
              <p>Last dental visit. History of dental procedures (recent extraction, filling, root canal). Previous dental infections or abscesses. Denture use. Oral hygiene habits and diet.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Trauma History</div>
              <p>Recent facial or dental trauma. Fractured, displaced, or avulsed teeth. Mechanism (sports, MVA, assault). Time since injury (critical for tooth replantation).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Systemic Symptoms</div>
              <p>Unintentional weight loss, persistent hoarseness, difficulty swallowing (red flags for malignancy). Fever, rigors (suggest spreading infection). Skin or mucosal changes elsewhere.</p>
            </div>
          </div>

          <h3>Relevant Medical History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Bisphosphonates / Denosumab</div>
              <p>Risk of medication-related osteonecrosis of the jaw (MRONJ). Any planned dental procedure (especially extractions) requires liaison with prescribing physician. Duration of therapy and indication (osteoporosis vs malignancy) affect risk level.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Anticoagulants &amp; Antiplatelets</div>
              <p>Warfarin, NOACs, aspirin, clopidogrel. Increased bleeding risk with extractions and procedures. Generally continue anticoagulation for routine dental procedures; liaise with prescribing physician for major surgery.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Diabetes</div>
              <p>Poorly controlled diabetes increases infection risk and impairs healing. HbA1c and current glycaemic control. More aggressive antibiotic therapy and closer follow-up required. Check BGL at assessment.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Immunosuppression</div>
              <p>HIV, chemotherapy, systemic corticosteroids, post-transplant. Increased risk of opportunistic infections (oral candidiasis, herpetic stomatitis). Atypical presentations. Lower threshold for admission.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Infective Endocarditis Risk</div>
              <p>Prosthetic heart valves, previous IE, complex congenital heart disease, cardiac transplant with valvulopathy. Require antibiotic prophylaxis for invasive dental procedures per current Therapeutic Guidelines: Oral and Dental.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Medications</div>
              <p>OCP (interaction with some antibiotics — counsel on additional contraception). Phenytoin, cyclosporin, amlodipine (drug-induced gingival hyperplasia). Chemotherapy (mucositis). Dry mouth risk with many medications.</p>
            </div>
          </div>

          <h3>Social History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Tobacco &amp; Alcohol</div>
              <p>Major risk factors for oral SCC. Tobacco use (amount, duration, type including smokeless tobacco). Alcohol intake — both independently and synergistically increase malignancy risk.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Dental Access</div>
              <p>Private dental cover, public dental waitlist, rural/remote access. Financial barriers to dental care — relevant to chronic dental disease presentations. Aboriginal and Torres Strait Islander patients: higher rates of dental disease and barriers to access.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Extra-Oral Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Vital Signs &amp; General</div>
              <p>Temperature (fever indicates spreading infection), heart rate, blood pressure, oxygen saturation. General appearance — unwell, toxic, in distress. Airway adequacy assessment.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Facial Symmetry</div>
              <p>Swelling — location (buccal, submandibular, parotid, periorbital), extent, tenderness. Skin changes (erythema, fluctuance, skin breakdown). Facial nerve function if parotid involved.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Lymph Nodes</div>
              <p>Cervical lymphadenopathy — submental, submandibular, jugulodigastric, posterior cervical chain. Size, tenderness, mobility, consistency. Hard, fixed nodes raise suspicion for malignancy.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Trismus Assessment</div>
              <p>Measure inter-incisal distance — normal &gt;40mm. Reduced opening may indicate pericoronitis, masseteric abscess, TMJ pathology, or Ludwig&apos;s angina. Severe limitation compromises airway assessment and management.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">TMJ Examination</div>
              <p>Palpation over joint — tenderness, crepitus, clicking. Range of motion — opening, lateral deviation, protrusion. Jaw deviation on opening. Masticatory muscle tenderness (masseter, temporalis).</p>
            </div>
          </div>

          <h3>Intra-Oral Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Oral Mucosa</div>
              <p>Systematic examination of all mucosal surfaces: lips, buccal mucosa, gingiva, floor of mouth, hard and soft palate, oropharynx. Look for ulcers, white patches (leukoplakia), red patches (erythroplakia), swelling, or pigmentation changes.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Tongue</div>
              <p>Inspect all surfaces including lateral borders and ventral tongue — most common site of oral SCC. Assess mobility. Floor of mouth elevation suggests Ludwig&apos;s angina or sublingual abscess. Look for induration on palpation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Teeth &amp; Periodontium</div>
              <p>Caries, fractured teeth, failed restorations. Pericoronitis (partially erupted lower wisdom tooth — swollen overlying operculum). Gingival health — bleeding, recession, pocket depth estimation. Dental plaque and calculus burden.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Percussion &amp; Palpation</div>
              <p>Percussion sensitivity indicates periapical pathology or cracked tooth syndrome. Palpation of apical region for tenderness and fluctuance. Mobility testing. Pulp vitality (cold test with refrigerant spray or ice).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Salivary Glands</div>
              <p>Parotid and submandibular duct openings — reduced flow, purulent discharge (sialadenitis). Parotid enlargement (bilateral = systemic; unilateral = infection, calculus, or tumour). Dry mouth (xerostomia).</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Orthopantomogram (OPG)</div>
              <p>First-line dental X-ray — full mouth panoramic view. Visualises periapical pathology, caries, bone loss, impacted teeth, mandible and maxillary sinuses. Widely available. Refer to dental or radiology for OPG.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Periapical X-Ray</div>
              <p>Targeted view of specific tooth and surrounding bone. Higher resolution than OPG for individual tooth assessment. Usually taken by dentist in clinic.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">CT Facial Bones</div>
              <p>Indicated for: suspected Ludwig&apos;s angina or deep space neck infection, orbital cellulitis, suspected mandible fracture, complex infection extent. Defines abscess anatomy and airway threat. Order urgently if concerned.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Blood Tests</div>
              <p>FBE: leukocytosis indicates significant infection. CRP: infection marker and treatment response guide. BGL and HbA1c: diabetes assessment and glycaemic control. LFTs/renal function if systemic illness or prior to prescribing.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Microbiology</div>
              <p>Wound swab or aspirate culture from pointing abscess prior to incision and drainage. Blood cultures if systemically unwell or septic. Guides antibiotic de-escalation. Oral flora is typically polymicrobial (streptococci, anaerobes).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Biopsy</div>
              <p>Any oral ulcer or mucosal lesion not healing within 2–3 weeks requires urgent biopsy referral. Urgent referral to oral medicine, oral surgery, or ENT for suspicious lesions. Do not delay — early diagnosis of oral SCC significantly impacts prognosis.</p>
            </div>
          </div>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
