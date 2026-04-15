import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Scribes',
};

export default function DigitalScribesPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Health Tech & Tools</div>
      <h1>Digital Scribes</h1>
      <p>Ambient AI scribes that listen to your consultations and generate clinical notes — saving time and reducing documentation burden.</p>
    </div>

    <div className="content-prose">

      <h2>What is an AI Digital Scribe?</h2>
      <p>An AI digital scribe is a tool that listens to your consultation in real-time (or via a recording) and automatically generates a clinical note — typically in SOAP format or structured to match your EMR. The best tools are now producing notes that require only minor editing, saving experienced NPs 30–60 minutes of documentation time per day.</p>

      <div className="highlight-box">
        <h4>The Potential Impact for NPs</h4>
        <p>For NPs who spend significant time on documentation, AI scribes represent one of the most meaningful productivity improvements currently available. Less time on notes means more time with patients, less moral injury from administrative burden, and a better work-life balance. The technology has matured considerably since 2022 — it is worth trying.</p>
      </div>

      <h2>Leading AI Scribe Tools (2026)</h2>

      <div className="assessment-card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><div className="icon-circle">🎙️</div><h4>Heidi Health</h4></div>
        <p>Australian-built ambient AI scribe with strong EMR integration. Widely used in Australian general practice and NP clinics. Offers a free tier for individual practitioners.</p>
        <ul>
          <li><strong>Pros:</strong> Australian company, Australian data hosting, good SOAP note quality, free plan available, integrates with Best Practice and MedicalDirector</li>
          <li><strong>Cons:</strong> Accuracy varies with background noise; requires review before saving</li>
          <li><strong>Cost:</strong> Free (limited), paid plans from ~$99/month</li>
          <li><strong>Website:</strong> <a href="https://www.heidihealth.com" target="_blank" rel="noopener">heidihealth.com</a></li>
        </ul>
      </div>

      <div className="assessment-card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><div className="icon-circle">🎙️</div><h4>Lyrebird Health</h4></div>
        <p>Another Australian-built option with a focus on customisable note templates and privacy compliance. Popular with NPs in private practice.</p>
        <ul>
          <li><strong>Pros:</strong> Australian company and data, customisable templates, strong privacy focus, RACGP-endorsed</li>
          <li><strong>Cons:</strong> Paid only — no free tier</li>
          <li><strong>Cost:</strong> From ~$149/month</li>
          <li><strong>Website:</strong> <a href="https://www.lyrebirdhealth.com" target="_blank" rel="noopener">lyrebirdhealth.com</a></li>
        </ul>
      </div>

      <div className="assessment-card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><div className="icon-circle">🎙️</div><h4>Nabla Copilot</h4></div>
        <p>US-based ambient AI scribe used globally. Strong note quality and multilingual support. Data hosting in the US — check your employer's privacy policy before using.</p>
        <ul>
          <li><strong>Pros:</strong> High quality notes, wide EMR integration, good multilingual support</li>
          <li><strong>Cons:</strong> US data hosting — may not meet Australian privacy requirements for some employers</li>
          <li><strong>Cost:</strong> From ~$119 USD/month</li>
          <li><strong>Website:</strong> <a href="https://www.nabla.com" target="_blank" rel="noopener">nabla.com</a></li>
        </ul>
      </div>

      <div className="assessment-card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><div className="icon-circle">🎙️</div><h4>Microsoft Dragon Copilot (formerly Nuance DAX)</h4></div>
        <p>Enterprise-grade AI scribe with deep hospital EMR integration (Epic, Cerner). Typically implemented at health service level rather than by individual clinicians.</p>
        <ul>
          <li><strong>Pros:</strong> Enterprise-grade accuracy, deep EMR integration, Microsoft Azure data hosting</li>
          <li><strong>Cons:</strong> Expensive — typically purchased at health service level, not individual subscription</li>
          <li><strong>Best for:</strong> Hospital-employed NPs whose health service has a Dragon or DAX contract</li>
        </ul>
      </div>

      <h2>Choosing and Getting Started</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">✅</div><h4>What to Look For</h4></div>
          <ul>
            <li>Australian data hosting — important for privacy compliance</li>
            <li>Integration with your existing EMR</li>
            <li>Customisable note templates (SOAP vs narrative vs structured)</li>
            <li>Free trial or free tier to test before committing</li>
            <li>Patient consent features — some tools generate consent prompts</li>
            <li>Background noise handling — important in busy clinic environments</li>
            <li>Review-before-save workflow — never auto-save AI notes</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">⚠️</div><h4>Important Considerations</h4></div>
          <ul>
            <li>Always obtain patient consent before recording or using an AI scribe</li>
            <li>Review every generated note before saving to the patient record — you are responsible for its accuracy</li>
            <li>Check your employer and insurer's policy on AI scribes</li>
            <li>Sensitive consultations (mental health, family violence, sexual health) may warrant opting out of scribe use on a per-case basis</li>
            <li>Be transparent with patients — most will appreciate the explanation</li>
          </ul>
        </div>
      </div>

      <div className="info-box">
        <p>💡 <strong>Start with Heidi Health's free plan</strong> — it is the easiest way to trial an AI scribe in Australian practice without a financial commitment. Most NPs who try it find it saves meaningful time within the first week.</p>
      </div>

    </div>
      </>
    
  );
}
