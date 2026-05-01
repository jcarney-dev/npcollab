'use client';

import React, { useState, useMemo, useRef } from 'react';
import type { ProcedureLog, PortfolioEntry } from '@/lib/schema';
import { PREDEFINED_PROCEDURES, PROCEDURE_CATEGORIES, CLINICAL_SETTINGS } from '@/lib/procedures';

interface Props {
  logs: ProcedureLog[];
  assessments: PortfolioEntry[];
}

type FilterType = 'all' | 'self' | 'formal';

type UnifiedEntry =
  | { type: 'log';        data: ProcedureLog;     date: Date }
  | { type: 'assessment'; data: PortfolioEntry;   date: Date };

const STATUS_COLORS: Record<string, string> = {
  draft:          '#94a3b8',
  pending_review: '#d97706',
  complete:       '#2A7D4F',
};

const STATUS_LABELS: Record<string, string> = {
  draft:          'Draft',
  pending_review: 'Pending Review',
  complete:       'Complete',
};

function formatDate(d: Date | string) {
  return new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '9px 12px', border: '1px solid var(--border)',
  borderRadius: '7px', fontSize: '14px', fontFamily: 'inherit',
  background: '#fff', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  fontWeight: 600, fontSize: '13px', color: 'var(--navy)',
  display: 'block', marginBottom: '5px',
};
const fieldWrap: React.CSSProperties = { marginBottom: '16px' };

export default function PassportClient({ logs: initialLogs, assessments }: Props) {
  const [logs, setLogs] = useState(initialLogs);
  const [filter, setFilter] = useState<FilterType>('all');
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Form state
  const [inputValue, setInputValue]         = useState('');
  const [procedureName, setProcedureName]   = useState('');
  const [category, setCategory]             = useState('');
  const [performedAt, setPerformedAt]       = useState(() => new Date().toISOString().slice(0, 10));
  const [setting, setSetting]               = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorEmail, setSupervisorEmail] = useState('');
  const [notes, setNotes]                   = useState('');
  const [showDropdown, setShowDropdown]     = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = useMemo(() => {
    const q = inputValue.toLowerCase();
    return q ? PREDEFINED_PROCEDURES.filter(p => p.name.toLowerCase().includes(q)) : PREDEFINED_PROCEDURES;
  }, [inputValue]);

  function selectProcedure(name: string, cat: string) {
    setProcedureName(name);
    setInputValue(name);
    setCategory(cat);
    setShowDropdown(false);
  }

  function resetForm() {
    setInputValue(''); setProcedureName(''); setCategory('');
    setPerformedAt(new Date().toISOString().slice(0, 10));
    setSetting(''); setSupervisorName(''); setSupervisorEmail('');
    setNotes(''); setFormError('');
  }

  // Stats
  const totalCount   = logs.length + assessments.length;
  const uniqueNames  = new Set([...logs.map(l => l.procedureName), ...assessments.map(a => a.title)]).size;
  const formalDone   = assessments.filter(a => a.status === 'complete').length;

  // Unified sorted list
  const unified: UnifiedEntry[] = useMemo(() => {
    const items: UnifiedEntry[] = [
      ...logs.map(l => ({ type: 'log' as const, data: l, date: new Date(l.performedAt) })),
      ...assessments.map(a => ({ type: 'assessment' as const, data: a, date: new Date(a.updatedAt) })),
    ];
    return items.sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [logs, assessments]);

  const filtered = useMemo(() => {
    if (filter === 'self') return unified.filter(u => u.type === 'log');
    if (filter === 'formal') return unified.filter(u => u.type === 'assessment');
    return unified;
  }, [unified, filter]);

  // Group by month/year
  const grouped = useMemo(() => {
    const groups = new Map<string, UnifiedEntry[]>();
    for (const entry of filtered) {
      const label = entry.date.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label)!.push(entry);
    }
    return Array.from(groups.entries()).map(([label, items]) => ({ label, items }));
  }, [filtered]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!procedureName.trim()) { setFormError('Procedure name is required.'); return; }
    if (!performedAt)          { setFormError('Date performed is required.');  return; }
    setSaving(true); setFormError('');
    try {
      const res = await fetch('/api/passport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          procedureName:   procedureName.trim(),
          category:        category || 'General',
          performedAt,
          setting:         setting || '',
          supervisorName:  supervisorName.trim() || null,
          supervisorEmail: supervisorEmail.trim() || null,
          notes:           notes.trim() || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) { setFormError(json.error || 'Failed to save.'); return; }
      setLogs(prev =>
        [json.log, ...prev].sort((a, b) => new Date(b.performedAt).getTime() - new Date(a.performedAt).getTime())
      );
      resetForm();
      setShowForm(false);
    } catch {
      setFormError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Remove this entry from your Procedure Passport?')) return;
    try {
      const res = await fetch(`/api/passport/${id}`, { method: 'DELETE' });
      if (res.ok) setLogs(prev => prev.filter(l => l.id !== id));
    } catch { /* silent */ }
  }

  return (
    <div>
      <div className="page-header">
        <div className="label">My Portfolio</div>
        <h1>Procedure Passport</h1>
        <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
          Your complete record of clinical procedures — self-logged and formally assessed
        </p>
      </div>

      <div className="content-prose">

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '28px' }}>
          {[
            { value: totalCount,  label: 'Total Entries' },
            { value: uniqueNames, label: 'Unique Procedures' },
            { value: formalDone,  label: 'Formal Assessments' },
          ].map(stat => (
            <div key={stat.label} style={{ background: 'var(--navy)', borderRadius: '10px', padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '28px', color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {(['all', 'self', 'formal'] as FilterType[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '13px', fontWeight: filter === f ? 700 : 400, background: filter === f ? 'var(--navy)' : '#fff', color: filter === f ? '#fff' : 'var(--text-muted)', cursor: 'pointer' }}
              >
                {f === 'all' ? 'All' : f === 'self' ? 'Self-logged' : 'Formal Assessments'}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setShowForm(v => !v); if (showForm) resetForm(); }}
            style={{ padding: '8px 18px', background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: '7px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
          >
            {showForm ? 'Cancel' : '+ Log Procedure'}
          </button>
        </div>

        {/* Log form */}
        {showForm && (
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
            <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>Log a Procedure</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 16px' }}>

                {/* Procedure name combobox */}
                <div style={{ ...fieldWrap, gridColumn: '1 / -1', position: 'relative' }}>
                  <label style={labelStyle}>Procedure Name *</label>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    placeholder="Search or type a procedure name…"
                    style={inputStyle}
                    autoComplete="off"
                    onChange={e => {
                      const val = e.target.value;
                      setInputValue(val);
                      setProcedureName(val);
                      setShowDropdown(true);
                      const match = PREDEFINED_PROCEDURES.find(p => p.name.toLowerCase() === val.toLowerCase());
                      if (match) setCategory(match.category); else setCategory('');
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 160)}
                    required
                  />
                  {showDropdown && filteredSuggestions.length > 0 && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '2px', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 200, maxHeight: '220px', overflowY: 'auto' }}>
                      {filteredSuggestions.map(p => (
                        <div
                          key={p.name}
                          onMouseDown={() => selectProcedure(p.name, p.category)}
                          style={{ padding: '10px 14px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}
                        >
                          <span>{p.name}</span>
                          <span style={{ fontSize: '11px', color: '#94a3b8', flexShrink: 0 }}>{p.category}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value)} style={{ ...inputStyle, background: '#fff' }}>
                    <option value="">Select category…</option>
                    {PROCEDURE_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Date */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Date Performed *</label>
                  <input type="date" value={performedAt} onChange={e => setPerformedAt(e.target.value)} style={inputStyle} required max={new Date().toISOString().slice(0, 10)} />
                </div>

                {/* Setting */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Clinical Setting</label>
                  <select value={setting} onChange={e => setSetting(e.target.value)} style={{ ...inputStyle, background: '#fff' }}>
                    <option value="">Select setting…</option>
                    {CLINICAL_SETTINGS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Supervisor name */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Supervisor Name <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span></label>
                  <input type="text" value={supervisorName} onChange={e => setSupervisorName(e.target.value)} placeholder="e.g. Dr Jane Smith" style={inputStyle} />
                </div>

                {/* Supervisor email */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Supervisor Email <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span></label>
                  <input type="email" value={supervisorEmail} onChange={e => setSupervisorEmail(e.target.value)} placeholder="e.g. jane.smith@hospital.com" style={inputStyle} />
                </div>

                {/* Notes */}
                <div style={{ ...fieldWrap, gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Notes <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span></label>
                  <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} maxLength={500} placeholder="Any relevant notes about this procedure…" style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }} />
                </div>
              </div>

              {formError && <p style={{ color: 'var(--error)', fontSize: '13px', margin: '0 0 14px' }}>{formError}</p>}

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={saving} style={{ padding: '10px 24px', background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '7px', fontWeight: 700, fontSize: '14px', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
                  {saving ? 'Saving…' : 'Save Entry'}
                </button>
                <button type="button" onClick={() => { setShowForm(false); resetForm(); }} style={{ padding: '10px 18px', background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '7px', fontSize: '14px', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 24px', background: '#fff', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '40px', marginBottom: '14px' }}>📋</div>
            <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--navy)', marginBottom: '8px' }}>
              {filter === 'all' ? 'No procedures recorded yet' : filter === 'self' ? 'No self-logged procedures' : 'No formal assessments yet'}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              {filter === 'all' ? 'Start building your clinical record by logging your first procedure.' : filter === 'self' ? 'Use the "+ Log Procedure" button to add an entry.' : 'Complete a Mini-CEX or DOPS in the Emergency Stream to see formal assessments here.'}
            </div>
            {filter !== 'formal' && (
              <button onClick={() => setShowForm(true)} style={{ padding: '10px 24px', background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: '7px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                + Log Your First Procedure
              </button>
            )}
          </div>
        )}

        {/* Grouped timeline */}
        {grouped.map(group => (
          <div key={group.label} style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{group.label}</div>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {group.items.map(item => {
                if (item.type === 'log') {
                  const log = item.data;
                  return (
                    <div key={log.id} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>📋</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
                          <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{log.procedureName}</span>
                          <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: '#e2e8f0', color: '#475569', fontWeight: 600 }}>Self-logged</span>
                          {log.category && <span style={{ fontSize: '11px', color: '#94a3b8' }}>{log.category}</span>}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <span>{formatDate(log.performedAt)}</span>
                          {log.setting && <><span style={{ opacity: 0.4 }}>·</span><span>{log.setting}</span></>}
                          {log.supervisorName && <><span style={{ opacity: 0.4 }}>·</span><span>Supervisor: {log.supervisorName}</span></>}
                        </div>
                        {log.notes && <div style={{ marginTop: '6px', fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic' }}>{log.notes}</div>}
                      </div>
                      <button onClick={() => handleDelete(log.id)} style={{ flexShrink: 0, background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '18px', padding: '0 4px', lineHeight: 1 }} title="Remove entry">×</button>
                    </div>
                  );
                }

                const entry = item.data;
                const formLabel = entry.formType === 'mini-cex' ? 'Mini-CEX' : 'DOPS';
                const statusColor = STATUS_COLORS[entry.status] || '#94a3b8';
                const statusLabel = STATUS_LABELS[entry.status] || entry.status;
                return (
                  <div key={entry.id} style={{ background: '#fff', border: '1px solid var(--border)', borderLeft: `3px solid ${statusColor}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>{entry.status === 'complete' ? '✅' : '📝'}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
                        <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{entry.title}</span>
                        <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'var(--navy)', color: '#fff', fontWeight: 600 }}>{formLabel}</span>
                        <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: `${statusColor}22`, color: statusColor, fontWeight: 600 }}>{statusLabel}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span>{formatDate(entry.updatedAt)}</span>
                        <span style={{ opacity: 0.4 }}>·</span>
                        <span style={{ textTransform: 'capitalize' }}>{entry.streamSlug} Stream</span>
                        {entry.mentorName && <><span style={{ opacity: 0.4 }}>·</span><span>Assessed by: {entry.mentorName}</span></>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
