'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

function getBreadcrumb(pathname: string): string {
  const map: Record<string, string> = {
    '/': 'Home',
    '/intro': 'Introduction',
    '/metaspecialties': 'Metaspecialties',
    '/starting-role': 'Starting Your Role',
    '/scope': 'Scope of Practice',
    '/assessment': 'Patient Assessment',
    '/modules/cardiac': 'Cardiac',
    '/modules/cardiac/assessment': 'Cardiac — Assessment',
    '/modules/cardiac/soap': 'Cardiac — SOAP Note',
    '/modules/cardiac/resources': 'Cardiac — Resources',
    '/modules/cardiac/quiz': 'Cardiac — Quiz',
    '/modules/ent': 'ENT',
    '/modules/ent/assessment': 'ENT — Assessment',
    '/modules/ent/soap': 'ENT — SOAP Note',
    '/modules/ent/resources': 'ENT — Resources',
    '/modules/ent/quiz': 'ENT — Quiz',
    '/modules/eyes': 'Ophthalmology',
    '/modules/eyes/assessment': 'Ophthalmology — Assessment',
    '/modules/eyes/soap': 'Ophthalmology — SOAP Note',
    '/modules/eyes/resources': 'Ophthalmology — Resources',
    '/modules/eyes/quiz': 'Ophthalmology — Quiz',
    '/modules/respiratory': 'Respiratory',
    '/modules/respiratory/assessment': 'Respiratory — Assessment',
    '/modules/respiratory/soap': 'Respiratory — SOAP Note',
    '/modules/respiratory/resources': 'Respiratory — Resources',
    '/modules/respiratory/quiz': 'Respiratory — Quiz',
    '/modules/mental-health': 'Mental Health',
    '/modules/mental-health/assessment': 'Mental Health — Assessment',
    '/modules/mental-health/soap': 'Mental Health — SOAP Note',
    '/modules/mental-health/resources': 'Mental Health — Resources',
    '/modules/mental-health/quiz': 'Mental Health — Quiz',
    '/modules/musculoskeletal/shoulder': 'MSK — Shoulder',
    '/modules/musculoskeletal/shoulder/assessment': 'MSK Shoulder — Assessment',
    '/modules/musculoskeletal/shoulder/soap': 'MSK Shoulder — SOAP Note',
    '/modules/musculoskeletal/shoulder/resources': 'MSK Shoulder — Resources',
    '/modules/musculoskeletal/shoulder/quiz': 'MSK Shoulder — Quiz',
    '/modules/neurology': 'Neurology',
    '/modules/neurology/assessment': 'Neurology — Assessment',
    '/modules/neurology/soap': 'Neurology — SOAP Note',
    '/modules/neurology/resources': 'Neurology — Resources',
    '/modules/neurology/quiz': 'Neurology — Quiz',
    '/clinical-essentials/billing-medicare': 'Billing Medicare',
    '/clinical-essentials/prescribing-pbs': 'Prescribing & the PBS',
    '/clinical-essentials/radiology-pathology': 'Radiology & Pathology',
    '/health-tech/ai-clinical-tools': 'AI Clinical Tools',
    '/health-tech/digital-scribes': 'Digital Scribes',
    '/health-tech/medical-software': 'Medical Software',
    '/research/getting-started': 'Research — Getting Started',
    '/research/funding': 'Research — Funding',
    '/research/networks': 'Research — Networks',
    '/business': 'Starting Your Own Practice',
    '/community/jobs': 'Community — Job Board',
    '/community/news': 'Community — News',
    '/about': 'About & Contributors',
    '/support': 'Support NPCollab',
    '/analytics': 'Analytics',
  };

  // Try exact match first, then prefix match
  if (map[pathname]) return map[pathname];

  // For coming-soon module pages
  const moduleMatch = pathname.match(/^\/modules\/([^/]+)/);
  if (moduleMatch) {
    const slug = moduleMatch[1];
    const name = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return name;
  }

  return '';
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb(pathname);

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content">
        <header className="topbar">
          <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
            <button
              className="hamburger"
              onClick={() => setSidebarOpen(o => !o)}
              aria-label="Open menu"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
            <div className="topbar-breadcrumb">
              <Link href="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>NPCollab</Link>
              {breadcrumb && <span> → <span>{breadcrumb}</span></span>}
            </div>
          </div>
          <div className="topbar-actions">
            <span className="pill-badge">🇦🇺 AU Resources</span>
            <span className="pill-badge">AHPRA Aligned</span>
          </div>
        </header>

        <main className="page-content">
          {children}
        </main>

        <footer className="page-footer">
          <div>© {new Date().getFullYear()} NPCollab · Built by NPs, for NPs ·{' '}
            <a href="https://www.nursingmidwiferyboard.gov.au" target="_blank" rel="noopener">NMBA</a> ·{' '}
            <a href="https://www.ahpra.gov.au" target="_blank" rel="noopener">AHPRA</a>
          </div>
          <div>⚠️ Educational purposes only. Always apply your own clinical judgement.</div>
        </footer>
      </div>
    </div>
  );
}
