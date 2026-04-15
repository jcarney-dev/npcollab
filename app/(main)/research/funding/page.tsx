import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NP Research Funding',
  description: 'Research funding opportunities for Australian Nurse Practitioners — grants, fellowships, and funding bodies supporting NP research and CPD.',
  openGraph: {
    title: 'NP Research Funding | NPCollab',
    description: 'Research funding opportunities for Australian Nurse Practitioners — grants, fellowships, and funding bodies supporting NP research and CPD.',
    url: 'https://npcollab.com/research/funding',
  },
  alternates: {
    canonical: 'https://npcollab.com/research/funding',
  },
};

export default function ResearchFundingPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Research</div>
      <h1>Research Funding Opportunities</h1>
      <p>Grants, fellowships, and funding sources available to Australian Nurse Practitioners pursuing research.</p>
    </div>

    <div className="content-prose">

      <h2>Why Research Matters for NPs</h2>
      <p>NP-led research is essential for building the evidence base that supports, expands, and protects the NP role in Australia. NPs are uniquely positioned to conduct practice-based research that generates real-world insights — but securing funding is often the biggest barrier. The good news is that there are more funding pathways available to NPs than most realise.</p>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🏛️</div><h4>National Competitive Grants</h4></div>
          <ul>
            <li><strong>NHMRC Project Grants</strong> — Australia's largest health and medical research funder. Highly competitive but NP researchers are eligible. Usually requires institutional affiliation.</li>
            <li><strong>NHMRC Investigator Grants</strong> — career development funding for researchers at emerging to leadership levels</li>
            <li><strong>ARC (Australian Research Council)</strong> — for research with social science or education dimensions to NP practice</li>
            <li><strong>Medical Research Future Fund (MRFF)</strong> — targeted funding streams, some relevant to primary care and nursing workforce</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🤝</div><h4>Professional and Peak Body Grants</h4></div>
          <ul>
            <li><strong>ACNP Research Grant</strong> — Australian College of Nurse Practitioners research funding for members</li>
            <li><strong>ANMF Research Grants</strong> — Australian Nursing and Midwifery Federation funds NP and nursing research</li>
            <li><strong>CRANAplus</strong> — rural and remote nursing and midwifery research funding</li>
            <li><strong>Heart Foundation Research Grants</strong> — cardiovascular nursing and NP research</li>
            <li><strong>Lung Foundation Australia</strong> — respiratory nursing and NP research</li>
            <li><strong>Cancer Council Australia</strong> — oncology nursing research grants</li>
          </ul>
        </div>
      </div>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🏥</div><h4>Health Service and Institutional Funding</h4></div>
          <ul>
            <li>Most LHDs and health services have internal research grant programs</li>
            <li>Ask your Nursing Research or Practice Development team about internal grants</li>
            <li>University affiliation (even as an adjunct) opens access to institutional grants</li>
            <li>Many NPs obtain university adjunct appointments that do not require leaving clinical practice</li>
            <li>Private hospital research foundations — some of the larger private hospital groups have research programs</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🌏</div><h4>International Funding for Australian NPs</h4></div>
          <ul>
            <li><strong>Sigma Theta Tau International</strong> — nursing research grants, open to Australian members</li>
            <li><strong>ICN (International Council of Nurses)</strong> — various research and leadership opportunities</li>
            <li><strong>Commonwealth Scholarships</strong> — for research in developing country contexts</li>
            <li>Some US and UK nursing foundations accept international applications — check eligibility</li>
          </ul>
        </div>
      </div>

      <h2>Tips for Successful Grant Applications</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">✍️</div><h4>Before You Apply</h4></div>
          <ul>
            <li>Identify a clear research question with clinical relevance — funders want to know why this matters to patients</li>
            <li>Build your research team early — include statisticians, consumer representatives, and content experts</li>
            <li>Find a mentor with grant writing experience — this is invaluable for first-time applicants</li>
            <li>Read funded project summaries from the same scheme to understand what gets funded</li>
            <li>Contact the program officer before submitting — they often provide informal guidance</li>
            <li>Allow much more time than you think — good grant applications take weeks</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📋</div><h4>Writing Your Application</h4></div>
          <ul>
            <li>Lead with significance — why does this research matter now?</li>
            <li>Be specific about aims, methods, and outcomes — vague applications are rejected</li>
            <li>Demonstrate your team's capacity to deliver</li>
            <li>Budget carefully and justify every line item</li>
            <li>Address the funder's strategic priorities explicitly</li>
            <li>Have someone outside your field review for clarity — if a non-expert can understand it, reviewers will rate it higher</li>
          </ul>
        </div>
      </div>

      <div className="resources-list" style={{ marginTop: '24px' }}>
        <a href="https://www.nhmrc.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏛️</div>
          <div className="r-body"><div className="r-title">NHMRC — National Health and Medical Research Council</div><div className="r-desc">Australia's peak health research funder — current funding opportunities and guidelines</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.acnp.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🤝</div>
          <div className="r-body"><div className="r-title">ACNP — Research Grants for NPs</div><div className="r-desc">Member grants and research support from the Australian College of Nurse Practitioners</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.anmf.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">ANMF — Research and Scholarship</div><div className="r-desc">ANMF research grants and scholarship opportunities for NPs and nurses</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>

    </div>
      </>
    
  );
}
