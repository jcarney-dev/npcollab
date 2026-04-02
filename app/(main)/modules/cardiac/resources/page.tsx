import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Resources | Cardiac Module',
  description: 'Australian clinical resources for cardiac nursing practice',
};

export default function CardiacResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>❤️ Cardiac</h1>
        <p>Chest pain differentials, ACS, heart failure, arrhythmias, hypertension, and ECG basics</p>
      </div>
      <ModuleTabs moduleId="cardiac" />

      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Cardiac</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for NP cardiovascular practice</p>
      <div className="resources-list">
        <a href="https://www.heartfoundation.org.au/conditions/heart-disease/management-guidelines" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">❤️</div>
          <div className="r-body"><div className="r-title">Heart Foundation Australia — Clinical Guidelines</div><div className="r-desc">National guidelines for hypertension, heart failure, AF, and ACS management</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Cardiovascular</div><div className="r-desc">Australian prescribing guidance for cardiac conditions including ACS, HF, HTN, and AF</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.csanz.edu.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">CSANZ — Cardiac Society of Australia and New Zealand</div><div className="r-desc">Position statements, guidelines, and educational resources for cardiac practice</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise — Cardiovascular</div><div className="r-desc">Evidence-based prescribing resources for antihypertensives, anticoagulants, and lipid therapy</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/guidelines-for-preventive-activities-in-general-pr" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">RACGP Red Book — Cardiovascular Prevention</div><div className="r-desc">Preventive cardiovascular care, screening, and absolute risk assessment</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.cvdcheck.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📊</div>
          <div className="r-body"><div className="r-title">Australian CVD Risk Calculator</div><div className="r-desc">Calculate 5-year absolute cardiovascular risk — free online tool aligned with Australian guidelines</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://litfl.com/ecg-library" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📈</div>
          <div className="r-body"><div className="r-title">LITFL — ECG Library</div><div className="r-desc">Comprehensive free ECG interpretation resource with examples and explanations</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.strokefoundation.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🧠</div>
          <div className="r-body"><div className="r-title">Stroke Foundation — AF and Anticoagulation</div><div className="r-desc">Resources on AF-related stroke prevention and anticoagulation management</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
    </>
  );
}
