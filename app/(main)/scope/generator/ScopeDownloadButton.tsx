'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import ScopePDFDocument from './ScopePDFDocument';
import type { ScopeFormData } from './page';

interface Props {
  formData: ScopeFormData;
}

export default function ScopeDownloadButton({ formData }: Props) {
  const filename = `scope-of-practice-${formData.fullName.toLowerCase().replace(/\s+/g, '-') || 'document'}-${formData.signatureDate || 'draft'}.pdf`;

  return (
    <PDFDownloadLink document={<ScopePDFDocument data={formData} />} fileName={filename}>
      {({ loading, error }) => {
        if (error) {
          return (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>
              Error generating PDF. Please check your browser supports PDF generation and try again.
            </p>
          );
        }
        return (
          <button
            disabled={loading}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '8px',
              background: loading ? 'var(--text-muted)' : 'var(--navy)',
              color: 'var(--gold)',
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: loading ? 'wait' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? '⏳ Generating PDF...' : '⬇️ Download Scope of Practice PDF'}
          </button>
        );
      }}
    </PDFDownloadLink>
  );
}
