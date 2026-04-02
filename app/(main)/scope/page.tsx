import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Scope of Practice' };

export default function ScopePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Foundation</div>
        <h1>Scope of Practice</h1>
        <p>Understanding and building your scope of practice as an Australian Nurse Practitioner</p>
      </div>
      <div className="content-prose">
        <h2>What is Scope of Practice?</h2>
        <p>Scope of practice refers to the procedures, actions, and processes that a healthcare professional is permitted to undertake based on their specific education, experience, demonstrated competence, and authorisation under Australian law.</p>
        <p>For Nurse Practitioners in Australia, scope of practice is not a fixed document — it is a <strong>dynamic, evolving framework</strong> that must be continuously reviewed, documented, and negotiated within your practice context.</p>
        <div className="highlight-box">
          <h4>Key Regulatory Framework</h4>
          <p>Your scope of practice as an Australian NP is governed by:</p>
          <ul>
            <li>AHPRA — Australian Health Practitioner Regulation Agency</li>
            <li>Nursing and Midwifery Board of Australia (NMBA) NP Standards for Practice</li>
            <li>State and Territory health legislation (e.g. Drugs and Poisons Acts)</li>
            <li>Your employer's credentialing and privileging policies</li>
            <li>Medicare Benefits Schedule (MBS) and PBS prescribing authorities</li>
          </ul>
        </div>
        <h2>The Four Pillars of NP Scope</h2>
        <div className="scope-pillars">
          <div className="pillar-card"><span className="p-icon">🎓</span><h4>Education</h4><p>Masters-level preparation and ongoing CPD</p></div>
          <div className="pillar-card"><span className="p-icon">⚡</span><h4>Experience</h4><p>Minimum 5,000 hours advanced clinical experience</p></div>
          <div className="pillar-card"><span className="p-icon">✅</span><h4>Competency</h4><p>Demonstrated against NMBA NP standards</p></div>
          <div className="pillar-card"><span className="p-icon">⚖️</span><h4>Authority</h4><p>Endorsed by NMBA and employer credentialing</p></div>
        </div>
        <h2>Building Your Scope Document</h2>
        <p>Your scope of practice document should be a living record demonstrating the intersection of your population, clinical area, and advanced practice capabilities.</p>
        <h3>What to Include</h3>
        <ul>
          <li><strong>Practice population:</strong> Who do you provide care for?</li>
          <li><strong>Clinical context:</strong> What setting, conditions, and presentations?</li>
          <li><strong>Assessment capabilities:</strong> What history, examination, and diagnostic skills do you hold?</li>
          <li><strong>Diagnostic authority:</strong> What investigations can you order and interpret?</li>
          <li><strong>Prescribing scope:</strong> What Schedule 4/8 medications and for which conditions?</li>
          <li><strong>Referral pathways:</strong> When and to whom do you refer?</li>
          <li><strong>Limitations and exclusions:</strong> What is outside your current scope?</li>
          <li><strong>Supervision and collaboration:</strong> Your professional support structure</li>
        </ul>
        <h3>Expanding Your Scope Over Time</h3>
        <ol>
          <li>Identify the education requirement (courses, supervision, simulation)</li>
          <li>Document a supervised practice period with sign-off from a collaborating medical practitioner</li>
          <li>Conduct a self-assessment against the NMBA competency standards</li>
          <li>Seek endorsement from your employer and credentialing committee</li>
          <li>Update your scope document and notify your indemnity insurer</li>
        </ol>
        <div className="info-box">
          <p>💡 <strong>Tip:</strong> The NMBA does not prescribe what your scope looks like — it is your professional responsibility to define it clearly and ensure it aligns with both your competence and your employer context.</p>
        </div>
        <h2>Key Resources</h2>
        <div className="resources-list" style={{marginTop:'16px'}}>
          <a href="https://www.nursingmidwiferyboard.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">📋</div>
            <div className="r-body"><div className="r-title">NMBA — NP Standards for Practice</div><div className="r-desc">The definitive standards document for NP competency and scope in Australia</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.anmf.org.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🤝</div>
            <div className="r-body"><div className="r-title">ANMF — Australian Nursing and Midwifery Federation</div><div className="r-desc">Industrial support, scope guidance, and professional resources</div></div>
            <div className="r-ext">↗</div>
          </a>
        </div>
      </div>
    </>
  );
}
