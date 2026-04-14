import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'Mental Health — Resources' };

export default function MentalHealthResourcesPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧠 Mental Health</h1>
        <p>Assessment and management of common mental health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />


      <div className="content-prose">
      <h2>Clinical Guidelines</h2>
      <div className="resource-list">
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Therapeutic Guidelines: Psychotropic</div>
          <div className="resource-desc">Evidence-based guidance on prescribing antidepressants, antipsychotics, mood stabilisers, and anxiolytics in the Australian context. Subscription required — available via most health services.</div>
        </a>
        <a href="https://www.ranzcp.org/clinical-guidelines-recommendations" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">RANZCP Clinical Practice Guidelines</div>
          <div className="resource-desc">Royal Australian and New Zealand College of Psychiatrists guidelines covering schizophrenia, bipolar disorder, eating disorders, borderline personality disorder, and more.</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/mental-health" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">RACGP Mental Health Care in General Practice</div>
          <div className="resource-desc">Comprehensive guidance for primary care mental health assessment, treatment, and referral pathways. Directly applicable to NP practice.</div>
        </a>
        <a href="https://headtohealth.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Head to Health (Australian Government)</div>
          <div className="resource-desc">Australian Government digital mental health gateway — links to apps, online programs, forums, and phone services. Useful for patient referral.</div>
        </a>
      </div>

      <h2>Validated Screening Tools</h2>
      <div className="resource-list">
        <a href="https://www.phqscreeners.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">PHQ-9 (Patient Health Questionnaire-9)</div>
          <div className="resource-desc">Gold standard depression screening tool. Freely available. Also includes PHQ-2 as brief initial screen. Available in multiple languages. Score ≥10 = likely major depression.</div>
        </a>
        <a href="https://www.phqscreeners.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">GAD-7 (Generalised Anxiety Disorder 7)</div>
          <div className="resource-desc">Validated anxiety screening tool. Widely used in Australian primary care. Score ≥10 = likely moderate-severe anxiety. Also sensitive for panic, social anxiety, and PTSD.</div>
        </a>
        <a href="https://auditscreen.org" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">AUDIT-C (Alcohol Use Disorders Identification Test)</div>
          <div className="resource-desc">3-item brief screen for hazardous alcohol use. Score ≥3 (women) or ≥4 (men) indicates hazardous use. Full AUDIT (10 items) for more detailed assessment.</div>
        </a>
        <a href="https://www.blackdoginstitute.org.au/resources-support/depression/self-test/" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">MDQ (Mood Disorder Questionnaire)</div>
          <div className="resource-desc">13-item self-report screen for bipolar spectrum disorders. Positive screen (≥7 symptoms + concurrent + moderate-severe impairment) warrants further evaluation before commencing antidepressants.</div>
        </a>
        <a href="https://www.pc-ptsd.org/pcptsd.html" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">PC-PTSD-5 (Primary Care PTSD Screen)</div>
          <div className="resource-desc">5-item brief screen for PTSD suitable for primary care and NP settings. Score ≥3 is a positive screen warranting further assessment.</div>
        </a>
      </div>

      <h2>Better Access to Mental Health Care</h2>
      <div className="resource-list">
        <a href="https://www.health.gov.au/topics/mental-health-and-suicide-prevention/better-access" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Better Access — Department of Health and Aged Care</div>
          <div className="resource-desc">Comprehensive information on the Better Access initiative — Medicare-funded mental health treatment plans, eligible providers, session limits, and referral pathways. NPs can initiate Mental Health Treatment Plans.</div>
        </a>
        <a href="https://www.servicesaustralia.gov.au/mental-health-care-plan" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Mental Health Treatment Plan — Services Australia</div>
          <div className="resource-desc">How to prepare and claim Medicare rebates for Mental Health Treatment Plans. Item numbers, eligibility criteria, and review requirements for NPs.</div>
        </a>
      </div>

      <h2>Crisis & Consumer Support</h2>
      <div className="resource-list">
        <a href="https://www.lifeline.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Lifeline (13 11 14)</div>
          <div className="resource-desc">24/7 crisis support for Australians in mental health distress. Phone, text, and online chat. Appropriate for patients with suicidal ideation or acute crisis.</div>
        </a>
        <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Beyond Blue (1300 22 4636)</div>
          <div className="resource-desc">Information, support, and forums for depression and anxiety. 24/7 phone and chat support. Resources for consumers and health professionals. Newaccess low-intensity CBT programme.</div>
        </a>
        <a href="https://www.sane.org" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">SANE Australia (1800 187 263)</div>
          <div className="resource-desc">Support for Australians living with complex mental health issues. Phone support, online community, and resources for complex illness including schizophrenia and bipolar disorder.</div>
        </a>
        <a href="https://headspace.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">headspace</div>
          <div className="resource-desc">National youth mental health service for Australians aged 12–25. Centre-based services, online and phone support, work and study support.</div>
        </a>
        <a href="https://www.suicide.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Suicide Call Back Service (1300 659 467)</div>
          <div className="resource-desc">24/7 crisis support for people at risk of suicide. Also supports carers and bereaved by suicide. Phone and online counselling.</div>
        </a>
      </div>

      <h2>Opioid Agonist Treatment</h2>
      <div className="resource-list">
        <a href="https://www.nationaldrugstrategy.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">National Drug Strategy — Australian Government</div>
          <div className="resource-desc">Australian policy framework for alcohol and other drug treatment. Links to state/territory OAT prescribing guidelines and clinical resources.</div>
        </a>
        <a href="https://www.nps.org.au/opioids" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NPS MedicineWise — Opioids Resources</div>
          <div className="resource-desc">Evidence-based prescribing resources for opioids including safer prescribing, dose equivalence, and naloxone access. Relevant for NPs managing chronic pain and OUD.</div>
        </a>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Resources current as of 2025 — verify currency before clinical use.
      </div>
      </div>

      <ModuleNav moduleId="mental-health" />

    </>
  );
}
