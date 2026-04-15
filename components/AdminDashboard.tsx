'use client';

import { useState, useTransition } from 'react';
import type { AccessRequest, User, Sponsor, PodcastSubscriber, NewsItem, JobListing, PodcastBroadcast, Course, UserV2, ModuleContributor } from '@/lib/schema';

interface Props {
  pendingRequests: AccessRequest[];
  users: User[];
  sponsors: Sponsor[];
  podcastSubscribers: PodcastSubscriber[];
  podcastBroadcasts: PodcastBroadcast[];
  newsItems: NewsItem[];
  jobListings: JobListing[];
  courses: Course[];
  registrations: UserV2[];
  contributors: ModuleContributor[];
  siteSettings: Record<string, string>;
  stats: { pending: number; active: number; disabled: number; total: number };
}

function formatDate(d: Date | null | string) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

function toDateInput(d: Date | null | string): string {
  if (!d) return '';
  const date = new Date(d);
  return date.toISOString().slice(0, 10);
}

const PLACEMENT_LABELS: Record<string, string> = {
  sidebar:  'Sidebar',
  module:   'Module',
  homepage: 'Homepage',
};

// ── Sponsors section ────────────────────────────────────────────────────────

function SponsorsSection({ initial, notify }: { initial: Sponsor[]; notify: (msg: string, type?: 'success' | 'error') => void }) {
  const [sponsorList, setSponsorList] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<Partial<Sponsor>>({});
  const [saving, setSaving] = useState(false);
  // Session-only preview state: set of sponsor IDs currently being previewed
  const [previewing, setPreviewing] = useState<Set<string>>(new Set());

  function togglePreview(id: string) {
    setPreviewing(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function startEdit(s: Sponsor) {
    setEditing(s.id);
    setEditFields({
      active:      s.active,
      logoUrl:     s.logoUrl ?? '',
      websiteUrl:  s.websiteUrl ?? '',
      placement:   s.placement,
      moduleSlug:  s.moduleSlug ?? '',
      startDate:   s.startDate,
      endDate:     s.endDate,
    });
  }

  function cancelEdit() {
    setEditing(null);
    setEditFields({});
  }

  async function saveEdit(id: string) {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/sponsors/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          active:     editFields.active,
          logoUrl:    editFields.logoUrl || null,
          websiteUrl: editFields.websiteUrl || '',
          placement:  editFields.placement,
          moduleSlug: editFields.moduleSlug || null,
          startDate:  editFields.startDate || null,
          endDate:    editFields.endDate || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        notify(json.error || 'Failed to update sponsor.', 'error');
      } else {
        setSponsorList(prev => prev.map(s => s.id === id ? json.sponsor : s));
        notify('Sponsor updated.');
        setEditing(null);
        setEditFields({});
      }
    } catch {
      notify('Network error.', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(s: Sponsor) {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/sponsors/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: s.id, active: !s.active }),
      });
      const json = await res.json();
      if (!res.ok) {
        notify(json.error || 'Failed to update sponsor.', 'error');
      } else {
        setSponsorList(prev => prev.map(sp => sp.id === s.id ? json.sponsor : sp));
        notify(json.sponsor.active ? 'Sponsor activated.' : 'Sponsor deactivated.');
      }
    } catch {
      notify('Network error.', 'error');
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="admin-section">
      <h2 className="admin-section-title">
        Sponsors &amp; Enquiries
        {sponsorList.filter(s => !s.active).length > 0 && (
          <span className="admin-badge">{sponsorList.filter(s => !s.active).length} pending</span>
        )}
      </h2>

      {sponsorList.length === 0 ? (
        <p className="admin-empty">No sponsor enquiries yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Placement</th>
                <th>Message</th>
                <th>Status</th>
                <th>Received</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sponsorList.map(s => (
                <>
                  <tr key={s.id} className={s.active ? '' : 'admin-row--disabled'}>
                    <td className="admin-td-name">
                      {s.companyName}
                      {s.websiteUrl && (
                        <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>
                          <a href={s.websiteUrl} target="_blank" rel="noopener" style={{color:'var(--gold)'}}>
                            {s.websiteUrl.replace(/^https?:\/\//, '')}
                          </a>
                        </div>
                      )}
                    </td>
                    <td>
                      <div>{s.contactName}</div>
                      <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{s.contactEmail}</div>
                    </td>
                    <td>
                      <span className="admin-status-badge admin-status-badge--active" style={{background:'rgba(201,168,76,0.15)',color:'#9a7a28'}}>
                        {PLACEMENT_LABELS[s.placement] ?? s.placement}
                      </span>
                      {s.placement === 'module' && s.moduleSlug && (
                        <div style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:'3px'}}>{s.moduleSlug}</div>
                      )}
                    </td>
                    <td style={{maxWidth:'200px'}}>
                      <div style={{fontSize:'0.8rem',color:'var(--text-muted)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                        {s.message || '—'}
                      </div>
                    </td>
                    <td>
                      <span className={`admin-status-badge admin-status-badge--${s.active ? 'active' : 'disabled'}`}>
                        {s.active ? 'Active' : 'Inactive'}
                      </span>
                      {s.active && s.startDate && (
                        <div style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:'3px'}}>
                          {formatDate(s.startDate)} — {s.endDate ? formatDate(s.endDate) : 'ongoing'}
                        </div>
                      )}
                    </td>
                    <td>{formatDate(s.createdAt)}</td>
                    <td>
                      <div style={{display:'flex',gap:'6px',flexWrap:'wrap'}}>
                        <button
                          className={s.active ? 'btn-disable' : 'btn-enable'}
                          onClick={() => toggleActive(s)}
                          disabled={saving}
                        >
                          {s.active ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          className="admin-copy-btn"
                          onClick={() => editing === s.id ? cancelEdit() : startEdit(s)}
                        >
                          {editing === s.id ? 'Cancel' : 'Edit'}
                        </button>
                        <button
                          onClick={() => togglePreview(s.id)}
                          style={{
                            fontSize: '12px',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: previewing.has(s.id) ? '1px solid var(--gold)' : '1px solid var(--border)',
                            background: previewing.has(s.id) ? 'var(--gold-pale)' : '#fff',
                            color: previewing.has(s.id) ? 'var(--navy)' : 'var(--text-muted)',
                            fontWeight: previewing.has(s.id) ? 600 : 400,
                          }}
                          title="Toggle preview — shows this sponsor in its placement slot on the live site (session only)"
                        >
                          {previewing.has(s.id) ? '👁️ Previewing' : 'Preview'}
                        </button>
                      </div>
                      {previewing.has(s.id) && (
                        <div style={{marginTop:'6px',fontSize:'11px',color:'var(--gold)',fontWeight:500}}>
                          ⚠️ Preview active — visible in {PLACEMENT_LABELS[s.placement] ?? s.placement} slot (this session only)
                        </div>
                      )}
                    </td>
                  </tr>

                  {editing === s.id && (
                    <tr key={`${s.id}-edit`}>
                      <td colSpan={7} style={{background:'var(--off-white)',padding:'16px 20px'}}>
                        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'12px',marginBottom:'12px'}}>
                          <div>
                            <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>Logo URL</label>
                            <input
                              className="form-input"
                              style={{fontSize:'0.82rem',padding:'7px 10px'}}
                              type="url"
                              placeholder="https://example.com/logo.png"
                              value={typeof editFields.logoUrl === 'string' ? editFields.logoUrl : ''}
                              onChange={e => setEditFields(f => ({ ...f, logoUrl: e.target.value }))}
                            />
                          </div>
                          <div>
                            <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>Website URL</label>
                            <input
                              className="form-input"
                              style={{fontSize:'0.82rem',padding:'7px 10px'}}
                              type="url"
                              placeholder="https://example.com"
                              value={typeof editFields.websiteUrl === 'string' ? editFields.websiteUrl : ''}
                              onChange={e => setEditFields(f => ({ ...f, websiteUrl: e.target.value }))}
                            />
                          </div>
                          <div>
                            <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>Placement</label>
                            <select
                              className="form-input"
                              style={{fontSize:'0.82rem',padding:'7px 10px'}}
                              value={editFields.placement ?? 'sidebar'}
                              onChange={e => setEditFields(f => ({ ...f, placement: e.target.value }))}
                            >
                              <option value="sidebar">Sidebar</option>
                              <option value="module">Module</option>
                              <option value="homepage">Homepage</option>
                            </select>
                          </div>
                          {editFields.placement === 'module' && (
                            <div>
                              <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>Module slug</label>
                              <input
                                className="form-input"
                                style={{fontSize:'0.82rem',padding:'7px 10px'}}
                                type="text"
                                placeholder="e.g. cardiac"
                                value={typeof editFields.moduleSlug === 'string' ? editFields.moduleSlug : ''}
                                onChange={e => setEditFields(f => ({ ...f, moduleSlug: e.target.value }))}
                              />
                            </div>
                          )}
                          <div>
                            <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>Start date</label>
                            <input
                              className="form-input"
                              style={{fontSize:'0.82rem',padding:'7px 10px'}}
                              type="date"
                              value={toDateInput(editFields.startDate ?? null)}
                              onChange={e => setEditFields(f => ({ ...f, startDate: e.target.value ? new Date(e.target.value) : null }))}
                            />
                          </div>
                          <div>
                            <label style={{fontSize:'0.75rem',fontWeight:600,color:'var(--text-muted)',display:'block',marginBottom:'4px'}}>End date</label>
                            <input
                              className="form-input"
                              style={{fontSize:'0.82rem',padding:'7px 10px'}}
                              type="date"
                              value={toDateInput(editFields.endDate ?? null)}
                              onChange={e => setEditFields(f => ({ ...f, endDate: e.target.value ? new Date(e.target.value) : null }))}
                            />
                          </div>
                        </div>
                        <button
                          className="btn-approve"
                          onClick={() => saveEdit(s.id)}
                          disabled={saving}
                        >
                          {saving ? 'Saving…' : 'Save changes'}
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// ── Podcast Subscribers section ─────────────────────────────────────────────

function PodcastSubscribersSection({ subscribers, broadcasts }: { subscribers: PodcastSubscriber[]; broadcasts: PodcastBroadcast[] }) {
  const [broadcastSubject, setBroadcastSubject] = useState('');
  const [broadcastBody, setBroadcastBody] = useState('');
  const [preview, setPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const [broadcastMsg, setBroadcastMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  function handleExport() {
    fetch('/api/admin/podcast-subscribers', { method: 'POST' })
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `podcast-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
      });
  }

  async function sendBroadcast() {
    setSending(true);
    setConfirmOpen(false);
    try {
      const res = await fetch('/api/admin/podcast-broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: broadcastSubject, body: broadcastBody }),
      });
      const json = await res.json();
      if (!res.ok) {
        setBroadcastMsg({ text: json.error || 'Failed to send broadcast.', type: 'error' });
      } else {
        setBroadcastMsg({ text: `Sent to ${json.sent} of ${json.total} subscribers.`, type: 'success' });
        setBroadcastSubject('');
        setBroadcastBody('');
        setPreview(false);
      }
    } catch {
      setBroadcastMsg({ text: 'Network error.', type: 'error' });
    } finally {
      setSending(false);
    }
  }

  const btnStyle = (variant: 'gold' | 'outline' | 'danger') => ({
    fontSize: '13px',
    fontWeight: 500,
    padding: '7px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: variant === 'outline' ? '1px solid var(--border)' : variant === 'danger' ? '1px solid var(--error)' : '1px solid var(--gold-light)',
    background: variant === 'gold' ? 'var(--gold-pale)' : variant === 'danger' ? '#fef2f2' : '#fff',
    color: variant === 'danger' ? 'var(--error)' : 'var(--navy)',
  } as const);

  return (
    <section className="admin-section">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>
          🎙️ Podcast Subscribers
          {subscribers.length > 0 && (
            <span className="admin-badge" style={{ marginLeft: '8px' }}>{subscribers.length}</span>
          )}
        </h2>
        {subscribers.length > 0 && (
          <button onClick={handleExport} style={btnStyle('gold')}>Export CSV</button>
        )}
      </div>

      {subscribers.length === 0 ? (
        <p className="admin-empty">No podcast subscribers yet.</p>
      ) : (
        <div className="admin-table-wrap" style={{ marginBottom: '32px' }}>
          <table className="admin-table">
            <thead>
              <tr><th>Email</th><th>Subscribed</th></tr>
            </thead>
            <tbody>
              {subscribers.map(s => (
                <tr key={s.id}>
                  <td>{s.email}</td>
                  <td>{new Date(s.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Broadcast */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>Send Broadcast Email</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Send an email to all {subscribers.length} podcast subscriber{subscribers.length !== 1 ? 's' : ''}.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: 'var(--text)' }}>Subject line</label>
            <input
              type="text"
              value={broadcastSubject}
              onChange={e => setBroadcastSubject(e.target.value)}
              placeholder="e.g. The NPCollab Podcast is launching soon…"
              style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: 'var(--text)' }}>Message body</label>
            <textarea
              rows={6}
              value={broadcastBody}
              onChange={e => setBroadcastBody(e.target.value)}
              placeholder="Write your message here. Each new line becomes a paragraph."
              style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', resize: 'vertical', boxSizing: 'border-box' }}
            />
          </div>

          {broadcastMsg && (
            <div style={{ padding: '10px 14px', borderRadius: '6px', fontSize: '13px', background: broadcastMsg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${broadcastMsg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: broadcastMsg.type === 'success' ? '#166534' : 'var(--error)' }}>
              {broadcastMsg.text}
            </div>
          )}

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setPreview(p => !p)}
              style={btnStyle('outline')}
              disabled={!broadcastSubject.trim() || !broadcastBody.trim()}
            >
              {preview ? 'Hide Preview' : 'Preview Email'}
            </button>
            <button
              onClick={() => setConfirmOpen(true)}
              style={{ ...btnStyle('gold'), background: 'var(--navy)', color: '#fff', border: '1px solid var(--navy)', opacity: (sending || !broadcastSubject.trim() || !broadcastBody.trim() || subscribers.length === 0) ? 0.5 : 1 }}
              disabled={sending || !broadcastSubject.trim() || !broadcastBody.trim() || subscribers.length === 0}
            >
              {sending ? 'Sending…' : `Send to ${subscribers.length} subscriber${subscribers.length !== 1 ? 's' : ''}`}
            </button>
          </div>

          {/* Preview */}
          {preview && broadcastSubject && broadcastBody && (
            <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', marginTop: '8px' }}>
              <div style={{ background: '#0B1829', padding: '16px 20px', borderBottom: '3px solid #C9A84C' }}>
                <p style={{ color: '#C9A84C', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px' }}>NPCollab Podcast</p>
                <strong style={{ color: '#fff', fontSize: '16px' }}>🎙️ {broadcastSubject}</strong>
              </div>
              <div style={{ background: '#fff', padding: '20px' }}>
                {broadcastBody.split('\n').map((line, i) =>
                  line.trim() ? <p key={i} style={{ margin: '0 0 10px', fontSize: '14px', lineHeight: 1.6 }}>{line}</p> : <br key={i} />
                )}
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>You&rsquo;re receiving this because you subscribed to NPCollab Podcast updates.</p>
              </div>
            </div>
          )}

          {/* Confirmation dialog */}
          {confirmOpen && (
            <div style={{ padding: '16px', background: 'var(--gold-pale)', border: '1px solid var(--gold-light)', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 500, color: 'var(--navy)' }}>
                Send &ldquo;{broadcastSubject}&rdquo; to {subscribers.length} subscriber{subscribers.length !== 1 ? 's' : ''}?
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={sendBroadcast} style={{ ...btnStyle('gold'), background: 'var(--navy)', color: '#fff', border: '1px solid var(--navy)' }}>Confirm &amp; Send</button>
                <button onClick={() => setConfirmOpen(false)} style={btnStyle('outline')}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Broadcast history */}
      {broadcasts.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '24px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Broadcast History</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Subject</th><th>Recipients</th><th>Sent</th></tr>
              </thead>
              <tbody>
                {broadcasts.map(b => (
                  <tr key={b.id}>
                    <td style={{ fontWeight: 500 }}>{b.subject}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{b.recipientCount}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                      {new Date(b.sentAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Job Board section ────────────────────────────────────────────────────────

const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Casual', 'Contract', 'Locum'];
const JOB_SPECIALTIES = [
  'General Practice', 'Emergency Medicine', 'Aged Care', 'Mental Health', 'Paediatrics',
  'Oncology', 'Cardiology', 'Respiratory', 'Endocrinology', 'Musculoskeletal',
  'Palliative Care', 'Community Health', 'Remote / Rural', 'Other',
];

const emptyJobForm = {
  employerName: '', contactEmail: '', jobTitle: '', location: '',
  employmentType: 'Full-time', specialty: '', description: '', salaryRange: '',
  applicationUrl: '', expiresAt: '',
};

interface JobFormProps {
  form: typeof emptyJobForm;
  setForm: React.Dispatch<React.SetStateAction<typeof emptyJobForm>>;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
}

function ManualJobForm({ form, setForm, saving, onSave, onCancel }: JobFormProps) {
  const fs = { width: '100%', padding: '7px 11px', border: '1px solid var(--border)', borderRadius: '5px', fontSize: '13px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' } as const;
  const ls = { display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' } as const;
  const btnNav = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--navy)', background: 'var(--navy)', color: '#fff' } as const;
  const btnOut = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--border)', background: '#fff', color: 'var(--navy)' } as const;

  return (
    <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>Manual Job Entry</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div><label style={ls}>Organisation name</label><input style={fs} value={form.employerName} onChange={e => setForm(f => ({...f, employerName: e.target.value}))} placeholder="e.g. Hunter New England Health" /></div>
        <div><label style={ls}>Contact email</label><input style={fs} type="email" value={form.contactEmail} onChange={e => setForm(f => ({...f, contactEmail: e.target.value}))} placeholder="hr@example.com" /></div>
      </div>
      <div><label style={ls}>Job title</label><input style={fs} value={form.jobTitle} onChange={e => setForm(f => ({...f, jobTitle: e.target.value}))} placeholder="e.g. Nurse Practitioner — Acute Care" /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
        <div><label style={ls}>Location</label><input style={fs} value={form.location} onChange={e => setForm(f => ({...f, location: e.target.value}))} placeholder="e.g. Newcastle, NSW" /></div>
        <div><label style={ls}>Employment type</label>
          <select style={fs} value={form.employmentType} onChange={e => setForm(f => ({...f, employmentType: e.target.value}))}>
            {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div><label style={ls}>Specialty</label>
          <select style={fs} value={form.specialty} onChange={e => setForm(f => ({...f, specialty: e.target.value}))}>
            <option value="">Select…</option>
            {JOB_SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div><label style={ls}>Salary range (optional)</label><input style={fs} value={form.salaryRange} onChange={e => setForm(f => ({...f, salaryRange: e.target.value}))} placeholder="e.g. $120,000–$140,000 + super" /></div>
        <div><label style={ls}>Expiry date</label><input style={fs} type="date" value={form.expiresAt} onChange={e => setForm(f => ({...f, expiresAt: e.target.value}))} /></div>
      </div>
      <div><label style={ls}>Application URL</label><input style={fs} type="url" value={form.applicationUrl} onChange={e => setForm(f => ({...f, applicationUrl: e.target.value}))} placeholder="https://…" /></div>
      <div><label style={ls}>Job description</label><textarea style={{...fs, resize: 'vertical'}} rows={5} value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} placeholder="Role description, requirements, and responsibilities…" /></div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={btnNav} onClick={onSave} disabled={saving || !form.jobTitle.trim() || !form.employerName.trim() || !form.description.trim()}>{saving ? 'Saving…' : 'Create listing (go live immediately)'}</button>
        <button style={btnOut} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

// CSV column order matches the spec exactly
const CSV_COLUMNS = ['job_title','employer_name','location','employment_type','specialty','description','salary_range','application_url','source'] as const;
type CsvRow = Record<typeof CSV_COLUMNS[number], string>;

function parseCSV(text: string): CsvRow[] {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
  return lines.slice(1).map(line => {
    // Handle quoted fields with commas inside
    const fields: string[] = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQ = !inQ; }
      else if (ch === ',' && !inQ) { fields.push(cur.trim()); cur = ''; }
      else { cur += ch; }
    }
    fields.push(cur.trim());
    const row: Partial<CsvRow> = {};
    headers.forEach((h, i) => { (row as Record<string,string>)[h] = fields[i] ?? ''; });
    return row as CsvRow;
  }).filter(r => r.job_title?.trim() || r.employer_name?.trim());
}

function downloadTemplate() {
  const headers = CSV_COLUMNS.join(',');
  const example = [
    '"Nurse Practitioner — Acute Care"',
    '"Hunter New England Health"',
    '"Newcastle, NSW"',
    '"Full-time"',
    '"Emergency Medicine"',
    '"Join our multidisciplinary team as an endorsed NP. Responsibilities include independent assessment, diagnosis and management of acute presentations."',
    '"$120,000–$140,000 + super"',
    '"https://yourorganisation.com.au/careers"',
    '"NPCollab"',
  ].join(',');
  const csv = `${headers}\n${example}`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'npcollab-jobs-template.csv'; a.click();
  URL.revokeObjectURL(url);
}

function JobBoardSection({ initial }: { initial: JobListing[] }) {
  const [listings, setListings] = useState(initial);
  const [showManual, setShowManual] = useState(false);
  const [manualForm, setManualForm] = useState(emptyJobForm);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // CSV import state
  const [csvRows, setCsvRows] = useState<CsvRow[]>([]);
  const [csvSelected, setCsvSelected] = useState<Set<number>>(new Set());
  const [csvDuplicates, setCsvDuplicates] = useState<Set<number>>(new Set());
  const [csvImporting, setCsvImporting] = useState(false);
  const [showCsvPreview, setShowCsvPreview] = useState(false);

  // Edit state (shared across all sections)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(emptyJobForm);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 6000);
  }

  // ── Manual entry ─────────────────────────────────────────────────────────────
  async function saveManual() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(manualForm) });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to create listing.', 'error'); return; }
      setListings(prev => [json, ...prev]);
      notify('Job listing created and live.');
      setManualForm(emptyJobForm); setShowManual(false);
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  // ── CSV file parse + duplicate detection ─────────────────────────────────────
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const text = ev.target?.result as string;
      const rows = parseCSV(text);

      // Detect duplicates against all existing listings (any status)
      const dupes = new Set<number>();
      rows.forEach((row, i) => {
        const csvUrl   = row.application_url?.trim().toLowerCase();
        const csvTitle = row.job_title?.trim().toLowerCase();
        const csvEmp   = row.employer_name?.trim().toLowerCase();
        const isDupe = listings.some(l => {
          const sameUrl = csvUrl && l.applicationUrl?.trim().toLowerCase() === csvUrl;
          const sameTitle = csvTitle && l.jobTitle?.trim().toLowerCase() === csvTitle;
          const sameEmp   = csvEmp   && l.employerName?.trim().toLowerCase() === csvEmp;
          return sameUrl || (sameTitle && sameEmp);
        });
        if (isDupe) dupes.add(i);
      });

      setCsvRows(rows);
      setCsvDuplicates(dupes);
      // Pre-select all rows EXCEPT duplicates
      setCsvSelected(new Set(rows.map((_, i) => i).filter(i => !dupes.has(i))));
      setShowCsvPreview(true);
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function toggleRow(i: number) {
    setCsvSelected(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  function toggleAll() {
    if (csvSelected.size === csvRows.length) setCsvSelected(new Set());
    else setCsvSelected(new Set(csvRows.map((_, i) => i)));
  }

  async function importSelected() {
    const selected = csvRows.filter((_, i) => csvSelected.has(i));
    if (selected.length === 0) { notify('No rows selected.', 'error'); return; }
    setCsvImporting(true);
    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'bulk-import', rows: selected }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Import failed.', 'error'); return; }
      setListings(prev => [...json.listings, ...prev]);
      notify(`${json.created} listing${json.created !== 1 ? 's' : ''} imported successfully.`);
      setCsvRows([]); setCsvSelected(new Set()); setCsvDuplicates(new Set()); setShowCsvPreview(false);
    } catch { notify('Network error.', 'error'); }
    finally { setCsvImporting(false); }
  }

  // ── Approve / reject ──────────────────────────────────────────────────────────
  async function updateStatus(id: string, action: 'approve' | 'reject' | 'close' | 'reopen' | 'extend') {
    try {
      const res = await fetch('/api/admin/jobs', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action }) });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to update listing.', 'error'); return; }
      setListings(prev => prev.map(l => l.id === id ? json : l));
      const msgs: Record<string, string> = {
        approve: 'Listing published and live.',
        reject: 'Listing rejected.',
        close: 'Listing closed and removed from public board.',
        reopen: 'Listing reopened and now live.',
        extend: 'Expiry extended by 30 days.',
      };
      notify(msgs[action] || 'Updated.');
    } catch { notify('Network error.', 'error'); }
  }

  async function deleteListing(id: string) {
    if (!confirm('Delete this listing permanently? This cannot be undone.')) return;
    try {
      const res = await fetch('/api/admin/jobs', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      if (!res.ok) { notify('Failed to delete.', 'error'); return; }
      setListings(prev => prev.filter(l => l.id !== id));
      notify('Listing deleted.');
    } catch { notify('Network error.', 'error'); }
  }

  async function publishAll() {
    const ids = importedDraft.map(l => l.id);
    if (ids.length === 0) return;
    if (!confirm(`Publish all ${ids.length} imported listings?`)) return;
    try {
      const res = await fetch('/api/admin/jobs', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'bulk-approve', ids }) });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to publish.', 'error'); return; }
      const updatedMap = new Map<string, JobListing>(json.listings.map((l: JobListing) => [l.id, l]));
      setListings(prev => prev.map(l => updatedMap.has(l.id) ? updatedMap.get(l.id) as JobListing : l));
      notify(`${json.updated} listing${json.updated !== 1 ? 's' : ''} published and live.`);
    } catch { notify('Network error.', 'error'); }
  }

  // ── Edit listing ──────────────────────────────────────────────────────────────
  function startEdit(l: JobListing) {
    setEditingId(l.id);
    setEditForm({
      employerName: l.employerName, contactEmail: l.contactEmail || '',
      jobTitle: l.jobTitle, location: l.location,
      employmentType: l.employmentType, specialty: l.specialty || '',
      description: l.description, salaryRange: l.salaryRange || '',
      applicationUrl: l.applicationUrl,
      expiresAt: l.expiresAt ? new Date(l.expiresAt).toISOString().split('T')[0] : '',
    });
  }

  async function saveEdit() {
    if (!editingId) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingId, ...editForm }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to save.', 'error'); return; }
      setListings(prev => prev.map(l => l.id === editingId ? json : l));
      notify('Listing updated.'); setEditingId(null);
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  // ── Derived lists ─────────────────────────────────────────────────────────────
  const now = new Date();
  const pendingApproval = listings.filter(l => l.status === 'pending_approval');
  const importedDraft   = listings.filter(l => l.paymentStatus === 'imported' && l.status === 'draft');
  const liveListings    = listings.filter(l => l.status === 'approved' && l.expiresAt && new Date(l.expiresAt) > now);
  const expiredListings = listings.filter(l => l.status === 'approved' && l.expiresAt && new Date(l.expiresAt) <= now);
  const closedListings  = listings.filter(l => l.status === 'closed');
  const other           = listings.filter(l =>
    l.status !== 'pending_approval' &&
    l.status !== 'approved' &&
    l.status !== 'closed' &&
    !(l.paymentStatus === 'imported' && l.status === 'draft')
  );

  // ── Style tokens ──────────────────────────────────────────────────────────────
  const btnGold    = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--gold-light)', background: 'var(--gold-pale)', color: 'var(--navy)' } as const;
  const btnApprove = { ...btnGold, background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' } as const;
  const btnReject  = { ...btnGold, background: '#fef2f2', border: '1px solid #fecaca', color: 'var(--error)' } as const;
  const btnNav     = { ...btnGold, background: 'var(--navy)', color: '#fff', border: '1px solid var(--navy)' } as const;
  const btnOut     = { ...btnGold, background: '#fff', border: '1px solid var(--border)' } as const;
  const btnWarn    = { ...btnGold, background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e' } as const;
  const fs         = { width: '100%', padding: '7px 11px', border: '1px solid var(--border)', borderRadius: '5px', fontSize: '13px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' } as const;
  const ls         = { display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' } as const;

  const paymentLabel: Record<string, string> = { paid: 'Stripe', manual: 'Manual', imported: 'Import', unpaid: 'Unpaid' };

  // ── Inline edit form row (shared) ─────────────────────────────────────────────
  function EditRow({ colSpan }: { colSpan: number }) {
    return (
      <tr>
        <td colSpan={colSpan} style={{ padding: '0 0 16px' }}>
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div><label style={ls}>Job title</label><input style={fs} value={editForm.jobTitle} onChange={e => setEditForm(f => ({...f, jobTitle: e.target.value}))} /></div>
              <div><label style={ls}>Employer</label><input style={fs} value={editForm.employerName} onChange={e => setEditForm(f => ({...f, employerName: e.target.value}))} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div><label style={ls}>Location</label><input style={fs} value={editForm.location} onChange={e => setEditForm(f => ({...f, location: e.target.value}))} /></div>
              <div><label style={ls}>Employment type</label>
                <select style={fs} value={editForm.employmentType} onChange={e => setEditForm(f => ({...f, employmentType: e.target.value}))}>
                  {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label style={ls}>Specialty</label><input style={fs} value={editForm.specialty} onChange={e => setEditForm(f => ({...f, specialty: e.target.value}))} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div><label style={ls}>Salary range</label><input style={fs} value={editForm.salaryRange} onChange={e => setEditForm(f => ({...f, salaryRange: e.target.value}))} /></div>
              <div><label style={ls}>Application URL</label><input style={fs} value={editForm.applicationUrl} onChange={e => setEditForm(f => ({...f, applicationUrl: e.target.value}))} /></div>
              <div><label style={ls}>Expiry date</label><input style={fs} type="date" value={editForm.expiresAt} onChange={e => setEditForm(f => ({...f, expiresAt: e.target.value}))} /></div>
            </div>
            <div><label style={ls}>Description</label><textarea style={{...fs, resize: 'vertical'}} rows={4} value={editForm.description} onChange={e => setEditForm(f => ({...f, description: e.target.value}))} /></div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={btnNav} onClick={saveEdit} disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</button>
              <button style={btnOut} onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <section className="admin-section">

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>
          💼 Job Board
          {pendingApproval.length > 0 && <span className="admin-badge" style={{ marginLeft: '8px' }}>{pendingApproval.length} awaiting approval</span>}
        </h2>
        {!showManual && <button style={btnGold} onClick={() => setShowManual(true)}>+ Manual entry</button>}
      </div>

      {msg && (
        <div style={{ padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px', background: msg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${msg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: msg.type === 'success' ? '#166534' : 'var(--error)' }}>
          {msg.text}
        </div>
      )}

      {/* Manual entry form */}
      {showManual && (
        <ManualJobForm form={manualForm} setForm={setManualForm} saving={saving} onSave={saveManual} onCancel={() => { setShowManual(false); setManualForm(emptyJobForm); }} />
      )}

      {/* ── Import Jobs from CSV ─────────────────────────────────────────────── */}
      <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--navy)' }}>Import Jobs from CSV</h3>
          <button style={btnOut} onClick={downloadTemplate}>↓ Download CSV Template</button>
        </div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--text-muted)' }}>
          Expected columns (in order): <code style={{ background: 'var(--border)', padding: '1px 5px', borderRadius: '3px', fontSize: '12px' }}>job_title, employer_name, location, employment_type, specialty, description, salary_range, application_url, source</code>
        </p>
        <label style={{ display: 'inline-block', padding: '7px 16px', background: 'var(--navy)', color: '#fff', borderRadius: '5px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', marginTop: '8px' }}>
          Choose CSV file
          <input type="file" accept=".csv" style={{ display: 'none' }} onChange={handleFileChange} />
        </label>

        {showCsvPreview && csvRows.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            {/* Duplicate summary banner */}
            {csvDuplicates.size > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', marginBottom: '12px', borderRadius: '6px', background: '#fffbeb', border: '1px solid #fde68a', fontSize: '13px', color: '#92400e' }}>
                <span style={{ fontWeight: 700 }}>⚠</span>
                <span>
                  <strong>{csvDuplicates.size} duplicate{csvDuplicates.size !== 1 ? 's' : ''}</strong> found and deselected — matching an existing listing by URL or job title + employer. Tick a row to import it anyway.
                </span>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
                {csvRows.length} row{csvRows.length !== 1 ? 's' : ''} found — {csvSelected.size} selected
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button style={btnOut} onClick={toggleAll}>{csvSelected.size === csvRows.length ? 'Deselect all' : 'Select all'}</button>
                <button style={{ ...btnNav, opacity: csvImporting || csvSelected.size === 0 ? 0.6 : 1 }} onClick={importSelected} disabled={csvImporting || csvSelected.size === 0}>
                  {csvImporting ? 'Importing…' : `Import ${csvSelected.size} selected`}
                </button>
                <button style={btnOut} onClick={() => { setCsvRows([]); setCsvSelected(new Set()); setCsvDuplicates(new Set()); setShowCsvPreview(false); }}>Cancel</button>
              </div>
            </div>
            <div className="admin-table-wrap" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <table className="admin-table" style={{ fontSize: '12px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '36px' }}><input type="checkbox" checked={csvSelected.size === csvRows.length} onChange={toggleAll} style={{ cursor: 'pointer' }} /></th>
                    <th>Job title</th><th>Employer</th><th>Location</th><th>Type</th><th>Specialty</th><th>Salary</th><th>Application URL</th><th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {csvRows.map((row, i) => {
                    const isDupe = csvDuplicates.has(i);
                    return (
                      <tr key={i} style={{ opacity: csvSelected.has(i) ? 1 : 0.45, background: isDupe && !csvSelected.has(i) ? '#fffbeb' : undefined }}>
                        <td><input type="checkbox" checked={csvSelected.has(i)} onChange={() => toggleRow(i)} style={{ cursor: 'pointer' }} /></td>
                        <td style={{ fontWeight: 500 }}>
                          <span>{row.job_title || '—'}</span>
                          {isDupe && (
                            <span style={{ marginLeft: '6px', fontSize: '10px', fontWeight: 700, padding: '2px 6px', borderRadius: '10px', background: '#fde68a', color: '#92400e', whiteSpace: 'nowrap' }}>
                              Already imported
                            </span>
                          )}
                        </td>
                        <td>{row.employer_name || '—'}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.location || '—'}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.employment_type || '—'}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.specialty || '—'}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.salary_range || '—'}</td>
                        <td style={{ color: 'var(--text-muted)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {row.application_url ? <a href={row.application_url} target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>{row.application_url}</a> : '—'}
                        </td>
                        <td style={{ color: 'var(--text-muted)' }}>{row.source || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {showCsvPreview && csvRows.length === 0 && (
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--error)' }}>No valid rows found. Check the file has the correct column headers.</p>
        )}
      </div>

      {/* ── Pending approval (Stripe payments) ──────────────────────────────── */}
      {pendingApproval.length > 0 && (
        <>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Awaiting Approval ({pendingApproval.length})</h3>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead><tr><th>Job title</th><th>Employer</th><th>Location</th><th>Submitted</th><th>Payment</th><th></th></tr></thead>
              <tbody>
                {pendingApproval.map(l => (
                  <tr key={l.id}>
                    <td style={{ fontWeight: 500 }}>{l.jobTitle}</td>
                    <td>{l.employerName}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{l.location}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{formatDate(l.createdAt)}</td>
                    <td><span style={{ fontSize: '12px', fontWeight: 600, color: '#166534' }}>{l.paymentStatus}</span></td>
                    <td style={{ display: 'flex', gap: '8px' }}>
                      <button style={btnApprove} onClick={() => updateStatus(l.id, 'approve')}>Approve</button>
                      <button style={btnReject} onClick={() => updateStatus(l.id, 'reject')}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Imported Listings (draft, payment_status = imported) ─────────────── */}
      {importedDraft.length > 0 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>Imported Listings ({importedDraft.length})</h3>
            <button style={btnApprove} onClick={publishAll}>Publish All ({importedDraft.length})</button>
          </div>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead><tr><th>Job title</th><th>Employer</th><th>Location</th><th>Specialty</th><th>Imported</th><th></th></tr></thead>
              <tbody>
                {importedDraft.map(l => (
                  <>
                    <tr key={l.id}>
                      <td style={{ fontWeight: 500 }}>{l.jobTitle}</td>
                      <td>{l.employerName}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{l.location}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{l.specialty || '—'}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{formatDate(l.createdAt)}</td>
                      <td style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <button style={btnApprove} onClick={() => updateStatus(l.id, 'approve')}>Publish</button>
                        <button style={btnOut} onClick={() => editingId === l.id ? setEditingId(null) : startEdit(l)}>{editingId === l.id ? 'Cancel' : 'Edit'}</button>
                        <button style={btnReject} onClick={() => deleteListing(l.id)}>Delete</button>
                      </td>
                    </tr>
                    {editingId === l.id && <EditRow key={`${l.id}-edit`} colSpan={6} />}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Live Listings ─────────────────────────────────────────────────────── */}
      {liveListings.length > 0 && (
        <>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Live Listings ({liveListings.length})</h3>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead>
                <tr><th>Job title</th><th>Employer</th><th>Location</th><th>Specialty</th><th>Type</th><th>Posted</th><th>Expires</th><th>Via</th><th></th></tr>
              </thead>
              <tbody>
                {liveListings.map(l => (
                  <>
                    <tr key={l.id}>
                      <td style={{ fontWeight: 500 }}>{l.jobTitle}</td>
                      <td>{l.employerName}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{l.location}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{l.specialty || '—'}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{l.employmentType}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{formatDate(l.postedAt || l.createdAt)}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{formatDate(l.expiresAt)}</td>
                      <td><span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)' }}>{paymentLabel[l.paymentStatus] || l.paymentStatus}</span></td>
                      <td style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <button style={btnOut} onClick={() => editingId === l.id ? setEditingId(null) : startEdit(l)}>{editingId === l.id ? 'Cancel' : 'Edit'}</button>
                        <button style={btnGold} onClick={() => updateStatus(l.id, 'extend')}>+30d</button>
                        <button style={btnWarn} onClick={() => { if (confirm('Close this listing? It will be removed from the public board immediately.')) updateStatus(l.id, 'close'); }}>Close</button>
                        <button style={btnReject} onClick={() => deleteListing(l.id)}>Delete</button>
                      </td>
                    </tr>
                    {editingId === l.id && <EditRow key={`${l.id}-edit`} colSpan={9} />}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Expired Listings ──────────────────────────────────────────────────── */}
      {expiredListings.length > 0 && (
        <>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#92400e', marginBottom: '12px' }}>Expired Listings ({expiredListings.length})</h3>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead>
                <tr><th>Job title</th><th>Employer</th><th>Location</th><th>Posted</th><th>Expired</th><th>Via</th><th></th></tr>
              </thead>
              <tbody>
                {expiredListings.map(l => (
                  <>
                    <tr key={l.id}>
                      <td style={{ fontWeight: 500 }}>{l.jobTitle}</td>
                      <td>{l.employerName}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{l.location}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{formatDate(l.postedAt || l.createdAt)}</td>
                      <td style={{ color: '#92400e', fontSize: '12px', fontWeight: 500 }}>{formatDate(l.expiresAt)}</td>
                      <td><span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)' }}>{paymentLabel[l.paymentStatus] || l.paymentStatus}</span></td>
                      <td style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <button style={btnApprove} onClick={() => updateStatus(l.id, 'extend')}>Extend +30d</button>
                        <button style={btnOut} onClick={() => editingId === l.id ? setEditingId(null) : startEdit(l)}>{editingId === l.id ? 'Cancel' : 'Edit'}</button>
                        <button style={btnReject} onClick={() => deleteListing(l.id)}>Delete</button>
                      </td>
                    </tr>
                    {editingId === l.id && <EditRow key={`${l.id}-edit`} colSpan={7} />}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Closed Listings ───────────────────────────────────────────────────── */}
      {closedListings.length > 0 && (
        <>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px' }}>Closed Listings ({closedListings.length})</h3>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead>
                <tr><th>Job title</th><th>Employer</th><th>Location</th><th>Posted</th><th>Expires</th><th>Via</th><th></th></tr>
              </thead>
              <tbody>
                {closedListings.map(l => (
                  <tr key={l.id}>
                    <td style={{ fontWeight: 500, opacity: 0.7 }}>{l.jobTitle}</td>
                    <td style={{ opacity: 0.7 }}>{l.employerName}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{l.location}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{formatDate(l.postedAt || l.createdAt)}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{formatDate(l.expiresAt)}</td>
                    <td><span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)' }}>{paymentLabel[l.paymentStatus] || l.paymentStatus}</span></td>
                    <td style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      <button style={btnApprove} onClick={() => updateStatus(l.id, 'reopen')}>Reopen</button>
                      <button style={btnReject} onClick={() => deleteListing(l.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Other (rejected, unpaid pending) ─────────────────────────────────── */}
      {other.length > 0 && (
        <>
          <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px' }}>Other ({other.length})</h3>
          <div className="admin-table-wrap" style={{ marginBottom: '24px' }}>
            <table className="admin-table">
              <thead><tr><th>Job title</th><th>Employer</th><th>Payment</th><th>Submitted</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {other.map(l => (
                  <tr key={l.id}>
                    <td style={{ fontWeight: 500 }}>{l.jobTitle}</td>
                    <td>{l.employerName}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{l.paymentStatus}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{formatDate(l.createdAt)}</td>
                    <td><span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'capitalize' }}>{l.status}</span></td>
                    <td>
                      <button style={btnReject} onClick={() => deleteListing(l.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {listings.length === 0 && !showManual && (
        <p className="admin-empty">No job listings yet. Use &ldquo;Manual entry&rdquo; or import a CSV to get started.</p>
      )}
    </section>
  );
}

// ── News section ─────────────────────────────────────────────────────────────

const NEWS_TYPES = ['article', 'external', 'announcement'] as const;
const STATUS_OPTS = ['pending', 'draft', 'published', 'rejected'] as const;
const NEWS_STATUS_COLOR: Record<string, string> = { published: '#166534', draft: 'var(--text-muted)', rejected: 'var(--error)', pending: '#1d4ed8' };

const emptyNewsForm = { title: '', summary: '', url: '', type: 'article', sourceName: '', status: 'draft' };

interface NewsFormComponentProps {
  form: typeof emptyNewsForm;
  setForm: React.Dispatch<React.SetStateAction<typeof emptyNewsForm>>;
  saving: boolean;
  isNew: boolean;
  onSave: () => void;
  onCancel: () => void;
}

function NewsFormComponent({ form, setForm, saving, isNew, onSave, onCancel }: NewsFormComponentProps) {
  const fieldStyle = { width: '100%', padding: '7px 11px', border: '1px solid var(--border)', borderRadius: '5px', fontSize: '13px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' } as const;
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' } as const;
  const btnNav = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--navy)', background: 'var(--navy)', color: '#fff' } as const;
  const btnOut = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--border)', background: '#fff', color: 'var(--navy)' } as const;

  return (
    <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>{isNew ? 'New News Item' : 'Edit News Item'}</h4>
      <div><label style={labelStyle}>Title</label><input style={fieldStyle} value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} placeholder="Article or announcement title" /></div>
      <div><label style={labelStyle}>Summary</label><textarea style={{...fieldStyle, resize: 'vertical'}} rows={3} value={form.summary} onChange={e => setForm(f => ({...f, summary: e.target.value}))} placeholder="Brief summary — 1–3 sentences" /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div><label style={labelStyle}>URL (optional)</label><input style={fieldStyle} value={form.url} onChange={e => setForm(f => ({...f, url: e.target.value}))} placeholder="https://…" /></div>
        <div><label style={labelStyle}>Source name</label><input style={fieldStyle} value={form.sourceName} onChange={e => setForm(f => ({...f, sourceName: e.target.value}))} placeholder="e.g. NMBA, RACGP, ABC Health" /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div><label style={labelStyle}>Type</label>
          <select style={fieldStyle} value={form.type} onChange={e => setForm(f => ({...f, type: e.target.value}))}>
            {NEWS_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}
          </select>
        </div>
        <div><label style={labelStyle}>Status</label>
          <select style={fieldStyle} value={form.status} onChange={e => setForm(f => ({...f, status: e.target.value}))}>
            {STATUS_OPTS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={btnNav} onClick={onSave} disabled={saving || !form.title.trim() || !form.summary.trim()}>{saving ? 'Saving…' : isNew ? 'Create' : 'Save changes'}</button>
        <button style={btnOut} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function NewsSection({ initial }: { initial: NewsItem[] }) {
  const [items, setItems] = useState(initial);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [form, setForm] = useState(emptyNewsForm);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 4000);
  }

  function startCreate() { setForm(emptyNewsForm); setEditing(null); setCreating(true); }
  function startEdit(item: NewsItem) {
    setCreating(false);
    setEditing(item.id);
    setForm({ title: item.title, summary: item.summary, url: item.url ?? '', type: item.type, sourceName: item.sourceName, status: item.status });
  }
  function cancel() { setCreating(false); setEditing(null); setForm(emptyNewsForm); }

  async function save(isNew: boolean) {
    setSaving(true);
    try {
      const method = isNew ? 'POST' : 'PUT';
      const body = isNew ? form : { ...form, id: editing };
      const res = await fetch('/api/admin/news', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to save.', 'error'); return; }
      if (isNew) {
        setItems(prev => [json, ...prev]);
        notify('News item created.');
      } else {
        setItems(prev => prev.map(i => i.id === editing ? json : i));
        notify('News item updated.');
      }
      cancel();
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  async function deleteItem(id: string) {
    if (!confirm('Delete this news item?')) return;
    try {
      const res = await fetch('/api/admin/news', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) { notify('Failed to delete.', 'error'); return; }
      setItems(prev => prev.filter(i => i.id !== id));
      notify('News item deleted.');
    } catch { notify('Network error.', 'error'); }
  }

  const btnGold = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--gold-light)', background: 'var(--gold-pale)', color: 'var(--navy)' } as const;
  const btnOut = { ...btnGold, background: '#fff', border: '1px solid var(--border)' } as const;
  const btnDel = { ...btnGold, background: '#fef2f2', border: '1px solid #fecaca', color: 'var(--error)' } as const;

  return (
    <section className="admin-section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>📰 News</h2>
        {!creating && !editing && <button style={btnGold} onClick={startCreate}>+ New item</button>}
      </div>

      {msg && (
        <div style={{ padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px', background: msg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${msg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: msg.type === 'success' ? '#166534' : 'var(--error)' }}>
          {msg.text}
        </div>
      )}

      {creating && (
        <NewsFormComponent form={form} setForm={setForm} saving={saving} isNew={true} onSave={() => save(true)} onCancel={cancel} />
      )}

      {items.length === 0 && !creating ? (
        <p className="admin-empty">No news items yet. Click &ldquo;+ New item&rdquo; to create one.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>Title</th><th>Type</th><th>Source</th><th>Status</th><th>Date</th><th></th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <>
                  <tr key={item.id}>
                    <td style={{ fontWeight: 500 }}>{item.title}</td>
                    <td style={{ textTransform: 'capitalize' }}>{item.type}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{item.sourceName || '—'}</td>
                    <td><span style={{ fontSize: '12px', fontWeight: 600, color: NEWS_STATUS_COLOR[item.status] || 'var(--text-muted)', textTransform: 'capitalize' }}>{item.status}</span></td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-AU', {day:'numeric',month:'short',year:'numeric'}) : new Date(item.createdAt).toLocaleDateString('en-AU', {day:'numeric',month:'short',year:'numeric'})}</td>
                    <td style={{ display: 'flex', gap: '6px' }}>
                      <button style={{...btnOut, padding:'4px 10px', fontSize:'12px'}} onClick={() => editing === item.id ? cancel() : startEdit(item)}>{editing === item.id ? 'Cancel' : 'Edit'}</button>
                      {editing !== item.id && <button style={{...btnDel, padding:'4px 10px', fontSize:'12px'}} onClick={() => deleteItem(item.id)}>Delete</button>}
                    </td>
                  </tr>
                  {editing === item.id && (
                    <tr key={`${item.id}-edit`}><td colSpan={6} style={{ padding: '0 0 16px' }}>
                      <NewsFormComponent form={form} setForm={setForm} saving={saving} isNew={false} onSave={() => save(false)} onCancel={cancel} />
                    </td></tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// ── Users V2 section (users_v2 full management) ───────────────────────────────

const STATES_LIST = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
const ENDORSEMENTS_LIST = [
  'Primary Care', 'Mental Health', 'Emergency', 'Paediatrics', 'Neonatal',
  'Aged Care', "Women's Health", 'Perioperative', 'Musculoskeletal', 'Other',
];

function UsersV2Section({ initial, notify }: { initial: UserV2[]; notify: (msg: string, type?: 'success' | 'error') => void }) {
  const [users, setUsers] = useState(initial);
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterEndorsement, setFilterEndorsement] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<UserV2>>({});
  const [saving, setSaving] = useState(false);

  // Stats
  const total     = users.length;
  const approved  = users.filter(u => u.approved).length;
  const pending   = users.filter(u => !u.approved).length;
  const adminCount = users.filter(u => u.role === 'admin').length;

  // Filtered list
  const filtered = users.filter(u => {
    const q = search.toLowerCase();
    if (q && !u.name.toLowerCase().includes(q) && !u.email.toLowerCase().includes(q)) return false;
    if (filterState && u.state !== filterState) return false;
    if (filterEndorsement && u.npEndorsement !== filterEndorsement) return false;
    if (filterStatus === 'active'   && !u.active) return false;
    if (filterStatus === 'inactive' && u.active) return false;
    if (filterStatus === 'pending'  && u.approved) return false;
    return true;
  });

  function startEdit(u: UserV2) {
    setEditingId(u.id);
    setEditForm({
      name:          u.name,
      state:         u.state,
      npEndorsement: u.npEndorsement,
      employer:      u.employer ?? '',
      specialtyArea: u.specialtyArea ?? '',
      currentRole:   u.currentRole ?? '',
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm({});
  }

  async function saveEdit(id: string) {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/users/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...editForm }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to save.', 'error'); return; }
      setUsers(prev => prev.map(u => u.id === id ? json.user : u));
      notify('User updated.');
      cancelEdit();
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  async function toggleField(u: UserV2, field: 'active' | 'role') {
    if (field === 'role') {
      const msg = u.role === 'admin'
        ? `Remove admin access from ${u.name}?`
        : `Make ${u.name} an admin? They will have full access to the admin panel.`;
      if (!confirm(msg)) return;
    }
    try {
      const res = await fetch('/api/admin/users/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: u.id, field }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to update.', 'error'); return; }
      setUsers(prev => prev.map(x => x.id === u.id ? json.user : x));
      if (field === 'active') notify(json.user.active ? `${u.name} activated.` : `${u.name} deactivated.`);
      else notify(json.user.role === 'admin' ? `${u.name} is now an admin.` : `${u.name} admin access removed.`);
    } catch { notify('Network error.', 'error'); }
  }

  async function sendLogin(u: UserV2) {
    try {
      const res = await fetch('/api/admin/users/send-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: u.id }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to send link.', 'error'); return; }
      notify(`Login link sent to ${u.email}.`);
    } catch { notify('Network error.', 'error'); }
  }

  async function deleteUser(u: UserV2) {
    if (!confirm(`Delete ${u.name} (${u.email})? This cannot be undone.`)) return;
    try {
      const res = await fetch('/api/admin/users/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: u.id }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to delete.', 'error'); return; }
      setUsers(prev => prev.filter(x => x.id !== u.id));
      if (expandedId === u.id) setExpandedId(null);
      notify(`${u.name} deleted.`);
    } catch { notify('Network error.', 'error'); }
  }

  async function approveUser(u: UserV2) {
    try {
      const res = await fetch('/api/admin/users/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: u.id }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to approve.', 'error'); return; }
      setUsers(prev => prev.map(x => x.id === u.id ? { ...x, approved: true } : x));
      notify(`${u.name} approved — welcome email sent.`);
    } catch { notify('Network error.', 'error'); }
  }

  const thStyle: React.CSSProperties = { padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' };
  const tdStyle: React.CSSProperties = { padding: '10px 12px', fontSize: '13px', color: 'var(--text)', verticalAlign: 'middle', borderBottom: '1px solid var(--border)' };
  const inputStyle: React.CSSProperties = { padding: '6px 10px', border: '1.5px solid var(--border)', borderRadius: '6px', fontSize: '13px', fontFamily: 'inherit', color: 'var(--text)', background: '#fff', width: '100%', boxSizing: 'border-box' };
  const btnSm = (color: string, bg: string, border = 'transparent'): React.CSSProperties => ({
    padding: '4px 10px', fontSize: '11px', fontWeight: 600, border: `1px solid ${border}`,
    borderRadius: '5px', cursor: 'pointer', background: bg, color, fontFamily: 'inherit', whiteSpace: 'nowrap',
  });

  return (
    <section className="admin-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>Users</h2>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {[
          { label: 'Total', value: total },
          { label: 'Approved', value: approved },
          { label: 'Pending', value: pending },
          { label: 'Admins', value: adminCount },
        ].map(s => (
          <div key={s.label} style={{ padding: '10px 16px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', minWidth: '90px' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
        <input
          style={{ ...inputStyle, maxWidth: '220px' }}
          placeholder="Search name or email…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select style={{ ...inputStyle, maxWidth: '130px' }} value={filterState} onChange={e => setFilterState(e.target.value)}>
          <option value="">All states</option>
          {STATES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select style={{ ...inputStyle, maxWidth: '180px' }} value={filterEndorsement} onChange={e => setFilterEndorsement(e.target.value)}>
          <option value="">All endorsements</option>
          {ENDORSEMENTS_LIST.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
        <select style={{ ...inputStyle, maxWidth: '130px' }} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">All status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending approval</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="admin-empty">No users match the current filters.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table" style={{ tableLayout: 'auto' }}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Endorsement</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Approved</th>
                <th style={thStyle}>Active</th>
                <th style={thStyle}>Last Login</th>
                <th style={thStyle}>Joined</th>
                <th style={thStyle}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <>
                  <tr key={u.id} style={{ background: expandedId === u.id ? 'var(--off-white)' : '#fff' }}>
                    <td style={tdStyle}>
                      <span style={{ fontWeight: 600 }}>{u.name}</span>
                      {u.role === 'admin' && (
                        <span style={{ marginLeft: '6px', fontSize: '10px', background: 'var(--gold-pale)', color: 'var(--navy)', padding: '1px 6px', borderRadius: '4px', fontWeight: 700, border: '1px solid var(--gold)' }}>ADMIN</span>
                      )}
                    </td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{u.email}</td>
                    <td style={tdStyle}>{u.state || '—'}</td>
                    <td style={tdStyle}>{u.npEndorsement || '—'}</td>
                    <td style={tdStyle}>{u.role}</td>
                    <td style={tdStyle}>
                      <span style={{ fontSize: '11px', padding: '2px 7px', borderRadius: '4px', fontWeight: 600, background: u.approved ? '#f0fdf4' : '#fef3c7', color: u.approved ? 'var(--success)' : '#92400e', border: `1px solid ${u.approved ? '#86efac' : '#fcd34d'}` }}>
                        {u.approved ? 'Yes' : 'Pending'}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={{ fontSize: '11px', padding: '2px 7px', borderRadius: '4px', fontWeight: 600, background: u.active ? '#f0fdf4' : '#fef2f2', color: u.active ? 'var(--success)' : 'var(--error)', border: `1px solid ${u.active ? '#86efac' : '#fecaca'}` }}>
                        {u.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{formatDate(u.lastLogin)}</td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{formatDate(u.createdAt)}</td>
                    <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        <button
                          style={btnSm(u.active ? '#92400e' : 'var(--success)', u.active ? '#fef3c7' : '#f0fdf4', u.active ? '#fcd34d' : '#86efac')}
                          onClick={() => toggleField(u, 'active')}
                        >
                          {u.active ? 'Deactivate' : 'Activate'}
                        </button>
                        <button style={btnSm('var(--navy)', 'var(--off-white)', 'var(--border)')} onClick={() => setExpandedId(expandedId === u.id ? null : u.id)}>
                          {expandedId === u.id ? 'Close' : 'View'}
                        </button>
                      </div>
                    </td>
                  </tr>

                  {expandedId === u.id && (
                    <tr key={`${u.id}-expand`}>
                      <td colSpan={10} style={{ padding: '16px 20px', background: 'var(--off-white)', borderBottom: '1px solid var(--border)' }}>
                        {editingId === u.id ? (
                          /* ── Inline edit form ── */
                          <div style={{ maxWidth: '600px' }}>
                            <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '14px', color: 'var(--navy)' }}>Edit profile</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Full Name *</label>
                                <input style={inputStyle} value={editForm.name ?? ''} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} />
                              </div>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>State *</label>
                                <select style={inputStyle} value={editForm.state ?? ''} onChange={e => setEditForm(f => ({ ...f, state: e.target.value }))}>
                                  <option value="">Select…</option>
                                  {STATES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                              </div>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Endorsement *</label>
                                <select style={inputStyle} value={editForm.npEndorsement ?? ''} onChange={e => setEditForm(f => ({ ...f, npEndorsement: e.target.value }))}>
                                  <option value="">Select…</option>
                                  {ENDORSEMENTS_LIST.map(e => <option key={e} value={e}>{e}</option>)}
                                </select>
                              </div>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Employer</label>
                                <input style={inputStyle} value={editForm.employer ?? ''} onChange={e => setEditForm(f => ({ ...f, employer: e.target.value }))} placeholder="Optional" />
                              </div>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Specialty Area</label>
                                <input style={inputStyle} value={editForm.specialtyArea ?? ''} onChange={e => setEditForm(f => ({ ...f, specialtyArea: e.target.value }))} placeholder="Optional" />
                              </div>
                              <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Current Role</label>
                                <input style={inputStyle} value={editForm.currentRole ?? ''} onChange={e => setEditForm(f => ({ ...f, currentRole: e.target.value }))} placeholder="Optional" />
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                              <button style={{ ...btnSm('#fff', 'var(--navy)'), padding: '7px 18px', fontSize: '12px' }} onClick={() => saveEdit(u.id)} disabled={saving}>
                                {saving ? 'Saving…' : 'Save Changes'}
                              </button>
                              <button style={{ ...btnSm('var(--text-muted)', '#fff', 'var(--border)'), padding: '7px 14px', fontSize: '12px' }} onClick={cancelEdit}>Cancel</button>
                            </div>
                          </div>
                        ) : (
                          /* ── Expanded detail view ── */
                          <div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                              {[
                                { label: 'Email',         value: u.email },
                                { label: 'State',         value: u.state || '—' },
                                { label: 'Endorsement',   value: u.npEndorsement || '—' },
                                { label: 'Employer',      value: u.employer || '—' },
                                { label: 'Specialty',     value: u.specialtyArea || '—' },
                                { label: 'Current Role',  value: u.currentRole || '—' },
                                { label: 'Role',          value: u.role },
                                { label: 'Profile Done',  value: u.profileComplete ? 'Yes' : 'No' },
                              ].map(f => (
                                <div key={f.label}>
                                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>{f.label}</div>
                                  <div style={{ fontSize: '13px', color: 'var(--text)' }}>{f.value}</div>
                                </div>
                              ))}
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              <button style={btnSm('var(--navy)', 'var(--off-white)', 'var(--border)')} onClick={() => { startEdit(u); }}>
                                Edit Profile
                              </button>
                              <button
                                style={btnSm(u.role === 'admin' ? '#92400e' : '#1e40af', u.role === 'admin' ? '#fef3c7' : '#eff6ff', u.role === 'admin' ? '#fcd34d' : '#bfdbfe')}
                                onClick={() => toggleField(u, 'role')}
                              >
                                {u.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                              </button>
                              <button style={btnSm('#065f46', '#ecfdf5', '#6ee7b7')} onClick={() => sendLogin(u)}>
                                Send Login Link
                              </button>
                              {!u.approved && (
                                <button style={btnSm('#166534', '#dcfce7', '#86efac')} onClick={() => approveUser(u)}>
                                  Approve
                                </button>
                              )}
                              <button
                                style={btnSm(u.active ? '#92400e' : 'var(--success)', u.active ? '#fef3c7' : '#f0fdf4', u.active ? '#fcd34d' : '#86efac')}
                                onClick={() => toggleField(u, 'active')}
                              >
                                {u.active ? 'Deactivate' : 'Activate'}
                              </button>
                              <button style={btnSm('var(--error)', '#fef2f2', '#fecaca')} onClick={() => deleteUser(u)}>
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// ── Registrations section (users_v2) ─────────────────────────────────────────

function RegistrationsSection({ initial }: { initial: UserV2[] }) {
  const [regs, setRegs] = useState(initial);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 5000);
  }

  const pending  = regs.filter(r => !r.approved);
  const approved = regs.filter(r => r.approved);

  async function approveUser(id: string) {
    try {
      const res = await fetch('/api/admin/users/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to approve.', 'error'); return; }
      setRegs(prev => prev.map(r => r.id === id ? { ...r, approved: true } : r));
      notify('User approved — welcome email sent.');
    } catch { notify('Network error.', 'error'); }
  }

  async function rejectUser(id: string) {
    if (!confirm('Reject and delete this registration?')) return;
    try {
      const res = await fetch('/api/admin/users/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to reject.', 'error'); return; }
      setRegs(prev => prev.filter(r => r.id !== id));
      notify('Registration rejected and removed.');
    } catch { notify('Network error.', 'error'); }
  }

  const btnGreen = { fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '5px', cursor: 'pointer', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#166534' } as const;
  const btnRed   = { fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '5px', cursor: 'pointer', border: '1px solid #fecaca', background: '#fef2f2', color: 'var(--error)' } as const;

  return (
    <section className="admin-section">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>🆕 Registrations</h2>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          {pending.length} pending · {approved.length} approved
        </span>
      </div>

      {msg && (
        <div style={{ padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px', background: msg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${msg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: msg.type === 'success' ? '#166534' : 'var(--error)' }}>
          {msg.text}
        </div>
      )}

      {/* Pending */}
      <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', margin: '0 0 10px' }}>
        Pending Review ({pending.length})
      </h3>
      {pending.length === 0 ? (
        <p className="admin-empty" style={{ marginBottom: '24px' }}>No pending registrations.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {pending.map(r => (
            <div key={r.id} style={{
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '16px 20px',
              background: 'var(--off-white)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '4px' }}>{r.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>{r.email}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '12px' }}>
                    {[
                      r.state && `📍 ${r.state}`,
                      r.npEndorsement && `🏥 ${r.npEndorsement}`,
                      r.employer && `🏢 ${r.employer}`,
                      r.currentRole && `👤 ${r.currentRole}`,
                      r.specialtyArea && `🔬 ${r.specialtyArea}`,
                    ].filter(Boolean).map((tag, i) => (
                      <span key={i} style={{ padding: '2px 8px', borderRadius: '4px', background: '#fff', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Statement if present — stored in the DB as a field we don't have yet, skip for now */}
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                    Registered: {new Date(r.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <button style={btnGreen} onClick={() => approveUser(r.id)}>Approve</button>
                  <button style={btnRed}   onClick={() => rejectUser(r.id)}>Reject</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Approved */}
      <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', margin: '0 0 10px' }}>
        Approved Users ({approved.length})
      </h3>
      {approved.length === 0 ? (
        <p className="admin-empty">No approved users yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>State</th><th>Endorsement</th><th>Role</th><th>Last login</th></tr>
            </thead>
            <tbody>
              {approved.map(r => (
                <tr key={r.id}>
                  <td style={{ fontWeight: 500 }}>{r.name}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{r.email}</td>
                  <td style={{ fontSize: '13px' }}>{r.state}</td>
                  <td style={{ fontSize: '13px' }}>{r.npEndorsement}</td>
                  <td><span style={{ fontSize: '11px', fontWeight: 700, color: r.role === 'admin' ? 'var(--gold)' : 'var(--text-muted)', textTransform: 'uppercase' }}>{r.role}</span></td>
                  <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {r.lastLogin ? new Date(r.lastLogin).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Never'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// ── Courses section ──────────────────────────────────────────────────────────

const COURSE_TYPE_LABELS: Record<string, string> = {
  conference: 'Conference', workshop: 'Workshop', online: 'Online',
  webinar: 'Webinar', simulation: 'Simulation', other: 'Other',
};

const COURSE_STATUS_COLOR: Record<string, string> = {
  approved: '#166534',
  draft:    '#92400e',
  expired:  'var(--text-muted)',
};

const emptyCourseForm = {
  courseName: '', providerName: '', providerEmail: '', courseType: 'conference',
  specialty: '', description: '', dateStart: '', dateEnd: '', location: '',
  cost: '', cpdHours: '', registrationUrl: '', status: 'approved',
};

function CoursesSection({ initial }: { initial: Course[] }) {
  const [courseList, setCourseList] = useState(initial);
  const [showManual, setShowManual] = useState(false);
  const [manualForm, setManualForm] = useState(emptyCourseForm);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(emptyCourseForm);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 6000);
  }

  const fs: React.CSSProperties = {
    width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: '5px',
    fontSize: '13px', fontFamily: 'var(--font-body)', boxSizing: 'border-box', color: 'var(--text)',
  };

  async function saveManual() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(manualForm),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to create course.', 'error'); return; }
      setCourseList(prev => [json, ...prev]);
      notify('Course created.');
      setManualForm(emptyCourseForm);
      setShowManual(false);
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  async function saveEdit(id: string) {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...editForm }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to update.', 'error'); return; }
      setCourseList(prev => prev.map(c => c.id === id ? json : c));
      notify('Course updated.');
      setEditingId(null);
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(false); }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json();
      if (!res.ok) { notify(json.error || 'Failed to update.', 'error'); return; }
      setCourseList(prev => prev.map(c => c.id === id ? json : c));
      notify(`Course marked as ${status}.`);
    } catch { notify('Network error.', 'error'); }
  }

  async function deleteCourse(id: string) {
    if (!confirm('Delete this course listing?')) return;
    try {
      const res = await fetch(`/api/admin/courses?id=${id}`, { method: 'DELETE' });
      if (!res.ok) { notify('Failed to delete.', 'error'); return; }
      setCourseList(prev => prev.filter(c => c.id !== id));
      notify('Course deleted.');
    } catch { notify('Network error.', 'error'); }
  }

  function startEdit(c: Course) {
    setEditingId(c.id);
    setEditForm({
      courseName: c.courseName, providerName: c.providerName, providerEmail: c.providerEmail ?? '',
      courseType: c.courseType, specialty: c.specialty, description: c.description,
      dateStart: toDateInput(c.dateStart), dateEnd: toDateInput(c.dateEnd ?? null),
      location: c.location, cost: c.cost ?? '', cpdHours: c.cpdHours ?? '',
      registrationUrl: c.registrationUrl, status: c.status,
    });
  }

  const btnGold = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--gold-light)', background: 'var(--gold-pale)', color: 'var(--navy)' } as const;
  const btnOut  = { ...btnGold, background: '#fff', border: '1px solid var(--border)' } as const;
  const btnDel  = { ...btnGold, background: '#fef2f2', border: '1px solid #fecaca', color: 'var(--error)' } as const;
  const btnGreen = { ...btnGold, background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' } as const;

  function CourseForm({ form, setForm, onSave, onCancel, isNew }: {
    form: typeof emptyCourseForm;
    setForm: React.Dispatch<React.SetStateAction<typeof emptyCourseForm>>;
    onSave: () => void;
    onCancel: () => void;
    isNew: boolean;
  }) {
    return (
      <div style={{ padding: '16px', background: 'var(--gold-pale)', border: '1px solid var(--gold-light)', borderRadius: '8px', marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>
          {isNew ? 'Add Course Listing' : 'Edit Course'}
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Course Name *</label>
            <input style={fs} value={form.courseName} onChange={e => setForm(f => ({ ...f, courseName: e.target.value }))} placeholder="Course name" />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Provider *</label>
            <input style={fs} value={form.providerName} onChange={e => setForm(f => ({ ...f, providerName: e.target.value }))} placeholder="Organisation name" />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Type</label>
            <select style={fs} value={form.courseType} onChange={e => setForm(f => ({ ...f, courseType: e.target.value }))}>
              {Object.entries(COURSE_TYPE_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Specialty</label>
            <input style={fs} value={form.specialty} onChange={e => setForm(f => ({ ...f, specialty: e.target.value }))} placeholder="e.g. Cardiology, General" />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Start Date *</label>
            <input style={fs} type="date" value={form.dateStart} onChange={e => setForm(f => ({ ...f, dateStart: e.target.value }))} />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>End Date</label>
            <input style={fs} type="date" value={form.dateEnd} onChange={e => setForm(f => ({ ...f, dateEnd: e.target.value }))} />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Location *</label>
            <input style={fs} value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="City / Online" />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Cost</label>
            <input style={fs} value={form.cost} onChange={e => setForm(f => ({ ...f, cost: e.target.value }))} placeholder="Free, $250, etc." />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>CPD Hours</label>
            <input style={fs} value={form.cpdHours} onChange={e => setForm(f => ({ ...f, cpdHours: e.target.value }))} placeholder="6" />
          </div>
          <div>
            <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Status</label>
            <select style={fs} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
              <option value="approved">Approved (Live)</option>
              <option value="draft">Draft</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Registration URL *</label>
          <input style={fs} type="url" value={form.registrationUrl} onChange={e => setForm(f => ({ ...f, registrationUrl: e.target.value }))} placeholder="https://" />
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '3px', textTransform: 'uppercase' }}>Description *</label>
          <textarea style={{ ...fs, resize: 'vertical' }} rows={4} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Course description…" />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={btnGold} onClick={onSave} disabled={saving}>{saving ? 'Saving…' : isNew ? 'Add Course' : 'Save Changes'}</button>
          <button style={btnOut} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  }

  const live    = courseList.filter(c => c.status === 'approved');
  const drafts  = courseList.filter(c => c.status === 'draft');
  const expired = courseList.filter(c => c.status === 'expired');

  function CourseRow({ c }: { c: Course }) {
    return (
      <>
        <tr key={c.id}>
          <td style={{ fontWeight: 500, maxWidth: '220px' }}>
            {c.courseName}
            {c.status === 'draft' && (
              <span style={{ marginLeft: '6px', fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '3px', background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a' }}>DRAFT</span>
            )}
          </td>
          <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{c.providerName}</td>
          <td style={{ fontSize: '12px' }}>{COURSE_TYPE_LABELS[c.courseType] || c.courseType}</td>
          <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {new Date(c.dateStart).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
          </td>
          <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{c.location}</td>
          <td>
            <span style={{ fontSize: '11px', fontWeight: 700, color: COURSE_STATUS_COLOR[c.status] || 'var(--text-muted)', textTransform: 'capitalize' }}>
              {c.status}
            </span>
          </td>
          <td style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {c.status !== 'approved' && (
              <button style={{ ...btnGreen, padding: '3px 8px', fontSize: '11px' }} onClick={() => updateStatus(c.id, 'approved')}>Approve</button>
            )}
            {c.status === 'approved' && (
              <button style={{ ...btnOut, padding: '3px 8px', fontSize: '11px' }} onClick={() => updateStatus(c.id, 'expired')}>Expire</button>
            )}
            <button style={{ ...btnOut, padding: '3px 8px', fontSize: '11px' }} onClick={() => editingId === c.id ? setEditingId(null) : startEdit(c)}>
              {editingId === c.id ? 'Cancel' : 'Edit'}
            </button>
            <button style={{ ...btnDel, padding: '3px 8px', fontSize: '11px' }} onClick={() => deleteCourse(c.id)}>Del</button>
          </td>
        </tr>
        {editingId === c.id && (
          <tr key={`${c.id}-edit`}>
            <td colSpan={7} style={{ padding: '0 0 12px' }}>
              <CourseForm form={editForm} setForm={setEditForm} onSave={() => saveEdit(c.id)} onCancel={() => setEditingId(null)} isNew={false} />
            </td>
          </tr>
        )}
      </>
    );
  }

  function CourseTable({ items, title }: { items: Course[]; title: string }) {
    if (items.length === 0) return null;
    return (
      <div style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', margin: '0 0 10px' }}>{title} ({items.length})</h3>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>Course</th><th>Provider</th><th>Type</th><th>Date</th><th>Location</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {items.map(c => <CourseRow key={c.id} c={c} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <section className="admin-section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>🎓 Courses</h2>
        {!showManual && <button style={btnGold} onClick={() => setShowManual(true)}>+ Add Course</button>}
      </div>

      {msg && (
        <div style={{ padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px', background: msg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${msg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: msg.type === 'success' ? '#166534' : 'var(--error)' }}>
          {msg.text}
        </div>
      )}

      {showManual && (
        <CourseForm form={manualForm} setForm={setManualForm} onSave={saveManual} onCancel={() => { setShowManual(false); setManualForm(emptyCourseForm); }} isNew={true} />
      )}

      {courseList.length === 0 && !showManual ? (
        <p className="admin-empty">No courses yet. Click &ldquo;+ Add Course&rdquo; to create one.</p>
      ) : (
        <>
          <CourseTable items={live}    title="Live" />
          <CourseTable items={drafts}  title="Drafts / Pending Review" />
          <CourseTable items={expired} title="Expired" />
        </>
      )}
    </section>
  );
}

// ── Settings section ─────────────────────────────────────────────────────────

function SettingsSection({ initialSettings }: { initialSettings: Record<string, string> }) {
  const [adPreview, setAdPreview] = useState(initialSettings.ad_preview_mode === 'true');
  const [umamiUrl, setUmamiUrl] = useState(initialSettings.umami_dashboard_url || '');
  const [saving, setSaving] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 4000);
  }

  async function saveSetting(key: string, value: string) {
    setSaving(key);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value }),
      });
      if (!res.ok) { notify('Failed to save setting.', 'error'); return; }
      notify('Setting saved.');
    } catch { notify('Network error.', 'error'); }
    finally { setSaving(null); }
  }

  async function toggleAdPreview() {
    const newVal = !adPreview;
    setAdPreview(newVal);
    await saveSetting('ad_preview_mode', String(newVal));
  }

  const fieldStyle = { width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' } as const;
  const btnNav = { fontSize: '13px', fontWeight: 500, padding: '7px 16px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--navy)', background: 'var(--navy)', color: '#fff' } as const;

  return (
    <section className="admin-section">
      <h2 className="admin-section-title">⚙️ Settings</h2>

      {msg && (
        <div style={{ padding: '10px 14px', borderRadius: '6px', marginBottom: '20px', fontSize: '13px', background: msg.type === 'success' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${msg.type === 'success' ? '#bbf7d0' : '#fecaca'}`, color: msg.type === 'success' ? '#166534' : 'var(--error)' }}>
          {msg.text}
        </div>
      )}

      {/* Ad Preview Toggle */}
      <div style={{ padding: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: 'var(--navy)' }}>Show ad placement previews on live site</h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              When enabled, all three sponsor slots (sidebar, homepage, module) display placeholder cards with correct dimensions,
              labelled with their placement type. Useful for showing sponsors where their ad will appear.
            </p>
          </div>
          <button
            onClick={toggleAdPreview}
            disabled={saving === 'ad_preview_mode'}
            style={{
              flexShrink: 0,
              padding: '8px 20px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              border: adPreview ? '1px solid #166534' : '1px solid var(--border)',
              background: adPreview ? '#f0fdf4' : '#fff',
              color: adPreview ? '#166534' : 'var(--text-muted)',
              transition: 'all 0.15s',
            }}
          >
            {saving === 'ad_preview_mode' ? 'Saving…' : adPreview ? '✓ On' : 'Off'}
          </button>
        </div>
      </div>

      {/* Umami URL */}
      <div style={{ padding: '20px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: 'var(--navy)' }}>Umami analytics dashboard URL</h3>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Paste your Umami share URL here. The Analytics tab will embed this dashboard. If not set, the Analytics tab shows setup instructions.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            style={fieldStyle}
            type="url"
            value={umamiUrl}
            onChange={e => setUmamiUrl(e.target.value)}
            placeholder="https://analytics.umami.is/share/…"
          />
          <button
            style={{ ...btnNav, flexShrink: 0 }}
            onClick={() => saveSetting('umami_dashboard_url', umamiUrl)}
            disabled={saving === 'umami_dashboard_url'}
          >
            {saving === 'umami_dashboard_url' ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Analytics section ────────────────────────────────────────────────────────

function AnalyticsSection({ umamiUrl }: { umamiUrl?: string }) {
  if (umamiUrl) {
    return (
      <section className="admin-section">
        <h2 className="admin-section-title">📊 Analytics</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
            Live Umami analytics dashboard. Use the Umami interface to filter by date, page, and device.
          </p>
          <a
            href={umamiUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--gold)',
              color: 'var(--navy)',
              fontWeight: 600,
              fontSize: '13px',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              flexShrink: 0,
              minHeight: '36px',
            }}
          >
            Open Analytics Dashboard ↗
          </a>
        </div>
        <div className="admin-analytics-iframe-wrap" style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src={umamiUrl}
            width="100%"
            height="800"
            frameBorder="0"
            className="admin-analytics-iframe"
            style={{ display: 'block', minHeight: '500px' }}
            title="Umami Analytics Dashboard"
          />
        </div>
      </section>
    );
  }
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">📊 Analytics</h2>
      <div style={{ padding: '48px 32px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ fontSize: '40px', marginBottom: '16px', lineHeight: 1 }}>📊</p>
        <h3 style={{ color: 'var(--navy)', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '17px' }}>Analytics powered by Umami</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '480px', margin: '0 auto 20px', lineHeight: 1.6 }}>
          Paste your Umami dashboard URL in Settings to enable the analytics dashboard here. The iframe will load automatically.
        </p>
        <a
          href="https://umami.is"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            color: 'var(--gold)',
            textDecoration: 'underline',
            fontWeight: 500,
          }}
        >
          Learn about Umami →
        </a>
      </div>
    </section>
  );
}

// ── Contributors section ────────────────────────────────────────────────────

function ContributorsSection({ initial }: { initial: ModuleContributor[] }) {
  const [contributors, setContributors] = useState<ModuleContributor[]>(initial);
  const [isPending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ModuleContributor>>({});
  const [addForm, setAddForm] = useState({ moduleSlug: '', name: '', title: '', credentials: '', bio: '', avatarInitials: '' });
  const [showAdd, setShowAdd] = useState(false);
  const [error, setError] = useState('');

  const fieldStyle: React.CSSProperties = { width: '100%', padding: '7px 10px', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem', fontFamily: 'var(--font-body)' };
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' };

  async function handleDelete(id: string) {
    if (!confirm('Remove this contributor?')) return;
    startTransition(async () => {
      const res = await fetch(`/api/admin/contributors/${id}`, { method: 'DELETE' });
      if (res.ok) setContributors(prev => prev.filter(c => c.id !== id));
      else setError('Failed to delete contributor');
    });
  }

  async function handleSaveEdit(id: string) {
    startTransition(async () => {
      const res = await fetch(`/api/admin/contributors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      if (res.ok) {
        const { contributor } = await res.json();
        setContributors(prev => prev.map(c => c.id === id ? contributor : c));
        setEditingId(null);
      } else setError('Failed to save changes');
    });
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    startTransition(async () => {
      const res = await fetch('/api/admin/contributors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addForm),
      });
      if (res.ok) {
        const { contributor } = await res.json();
        setContributors(prev => [contributor, ...prev]);
        setAddForm({ moduleSlug: '', name: '', title: '', credentials: '', bio: '', avatarInitials: '' });
        setShowAdd(false);
      } else setError('Failed to add contributor');
    });
  }

  // Group by module slug for display
  const bySlug: Record<string, ModuleContributor[]> = {};
  for (const c of contributors) {
    if (!bySlug[c.moduleSlug]) bySlug[c.moduleSlug] = [];
    bySlug[c.moduleSlug].push(c);
  }

  return (
    <div className="admin-section">
      <div className="admin-section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span>✍️ Module Contributors</span>
        <button className="btn-admin-sm" onClick={() => setShowAdd(v => !v)} style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: '6px', padding: '8px 16px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
          {showAdd ? 'Cancel' : '+ Add Contributor'}
        </button>
      </div>

      {error && <div style={{ color: 'var(--error)', marginBottom: '12px', fontSize: '0.85rem' }}>{error}</div>}

      {showAdd && (
        <form onSubmit={handleAdd} style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <div>
              <label style={labelStyle}>Module Slug *</label>
              <input style={fieldStyle} value={addForm.moduleSlug} onChange={e => setAddForm(f => ({ ...f, moduleSlug: e.target.value }))} placeholder="e.g. cardiac" required />
            </div>
            <div>
              <label style={labelStyle}>Avatar Initials *</label>
              <input style={fieldStyle} value={addForm.avatarInitials} onChange={e => setAddForm(f => ({ ...f, avatarInitials: e.target.value }))} placeholder="e.g. JC" maxLength={3} required />
            </div>
            <div>
              <label style={labelStyle}>Name *</label>
              <input style={fieldStyle} value={addForm.name} onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))} placeholder="Full name" required />
            </div>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={fieldStyle} value={addForm.title} onChange={e => setAddForm(f => ({ ...f, title: e.target.value }))} placeholder="Role / title" required />
            </div>
            <div>
              <label style={labelStyle}>Credentials</label>
              <input style={fieldStyle} value={addForm.credentials} onChange={e => setAddForm(f => ({ ...f, credentials: e.target.value }))} placeholder="e.g. NP, MNP, BN" />
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={labelStyle}>Bio</label>
            <textarea style={{ ...fieldStyle, minHeight: '70px', resize: 'vertical' }} value={addForm.bio} onChange={e => setAddForm(f => ({ ...f, bio: e.target.value }))} />
          </div>
          <button type="submit" disabled={isPending} style={{ background: 'var(--navy)', color: 'var(--white)', border: 'none', borderRadius: '6px', padding: '9px 20px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
            {isPending ? 'Saving…' : 'Add Contributor'}
          </button>
        </form>
      )}

      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
        {contributors.length} contributor assignment{contributors.length !== 1 ? 's' : ''} across {Object.keys(bySlug).length} module{Object.keys(bySlug).length !== 1 ? 's' : ''}
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Title / Credentials</th>
              <th>Module Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map(c => (
              <tr key={c.id}>
                {editingId === c.id ? (
                  <>
                    <td>
                      <input style={{ ...fieldStyle, width: '60px' }} value={editForm.avatarInitials ?? c.avatarInitials} onChange={e => setEditForm(f => ({ ...f, avatarInitials: e.target.value }))} maxLength={3} />
                    </td>
                    <td>
                      <input style={fieldStyle} value={editForm.name ?? c.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} />
                    </td>
                    <td>
                      <input style={{ ...fieldStyle, marginBottom: '4px' }} value={editForm.title ?? c.title} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} placeholder="Title" />
                      <input style={fieldStyle} value={editForm.credentials ?? c.credentials ?? ''} onChange={e => setEditForm(f => ({ ...f, credentials: e.target.value }))} placeholder="Credentials" />
                    </td>
                    <td>
                      <input style={fieldStyle} value={editForm.moduleSlug ?? c.moduleSlug} onChange={e => setEditForm(f => ({ ...f, moduleSlug: e.target.value }))} />
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <button onClick={() => handleSaveEdit(c.id)} disabled={isPending} style={{ marginRight: '6px', background: 'var(--success)', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>Save</button>
                      <button onClick={() => setEditingId(null)} style={{ background: 'var(--border)', color: 'var(--text)', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'var(--navy)', color: 'var(--gold)', fontWeight: 700, fontSize: '12px' }}>
                        {c.avatarInitials}
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>{c.name}</td>
                    <td>
                      <div style={{ color: 'var(--text)', fontSize: '0.85rem' }}>{c.title}</div>
                      {c.credentials && <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{c.credentials}</div>}
                    </td>
                    <td><code style={{ fontSize: '0.8rem', background: 'var(--off-white)', padding: '2px 6px', borderRadius: '4px' }}>{c.moduleSlug}</code></td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <button onClick={() => { setEditingId(c.id); setEditForm({ name: c.name, title: c.title, credentials: c.credentials, bio: c.bio, avatarInitials: c.avatarInitials, moduleSlug: c.moduleSlug }); }} style={{ marginRight: '6px', background: 'var(--navy-light)', color: 'var(--white)', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                      <button onClick={() => handleDelete(c.id)} disabled={isPending} style={{ background: 'var(--error)', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '0.8rem' }}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {contributors.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '32px' }}>No contributors yet. Add one above.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Main dashboard ──────────────────────────────────────────────────────────

export default function AdminDashboard({ pendingRequests: initial, users: initialUsers, sponsors: initialSponsors, podcastSubscribers, podcastBroadcasts: initialBroadcasts, newsItems: initialNews, jobListings: initialJobs, courses: initialCourses, registrations: initialRegistrations, contributors: initialContributors, siteSettings, stats: initialStats }: Props) {
  const [pending, setPending] = useState(initial);
  const [users, setUsers] = useState(initialUsers);
  const [stats, setStats] = useState(initialStats);
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<'registrations' | 'requests' | 'users' | 'sponsors' | 'podcast' | 'jobs' | 'courses' | 'news' | 'contributors' | 'analytics' | 'settings'>('registrations');
  const pendingJobCount   = initialJobs.filter(j => j.status === 'pending_approval').length;
  const pendingNewsCount  = initialNews.filter(n => n.status === 'pending').length;
  const pendingRegCount   = initialRegistrations.filter(r => !r.approved).length;

  function notify(msg: string, type: 'success' | 'error' = 'success') {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  }

  async function handleApprove(id: string) {
    startTransition(async () => {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) {
        notify(json.error || 'Failed to approve request.', 'error');
        return;
      }
      setPending(prev => prev.filter(r => r.id !== id));
      setUsers(prev => [json.user, ...prev]);
      setStats(prev => ({
        ...prev,
        pending: Math.max(0, prev.pending - 1),
        active: prev.active + 1,
        total: prev.total + 1,
      }));
      notify(`${json.user.name} approved.`);
    });
  }

  async function handleDeny(id: string) {
    startTransition(async () => {
      const res = await fetch('/api/admin/deny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        notify('Failed to deny request.', 'error');
        return;
      }
      setPending(prev => prev.filter(r => r.id !== id));
      setStats(prev => ({ ...prev, pending: Math.max(0, prev.pending - 1) }));
      notify('Request denied.');
    });
  }

  async function handleToggle(userId: string, currentActive: boolean) {
    startTransition(async () => {
      const res = await fetch('/api/admin/toggle-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const json = await res.json();
      if (!res.ok) {
        notify('Failed to update user.', 'error');
        return;
      }
      const newActive: boolean = json.active;
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, active: newActive } : u));
      setStats(prev => ({
        ...prev,
        active: newActive ? prev.active + 1 : prev.active - 1,
        disabled: newActive ? prev.disabled - 1 : prev.disabled + 1,
      }));
      notify(newActive ? 'User activated.' : 'User disabled.');
    });
  }

  function copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => notify(`Copied: ${code}`));
  }

  return (
    <div className="admin-wrap">
      {/* Header */}
      <div className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-logo">
            <span>NPCollab Admin</span>
          </div>
          <a href="/" className="admin-view-site">View site →</a>
        </div>
      </div>

      <div className="admin-body">
        {/* Notification */}
        {notification && (
          <div className={`admin-notification admin-notification--${notification.type}`}>
            {notification.msg}
          </div>
        )}

        {/* Stats */}
        <div className="admin-stats">
          <div className="admin-stat">
            <div className="admin-stat-value">{stats.pending}</div>
            <div className="admin-stat-label">Pending</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-value">{stats.active}</div>
            <div className="admin-stat-label">Active users</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-value">{stats.disabled}</div>
            <div className="admin-stat-label">Disabled</div>
          </div>
          <div className="admin-stat">
            <div className="admin-stat-value">{stats.total}</div>
            <div className="admin-stat-label">Total users</div>
          </div>
        </div>

        {/* Tab nav */}
        <div className="admin-tabs">
          {([
            { key: 'registrations', label: '🆕 Registrations',  badge: pendingRegCount },
            { key: 'requests',  label: 'Access Requests', badge: stats.pending },
            { key: 'users',     label: 'Users',           badge: 0 },
            { key: 'sponsors',  label: 'Sponsors',        badge: 0 },
            { key: 'podcast',   label: '🎙️ Podcast',      badge: 0 },
            { key: 'jobs',      label: '💼 Job Board',    badge: pendingJobCount },
            { key: 'courses',   label: '🎓 Courses',       badge: 0 },
            { key: 'news',         label: '📰 News',          badge: pendingNewsCount },
            { key: 'contributors', label: '✍️ Contributors',  badge: 0 },
            { key: 'analytics',    label: 'Analytics',        badge: 0 },
            { key: 'settings',  label: '⚙️ Settings',     badge: 0 },
          ] as const).map(tab => (
            <button
              key={tab.key}
              className={`admin-tab${activeTab === tab.key ? ' admin-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {tab.badge > 0 ? <span className="admin-badge" style={{marginLeft:'6px'}}>{tab.badge}</span> : null}
            </button>
          ))}
        </div>

        {/* Registrations (users_v2) */}
        {activeTab === 'registrations' && (
          <RegistrationsSection initial={initialRegistrations} />
        )}

        {/* Access Requests */}
        {activeTab === 'requests' && (
          <section className="admin-section">
            <h2 className="admin-section-title">
              Pending requests
              {stats.pending > 0 && <span className="admin-badge">{stats.pending}</span>}
            </h2>

            {pending.length === 0 ? (
              <p className="admin-empty">No pending requests.</p>
            ) : (
              <div className="admin-requests">
                {pending.map(r => (
                  <div key={r.id} className="admin-request-card">
                    <div className="admin-request-info">
                      <div className="admin-request-name">{r.name}</div>
                      <div className="admin-request-meta">
                        <span>{r.email}</span>
                        <span className="admin-dot">·</span>
                        <span>{r.role}</span>
                        <span className="admin-dot">·</span>
                        <span>{formatDate(r.createdAt)}</span>
                      </div>
                      <div className="admin-request-reason">{r.reason}</div>
                    </div>
                    <div className="admin-request-actions">
                      <button
                        className="btn-approve"
                        onClick={() => handleApprove(r.id)}
                        disabled={isPending}
                      >
                        Approve
                      </button>
                      <button
                        className="btn-deny"
                        onClick={() => handleDeny(r.id)}
                        disabled={isPending}
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Users */}
        {activeTab === 'users' && (
          <UsersV2Section initial={initialRegistrations} notify={notify} />
        )}

        {/* Sponsors */}
        {activeTab === 'sponsors' && (
          <SponsorsSection initial={initialSponsors} notify={notify} />
        )}

        {/* Podcast Subscribers */}
        {activeTab === 'podcast' && (
          <PodcastSubscribersSection subscribers={podcastSubscribers} broadcasts={initialBroadcasts} />
        )}

        {/* Job Board */}
        {activeTab === 'jobs' && <JobBoardSection initial={initialJobs} />}

        {/* Courses */}
        {activeTab === 'courses' && <CoursesSection initial={initialCourses} />}

        {/* News */}
        {activeTab === 'news' && <NewsSection initial={initialNews} />}

        {/* Contributors */}
        {activeTab === 'contributors' && (
          <ContributorsSection initial={initialContributors} />
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <AnalyticsSection umamiUrl={siteSettings.umami_dashboard_url || undefined} />
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <SettingsSection initialSettings={siteSettings} />
        )}
      </div>
    </div>
  );
}
