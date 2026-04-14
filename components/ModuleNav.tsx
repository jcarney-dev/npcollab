'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ModuleNavProps {
  moduleId: string;
}

const tabs = [
  { label: 'Overview',   path: '' },
  { label: 'Assessment', path: '/assessment' },
  { label: 'SOAP Note',  path: '/soap' },
  { label: 'Resources',  path: '/resources' },
  { label: 'Quiz',       path: '/quiz' },
];

export default function ModuleNav({ moduleId }: ModuleNavProps) {
  const pathname = usePathname();
  const base = `/modules/${moduleId}`;

  // Determine current tab index
  const currentIndex = tabs.findIndex(tab => {
    const fullPath = base + tab.path;
    return tab.path === ''
      ? pathname === fullPath || pathname === fullPath + '/'
      : pathname.startsWith(fullPath);
  });

  const isQuiz = currentIndex === tabs.length - 1;

  if (isQuiz) {
    // Quiz tab: back to overview
    return (
      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        <Link
          href={base}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--gold)',
            color: 'var(--navy)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background 0.15s',
          }}
        >
          ← Back to Overview
        </Link>
      </div>
    );
  }

  const nextTab = currentIndex >= 0 && currentIndex < tabs.length - 1
    ? tabs[currentIndex + 1]
    : null;

  if (!nextTab) return null;

  return (
    <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
      <Link
        href={base + nextTab.path}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--gold)',
          color: 'var(--navy)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.9rem',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'background 0.15s',
        }}
      >
        Continue to {nextTab.label} →
      </Link>
    </div>
  );
}
