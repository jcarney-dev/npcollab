import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Equipment & Hardware | NPCollab',
  description: 'Clinical equipment, office hardware, and point-of-care testing requirements for NP practices.',
};

export default async function EquipmentPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_equipment')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Equipment &amp; Hardware</h1>
        <p>Clinical equipment, office hardware, and point-of-care testing — what you need before opening.</p>
      </div>

      <div className="content-prose">

        <p>Equipment requirements vary significantly by specialty endorsement. Develop an equipment list based on your specific scope before purchasing.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '16px 0' }}>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🩺 Primary Care — Core Clinical</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingLeft: '18px' }}>
              <li>Examination table</li>
              <li>Sphygmomanometer (validated device)</li>
              <li>Stethoscope (clinical grade)</li>
              <li>Otoscope and ophthalmoscope</li>
              <li>Pulse oximeter</li>
              <li>Thermometer (tympanic or temporal)</li>
              <li>Peak flow meters and spirometer</li>
              <li>12-lead ECG machine</li>
              <li>Weight scales and height measure</li>
              <li>Glucometer and lancets</li>
              <li>Urinalysis equipment</li>
              <li>Wound care supplies</li>
              <li>Sharps disposal containers</li>
              <li>Resuscitation equipment (AED, bag-mask, O₂, emergency medications)</li>
            </ul>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🖥 Office &amp; Administrative Hardware</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingLeft: '18px' }}>
              <li>Dedicated clinical workstation (desktop or laptop)</li>
              <li>Second monitor — for documentation alongside consultation</li>
              <li>Laser printer for clinical documents</li>
              <li>Lockable filing for paper records</li>
              <li>Medical-grade Wi-Fi router (separate practice and patient networks)</li>
              <li>UPS (uninterruptible power supply)</li>
              <li>Webcam and headset for telehealth</li>
              <li>EFTPOS terminal for gap and private billing</li>
            </ul>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🔬 Point-of-Care Testing</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px', paddingLeft: '18px' }}>
              <li>iSTAT or similar portable blood analyser</li>
              <li>Urine dipstick analyser</li>
              <li>Rapid strep A test</li>
              <li>Rapid influenza/COVID antigen tests</li>
              <li>HbA1c analyser (high-volume diabetes)</li>
              <li>Lipid panel analyser</li>
            </ul>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', padding: '8px 10px', background: 'var(--off-white)', borderRadius: '6px', lineHeight: 1.5 }}>All POCT equipment must comply with NPAAC standards for point-of-care testing.</div>
          </div>

        </div>

        <div className="info-box">
          <h4 style={{ marginTop: 0 }}>❄ Cold Chain Requirements</h4>
          <p style={{ marginBottom: 0 }}>If administering vaccines or storing temperature-sensitive medications: medical-grade refrigerator (not domestic), data logger for temperature monitoring, cold chain management policy, and incident reporting process. National Immunisation Program (NIP) cold chain requirements apply to all NIP vaccines.</p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/marketing" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Marketing</Link>
          <Link href="/business/starting-your-own-practice/financial-planning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Financial Planning →</Link>
        </div>

      </div>
    </>
  );
}
