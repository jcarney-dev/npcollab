'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ModuleTabsProps {
  moduleId: string;
}

const tabs = [
  { id: 'overview',   label: 'Overview',   path: '' },
  { id: 'assessment', label: 'Assessment', path: '/assessment' },
  { id: 'soap',       label: 'SOAP Note',  path: '/soap' },
  { id: 'resources',  label: 'Resources',  path: '/resources' },
  { id: 'quiz',       label: 'Quiz',       path: '/quiz' },
];

export default function ModuleTabs({ moduleId }: ModuleTabsProps) {
  const pathname = usePathname();
  const base = `/modules/${moduleId}`;

  function isActive(tabPath: string) {
    const fullPath = base + tabPath;
    if (tabPath === '') return pathname === base || pathname === base + '/';
    return pathname.startsWith(fullPath);
  }

  return (
    <div className="module-tabs" role="tablist">
      {tabs.map(tab => (
        <Link
          key={tab.id}
          href={base + tab.path}
          className={`tab-btn${isActive(tab.path) ? ' active' : ''}`}
          role="tab"
          aria-selected={isActive(tab.path)}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
