import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';
import ContributorCard from '@/components/ContributorCard';

export const metadata: Metadata = {
  title: 'GI and Hepatobiliary Clinical Module',
  description: 'Australian NP gastrointestinal and hepatobiliary module — abdominal pain, liver disease, IBD, and GI emergencies. SOAP notes, resources, and quiz.',
  openGraph: {
    title: 'GI and Hepatobiliary Clinical Module | NPCollab',
    description: 'Australian NP gastrointestinal and hepatobiliary module — abdominal pain, liver disease, IBD, and GI emergencies. SOAP notes, resources, and quiz.',
    url: 'https://npcollab.com/modules/gi-hepatobiliary',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/gi-hepatobiliary',
  },
};

export default function GiHepatobiliaryPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫃 GI &amp; Hepatobiliary</h1>
        <p>Assessment and management of common gastrointestinal and hepatobiliary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />


      <div className="content-prose">
      <p>Gastrointestinal and hepatobiliary conditions are encountered across virtually every NP practice setting in Australia, from urgent care and primary care to gastroenterology and oncology support roles. This module covers the assessment and management of common presentations including abdominal pain, nausea and vomiting, diarrhoea, constipation, upper and lower GI bleeding, liver disease, and biliary pathology. Understanding when to investigate, when to refer, and how to interpret GI-related pathology and imaging is fundamental to safe NP practice.</p>

      <div className="highlight-box">
        <h4>⚠️ Red Flags — Refer Urgently or Call 000</h4>
        <ul>
          <li>Haematemesis or melaena — upper GI bleed until excluded</li>
          <li>Rigid or board-like abdomen — peritonitis</li>
          <li>Acute severe abdominal pain with haemodynamic instability — ruptured AAA, mesenteric ischaemia</li>
          <li>Jaundice with fever and rigors — ascending cholangitis (Charcot&apos;s triad)</li>
          <li>Suspected bowel obstruction — absolute constipation, distension, vomiting</li>
          <li>Painless rectal bleeding in a patient over 50 — colorectal cancer until excluded</li>
          <li>Unintentional weight loss &gt;5% in 6 months with GI symptoms</li>
          <li>Dysphagia — progressive difficulty swallowing solids then liquids</li>
          <li>New onset ascites — liver cirrhosis, malignancy</li>
          <li>Signs of hepatic encephalopathy — confusion, asterixis, fetor hepaticus</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently assess and manage most common GI presentations including GORD, IBS, constipation, and MASLD monitoring. Haematemesis, suspected malignancy, inflammatory bowel disease, and cirrhosis complications require specialist gastroenterology or hepatology input. NPs can now prescribe direct-acting antiviral (DAA) therapy for hepatitis C under PBS authority.
      </div>

      <h2>Common Presentations</h2>

      <h3>Upper GI</h3>
      <p>Common upper GI presentations include gastro-oesophageal reflux disease (GORD), peptic ulcer disease, functional dyspepsia, oesophagitis, haematemesis and melaena, and dysphagia. Alarm features requiring urgent endoscopy referral include dysphagia, unintentional weight loss, iron deficiency anaemia, haematemesis, persistent vomiting, or new onset symptoms in patients over 55.</p>

      <h3>Lower GI</h3>
      <p>Lower GI presentations include irritable bowel syndrome (IBS), inflammatory bowel disease (Crohn&apos;s and ulcerative colitis), diverticular disease, colorectal cancer screening, constipation, diarrhoea, haemorrhoids and anal fissure, and rectal bleeding. Any rectal bleeding in a patient over 50 requires colorectal cancer exclusion regardless of an apparent benign cause.</p>

      <h3>Hepatobiliary</h3>
      <p>Common hepatobiliary conditions include non-alcoholic fatty liver disease (NAFLD/MASLD), alcoholic liver disease, viral hepatitis B and C, gallstones and biliary colic, acute cholecystitis, cirrhosis and its complications, and drug-induced liver injury.</p>

      <h2>Key Conditions</h2>

      <h3>GORD</h3>
      <p>Gastro-oesophageal reflux disease affects approximately 10–15% of Australians. Caused by lower oesophageal sphincter incompetence allowing acid reflux. Typical symptoms: heartburn, regurgitation, worse after meals and lying flat. Atypical: chronic cough, laryngitis, dental erosion. Management: lifestyle modification (weight loss, elevate head of bed, avoid triggers), PPI therapy for 4–8 weeks. H. pylori test and treat if peptic ulcer suspected. Alarm symptoms (dysphagia, weight loss, bleeding, age &gt;50 with new symptoms) warrant urgent endoscopy referral.</p>

      <h3>Irritable Bowel Syndrome</h3>
      <p>IBS affects up to 15% of Australians and is a diagnosis of exclusion. Rome IV criteria: recurrent abdominal pain ≥1 day/week for 3 months, associated with ≥2 of: related to defecation, change in stool frequency, change in stool form. Subtypes: IBS-C (constipation predominant), IBS-D (diarrhoea predominant), IBS-M (mixed). Exclude red flags before diagnosing. Management: dietary modification (low FODMAP diet evidence-based), fibre, stress management, antispasmodics (hyoscine), loperamide for IBS-D, osmotic laxatives for IBS-C.</p>

      <h3>MASLD (Non-Alcoholic Fatty Liver Disease)</h3>
      <p>Now renamed Metabolic-Associated Steatotic Liver Disease (MASLD). Most common liver disease in Australia, strongly associated with obesity, type 2 diabetes, dyslipidaemia, and metabolic syndrome. Ranges from simple steatosis to non-alcoholic steatohepatitis (NASH) to cirrhosis. Diagnosis: elevated LFTs (ALT &gt; AST), fatty liver on ultrasound, exclusion of other causes. FIB-4 score is used to risk-stratify for advanced fibrosis. Management: weight loss (≥10% reduces liver fat significantly), treat metabolic risk factors, avoid alcohol. GLP-1 agonists show emerging benefit.</p>

      <h3>Hepatitis B</h3>
      <p>Australia has approximately 200,000 people living with chronic hepatitis B. Transmission: vertical (mother to child), sexual, blood-to-blood. Chronic infection is defined as HBsAg positive &gt;6 months. Monitoring: LFTs, HBV DNA, HBeAg/anti-HBe every 6–12 months. Refer to gastroenterology or hepatology for antiviral therapy consideration. Vaccination: three-dose course on Australian NIP. Screen people born in intermediate/high prevalence countries, MSM, people who inject drugs, and household contacts of HBsAg positive individuals.</p>

      <h3>Hepatitis C</h3>
      <p>Approximately 120,000 Australians are living with chronic hepatitis C. Transmission: blood-to-blood (PWID is the primary risk in Australia). Curative direct-acting antiviral (DAA) therapy is available — 8–12 week treatment, &gt;95% cure rate. NPs can now prescribe DAA therapy under PBS authority. Screen: people who inject drugs, those born in high prevalence countries, blood transfusion before 1990, and tattoos in unregulated settings. Testing: HCV antibody first, if positive HCV RNA to confirm active infection.</p>

      <h3>Biliary Colic and Cholecystitis</h3>
      <p>Biliary colic: episodic severe RUQ or epigastric pain radiating to right shoulder, 30 minutes to 6 hours, often post-fatty meal, with nausea and vomiting. No fever. Murphy&apos;s sign negative. Management: analgesia, ultrasound, elective cholecystectomy referral. Acute cholecystitis: persistent RUQ pain &gt;6 hours, fever, Murphy&apos;s sign positive, elevated WCC and CRP. Requires hospital admission for IV antibiotics and surgical review.</p>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including Therapeutic Guidelines (Gastrointestinal) and the Gastroenterological Society of Australia (GESA).
      </div>
      </div>

    
      <ModuleNav moduleId="gi-hepatobiliary" />

      <ContributorCard moduleSlug="gi-hepatobiliary" />
      <ModuleSponsorSlot moduleSlug="gi-hepatobiliary" />
    </>
  );
}
