'use client';

import { useState } from 'react';

export interface SoapSection {
  letter: string;
  title: string;
  fields: { label: string; content: string | string[] }[];
}

interface SoapNoteProps {
  title: string;
  meta?: string;
  sections: SoapSection[];
}

function SoapSectionItem({ section }: { section: SoapSection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="soap-section">
      <button
        className={`soap-section-header${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        type="button"
      >
        <div className={`soap-letter ${section.letter}`}>{section.letter}</div>
        <h4>{section.title}</h4>
        <span className="soap-chevron" aria-hidden="true">▼</span>
      </button>
      <div className={`soap-body${open ? ' open' : ''}`}>
        {section.fields.map((field, i) => (
          <div className="soap-field" key={i}>
            <label>{field.label}</label>
            {Array.isArray(field.content) ? (
              <ul>{field.content.map((item, j) => <li key={j}>{item}</li>)}</ul>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: field.content }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SoapNote({ title, meta = 'NP Clinic · Primary Care · Example only', sections }: SoapNoteProps) {
  return (
    <div className="soap-wrapper">
      <div className="soap-header">
        <h3>{title}</h3>
        <span className="soap-meta">{meta}</span>
      </div>
      {sections.map((section, i) => (
        <SoapSectionItem key={i} section={section} />
      ))}
    </div>
  );
}
