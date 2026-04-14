import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'GI & Hepatobiliary — Assessment' };

export default function GiAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫃 GI &amp; Hepatobiliary</h1>
        <p>Assessment and management of common gastrointestinal and hepatobiliary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />


      <div className="content-prose">
      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Abdominal Pain Assessment</h4>
          <ul>
            <li>Site — nine regions of abdomen, radiation pattern</li>
            <li>Onset — sudden (perforation, ischaemia) vs gradual</li>
            <li>Character — colicky (bowel, biliary, ureteric) vs constant (peritonitis, ischaemia)</li>
            <li>Severity — VAS score, functional impact</li>
            <li>Timing — relationship to meals, defecation, menstrual cycle, position</li>
            <li>Associated symptoms — nausea, vomiting, change in bowel habit, bleeding</li>
            <li>Aggravating and relieving factors — food, position, antacids, defecation</li>
            <li>Previous episodes — same or different character?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Bowel Habit History</h4>
          <ul>
            <li>Frequency — normal range 3 times/day to 3 times/week</li>
            <li>Bristol Stool Chart — types 1–2 (constipation), 3–4 (normal), 5–7 (loose/diarrhoea)</li>
            <li>Blood — fresh red (lower GI), dark or mixed with stool (higher), melaena (upper GI)</li>
            <li>Mucus — inflammatory bowel disease, IBS</li>
            <li>Urgency, tenesmus, incomplete evacuation — IBD, rectal pathology</li>
            <li>Nocturnal symptoms — organic disease more likely than functional</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Alarm Features (Always Ask)</h4>
          <ul>
            <li>Unintentional weight loss</li>
            <li>Progressive dysphagia</li>
            <li>Persistent vomiting</li>
            <li>Iron deficiency anaemia</li>
            <li>Rectal bleeding or melaena</li>
            <li>Palpable abdominal or rectal mass</li>
            <li>Age &gt;50 with new symptoms</li>
            <li>Family history of colorectal cancer or IBD</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Liver and Hepatobiliary History</h4>
          <ul>
            <li>Alcohol intake — units per week, duration, AUDIT-C score</li>
            <li>Jaundice — skin, sclera, urine colour (dark), stool colour (pale)</li>
            <li>Pruritus — cholestatic liver disease</li>
            <li>Abdominal swelling — ascites</li>
            <li>Risk factors for viral hepatitis — country of birth, IDU, sexual history, tattoos</li>
            <li>Medications — including complementary, herbal, over the counter</li>
            <li>Family history — liver disease, haemochromatosis, Wilson&apos;s disease</li>
          </ul>
        </div>
      </div>

      <h2>GI Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General Inspection</h4>
          <ul>
            <li>Jaundice — scleral icterus, skin</li>
            <li>Chronic liver disease stigmata — spider naevi, palmar erythema, leuconychia, clubbing, Dupuytren&apos;s, parotid enlargement, gynaecomastia, caput medusae, testicular atrophy</li>
            <li>Nutritional status — muscle wasting, cachexia</li>
            <li>Mental status — hepatic encephalopathy</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Abdominal Examination</h4>
          <ul>
            <li>Inspection — distension, visible peristalsis, scars, hernias, caput medusae</li>
            <li>Auscultation — bowel sounds (before palpation), bruits</li>
            <li>Percussion — tympanic vs dull, liver span, shifting dullness (ascites), fluid thrill</li>
            <li>Palpation — light then deep, all nine regions, organomegaly, tenderness, guarding, rigidity, Murphy&apos;s sign, Rovsing&apos;s sign</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Key Signs</h4>
          <ul>
            <li>Murphy&apos;s sign — acute cholecystitis (inspiratory arrest on RUQ palpation)</li>
            <li>Rovsing&apos;s sign — appendicitis (RIF pain on LIF palpation)</li>
            <li>Rebound tenderness — peritonitis</li>
            <li>Shifting dullness and fluid thrill — ascites</li>
            <li>Liver span — normal 10–12cm in MCL</li>
            <li>Splenomegaly — portal hypertension, haematological causes</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Investigations</h4>
          <ul>
            <li>LFTs — ALT, AST, ALP, GGT, bilirubin, albumin, total protein</li>
            <li>FBE — anaemia (bleeding, chronic disease), WCC (infection)</li>
            <li>CRP — inflammation, infection</li>
            <li>Coagulation — INR elevated in liver disease</li>
            <li>H. pylori — stool antigen test (preferred) or urea breath test</li>
            <li>HBsAg, anti-HBs, anti-HBc — hepatitis B status</li>
            <li>HCV antibody then HCV RNA — hepatitis C</li>
            <li>Coeliac serology — anti-tTG IgA with total IgA</li>
            <li>Faecal occult blood test (FOBT) — colorectal cancer screening</li>
            <li>Ultrasound abdomen — liver, gallbladder, biliary tract, spleen</li>
            <li>FIB-4 score — non-invasive liver fibrosis assessment (age × AST / (platelets × √ALT))</li>
            <li>Endoscopy referral — alarm features, GORD not responding, IBD assessment</li>
          </ul>
        </div>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Gastrointestinal), GESA Clinical Practice Guidelines.
      </div>
      </div>

      <ModuleNav moduleId="gi-hepatobiliary" />

    </>
  );
}
