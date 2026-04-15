import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NP Research Networks',
  description: 'Australian Nurse Practitioner research networks, professional associations, and communities supporting NP research and practice development.',
  openGraph: {
    title: 'NP Research Networks | NPCollab',
    description: 'Australian Nurse Practitioner research networks, professional associations, and communities supporting NP research and practice development.',
    url: 'https://npcollab.com/research/networks',
  },
  alternates: {
    canonical: 'https://npcollab.com/research/networks',
  },
};

export default function ResearchNetworksPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Research</div>
      <h1>Research Networks</h1>
      <p>Australian and international networks connecting NPs with research opportunities, collaborators, and the broader NP research community.</p>
    </div>

    <div className="content-prose">

      <h2>Why Networks Matter in Research</h2>
      <p>Research conducted in isolation is harder, slower, and less impactful than research done with a network behind you. Connecting with the right people early in your research journey can open doors to collaboration, funding, mentorship, and dissemination opportunities that would otherwise take years to find on your own.</p>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🤝</div><h4>Australian College of Nurse Practitioners (ACNP)</h4></div>
          <p>The peak professional body for Australian NPs. ACNP membership gives you access to the NP research community, special interest groups, conference networking, and research grants.</p>
          <ul>
            <li>Annual ACNP conference — primary forum for presenting NP research in Australia</li>
            <li>Special Interest Groups — clinical area-specific networks</li>
            <li>Research Committee — involvement opportunities for research-active NPs</li>
            <li><a href="https://www.acnp.org.au" target="_blank" rel="noopener">acnp.org.au</a></li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🏛️</div><h4>University Research Groups</h4></div>
          <p>Most Australian universities with nursing schools have NP-focused research groups. Obtaining an adjunct or honorary appointment is an effective way to access university research infrastructure without leaving clinical practice.</p>
          <ul>
            <li>University of Melbourne — Centre for Healthcare Resilience and Implementation Science</li>
            <li>Flinders University — NP and primary care research groups</li>
            <li>University of Technology Sydney — nursing and midwifery research</li>
            <li>Deakin University — health and social care research</li>
            <li>Contact your nearest university's nursing school directly to discuss adjunct opportunities</li>
          </ul>
        </div>
      </div>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🌏</div><h4>International NP Research Networks</h4></div>
          <ul>
            <li><strong>International Council of Nurses (ICN)</strong> — NP/APN network with global research connections</li>
            <li><strong>Sigma Theta Tau International</strong> — nursing honour society with strong research culture; Australian chapters active</li>
            <li><strong>International Nurse Practitioner/APN Network (INP/APN)</strong> — global NP research and policy network</li>
            <li><strong>Primary Health Care Research and Information Service (PHCRIS)</strong> — Australian primary care research network</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🏥</div><h4>Health Service Research Networks</h4></div>
          <ul>
            <li>Each state/territory has a primary health care research network — often funded through PHN (Primary Health Networks)</li>
            <li>Local Health District research offices — often have NP research coordinators</li>
            <li>Australian Primary Health Care Nurses Association (APNA) — primary care nurse research</li>
            <li>CRANAplus — rural and remote nursing research network</li>
            <li>ACRRM and RDAA — rural health research with NP involvement</li>
          </ul>
        </div>
      </div>

      <h2>Finding Collaborators</h2>
      <p>You do not need to find collaborators through formal networks alone. Some effective approaches used by Australian NP researchers:</p>
      <ul>
        <li><strong>Attend conferences</strong> — the ACNP annual conference is the single most efficient place to meet NP researchers in Australia</li>
        <li><strong>LinkedIn</strong> — many NP academics are active here and open to connection</li>
        <li><strong>ResearchGate</strong> — find Australian NPs who have published in your area of interest and reach out directly</li>
        <li><strong>Your Masters supervisors</strong> — many remain willing to collaborate with graduates on practice-based research</li>
        <li><strong>Ask your employer</strong> — many health services have research coordinators who can connect you with internal and external collaborators</li>
      </ul>

      <div className="resources-list" style={{ marginTop: '24px' }}>
        <a href="https://www.acnp.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🤝</div>
          <div className="r-body"><div className="r-title">ACNP — Australian College of Nurse Practitioners</div><div className="r-desc">Primary professional network for NP research in Australia</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nursingsociety.org" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🌐</div>
          <div className="r-body"><div className="r-title">Sigma Theta Tau International — Australian Chapters</div><div className="r-desc">International nursing research honour society with active Australian members</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.apna.asn.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">APNA — Australian Primary Health Care Nurses Association</div><div className="r-desc">Primary care nursing research network and resources</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>

    </div>
      </>
    
  );
}
