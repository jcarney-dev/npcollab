import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Introduction' };

export default function IntroPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Getting Started</div>
        <h1>Welcome to NPCollab</h1>
        <p>A free, collaborative learning resource built by Australian Nurse Practitioners — for Nurse Practitioners and NP students.</p>
      </div>

      <div className="content-prose">

        <h2>What is NPCollab?</h2>
        <p>NPCollab is a free educational resource designed specifically for Australian Nurse Practitioners, Transitional Nurse Practitioners, and NP students. Whether you are just beginning your NP journey, preparing for your AHPRA endorsement, or looking for a clinical reference to keep your practice sharp — this is a space built for you.</p>

        <p>Everything here is written by practising Australian NPs, grounded in Australian guidelines, and structured to reflect the realities of NP practice in this country. No paywalls. No advertising. No generic overseas content that does not translate.</p>

        <div className="highlight-box">
          <h4>Who NPCollab is For</h4>
          <ul>
            <li><strong>NP students</strong> completing a Masters of Nurse Practitioner program</li>
            <li><strong>Transitional Nurse Practitioners (TNPs)</strong> working toward full endorsement</li>
            <li><strong>Endorsed Nurse Practitioners</strong> looking for a quick clinical reference or quiz refresher</li>
            <li><strong>Registered Nurses</strong> considering the NP pathway and wanting to understand the role</li>
            <li><strong>Collaborating clinicians</strong> who want to understand what NPs do and how we practise</li>
          </ul>
        </div>

        <h2>What You Will Find Here</h2>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📚</div><h4>Getting Started Content</h4></div>
            <ul>
              <li>NP metaspecialties overview</li>
              <li>How to start your NP role</li>
              <li>Scope of practice explained</li>
              <li>Patient assessment frameworks</li>
              <li>The OLDCARTS mnemonic in practice</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🏥</div><h4>Clinical Modules</h4></div>
            <ul>
              <li>Cardiac — ACS, heart failure, AF, hypertension</li>
              <li>ENT — otitis, pharyngitis, epistaxis, hearing loss</li>
              <li>Ophthalmology — red eye, visual loss, glaucoma</li>
              <li>Respiratory — asthma, COPD, pneumonia, PE</li>
              <li>19+ more modules in development</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📝</div><h4>For Every Live Module</h4></div>
            <ul>
              <li>Clinical overview with red flags and differentials</li>
              <li>Structured history and examination framework</li>
              <li>Example SOAP note with expandable sections</li>
              <li>Curated Australian resource links</li>
              <li>20-question quiz with detailed explanations</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🇦🇺</div><h4>Australian Focus</h4></div>
            <ul>
              <li>All content aligned to Australian guidelines</li>
              <li>Therapeutic Guidelines, RACGP, NMBA standards</li>
              <li>MBS billing and PBS prescribing references</li>
              <li>AHPRA endorsement pathway guidance</li>
              <li>Australian NP scope and legislation context</li>
            </ul>
          </div>
        </div>

        <h2>How to Use NPCollab</h2>
        <p>NPCollab is designed as a flexible reference — not a linear textbook. Here is how we recommend approaching it depending on where you are in your NP journey:</p>

        <div className="highlight-box">
          <h4>If You Are an NP Student or TNP</h4>
          <ul>
            <li>Start with <strong>Metaspecialties</strong> to understand where NPs practise and what each area involves</li>
            <li>Read <strong>Starting Your Role</strong> to understand the TNP → NP endorsement pathway</li>
            <li>Work through <strong>Scope of Practice</strong> carefully — this is foundational to everything you do as an NP</li>
            <li>Study the <strong>Patient Assessment</strong> page and ensure you can apply OLDCARTS confidently</li>
            <li>Then move into clinical modules relevant to your placement or practice area</li>
            <li>Use the <strong>Quiz</strong> at the end of each module to test your knowledge and consolidate learning</li>
          </ul>
        </div>

        <div className="highlight-box">
          <h4>If You Are an Endorsed NP</h4>
          <ul>
            <li>Use clinical modules as a rapid reference for uncommon presentations or areas outside your usual scope</li>
            <li>Use SOAP note examples as templates or teaching tools for students you may be supervising</li>
            <li>Check the Resources tab of each module for updated Australian guidelines</li>
            <li>Complete quizzes for CPD evidence — screenshot your score as documentation</li>
          </ul>
        </div>

        <h2>How NPCollab is Built</h2>
        <p>NPCollab is built and maintained by Australian Nurse Practitioners. All clinical content is reviewed against current Australian guidelines — primarily Therapeutic Guidelines, RACGP clinical guidelines, NMBA Standards for Practice, and relevant specialty college resources.</p>

        <p>This is a living resource. Content is added and updated regularly. If you find an error, an outdated guideline, or a topic that is missing — please use the <Link href="/support">Support page</Link> to let us know. We rely on the NP community to keep this accurate.</p>

        <div className="info-box">
          <p>⚠️ <strong>Clinical Disclaimer:</strong> All content on NPCollab is for educational purposes only. It does not replace clinical judgement, local policies, or current Australian guidelines. Always apply your own professional judgement and consult current guidelines when making clinical decisions.</p>
        </div>

        <h2>Getting Started — Recommended Path</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">1️⃣</div><h4>Step 1</h4></div>
            <ul>
              <li><Link href="/metaspecialties">Read Metaspecialties</Link> — understand NP practice areas</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">2️⃣</div><h4>Step 2</h4></div>
            <ul>
              <li><Link href="/starting-role">Starting Your Role</Link> — TNP to NP pathway</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">3️⃣</div><h4>Step 3</h4></div>
            <ul>
              <li><Link href="/scope">Scope of Practice</Link> — regulatory framework</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">4️⃣</div><h4>Step 4</h4></div>
            <ul>
              <li><Link href="/assessment">Patient Assessment</Link> — OLDCARTS and history-taking</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}
