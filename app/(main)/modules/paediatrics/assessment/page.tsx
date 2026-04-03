import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Paediatrics — Assessment' };

export default function PaediatricsAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Paediatrics</div>
        <h1>👶 Assessment</h1>
        <p>Structured paediatric history and examination including age-appropriate vital signs, developmental milestones, and targeted system assessment.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />

      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Presenting Complaint</h4>
          <ul>
            <li>Duration and onset of illness — acute, subacute, chronic</li>
            <li>Fever — temperature, duration, response to antipyretics</li>
            <li>Feeding — breastfeed or formula, frequency, volume, changes</li>
            <li>Fluid intake and urine output — wet nappies, last void</li>
            <li>Activity level — playful or lethargic, interaction with environment</li>
            <li>Rash — distribution, blanching, progression</li>
            <li>Vomiting — frequency, content (bilious, blood), projectile</li>
            <li>Diarrhoea — frequency, consistency (Bristol Stool Chart), blood or mucus</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Past History</h4>
          <ul>
            <li>Birth history — gestation, mode of delivery, birth weight, NICU admission</li>
            <li>Neonatal complications — jaundice, hypoglycaemia, infection, congenital abnormalities</li>
            <li>Previous illnesses, hospitalisations, and surgeries</li>
            <li>Chronic conditions — asthma, eczema, epilepsy, diabetes, congenital heart disease</li>
            <li>Medications — current and regular, including vitamins and supplements</li>
            <li>Allergies — food, medication, environmental (specify reaction type)</li>
            <li>Immunisation status — up to date with NIP, any missed vaccines</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Developmental History</h4>
          <ul>
            <li>Gross motor — age of sitting, crawling, walking, running</li>
            <li>Fine motor — age of pincer grip, drawing, writing</li>
            <li>Language — first words, two-word phrases, sentence length</li>
            <li>Social — eye contact, social smile (expected by 6 weeks), parallel and cooperative play</li>
            <li>School performance — learning, attention, behaviour</li>
            <li>Regression — loss of previously acquired milestones (always significant)</li>
            <li>Concerns — parent or teacher concerns about development</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Family and Social History</h4>
          <ul>
            <li>Parents and siblings — ages, health status</li>
            <li>Family history of genetic conditions, epilepsy, asthma, atopy</li>
            <li>Living situation — housing stability, supports</li>
            <li>Childcare or school attendance — contact with illness</li>
            <li>Sick contacts — household, childcare, school</li>
            <li>Travel history — domestic and international</li>
            <li>Parental concerns and health literacy</li>
          </ul>
        </div>
      </div>

      <h2>Age-Appropriate Vital Signs</h2>

      <table style={{width:'100%',borderCollapse:'collapse',marginBottom:'1.5rem',fontSize:'0.9rem'}}>
        <thead>
          <tr style={{background:'var(--navy)',color:'#fff'}}>
            <th style={{padding:'10px',textAlign:'left',borderBottom:'2px solid var(--gold)'}}>Age</th>
            <th style={{padding:'10px',textAlign:'left',borderBottom:'2px solid var(--gold)'}}>RR (breaths/min)</th>
            <th style={{padding:'10px',textAlign:'left',borderBottom:'2px solid var(--gold)'}}>HR (bpm)</th>
            <th style={{padding:'10px',textAlign:'left',borderBottom:'2px solid var(--gold)'}}>SBP (mmHg)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'var(--off-white)'}}>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>Neonate (0–1 month)</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>30–60</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>100–160</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>60–90</td>
          </tr>
          <tr>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>Infant (1–12 months)</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>25–50</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>100–160</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>70–100</td>
          </tr>
          <tr style={{background:'var(--off-white)'}}>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>Toddler (1–3 years)</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>20–40</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>90–150</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>80–110</td>
          </tr>
          <tr>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>Preschool (3–6 years)</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>20–30</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>70–120</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>80–110</td>
          </tr>
          <tr style={{background:'var(--off-white)'}}>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>School age (6–12 years)</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>15–25</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>60–110</td>
            <td style={{padding:'10px',borderBottom:'1px solid var(--border)'}}>90–120</td>
          </tr>
          <tr>
            <td style={{padding:'10px'}}>Adolescent (12–18 years)</td>
            <td style={{padding:'10px'}}>12–20</td>
            <td style={{padding:'10px'}}>55–105</td>
            <td style={{padding:'10px'}}>100–130</td>
          </tr>
        </tbody>
      </table>

      <h2>Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General Appearance</h4>
          <ul>
            <li>Overall impression — well or unwell, degree of distress</li>
            <li>Colour — pallor, cyanosis (peripheral vs central), jaundice, mottling</li>
            <li>Activity — playful, alert, lethargic, floppy (hypotonic)</li>
            <li>Hydration — fontanelle (sunken or bulging), skin turgor, mucous membranes, eyes</li>
            <li>Work of breathing — nasal flaring, tracheal tug, subcostal, intercostal, suprasternal recession</li>
            <li>Rash — blanching vs non-blanching (glass test), distribution, type</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Respiratory Examination</h4>
          <ul>
            <li>Respiratory rate — count for 60 seconds in sleeping infant</li>
            <li>Work of breathing — recession pattern, grunting, nasal flaring</li>
            <li>Auscultation — air entry bilaterally, crackles (bronchiolitis/pneumonia), wheeze (bronchiolitis, asthma), stridor (croup)</li>
            <li>Percussion — dullness (consolidation, effusion)</li>
            <li>SpO₂ — mandatory in any respiratory presentation</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Abdominal Examination</h4>
          <ul>
            <li>Inspection — distension, visible peristalsis, hernias</li>
            <li>Auscultation — bowel sounds (absent in obstruction/ileus)</li>
            <li>Palpation — tenderness (location, guarding, rebound), organomegaly, masses</li>
            <li>Liver span — normal varies by age, measure in MCL</li>
            <li>Hernias — umbilical (usually benign), inguinal (irreducibility = emergency)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>ENT Examination</h4>
          <ul>
            <li>Ears — otoscopy (red, bulging or perforated TM = AOM), ear canal, discharge</li>
            <li>Throat — tonsillar size, exudate, uvula position, palate</li>
            <li>Nose — discharge (watery vs mucopurulent), nasal polyps</li>
            <li>Cervical lymph nodes — size, tenderness, fluctuance</li>
            <li>Neck stiffness — passive neck flexion (meningism)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Neurological Assessment</h4>
          <ul>
            <li>Consciousness — AVPU (Alert, responds to Voice, Pain, Unresponsive) or GCS</li>
            <li>Fontanelle — sunken (dehydration), bulging (raised ICP, meningitis) — assess when calm</li>
            <li>Tone — hypertonia (meningitis, CP, hypoxic injury), hypotonia (sepsis, metabolic, NMD)</li>
            <li>Pupils — equal and reactive to light</li>
            <li>Seizure activity — describe duration, type, post-ictal state</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Skin</h4>
          <ul>
            <li>Rash — petechiae/purpura (non-blanching = urgent), viral exanthems (blanching)</li>
            <li>Eczema — distribution, severity (IGA scale), secondary infection</li>
            <li>Urticaria — wheals, angioedema (periorbital, lip — anaphylaxis risk)</li>
            <li>Nappy area — nappy rash (Candida vs irritant), sacral dimple</li>
            <li>Bruising — unexplained or unusual distribution (non-accidental injury consideration)</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <h3>Respiratory</h3>
      <ul>
        <li><strong>SpO₂:</strong> Mandatory in all respiratory presentations. Target ≥94% in children.</li>
        <li><strong>CXR:</strong> Indicated for suspected pneumonia, significant respiratory distress, or first wheeze in infant (foreign body, bronchiolitis with complications). Not routine for croup or typical asthma.</li>
        <li><strong>Viral respiratory panel / RSV rapid antigen test:</strong> Confirms bronchiolitis aetiology (RSV) — useful for cohorting in hospital. Does not change management.</li>
        <li><strong>Spirometry:</strong> Useful from age 5–6 years for asthma diagnosis and monitoring. Peak flow meter for acute monitoring.</li>
      </ul>

      <h3>Gastroenteritis and Dehydration</h3>
      <ul>
        <li><strong>Urine MCS:</strong> Exclude UTI in febrile child — clean catch or catheter sample preferred over bag specimen.</li>
        <li><strong>Urine specific gravity / osmolality:</strong> Concentrated urine supports dehydration.</li>
        <li><strong>EUC and venous blood gas:</strong> Moderate-severe dehydration — assess electrolytes (hyper/hyponatraemia), bicarbonate (metabolic acidosis), glucose.</li>
        <li><strong>Stool MCS:</strong> Bloody diarrhoea, persistent diarrhoea (&gt;14 days), or travel history.</li>
      </ul>

      <h3>Fever Without Source</h3>
      <ul>
        <li><strong>Urine MCS:</strong> First-line investigation in febrile children — UTI is the most common serious bacterial infection.</li>
        <li><strong>FBE and CRP:</strong> WCC and CRP help stratify bacterial infection risk — high WCC (&gt;15) or high CRP (&gt;40) increases bacterial likelihood.</li>
        <li><strong>Blood cultures:</strong> Before starting antibiotics in any unwell child with fever.</li>
        <li><strong>LP:</strong> Suspected meningitis — after CT if focal neurology or raised ICP features present.</li>
        <li><strong>Rapid antigen tests:</strong> Streptococcal antigen (throat), RSV, influenza A/B if indicated.</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Royal Children&apos;s Hospital Melbourne Clinical Practice Guidelines, Therapeutic Guidelines (Paediatrics).
      </div>
    </>
  );
}
