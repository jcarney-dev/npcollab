import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started in NP Research',
  description: 'Introduction to clinical research for Australian Nurse Practitioners — evidence-based practice, research literacy, and getting started with NP research.',
  openGraph: {
    title: 'Getting Started in NP Research | NPCollab',
    description: 'Introduction to clinical research for Australian Nurse Practitioners — evidence-based practice, research literacy, and getting started with NP research.',
    url: 'https://npcollab.com/research/getting-started',
  },
  alternates: {
    canonical: 'https://npcollab.com/research/getting-started',
  },
};

export default function GettingStartedResearchPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Research</div>
      <h1>Getting Started in Research</h1>
      <p>A practical guide for NPs who want to contribute to the evidence base — starting from wherever you are right now.</p>
    </div>

    <div className="content-prose">

      <h2>You Don't Need a PhD to Do Research</h2>
      <p>Many NPs assume research is something done by academics in universities — remote from clinical practice and inaccessible without years of formal training. This is not true. Some of the most impactful NP research in Australia has been conducted by clinicians who started with a question arising from their daily work and followed it through with support from colleagues and mentors.</p>

      <div className="highlight-box">
        <h4>Start with a Question</h4>
        <p>Good research starts with a question you genuinely want answered. What are you seeing in your practice that you do not have good evidence to guide? What outcomes in your patient population do you think could be improved? What do you wish someone had studied? Start there.</p>
      </div>

      <h2>Types of Research NPs Can Lead</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📊</div><h4>Quality Improvement (QI)</h4></div>
          <p>The most accessible entry point. QI projects measure current practice, implement a change, and measure again. They typically do not require ethics approval for internal projects and can be done within your own service.</p>
          <ul>
            <li>Examples: improving diabetes monitoring rates, reducing time to antibiotic for pneumonia, increasing advance care plan completion</li>
            <li>Methods: audits, PDSA cycles, run charts</li>
            <li>Can be written up and published — many journals welcome QI reports</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📋</div><h4>Service Evaluation and Audit</h4></div>
          <p>Evaluating whether your service meets intended standards. Often required as part of accreditation or service development, and can be a gateway to more formal research.</p>
          <ul>
            <li>Examples: patient satisfaction with NP-led care, comparing outcomes between NP and GP management</li>
            <li>Usually does not require full ethics review</li>
            <li>Often fundable through health service quality improvement grants</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🔬</div><h4>Formal Research</h4></div>
          <p>Requires ethics approval, usually involves a defined methodology, and aims to generate generalisable knowledge. Often conducted in partnership with a university.</p>
          <ul>
            <li>Quantitative: surveys, cohort studies, RCTs</li>
            <li>Qualitative: interviews, focus groups, grounded theory</li>
            <li>Mixed methods: combining both approaches</li>
            <li>Systematic reviews and meta-analyses</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📖</div><h4>Narrative and Case Reports</h4></div>
          <p>Lower barrier to publication than original research. Case reports, case series, and narrative reviews contribute meaningfully to the NP literature.</p>
          <ul>
            <li>Case reports: a single interesting or instructive patient case</li>
            <li>Case series: patterns across multiple similar cases</li>
            <li>Narrative review: synthesising existing literature on a clinical question</li>
            <li>Good starting point for NPs new to writing for publication</li>
          </ul>
        </div>
      </div>

      <h2>The Research Pathway — Step by Step</h2>
      <ol>
        <li><strong>Identify your question</strong> — make it specific, answerable, and clinically important. Use the PICO framework (Population, Intervention, Comparison, Outcome)</li>
        <li><strong>Search the existing literature</strong> — PubMed, CINAHL, Cochrane. Has this been studied? What is already known?</li>
        <li><strong>Choose your methodology</strong> — matches your question and resources</li>
        <li><strong>Find a mentor or collaborator</strong> — essential for first projects. University adjunct appointments, research networks, or senior colleagues</li>
        <li><strong>Seek ethics approval if required</strong> — HREC (Human Research Ethics Committee) via your institution. QI may be exempt — check with your institution</li>
        <li><strong>Apply for funding if needed</strong> — small pilot studies can often be done with minimal cost</li>
        <li><strong>Conduct your research</strong> — adhere strictly to your approved protocol</li>
        <li><strong>Analyse and write up your findings</strong> — even negative results are worth publishing</li>
        <li><strong>Submit for publication</strong> — start with accessible journals (see below)</li>
        <li><strong>Present your findings</strong> — ACNP conference, state NP network events, your own health service</li>
      </ol>

      <h2>Getting Ethics Approval</h2>
      <p>Any research involving human participants in Australia requires Human Research Ethics Committee (HREC) approval. The National Statement on Ethical Conduct in Human Research (NHMRC) governs this process.</p>
      <ul>
        <li>Apply through your institution's HREC — most hospitals and universities have one</li>
        <li>Low-risk and negligible-risk research may qualify for expedited review</li>
        <li>Ethics applications take time — allow 2–4 months minimum</li>
        <li>Quality improvement projects within your own service may be exempt — confirm with your HREC</li>
        <li>If your institution does not have an HREC, you can apply through a university HREC</li>
      </ul>

      <h2>Where to Publish NP Research</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📰</div><h4>Australian NP-Relevant Journals</h4></div>
          <ul>
            <li>Australian Journal of Advanced Nursing</li>
            <li>Collegian (Australian College of Nursing)</li>
            <li>Contemporary Nurse</li>
            <li>Australian Journal of Primary Health</li>
            <li>Australian Health Review</li>
            <li>Journal of Advanced Nursing (international)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🌐</div><h4>Open Access Options</h4></div>
          <ul>
            <li>BMC Nursing — open access, reputable</li>
            <li>Nursing Open — Wiley open access journal</li>
            <li>International Journal of Nursing Practice</li>
            <li>PLoS ONE — broad scope open access</li>
            <li>Check DOAJ (Directory of Open Access Journals) for more options</li>
            <li>Avoid predatory journals — check Beall's List</li>
          </ul>
        </div>
      </div>

      <div className="info-box">
        <p>🎓 <strong>Your Masters thesis counts.</strong> If you have completed or are completing a Masters of Nurse Practitioner, you likely already have publishable research sitting in your thesis. Talk to your supervisor about extracting it for journal submission.</p>
      </div>

    </div>
      </>
    
  );
}
