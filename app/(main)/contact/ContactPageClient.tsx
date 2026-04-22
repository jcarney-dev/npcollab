'use client';

import ContactForm from '@/components/ContactForm';

interface Props {
  turnstileSiteKey: string;
}

export default function ContactPageClient({ turnstileSiteKey }: Props) {
  return (
    <>
      <div className="page-header">
        <div className="label">Site</div>
        <h1>Get in Touch</h1>
        <p>Have a question, want to contribute content, or just say hello? Send us a message.</p>
      </div>

      <div className="content-prose">
        <div style={{ marginBottom: '48px' }}>
          <ContactForm source="contact" turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </>
  );
}
