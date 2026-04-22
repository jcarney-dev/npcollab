'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SidebarSponsorCard } from './SponsorCard';
import type { Sponsor, UserV2 } from '@/lib/schema';

type NavItem = { label: string; href: string; icon: string; disabled?: boolean; coming?: boolean };
type NavGroup = { label: string; items: NavItem[] };

// Maps module_lock_* keys → nav path prefixes they gate
const LOCK_KEY_TO_PATH: Record<string, string> = {
  'module_lock_metaspecialties':              '/metaspecialties',
  'module_lock_scope':                        '/scope',
  'module_lock_assessment':                   '/assessment',
  'module_lock_aged-care':                    '/modules/aged-care',
  'module_lock_cardiac':                      '/modules/cardiac',
  'module_lock_cardiovascular':               '/modules/cardiovascular',
  'module_lock_drugs-alcohol':                '/modules/drugs-alcohol',
  'module_lock_endocrine':                    '/modules/endocrine',
  'module_lock_ent':                          '/modules/ent',
  'module_lock_general-medical':              '/modules/general-medical',
  'module_lock_gi-hepatobiliary':             '/modules/gi-hepatobiliary',
  'module_lock_gu-nephrology':                '/modules/gu-nephrology',
  'module_lock_integumentary':                '/modules/integumentary',
  'module_lock_maxillofacial-dental':         '/modules/maxillofacial-dental',
  'module_lock_mens-health':                  '/modules/mens-health',
  'module_lock_mental-health':                '/modules/mental-health',
  'module_lock_musculoskeletal':              '/modules/musculoskeletal',
  'module_lock_neurology':                    '/modules/neurology',
  'module_lock_onco-haematology':             '/modules/onco-haematology',
  'module_lock_eyes':                         '/modules/eyes',
  'module_lock_paediatrics':                  '/modules/paediatrics',
  'module_lock_palliative-care':              '/modules/palliative-care',
  'module_lock_respiratory':                  '/modules/respiratory',
  'module_lock_surgical':                     '/modules/surgical',
  'module_lock_toxicology':                   '/modules/toxicology',
  'module_lock_womens-health':                '/modules/womens-health',
  'module_lock_billing-medicare':             '/clinical-essentials/billing-medicare',
  'module_lock_prescribing-pbs':              '/clinical-essentials/prescribing-pbs',
  'module_lock_radiology-pathology':          '/clinical-essentials/radiology-pathology',
  'module_lock_ai-clinical-tools':            '/health-tech/ai-clinical-tools',
  'module_lock_digital-scribes':              '/health-tech/digital-scribes',
  'module_lock_medical-software':             '/health-tech/medical-software',
  'module_lock_research-getting-started':     '/research/getting-started',
  'module_lock_research-funding':             '/research/funding',
  'module_lock_research-networks':            '/research/networks',
  'module_lock_starting-your-own-practice':   '/business/starting-your-own-practice',
};

// MSK sub-modules shown inside the collapsible group
const MSK_CHILDREN: NavItem[] = [
  { label: 'Shoulder',     href: '/modules/musculoskeletal/shoulder',   icon: '🦴' },
  { label: 'Back',         href: '/modules/musculoskeletal/back',        icon: '🦴' },
  { label: 'Neck',         href: '/modules/musculoskeletal/neck',        icon: '🦴' },
  { label: 'Knee',         href: '/modules/musculoskeletal/knee',        icon: '🦴' },
  { label: 'Hip & Pelvis', href: '/modules/musculoskeletal/hip-pelvis',  icon: '🦴' },
  { label: 'Elbow',        href: '/modules/musculoskeletal/elbow',       icon: '🦴' },
  { label: 'Wrist & Hand', href: '/modules/musculoskeletal/wrist',       icon: '🦴' },
  { label: 'Foot & Ankle', href: '/modules/musculoskeletal/foot-ankle',  icon: '🦴' },
  { label: 'Chest Wall',   href: '/modules/musculoskeletal/chest',       icon: '🦴' },
];

const MSK_PREFIX = '/modules/musculoskeletal';

const SCOPE_CHILDREN: NavItem[] = [
  { label: 'Scope by Metaspecialty', href: '/scope/by-metaspecialty', icon: '🗂️' },
  { label: 'Scope Generator',        href: '/scope/generator',         icon: '📄' },
];

const SCOPE_PREFIX = '/scope';

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
      // MSK is rendered as a collapsible group — placeholder kept for list ordering
      { label: 'Musculoskeletal',       href: MSK_PREFIX,                     icon: '🦴' },
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
      { label: 'Job Board', href: '/community/jobs',    icon: '💼' },
      { label: 'Courses',   href: '/community/courses', icon: '🎓' },
      { label: 'News',      href: '/community/news',    icon: '📰' },
      { label: 'Podcast',   href: '/community/podcast', icon: '🎙️' },
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
    label: 'Mentoring',
    items: [
      { label: 'Find a Mentor',     href: '/mentoring',          icon: '🤝' },
      { label: 'Register as Mentor', href: '/mentoring/register', icon: '✏️' },
    ]
  },
  {
    label: 'Business',
    items: [
      { label: 'Starting Your Own Practice', href: '/business/starting-your-own-practice', icon: '🏢' },
    ]
  },
  {
    label: 'Site',
    items: [
      { label: 'About & Contributors', href: '/about',   icon: '👥' },
      { label: 'Support NPCollab',     href: '/support', icon: '❤️' },
      { label: 'Get in Touch',         href: '/contact', icon: '✉️' },
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sponsor?: Sponsor | null;
  adPreviewMode?: boolean;
  sessionUser?: UserV2 | null;
  lockedSettings?: Record<string, string>;
}

export default function Sidebar({ isOpen, onClose, sponsor, adPreviewMode = false, sessionUser = null, lockedSettings = {} }: SidebarProps) {
  const lockedPaths = new Set(
    Object.entries(LOCK_KEY_TO_PATH)
      .filter(([key]) => lockedSettings[key] === 'true')
      .map(([, path]) => path)
  );
  const pathname = usePathname();

  // MSK group is expanded by default when on any MSK sub-page
  const onMskPage = pathname.startsWith(MSK_PREFIX + '/');
  const [mskOpen, setMskOpen] = useState(onMskPage);

  // Scope group is expanded by default when on any Scope sub-page
  const onScopePage = pathname.startsWith(SCOPE_PREFIX + '/');
  const [scopeOpen, setScopeOpen] = useState(onScopePage);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  const mskGroupActive = onMskPage;
  const scopeGroupActive = onScopePage;

  function renderItem(item: NavItem) {
    // Render the Scope parent as a collapsible toggle
    if (item.href === SCOPE_PREFIX) {
      if (lockedPaths.has(SCOPE_PREFIX)) {
        return (
          <span key="scope-group" className="nav-item disabled" title="Under review">
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
            <span style={{ marginLeft: 'auto', fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '3px', color: 'rgba(255,255,255,0.4)' }}>🔒</span>
          </span>
        );
      }
      return (
        <div key="scope-group">
          <button
            onClick={() => setScopeOpen(o => !o)}
            className={`nav-item${scopeGroupActive || pathname === SCOPE_PREFIX ? ' active' : ''}`}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-expanded={scopeOpen}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
            <span style={{
              marginLeft: 'auto',
              fontSize: '10px',
              opacity: 0.6,
              transition: 'transform 0.2s',
              transform: scopeOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              display: 'inline-block',
              lineHeight: 1,
            }}>
              ▾
            </span>
          </button>

          {scopeOpen && (
            <div style={{ paddingLeft: '0' }}>
              <Link
                href={SCOPE_PREFIX}
                className={`nav-item${pathname === SCOPE_PREFIX ? ' active' : ''}`}
                aria-current={pathname === SCOPE_PREFIX ? 'page' : undefined}
                onClick={onClose}
                style={{ paddingLeft: '2.4rem' }}
              >
                <span className="nav-icon" aria-hidden="true" style={{ fontSize: '11px' }}>—</span>
                Overview
              </Link>
              {SCOPE_CHILDREN.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`nav-item${isActive(child.href) ? ' active' : ''}`}
                  aria-current={isActive(child.href) ? 'page' : undefined}
                  onClick={onClose}
                  style={{ paddingLeft: '2.4rem' }}
                >
                  <span className="nav-icon" aria-hidden="true" style={{ fontSize: '11px' }}>—</span>
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Render the MSK parent as a collapsible toggle instead of a plain link
    if (item.href === MSK_PREFIX) {
      const mskLocked = lockedPaths.has(MSK_PREFIX);
      if (mskLocked) {
        return (
          <span key="msk-group" className="nav-item disabled" title="Under review">
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
            <span style={{ marginLeft: 'auto', fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '3px', color: 'rgba(255,255,255,0.4)' }}>🔒</span>
          </span>
        );
      }
      return (
        <div key="msk-group">
          {/* Parent toggle button */}
          <button
            onClick={() => setMskOpen(o => !o)}
            className={`nav-item${mskGroupActive ? ' active' : ''}`}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              padding: undefined, // inherits from .nav-item
            }}
            aria-expanded={mskOpen}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
            <span style={{
              marginLeft: 'auto',
              fontSize: '10px',
              opacity: 0.6,
              transition: 'transform 0.2s',
              transform: mskOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              display: 'inline-block',
              lineHeight: 1,
            }}>
              ▾
            </span>
          </button>

          {/* Children — shown when expanded */}
          {mskOpen && (
            <div style={{ paddingLeft: '0' }}>
              {MSK_CHILDREN.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`nav-item${isActive(child.href) ? ' active' : ''}`}
                  aria-current={isActive(child.href) ? 'page' : undefined}
                  onClick={onClose}
                  style={{ paddingLeft: '2.4rem' }}
                >
                  <span className="nav-icon" aria-hidden="true" style={{ fontSize: '11px' }}>—</span>
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Disabled / coming soon item
    if (item.disabled) {
      return (
        <span key={item.label} className="nav-item disabled">
          <span className="nav-icon" aria-hidden="true">{item.icon}</span>
          {item.label}
          {item.coming && (
            <span style={{ marginLeft: 'auto', fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '3px', color: 'rgba(255,255,255,0.4)' }}>SOON</span>
          )}
        </span>
      );
    }

    // Locked item
    const isLocked = lockedPaths.has(item.href);
    if (isLocked) {
      return (
        <span key={item.label} className="nav-item disabled" title="Under review">
          <span className="nav-icon" aria-hidden="true">{item.icon}</span>
          {item.label}
          <span style={{ marginLeft: 'auto', fontSize: '0.6rem', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '3px', color: 'rgba(255,255,255,0.4)' }}>🔒</span>
        </span>
      );
    }

    // Regular nav item
    return (
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
    );
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
              {group.items.map(item => renderItem(item))}
            </div>
          ))}
        </nav>

        {/* Share NPCollab — subtle nav footer link */}
        <Link
          href="/support"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'color 0.15s',
          }}
        >
          <span aria-hidden="true">📣</span>
          Share NPCollab with a colleague
        </Link>

        {sponsor && (
          <div className="sidebar-sponsor-wrap">
            <SidebarSponsorCard sponsor={sponsor} />
          </div>
        )}
        {adPreviewMode && (
          <div className="sidebar-sponsor-wrap">
            <div style={{
              border: '2px solid var(--navy)',
              borderRadius: '8px',
              padding: '14px 12px',
              textAlign: 'center',
              background: 'rgba(11,24,41,0.85)',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Ad Placement</div>
              <div style={{ fontSize: '12px', color: 'var(--gold-light)', fontWeight: 600, lineHeight: 1.4 }}>[ Ad Placement — Sidebar Sponsor ]</div>
            </div>
          </div>
        )}

        <div className="sidebar-footer">
          {sessionUser ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* User info */}
              <div style={{
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {sessionUser.name}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                  {sessionUser.npEndorsement}{sessionUser.state ? ` · ${sessionUser.state}` : ''}
                </div>
              </div>

              {/* My Profile + Logout */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <Link
                  href="/profile/edit"
                  onClick={onClose}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '7px 0',
                    borderRadius: '6px',
                    background: 'rgba(201,168,76,0.15)',
                    color: 'var(--gold-light)',
                    textDecoration: 'none',
                    border: '1px solid rgba(201,168,76,0.25)',
                    transition: 'background 0.15s',
                  }}
                >
                  My Profile
                </Link>
                <button
                  onClick={async () => {
                    await fetch('/api/auth/logout', { method: 'POST' });
                    window.location.href = '/login';
                  }}
                  style={{
                    flex: 1,
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '7px 0',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                >
                  Log Out
                </button>
              </div>

              {sessionUser.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={onClose}
                  style={{
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '6px 0',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.07)',
                    letterSpacing: '0.03em',
                  }}
                >
                  ⚙ Admin Panel
                </Link>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link
                href="/login"
                onClick={onClose}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '9px 0',
                  borderRadius: '7px',
                  background: 'var(--gold)',
                  color: 'var(--navy)',
                  textDecoration: 'none',
                }}
              >
                Log In
              </Link>
              <Link
                href="/request-access"
                onClick={onClose}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 0',
                  borderRadius: '7px',
                  background: 'transparent',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}
              >
                Create an account
              </Link>
              <div className="support-badge">
                <p>Free forever for Australian NPs. Help cover hosting costs.</p>
                <Link href="/support" className="btn-support" onClick={onClose}>☕ Support NPCollab</Link>
                        </div>
            </div>
          )}
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
