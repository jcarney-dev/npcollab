import ModuleTabs from '@/components/ModuleTabs';

export default function SurgicalAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🔪</span>
        <div>
          <span className="label">Clinical Module — Assessment</span>
          <h1>Surgical Assessment</h1>
          <p>Systematic approach to pre-operative evaluation, acute surgical assessment, and post-operative monitoring.</p>
        </div>
      </div>

      <ModuleTabs moduleId="surgical" />

      <h2>Surgical History</h2>

      <h3>Acute Surgical Presentation</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Pain Assessment</h4>
          <ul>
            <li>Site, onset, character, radiation, severity (0–10)</li>
            <li>Onset — sudden (perforation, vascular) vs gradual (appendicitis, cholecystitis)</li>
            <li>Relationship to food, defecation, movement</li>
            <li>Associated symptoms: nausea, vomiting, change in bowel habit</li>
            <li>Previous episodes — known gallstones, diverticular disease, hernia</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Gastrointestinal History</h4>
          <ul>
            <li>Last bowel motion — absolute constipation (no flatus) suggests obstruction</li>
            <li>Nausea and vomiting — bilious vs faeculent</li>
            <li>Dysphagia, haematemesis, melaena, PR bleeding</li>
            <li>Appetite and weight changes</li>
            <li>Previous abdominal surgery — adhesions risk for obstruction</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Urological</h4>
          <ul>
            <li>Haematuria (painless — bladder/renal malignancy; painful — stones or infection)</li>
            <li>Dysuria, frequency, urgency</li>
            <li>Urinary retention — inability to void</li>
            <li>Testicular pain or swelling (testicular torsion — emergency in males)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Surgical History</h4>
          <ul>
            <li>Previous operations and anaesthesia — complications, type (GA/regional)</li>
            <li>Known hernias or abdominal wall defects</li>
            <li>Family history of malignancy</li>
            <li>Medications: anticoagulants, antiplatelets, steroids, immunosuppressants</li>
            <li>Allergies — particularly to latex, iodine, antibiotics</li>
          </ul>
        </div>
      </div>

      <h3>Pre-operative Assessment Questions</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Cardiac Risk (RCRI)</h4>
          <ul>
            <li>Any history of heart attack, angina, heart failure, stroke or TIA?</li>
            <li>Insulin-dependent diabetes?</li>
            <li>Renal impairment (creatinine &gt;177 µmol/L)?</li>
            <li>Functional capacity — can you climb a flight of stairs without stopping?</li>
            <li>Exercise tolerance — how far can you walk on level ground?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Respiratory Risk (STOP-BANG)</h4>
          <ul>
            <li>Do you snore loudly?</li>
            <li>Do you feel tired or sleepy during the day?</li>
            <li>Has anyone observed you stop breathing during sleep?</li>
            <li>Do you have or are you being treated for high blood pressure?</li>
            <li>BMI &gt;35? Age &gt;50? Neck circumference &gt;40cm? Male gender?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Bleeding Risk</h4>
          <ul>
            <li>Anticoagulant use — warfarin, apixaban, rivaroxaban, dabigatran</li>
            <li>Antiplatelet agents — aspirin, clopidogrel, ticagrelor</li>
            <li>Platelet disorders or haemophilia</li>
            <li>Last dose of anticoagulant and bridging therapy plan</li>
            <li>NSAIDs — cease 3–7 days pre-operatively</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>VTE Risk (Caprini)</h4>
          <ul>
            <li>Previous DVT or PE?</li>
            <li>Known thrombophilia or clotting disorder?</li>
            <li>Active malignancy?</li>
            <li>BMI, mobility, and length of surgery</li>
            <li>HRT or oral contraceptive pill?</li>
          </ul>
        </div>
      </div>

      <h2>Surgical Examination</h2>

      <h3>Abdominal Examination</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Inspection</h4>
          <ul>
            <li>Distension — generalised (obstruction, ascites) vs localised</li>
            <li>Visible peristalsis (small bowel obstruction)</li>
            <li>Previous surgical scars — document location</li>
            <li>Hernias — groin (inguinal/femoral), umbilical, incisional</li>
            <li>Skin: jaundice, bruising, stomas</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Palpation</h4>
          <ul>
            <li>Tenderness — site, severity</li>
            <li>Guarding — voluntary vs involuntary</li>
            <li>Rigidity — board-like = peritonism (perforation, peritonitis)</li>
            <li>Rebound tenderness — releases: pain = peritoneal irritation</li>
            <li>McBurney&apos;s point (RIF — appendicitis), Murphy&apos;s sign (RUQ — cholecystitis)</li>
            <li>Masses — organ enlargement, pulsatile aorta</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Percussion and Auscultation</h4>
          <ul>
            <li>Tympany over distended bowel</li>
            <li>Shifting dullness (ascites)</li>
            <li>Absent bowel sounds — peritonitis, ileus, late obstruction</li>
            <li>Hyperactive/tinkling sounds — early bowel obstruction</li>
            <li>Hepatic dullness — loss suggests free air under diaphragm</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Hernia Assessment</h4>
          <ul>
            <li>Location: inguinal (above and medial to pubic tubercle) vs femoral (below)</li>
            <li>Reducibility: ask patient to reduce or attempt gentle pressure</li>
            <li>Tenderness: significant pain = incarceration/strangulation</li>
            <li>Cough impulse: present = reducible</li>
            <li>Overlying skin: erythema, oedema = strangulation</li>
          </ul>
        </div>
      </div>

      <h2>Wound Assessment</h2>
      <h3>Post-operative Wound Inspection</h3>
      <p>Assess using CDC SSI classification. Document:</p>
      <ul>
        <li>Healing by primary intention vs secondary intention</li>
        <li>Erythema — measure and mark extent, warm to touch</li>
        <li>Discharge — serous (normal), purulent (infected), serosanguinous (dehiscence concern)</li>
        <li>Depth of involvement — skin only vs fascial layer</li>
        <li>Wound edges — approximated vs dehiscing</li>
        <li>Surrounding skin — cellulitis, induration, bullae, necrosis (necrotising fasciitis)</li>
      </ul>

      <h3>AAABCD Post-operative Assessment Approach</h3>
      <div className="info-box">
        <ul>
          <li><strong>Airway and Breathing</strong> — SpO2, RR, atelectasis, pneumonia (Wind — Days 1–2)</li>
          <li><strong>Circulation</strong> — HR, BP, fluid balance, drain output, haemorrhage signs</li>
          <li><strong>Disability</strong> — GCS, pain score, analgesia adequacy</li>
          <li><strong>Everything else</strong> — temperature, wound, catheter, VTE prophylaxis, bowel function</li>
        </ul>
      </div>

      <h2>Investigations</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Imaging</h4>
          <ul>
            <li>Erect CXR — free air under diaphragm (perforation)</li>
            <li>AXR — dilated bowel loops (obstruction), air-fluid levels</li>
            <li>CT abdomen/pelvis — appendicitis (&gt;95%), diverticulitis, obstruction, AAA</li>
            <li>Ultrasound abdomen — gallstones, AAA screening, right lower quadrant (paediatrics, pregnancy)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Pre-operative Bloods</h4>
          <ul>
            <li>FBE — anaemia, infection</li>
            <li>EUC — renal function, electrolytes</li>
            <li>LFTs — hepatic function, jaundice workup</li>
            <li>Coagulation — INR, APTT (anticoagulant patients, liver disease)</li>
            <li>Group and hold — crossmatch for major surgery</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Post-operative Monitoring</h4>
          <ul>
            <li>FBE, CRP — sepsis markers</li>
            <li>Blood cultures × 2 — if fever and sepsis suspected</li>
            <li>Wound swab — SSI (MCS)</li>
            <li>MSU — UTI from catheter (Days 3–5)</li>
            <li>ECG — arrhythmia, post-op cardiac event</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Specific Investigations</h4>
          <ul>
            <li>D-dimer and duplex ultrasound — DVT assessment</li>
            <li>CTPA — PE (tachycardia, hypoxia, pleuritic pain)</li>
            <li>CT angiography — vascular emergencies (AAA rupture)</li>
            <li>Lactate — perioperative sepsis, bowel ischaemia</li>
          </ul>
        </div>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
