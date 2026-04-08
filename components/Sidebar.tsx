'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarSponsorCard } from './SponsorCard';
import type { Sponsor } from '@/lib/schema';

type NavItem = { label: string; href: string; icon: string; disabled?: boolean; coming?: boolean };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: 'Getting Started',
    items: [
      { label: 'Home',               href: '/',                  icon: '🏠' },
      { label: 'Introduction',       href: '/intro',             icon: '👋' },
      { label: 'Metaspecialties',    href: '/metaspecialties',   icon: '🗺️' },
      { label: 'Starting Your Role', href: '/starting-role',     icon: '🚀' },
      { label: 'Scope of Practice',  href: '/scope',             icon: '🛡️' },
      { label: 'Patient Assessment', href: '/assessment',        icon: '📋' },
    ]
  },
  {
    label: 'Clinical Modules',
    items: [
      { label: 'Aged Care',             href: '/modules/aged-care',           icon: '🧓' },
      { label: 'Cardiac',               href: '/modules/cardiac',             icon: '❤️' },
      { label: 'Cardiovascular',        href: '/modules/cardiovascular',      icon: '🫀' },
      { label: 'Drugs & Alcohol',       href: '/modules/drugs-alcohol',       icon: '🧪' },
      { label: 'Endocrine',             href: '/modules/endocrine',           icon: '🔬' },
      { label: 'ENT',                   href: '/modules/ent',                 icon: '👂' },
      { label: 'General Medical',       href: '/modules/general-medical',     icon: '🩺' },
      { label: 'GI & Hepatobiliary',    href: '/modules/gi-hepatobiliary',    icon: '🫃' },
      { label: 'GU & Nephrology',       href: '/modules/gu-nephrology',       icon: '🫘' },
      { label: 'Integumentary',         href: '/modules/integumentary',       icon: '🩹' },
      { label: 'Maxillofacial/Dental',  href: '/modules/maxillofacial-dental',icon: '🦷' },
      { label: "Men's Health",          href: '/modules/mens-health',         icon: '👨' },
      { label: 'Mental Health',         href: '/modules/mental-health',       icon: '🧠' },
      { label: 'MSK — Back',              href: '/modules/musculoskeletal/back',        icon: '🦴' },
      { label: 'MSK — Chest Wall',        href: '/modules/musculoskeletal/chest',       icon: '🦴' },
      { label: 'MSK — Elbow',             href: '/modules/musculoskeletal/elbow',       icon: '🦴' },
      { label: 'MSK — Foot & Ankle',      href: '/modules/musculoskeletal/foot-ankle',  icon: '🦴' },
      { label: 'MSK — Hip & Pelvis',      href: '/modules/musculoskeletal/hip-pelvis',  icon: '🦴' },
      { label: 'MSK — Knee',              href: '/modules/musculoskeletal/knee',        icon: '🦴' },
      { label: 'MSK — Neck',              href: '/modules/musculoskeletal/neck',        icon: '🦴' },
      { label: 'MSK — Shoulder',          href: '/modules/musculoskeletal/shoulder',    icon: '🦴' },
      { label: 'MSK — Wrist & Hand',      href: '/modules/musculoskeletal/wrist',       icon: '🦴' },
      { label: 'Neurology',             href: '/modules/neurology',           icon: '🧬' },
      { label: 'Onco-Haematology',      href: '/modules/onco-haematology',   icon: '🩸' },
      { label: 'Ophthalmology',         href: '/modules/eyes',               icon: '👁️' },
      { label: 'Paediatrics',           href: '/modules/paediatrics',         icon: '👶' },
      { label: 'Palliative Care',       href: '/modules/palliative-care',     icon: '🕊️' },
      { label: 'Respiratory',           href: '/modules/respiratory',         icon: '🫁' },
      { label: 'Surgical',              href: '/modules/surgical',            icon: '🔪' },
      { label: 'Toxicology',            href: '/modules/toxicology',          icon: '⚗️' },
      { label: "Women's Health",        href: '/modules/womens-health',       icon: '👩' },
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Job Board', href: '/community/jobs',    icon: '💼', disabled: true, coming: true },
      { label: 'News',      href: '/community/news',    icon: '📰', disabled: true, coming: true },
      { label: 'Podcast',   href: '/community/podcast', icon: '🎙️', disabled: true, coming: true },
    ]
  },
  {
    label: 'Clinical Practice Essentials',
    items: [
      { label: 'Billing Medicare',      href: '/clinical-essentials/billing-medicare',    icon: '💳' },
      { label: 'Prescribing & the PBS', href: '/clinical-essentials/prescribing-pbs',     icon: '💊' },
      { label: 'Radiology & Pathology', href: '/clinical-essentials/radiology-pathology', icon: '🔬' },
    ]
  },
  {
    label: 'Health Tech & Tools',
    items: [
      { label: 'AI Clinical Tools', href: '/health-tech/ai-clinical-tools', icon: '🤖' },
      { label: 'Digital Scribes',   href: '/health-tech/digital-scribes',   icon: '🎙️' },
      { label: 'Medical Software',  href: '/health-tech/medical-software',  icon: '💻' },
    ]
  },
  {
    label: 'Research',
    items: [
      { label: 'Getting Started', href: '/research/getting-started', icon: '🔭' },
      { label: 'Funding',         href: '/research/funding',         icon: '💰' },
      { label: 'Networks',        href: '/research/networks',        icon: '🌐' },
    ]
  },
  {
    label: 'Business',
    items: [
      { label: 'Starting Your Own Practice', href: '/business', icon: '🏢', disabled: true, coming: true },
    ]
  },
  {
    label: 'Site',
    items: [
      { label: 'About & Contributors', href: '/about',   icon: '👥' },
      { label: 'Support NPCollab',     href: '/support', icon: '❤️' },
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sponsor?: Sponsor | null;
}

export default function Sidebar({ isOpen, onClose, sponsor }: SidebarProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      <aside className={`sidebar${isOpen ? ' open' : ''}`} id="sidebar">
        <div className="sidebar-logo">
          <Link href="/" className="wordmark" onClick={onClose}>NP<span>Collab</span></Link>
          <span className="tagline">Australian Nurse Practitioner Resources</span>
        </div>

        <nav className="sidebar-nav">
          {navGroups.map(group => (
            <div key={group.label}>
              <span className="nav-section-label">{group.label}</span>
              {group.items.map(item => (
                item.disabled ? (
                  <span
                    key={item.label}
                    className="nav-item disabled"
                  >
                    <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                    {item.label}
                    {item.coming && (
                      <span style={{marginLeft:'auto',fontSize:'0.6rem',background:'rgba(255,255,255,0.1)',padding:'2px 6px',borderRadius:'3px',color:'rgba(255,255,255,0.4)'}}>SOON</span>
                    )}
                  </span>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nav-item${isActive(item.href) ? ' active' : ''}`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={onClose}
                  >
                    <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          ))}
        </nav>

        {sponsor && (
          <div className="sidebar-sponsor-wrap">
            <SidebarSponsorCard sponsor={sponsor} />
          </div>
        )}

        <div className="sidebar-footer">
          <div className="support-badge">
            <p>Free forever for Australian NPs. Help cover hosting costs.</p>
            <Link href="/support" className="btn-support" onClick={onClose}>☕ Support NPCollab</Link>
          </div>
        </div>
      </aside>

      <div
        className={`overlay${isOpen ? ' show' : ''}`}
        onClick={onClose}
        id="overlay"
      />
    </>
  );
}
