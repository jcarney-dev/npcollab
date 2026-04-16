/**
 * NPCollab CPD Certificate — A4 Landscape
 * Built with @react-pdf/renderer
 */

import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer';

const NAVY   = '#0B1829';
const GOLD   = '#C9A84C';
const MUTED  = '#6B7A8D';
const WHITE  = '#FFFFFF';
const LGREY  = '#F3F4F6';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: WHITE,
  },

  // ── Outer border layers ─────────────────────────────────────────────────
  outerBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 20,
    borderColor: NAVY,
    borderStyle: 'solid',
  },
  innerBorder: {
    position: 'absolute',
    top: 22,
    left: 22,
    right: 22,
    bottom: 22,
    borderWidth: 2,
    borderColor: GOLD,
    borderStyle: 'solid',
  },

  // ── Content container (inside borders) ─────────────────────────────────
  content: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: {
    backgroundColor: NAVY,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  headerTitle: {
    color: WHITE,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: GOLD,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    letterSpacing: 0.5,
  },

  // ── Body ─────────────────────────────────────────────────────────────────
  body: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 60,
  },
  certTitle: {
    color: NAVY,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  divider: {
    width: 200,
    height: 1.5,
    backgroundColor: GOLD,
    marginVertical: 16,
  },
  mutedText: {
    color: MUTED,
    fontSize: 12,
    textAlign: 'center',
  },
  userName: {
    color: NAVY,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  moduleName: {
    color: GOLD,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  cpdText: {
    color: NAVY,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  metaText: {
    color: MUTED,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
  idText: {
    color: MUTED,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    backgroundColor: LGREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerLeft: {
    color: NAVY,
    fontSize: 10,
    fontWeight: 'bold',
    width: 80,
  },
  footerCenter: {
    color: MUTED,
    fontSize: 8,
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 10,
    lineHeight: 1.4,
  },
  footerRight: {
    color: NAVY,
    fontSize: 10,
    textAlign: 'right',
    width: 80,
  },
});

export interface CertificateProps {
  userName: string;
  moduleName: string;
  completedAt: Date;
  completionId: string;
  cpdHours?: number;
}

function formatDate(d: Date): string {
  return new Date(d).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Renders the certificate as a PDF Buffer.
 * Call this from API routes — do not import this in client components.
 */
export async function renderCertificate(props: CertificateProps): Promise<Buffer> {
  const { userName, moduleName, completedAt, completionId, cpdHours = 1 } = props;
  const certId = completionId.replace(/-/g, '').slice(0, 8).toUpperCase();
  const cpdLabel = cpdHours === 1 ? '1 CPD Hour' : `${cpdHours} CPD Hours`;

  const doc = React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'A4', orientation: 'landscape', style: styles.page },

      // Outer navy border
      React.createElement(View, { style: styles.outerBorder }),
      // Inner gold border
      React.createElement(View, { style: styles.innerBorder }),

      // Content container
      React.createElement(
        View,
        { style: styles.content },

        // Header
        React.createElement(
          View,
          { style: styles.header },
          React.createElement(Text, { style: styles.headerTitle }, 'NPCollab'),
          React.createElement(Text, { style: styles.headerSubtitle }, 'Australian Nurse Practitioner Platform')
        ),

        // Body
        React.createElement(
          View,
          { style: styles.body },
          React.createElement(Text, { style: styles.certTitle }, 'Certificate of Completion'),
          React.createElement(View, { style: styles.divider }),
          React.createElement(Text, { style: styles.mutedText }, 'This certifies that'),
          React.createElement(Text, { style: styles.userName }, userName),
          React.createElement(Text, { style: styles.mutedText }, 'has successfully completed'),
          React.createElement(Text, { style: styles.moduleName }, moduleName),
          React.createElement(Text, { style: styles.mutedText }, 'and has been awarded'),
          React.createElement(Text, { style: styles.cpdText }, cpdLabel),
          React.createElement(View, { style: styles.divider }),
          React.createElement(Text, { style: styles.metaText }, `Completed ${formatDate(completedAt)}`),
          React.createElement(Text, { style: styles.idText }, `Certificate ID: ${certId}`)
        ),

        // Footer
        React.createElement(
          View,
          { style: styles.footer },
          React.createElement(Text, { style: styles.footerLeft }, 'NPCollab'),
          React.createElement(
            Text,
            { style: styles.footerCenter },
            'This certificate is for educational CPD records only. It does not replace formal AHPRA CPD registration requirements.'
          ),
          React.createElement(Text, { style: styles.footerRight }, 'npcollab.com')
        )
      )
    )
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return renderToBuffer(doc as any);
}
