import type { Metadata } from 'next';
import AdvertiseForm from '@/components/AdvertiseForm';

export const metadata: Metadata = {
  title: 'Advertise with NPCollab',
  description: 'Reach Australian Nurse Practitioners and NP students with NPCollab sponsorship.',
};

export default function AdvertisePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Sponsorship</div>
        <h1>Advertise with NPCollab</h1>
        <p>Reach Australia&apos;s growing community of Nurse Practitioners and NP students.</p>
      </div>

      <div className="content-prose">
        <p>
          NPCollab is Australia&apos;s leading free educational resource for Nurse Practitioners, Transitional Nurse Practitioners, and NP students. Our audience comprises qualified clinicians actively looking for evidence-based tools, clinical references, and products relevant to advanced practice nursing.
        </p>

        <div className="highlight-box">
          <h4>Our Audience</h4>
          <ul>
            <li>Endorsed Nurse Practitioners (ENPs) practising across primary care, hospital, aged care, and community settings</li>
            <li>Transitional Nurse Practitioners (TNPs) completing their endorsement pathway</li>
            <li>NP students enrolled in Masters of Nurse Practitioner programs across Australia</li>
            <li>Registered Nurses exploring NP career pathways</li>
          </ul>
        </div>

        <h2>Sponsorship Options</h2>

        <div className="assessment-grid" style={{ marginBottom: '32px' }}>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">📌</div>
              <h4>Sidebar Sponsor Card</h4>
            </div>
            <p style={{ margin: '8px 0 4px', fontWeight: 700, color: 'var(--gold)', fontSize: '1.1rem' }}>$300 / month</p>
            <ul>
              <li>Your logo and company name displayed in the sidebar on every page</li>
              <li>Link to your website</li>
              <li>Small "Sponsored" label — tasteful, non-intrusive</li>
              <li>Visible to all logged-in NPCollab users throughout their session</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">📚</div>
              <h4>Module Sponsor</h4>
            </div>
            <p style={{ margin: '8px 0 4px', fontWeight: 700, color: 'var(--gold)', fontSize: '1.1rem' }}>$500 / month</p>
            <ul>
              <li>"Supported by [Company]" attribution on a specific clinical module</li>
              <li>Displayed at the bottom of the module overview tab</li>
              <li>Your logo and a link to your website</li>
              <li>Ideal for companies with products relevant to a specific specialty area</li>
              <li>Exclusive per module — only one sponsor per module at a time</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">🏠</div>
              <h4>Homepage Featured Sponsor</h4>
            </div>
            <p style={{ margin: '8px 0 4px', fontWeight: 700, color: 'var(--gold)', fontSize: '1.1rem' }}>$600 / month</p>
            <ul>
              <li>Prominent sponsor card on the NPCollab homepage</li>
              <li>First thing users see when they log in</li>
              <li>Your logo, company name, and a link to your website</li>
              <li>Maximum one homepage sponsor at a time</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <p>
            💡 <strong>Advertiser guidelines:</strong> NPCollab only accepts sponsors whose products or services are directly relevant to healthcare, clinical practice, or the NP profession. We do not accept pharmaceutical company direct-to-consumer advertising, alcohol, financial products, or content unrelated to healthcare. All sponsorships are reviewed and approved by the NPCollab team.
          </p>
        </div>

        <h2>Get in Touch</h2>
        <p>Complete the form below and we will get back to you within 2 business days.</p>

        <AdvertiseForm />
      </div>
    </>
  );
}
