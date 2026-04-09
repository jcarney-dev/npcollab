'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import type { Sponsor } from '@/lib/schema';

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
    '/modules/maxillofacial-dental': 'Maxillofacial & Dental',
    '/modules/maxillofacial-dental/assessment': 'Maxillofacial & Dental — Assessment',
    '/modules/maxillofacial-dental/soap': 'Maxillofacial & Dental — SOAP Note',
    '/modules/maxillofacial-dental/resources': 'Maxillofacial & Dental — Resources',
    '/modules/maxillofacial-dental/quiz': 'Maxillofacial & Dental — Quiz',
    '/modules/musculoskeletal/back': 'MSK — Back',
    '/modules/musculoskeletal/back/assessment': 'MSK Back — Assessment',
    '/modules/musculoskeletal/back/soap': 'MSK Back — SOAP Note',
    '/modules/musculoskeletal/back/resources': 'MSK Back — Resources',
    '/modules/musculoskeletal/back/quiz': 'MSK Back — Quiz',
    '/modules/musculoskeletal/neck': 'MSK — Neck',
    '/modules/musculoskeletal/neck/assessment': 'MSK Neck — Assessment',
    '/modules/musculoskeletal/neck/soap': 'MSK Neck — SOAP Note',
    '/modules/musculoskeletal/neck/resources': 'MSK Neck — Resources',
    '/modules/musculoskeletal/neck/quiz': 'MSK Neck — Quiz',
    '/modules/musculoskeletal/shoulder': 'MSK — Shoulder',
    '/modules/musculoskeletal/shoulder/assessment': 'MSK Shoulder — Assessment',
    '/modules/musculoskeletal/shoulder/soap': 'MSK Shoulder — SOAP Note',
    '/modules/musculoskeletal/shoulder/resources': 'MSK Shoulder — Resources',
    '/modules/musculoskeletal/shoulder/quiz': 'MSK Shoulder — Quiz',
    '/modules/musculoskeletal/knee': 'MSK — Knee',
    '/modules/musculoskeletal/knee/assessment': 'MSK Knee — Assessment',
    '/modules/musculoskeletal/knee/soap': 'MSK Knee — SOAP Note',
    '/modules/musculoskeletal/knee/resources': 'MSK Knee — Resources',
    '/modules/musculoskeletal/knee/quiz': 'MSK Knee — Quiz',
    '/modules/musculoskeletal/hip-pelvis': 'MSK — Hip & Pelvis',
    '/modules/musculoskeletal/hip-pelvis/assessment': 'MSK Hip & Pelvis — Assessment',
    '/modules/musculoskeletal/hip-pelvis/soap': 'MSK Hip & Pelvis — SOAP Note',
    '/modules/musculoskeletal/hip-pelvis/resources': 'MSK Hip & Pelvis — Resources',
    '/modules/musculoskeletal/hip-pelvis/quiz': 'MSK Hip & Pelvis — Quiz',
    '/modules/musculoskeletal/elbow': 'MSK — Elbow',
    '/modules/musculoskeletal/elbow/assessment': 'MSK Elbow — Assessment',
    '/modules/musculoskeletal/elbow/soap': 'MSK Elbow — SOAP Note',
    '/modules/musculoskeletal/elbow/resources': 'MSK Elbow — Resources',
    '/modules/musculoskeletal/elbow/quiz': 'MSK Elbow — Quiz',
    '/modules/musculoskeletal/wrist': 'MSK — Wrist & Hand',
    '/modules/musculoskeletal/wrist/assessment': 'MSK Wrist & Hand — Assessment',
    '/modules/musculoskeletal/wrist/soap': 'MSK Wrist & Hand — SOAP Note',
    '/modules/musculoskeletal/wrist/resources': 'MSK Wrist & Hand — Resources',
    '/modules/musculoskeletal/wrist/quiz': 'MSK Wrist & Hand — Quiz',
    '/modules/musculoskeletal/foot-ankle': 'MSK — Foot & Ankle',
    '/modules/musculoskeletal/foot-ankle/assessment': 'MSK Foot & Ankle — Assessment',
    '/modules/musculoskeletal/foot-ankle/soap': 'MSK Foot & Ankle — SOAP Note',
    '/modules/musculoskeletal/foot-ankle/resources': 'MSK Foot & Ankle — Resources',
    '/modules/musculoskeletal/foot-ankle/quiz': 'MSK Foot & Ankle — Quiz',
    '/modules/musculoskeletal/chest': 'MSK — Chest Wall',
    '/modules/musculoskeletal/chest/assessment': 'MSK Chest Wall — Assessment',
    '/modules/musculoskeletal/chest/soap': 'MSK Chest Wall — SOAP Note',
    '/modules/musculoskeletal/chest/resources': 'MSK Chest Wall — Resources',
    '/modules/musculoskeletal/chest/quiz': 'MSK Chest Wall — Quiz',
    '/modules/womens-health': "Women's Health",
    '/modules/womens-health/assessment': "Women's Health — Assessment",
    '/modules/womens-health/soap': "Women's Health — SOAP Note",
    '/modules/womens-health/resources': "Women's Health — Resources",
    '/modules/womens-health/quiz': "Women's Health — Quiz",
    '/modules/aged-care': 'Aged Care',
    '/modules/aged-care/assessment': 'Aged Care — Assessment',
    '/modules/aged-care/soap': 'Aged Care — SOAP Note',
    '/modules/aged-care/resources': 'Aged Care — Resources',
    '/modules/aged-care/quiz': 'Aged Care — Quiz',
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
    '/modules/paediatrics': 'Paediatrics',
    '/modules/paediatrics/assessment': 'Paediatrics — Assessment',
    '/modules/paediatrics/soap': 'Paediatrics — SOAP Note',
    '/modules/paediatrics/resources': 'Paediatrics — Resources',
    '/modules/paediatrics/quiz': 'Paediatrics — Quiz',
    '/modules/gi-hepatobiliary': 'GI & Hepatobiliary',
    '/modules/gi-hepatobiliary/assessment': 'GI & Hepatobiliary — Assessment',
    '/modules/gi-hepatobiliary/soap': 'GI & Hepatobiliary — SOAP Note',
    '/modules/gi-hepatobiliary/resources': 'GI & Hepatobiliary — Resources',
    '/modules/gi-hepatobiliary/quiz': 'GI & Hepatobiliary — Quiz',
    '/modules/cardiovascular': 'Cardiovascular',
    '/modules/cardiovascular/assessment': 'Cardiovascular — Assessment',
    '/modules/cardiovascular/soap': 'Cardiovascular — SOAP Note',
    '/modules/cardiovascular/resources': 'Cardiovascular — Resources',
    '/modules/cardiovascular/quiz': 'Cardiovascular — Quiz',
    '/modules/drugs-alcohol': 'Drugs & Alcohol',
    '/modules/drugs-alcohol/assessment': 'Drugs & Alcohol — Assessment',
    '/modules/drugs-alcohol/soap': 'Drugs & Alcohol — SOAP Note',
    '/modules/drugs-alcohol/resources': 'Drugs & Alcohol — Resources',
    '/modules/drugs-alcohol/quiz': 'Drugs & Alcohol — Quiz',
    '/modules/general-medical': 'General Medical',
    '/modules/general-medical/assessment': 'General Medical — Assessment',
    '/modules/general-medical/soap': 'General Medical — SOAP Note',
    '/modules/general-medical/resources': 'General Medical — Resources',
    '/modules/general-medical/quiz': 'General Medical — Quiz',
    '/modules/palliative-care': 'Palliative Care',
    '/modules/palliative-care/assessment': 'Palliative Care — Assessment',
    '/modules/palliative-care/soap': 'Palliative Care — SOAP Note',
    '/modules/palliative-care/resources': 'Palliative Care — Resources',
    '/modules/palliative-care/quiz': 'Palliative Care — Quiz',
    '/modules/integumentary': 'Integumentary',
    '/modules/integumentary/assessment': 'Integumentary — Assessment',
    '/modules/integumentary/soap': 'Integumentary — SOAP Note',
    '/modules/integumentary/resources': 'Integumentary — Resources',
    '/modules/integumentary/quiz': 'Integumentary — Quiz',
    '/modules/gu-nephrology': 'GU & Nephrology',
    '/modules/gu-nephrology/assessment': 'GU & Nephrology — Assessment',
    '/modules/gu-nephrology/soap': 'GU & Nephrology — SOAP Note',
    '/modules/gu-nephrology/resources': 'GU & Nephrology — Resources',
    '/modules/gu-nephrology/quiz': 'GU & Nephrology — Quiz',
    '/modules/surgical': 'Surgical',
    '/modules/surgical/assessment': 'Surgical — Assessment',
    '/modules/surgical/soap': 'Surgical — SOAP Note',
    '/modules/surgical/resources': 'Surgical — Resources',
    '/modules/surgical/quiz': 'Surgical — Quiz',
    '/modules/onco-haematology': 'Onco-Haematology',
    '/modules/onco-haematology/assessment': 'Onco-Haematology — Assessment',
    '/modules/onco-haematology/soap': 'Onco-Haematology — SOAP Note',
    '/modules/onco-haematology/resources': 'Onco-Haematology — Resources',
    '/modules/onco-haematology/quiz': 'Onco-Haematology — Quiz',
    '/modules/toxicology': 'Toxicology',
    '/modules/toxicology/assessment': 'Toxicology — Assessment',
    '/modules/toxicology/soap': 'Toxicology — SOAP Note',
    '/modules/toxicology/resources': 'Toxicology — Resources',
    '/modules/toxicology/quiz': 'Toxicology — Quiz',
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

interface AppShellProps {
  children: React.ReactNode;
  sidebarSponsor?: Sponsor | null;
  adPreviewMode?: boolean;
}

export default function AppShell({ children, sidebarSponsor, adPreviewMode = false }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb(pathname);

  return (
    <div className="app-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} sponsor={sidebarSponsor} adPreviewMode={adPreviewMode} />

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
            <a href="https://www.ahpra.gov.au" target="_blank" rel="noopener">AHPRA</a> ·{' '}
            <Link href="/advertise">Advertise</Link> ·{' '}
            <Link href="/community/jobs/post">Post a Job</Link> ·{' '}
            <Link href="/employers">For Employers</Link>
          </div>
          <div>⚠️ Educational purposes only. Always apply your own clinical judgement.</div>
        </footer>
      </div>
    </div>
  );
}
