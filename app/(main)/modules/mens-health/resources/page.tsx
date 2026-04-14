import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = {
  title: "Resources | Men's Health Module",
  description: "Australian clinical resources for men's health NP practice",
};

export default function MensHealthResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔵 Men&apos;s Health</h1>
        <p>Erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, and cardiovascular risk</p>
      </div>
      <ModuleTabs moduleId="mens-health" />

      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Men&apos;s Health</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for NP men&apos;s health practice</p>
      <div className="resources-list">
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Endocrinology and Sexual Health</div><div className="r-desc">Australian prescribing guidance for testosterone replacement, erectile dysfunction, and BPH management</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/guidelines-for-preventive-activities-in-general-pr" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">RACGP Red Book — Men&apos;s Health</div><div className="r-desc">Preventive health screening and chronic disease management for men in Australian primary care</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.esa.net.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🧬</div>
          <div className="r-body"><div className="r-title">Endocrine Society of Australia</div><div className="r-desc">Clinical guidelines for testosterone deficiency, hypogonadism, and endocrine disorders in men</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.usanz.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">Urological Society of Australia and New Zealand (USANZ)</div><div className="r-desc">Guidelines for BPH, prostate cancer screening, erectile dysfunction, and male reproductive health</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.prostate.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔴</div>
          <div className="r-body"><div className="r-title">Prostate Cancer Foundation of Australia</div><div className="r-desc">PSA screening guidance, patient resources, and clinical decision support for prostate cancer</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.cvdcheck.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">❤️</div>
          <div className="r-body"><div className="r-title">Australian CVD Risk Calculator (AusCVDRisk)</div><div className="r-desc">Calculate 5-year absolute cardiovascular risk — essential for all men&apos;s health consultations</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🧠</div>
          <div className="r-body"><div className="r-title">Beyond Blue — Men&apos;s Mental Health</div><div className="r-desc">Evidence-based resources on depression, anxiety, and suicide prevention for Australian men</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://mensline.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📞</div>
          <div className="r-body"><div className="r-title">Mensline Australia</div><div className="r-desc">Telephone and online counselling for Australian men — 1300 78 99 78, 24/7</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.aci.health.nsw.gov.au/chronic-conditions/sexual-health" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔬</div>
          <div className="r-body"><div className="r-title">ASHM / Sexual Health Australia — STI Guidelines</div><div className="r-desc">Australian STI management guidelines including testing protocols for MSM and heterosexual men</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.healthymale.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔵</div>
          <div className="r-body"><div className="r-title">Healthy Male (Andrology Australia)</div><div className="r-desc">National resource for male reproductive and sexual health — clinician and patient resources</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
      <ModuleNav moduleId="mens-health" />

    </>
  );
}
