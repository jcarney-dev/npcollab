import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Starting Your NP Role',
  description: 'TNP vs NP explained, the AHPRA endorsement pathway, finding a mentor, job tips, and practical first steps in your NP role.',
  openGraph: {
    title: 'Starting Your NP Role | NPCollab',
    description: 'TNP vs NP explained, the AHPRA endorsement pathway, finding a mentor, job tips, and practical first steps in your NP role.',
    url: 'https://npcollab.com/starting-role',
  },
  alternates: {
    canonical: 'https://npcollab.com/starting-role',
  },
};

export default function StartingRolePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Getting Started</div>
        <h1>Starting Your NP Role</h1>
        <p>Practical guidance for understanding the NP and TNP pathway, finding your feet, and building a career you are proud of.</p>
      </div>

      <div className="content-prose">

        <h2>Understanding the NP and TNP Roles</h2>
        <p>Before you can map your pathway, it helps to understand exactly what you are working toward — and what the differences are between the roles you might occupy along the way.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🎓</div><h4>Endorsed Nurse Practitioner (NP)</h4></div>
            <ul>
              <li>Holds a Masters of Nurse Practitioner (or equivalent)</li>
              <li>Formally endorsed by AHPRA/NMBA as a Nurse Practitioner</li>
              <li>Listed on the Nurse Practitioner register — distinct from RN register</li>
              <li>Can practise independently within their documented scope</li>
              <li>Can prescribe Schedule 4 and 8 medications within scope</li>
              <li>Can order Medicare-rebatable diagnostics and refer independently</li>
              <li>Can bill Medicare independently using NP-specific MBS items</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⭐</div><h4>Transitional Nurse Practitioner (TNP)</h4></div>
            <ul>
              <li>Also called a Nurse Practitioner Candidate (NPC) in some jurisdictions</li>
              <li>Registered as an RN — not yet endorsed as an NP</li>
              <li>Completing Masters program and accumulating advanced practice hours</li>
              <li>Practising in an advanced role toward endorsement</li>
              <li>Works under a collaborative arrangement with a medical practitioner</li>
              <li>Clinical scope is supervised and documented as part of the endorsement pathway</li>
              <li>Cannot yet prescribe or bill independently as an NP under Medicare</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <p>💡 <strong>Key point:</strong> The title "Nurse Practitioner" is legally protected in Australia. You cannot use it until you are formally endorsed by AHPRA. During your TNP period, use your correct title — typically "Transitional Nurse Practitioner" or "Registered Nurse — NP Candidate."</p>
        </div>

        <h2>How to Become an NP or TNP</h2>
        <p>The pathway to NP endorsement in Australia is well-defined but takes time and deliberate planning. Here is how it typically unfolds.</p>

        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🗺️</div><h4>The Pathway</h4></div>
          <ol style={{margin:'0',paddingLeft:'20px',lineHeight:'2'}}>
            <li><strong>Build your RN experience</strong> — AHPRA requires a minimum of 5,000 hours of advanced clinical practice. Most successful applicants have significantly more. The quality and breadth of your experience matters as much as the hours.</li>
            <li><strong>Choose and enrol in a Masters program</strong> — Approved programs are offered by universities across Australia. Choose one that aligns with your intended practice area. Most are 2 years part-time. Common programs: University of Melbourne, University of Sydney, Flinders, QUT, Monash, and others.</li>
            <li><strong>Secure a TNP or NPC role</strong> — Many candidates work in a formal TNP position during their Masters, which allows supervised advanced practice hours to count toward endorsement. Others complete their Masters first. Both pathways are valid.</li>
            <li><strong>Find a collaborating medical practitioner</strong> — You need a CMP who practises in a related area to your intended scope. This relationship is documented and forms part of your endorsement application.</li>
            <li><strong>Accumulate supervised advanced practice hours</strong> — Document your clinical activities, procedures, prescribing decisions, and consultations carefully. Your university will guide the format.</li>
            <li><strong>Build your portfolio of evidence</strong> — Demonstrate competency against all NMBA NP Standards for Practice. This is the core of your endorsement application.</li>
            <li><strong>Apply for endorsement through AHPRA</strong> — Submit your application, portfolio, and evidence. AHPRA will assess and, if approved, add the NP endorsement to your registration.</li>
          </ol>
        </div>

        <div className="highlight-box">
          <h4>Realistic Timeline</h4>
          <p>For most people the full pathway from "I want to be an NP" to "I am endorsed" takes 4–7 years — including the pre-Masters advanced practice experience, the Masters itself, and the endorsement application. That sounds long, but most NPs will tell you the journey is as valuable as the destination. Each step builds skills and confidence you will use every day of your career.</p>
        </div>

        <h2>Finding a Mentor</h2>
        <p>A good mentor can be the difference between a difficult, isolating NP journey and one where you feel supported, challenged, and seen. Finding yours takes some effort — but it is worth it.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔍</div><h4>Where to Find a Mentor</h4></div>
            <div className="content-item">
              <span className="item-label">Your workplace</span>
              <p className="item-description">Is there an experienced NP already in your service? Ask them directly. Most NPs are deeply committed to growing the profession and will say yes.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Your Masters program</span>
              <p className="item-description">Universities often have formal mentoring programs or can connect you with graduates in your area.</p>
            </div>
            <div className="content-item">
              <span className="item-label">ANMF and ACNP</span>
              <p className="item-description">The Australian College of Nurse Practitioners has networks and events where you can meet established NPs.</p>
            </div>
            <div className="content-item">
              <span className="item-label">LinkedIn and social media</span>
              <p className="item-description">Many experienced NPs are active professionally online and open to connection.</p>
            </div>
            <div className="content-item">
              <span className="item-label">State NP networks</span>
              <p className="item-description">Most states have NP-specific professional networks through their nursing peak bodies.</p>
            </div>
            <div className="content-item" style={{marginBottom:0}}>
              <span className="item-label">Your collaborating medical practitioner</span>
              <p className="item-description">They are not a mentor in the traditional sense, but a good CMP relationship is an invaluable source of clinical guidance.</p>
            </div>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💬</div><h4>What to Look for in a Mentor</h4></div>
            <ul>
              <li>Practises in the same or a related area to your intended scope</li>
              <li>Willing to meet regularly — even monthly is valuable</li>
              <li>Honest with you — not just encouraging</li>
              <li>Has experience navigating the endorsement pathway</li>
              <li>Connected to the broader NP community</li>
              <li>Challenges your clinical thinking, not just validates it</li>
            </ul>
            <div className="info-box" style={{marginTop:'12px'}}>
              <p>💡 <strong>It is okay to have more than one mentor</strong> — a clinical mentor, a career mentor, and a peer mentor each serve different purposes.</p>
            </div>
          </div>
        </div>

        <h2>Applying for Your First NP or TNP Job</h2>
        <p>The NP job market in Australia is growing — but the best roles are competitive. Here is how to put your best foot forward.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📄</div><h4>Your Application</h4></div>
            <div className="content-item">
              <span className="item-label">Tailor your cover letter every time</span>
              <p className="item-description">Generic applications stand out for the wrong reasons. Research the service, understand their patient population, and show how your experience maps to their specific needs.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Lead with your clinical achievements</span>
              <p className="item-description">Not just your titles and dates. What have you actually done? What outcomes have you been part of? What have you led or changed?</p>
            </div>
            <div className="content-item">
              <span className="item-label">Be explicit about your scope</span>
              <p className="item-description">Describe your current or intended scope of practice clearly. Employers want to know exactly what you can do independently.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Address the selection criteria methodically</span>
              <p className="item-description">Use STAR (Situation, Task, Action, Result) format for each criterion. Do not leave any unanswered.</p>
            </div>
            <div className="content-item" style={{marginBottom:0}}>
              <span className="item-label">Document your prescribing experience</span>
              <p className="item-description">If you have prescribing experience as a TNP, include it. It reassures employers you can function autonomously from day one.</p>
            </div>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🎤</div><h4>The Interview</h4></div>
            <div className="content-item">
              <span className="item-label">Prepare clinical scenarios</span>
              <p className="item-description">You will almost certainly be asked how you would manage specific presentations. Think through 3–5 common presentations in your practice area and be ready to walk through your assessment and management.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Know your scope boundaries</span>
              <p className="item-description">Interviewers want to see that you know when to refer and when to escalate. Saying "I would consult with my collaborating physician" at appropriate moments is a strength, not a weakness.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Ask good questions</span>
              <p className="item-description">About the MDT structure, how the NP role is integrated, what the CMP arrangement looks like, and what growth looks like in the role. These show you are thinking seriously about fit.</p>
            </div>
            <div className="content-item" style={{marginBottom:0}}>
              <span className="item-label">Acknowledge what you are still learning</span>
              <p className="item-description">Especially for first NP roles. Employers hiring new NPs expect a learning curve. Overconfidence is a red flag.</p>
            </div>
          </div>
        </div>

        <div className="highlight-box">
          <h4>Where to Find NP Jobs</h4>
          <ul>
            <li><strong>Seek.com.au</strong> — most NP roles in hospitals and community health are advertised here</li>
            <li><strong>State government health job boards</strong> — NSW Health, Vic Health, Queensland Health, SA Health, WA Health, NT Health, ACT Health, Tasmanian Health</li>
            <li><strong>ACNP job board</strong> — Australian College of Nurse Practitioners members get access to NP-specific listings</li>
            <li><strong>LinkedIn</strong> — particularly for private practice, telehealth, and non-government roles</li>
            <li><strong>Direct approaches</strong> — Many TNP roles are created when a motivated candidate approaches a service and makes a case for the role before it is advertised</li>
          </ul>
        </div>

        <h2>Once You Have the Job — First Steps</h2>
        <p>Starting a new NP or TNP role can feel overwhelming — even for experienced clinicians. The following is the kind of advice a good mentor would give you on your first week.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>In Your First Month</h4></div>
            <div className="content-item">
              <span className="item-label">Understand your scope document</span>
              <p className="item-description">Read every word of your scope of practice document. Know what you are authorised to do independently and what requires collaboration.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Meet your CMP early</span>
              <p className="item-description">Establish the relationship, understand their expectations, agree on a communication plan, and clarify the escalation threshold.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Learn the systems</span>
              <p className="item-description">EMR, pathology requesting, imaging referrals, MBS billing codes. These are not glamorous but they are essential.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Map the MDT</span>
              <p className="item-description">Who are the allied health, nursing, and medical colleagues you will need to work with? Introduce yourself early and invest in those relationships.</p>
            </div>
            <div className="content-item" style={{marginBottom:0}}>
              <span className="item-label">Identify your knowledge gaps honestly</span>
              <p className="item-description">Note the presentations that make you uncertain and build a study plan around them. NPCollab is a good place to start.</p>
            </div>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📈</div><h4>Building Confidence Over Time</h4></div>
            <div className="content-item">
              <span className="item-label">See patients — not paperwork</span>
              <p className="item-description">In early NP roles there is sometimes a pull toward administrative tasks. Protect your clinical time. Confidence comes from clinical exposure.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Debrief difficult cases</span>
              <p className="item-description">With your CMP, your mentor, or trusted colleagues. Reflection is how you grow. Do not carry difficult cases alone.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Document your clinical activity</span>
              <p className="item-description">Even after endorsement. This protects you medicolegally and tracks your scope expansion over time.</p>
            </div>
            <div className="content-item">
              <span className="item-label">Expand your scope deliberately</span>
              <p className="item-description">As your confidence and experience grow, revisit your scope document. Expanding scope is a formal process — do it properly.</p>
            </div>
            <div className="content-item" style={{marginBottom:0}}>
              <span className="item-label">Stay connected to the NP community</span>
              <p className="item-description">Attend ACNP events, join state networks, and maintain your mentoring relationships. NP practice can be isolating and community matters.</p>
            </div>
          </div>
        </div>

        <div className="assessment-card" style={{marginTop:'8px'}}>
          <div className="card-header"><div className="icon-circle">⚖️</div><h4>Your Medicolegal Obligations From Day One</h4></div>
          <ul>
            <li>Maintain current AHPRA registration and meet CPD requirements (minimum 20 hours per year for RNs and NPs)</li>
            <li>Hold current professional indemnity insurance — check your employer policy covers NP scope, and consider personal indemnity insurance as well</li>
            <li>Document contemporaneously — if it is not in the notes, it did not happen</li>
            <li>Understand your mandatory reporting obligations — AHPRA, child protection, family violence</li>
            <li>Know your obligations under the Poisons and Therapeutic Goods legislation in your state or territory</li>
            <li>Maintain a current scope of practice document and keep it updated as your practice evolves</li>
          </ul>
        </div>

        <div className="info-box" style={{marginTop:'24px'}}>
          <p>🎉 <strong>You have worked hard to get here.</strong> The NP role is one of the most rewarding and impactful roles in Australian healthcare. There will be difficult days and a steep learning curve — but most NPs will tell you that becoming a Nurse Practitioner is the best professional decision they ever made. Trust your training, lean on your colleagues, and keep learning.</p>
        </div>

      </div>
    </>
  );
}
