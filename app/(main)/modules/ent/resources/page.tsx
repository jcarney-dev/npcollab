import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = {
  title: 'ENT Resources',
};

export default function ENTResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👂 ENT (Ears, Nose & Throat)</h1>
        <p>Assessment framework, SOAP note, resources, and quiz for ENT presentations</p>
      </div>
      <ModuleTabs moduleId="ent" />
      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — ENT</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for ENT primary care management</p>
      <div className="resources-list">
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Ear, Nose and Throat</div><div className="r-desc">Gold standard Australian antibiotic and management guidance</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.asohns.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">ASOHNS — Australian Society of Otolaryngology Head and Neck Surgery</div><div className="r-desc">Specialist referral pathways and clinical guidelines</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise — Antibiotic Stewardship</div><div className="r-desc">Evidence-based antibiotic guidance for common ENT infections</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.racgp.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">RACGP — Clinical Guidelines</div><div className="r-desc">Guidelines applicable to NP primary care including ENT presentations</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
      <ModuleNav moduleId="ent" />

    </>
  );
}
