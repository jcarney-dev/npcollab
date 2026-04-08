'use client';

import { useState, useTransition } from 'react';
import type { AccessRequest, User, Sponsor, PodcastSubscriber, NewsItem } from '@/lib/schema';

interface Props {
  pendingRequests: AccessRequest[];
  users: User[];
  sponsors: Sponsor[];
  podcastSubscribers: PodcastSubscriber[];
  newsItems: NewsItem[];
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

function PodcastSubscribersSection({ subscribers }: { subscribers: PodcastSubscriber[] }) {
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
    </section>
  );
}

// ── Job Board section ────────────────────────────────────────────────────────

function JobBoardSection() {
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">💼 Job Board</h2>
      <div style={{ padding: '32px 24px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ fontSize: '32px', marginBottom: '12px' }}>🚧</p>
        <h3 style={{ color: 'var(--navy)', marginBottom: '8px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Job Board Coming Soon</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          Job Board listings will appear here once Stripe payment is configured. Employers will be able to post NP positions, which you can approve and publish from this panel.
        </p>
      </div>
    </section>
  );
}

// ── News section ─────────────────────────────────────────────────────────────

const NEWS_TYPES = ['article', 'external', 'announcement'] as const;
const STATUS_OPTS = ['draft', 'published', 'rejected'] as const;

function NewsSection({ initial }: { initial: NewsItem[] }) {
  const [items, setItems] = useState(initial);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const emptyForm = { title: '', summary: '', url: '', type: 'article' as string, sourceName: '', status: 'draft' as string };
  const [form, setForm] = useState(emptyForm);

  function notify(text: string, type: 'success' | 'error' = 'success') {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 4000);
  }

  function startCreate() { setForm(emptyForm); setEditing(null); setCreating(true); }
  function startEdit(item: NewsItem) {
    setCreating(false);
    setEditing(item.id);
    setForm({ title: item.title, summary: item.summary, url: item.url ?? '', type: item.type, sourceName: item.sourceName, status: item.status });
  }
  function cancel() { setCreating(false); setEditing(null); setForm(emptyForm); }

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

  const fieldStyle = { width: '100%', padding: '7px 11px', border: '1px solid var(--border)', borderRadius: '5px', fontSize: '13px', fontFamily: 'var(--font-body)', boxSizing: 'border-box' } as const;
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' } as const;
  const btnGold = { fontSize: '13px', fontWeight: 500, padding: '6px 14px', borderRadius: '5px', cursor: 'pointer', border: '1px solid var(--gold-light)', background: 'var(--gold-pale)', color: 'var(--navy)' } as const;
  const btnNav = { ...btnGold, background: 'var(--navy)', color: '#fff', border: '1px solid var(--navy)' } as const;
  const btnOut = { ...btnGold, background: '#fff', border: '1px solid var(--border)' } as const;

  const STATUS_COLOR: Record<string, string> = { published: '#166534', draft: 'var(--text-muted)', rejected: 'var(--error)' };

  function NewsForm({ isNew }: { isNew: boolean }) {
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
          <button style={btnNav} onClick={() => save(isNew)} disabled={saving || !form.title.trim() || !form.summary.trim()}>{saving ? 'Saving…' : isNew ? 'Create' : 'Save changes'}</button>
          <button style={btnOut} onClick={cancel}>Cancel</button>
        </div>
      </div>
    );
  }

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

      {creating && <NewsForm isNew={true} />}

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
                    <td><span style={{ fontSize: '12px', fontWeight: 600, color: STATUS_COLOR[item.status] || 'var(--text-muted)', textTransform: 'capitalize' }}>{item.status}</span></td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-AU', {day:'numeric',month:'short',year:'numeric'}) : new Date(item.createdAt).toLocaleDateString('en-AU', {day:'numeric',month:'short',year:'numeric'})}</td>
                    <td><button style={{...btnOut, padding:'4px 10px', fontSize:'12px'}} onClick={() => editing === item.id ? cancel() : startEdit(item)}>{editing === item.id ? 'Cancel' : 'Edit'}</button></td>
                  </tr>
                  {editing === item.id && (
                    <tr key={`${item.id}-edit`}><td colSpan={6} style={{ padding: '0 0 16px' }}><NewsForm isNew={false} /></td></tr>
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

// ── Analytics section ────────────────────────────────────────────────────────

function AnalyticsSection() {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_DASHBOARD_URL;
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">📊 Analytics</h2>
      <AnalyticsContent umamiUrl={umamiUrl} />
    </section>
  );
}

// Client-readable env var must be passed at build time; for dynamic check we read window or use a client component pattern
// Since AdminDashboard is 'use client', we can read NEXT_PUBLIC_ env vars directly
function AnalyticsContent({ umamiUrl }: { umamiUrl?: string }) {
  // In the client bundle, NEXT_PUBLIC_ vars are inlined at build time
  const url = umamiUrl ?? (typeof window !== 'undefined' ? (window as unknown as Record<string, string>).__NEXT_PUBLIC_UMAMI_DASHBOARD_URL : undefined);
  if (url) {
    return (
      <div>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Live Umami analytics dashboard. Use the Umami interface to filter by date, page, and device.
        </p>
        <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src={url}
            width="100%"
            height="800"
            frameBorder="0"
            style={{ display: 'block' }}
            title="Umami Analytics Dashboard"
          />
        </div>
      </div>
    );
  }
  return (
    <div style={{ padding: '40px 32px', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ fontSize: '32px', marginBottom: '12px' }}>📊</p>
      <h3 style={{ color: 'var(--navy)', marginBottom: '8px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Analytics powered by Umami</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '480px', margin: '0 auto 16px', lineHeight: 1.6 }}>
        Once configured, your Umami analytics dashboard will appear here. Set the{' '}
        <code style={{ background: 'var(--border)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>NEXT_PUBLIC_UMAMI_DASHBOARD_URL</code>{' '}
        environment variable in Vercel to your Umami share URL.
      </p>
      <a
        href="https://umami.is"
        target="_blank"
        rel="noopener"
        style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'underline' }}
      >
        Learn about Umami →
      </a>
    </div>
  );
}

// ── Main dashboard ──────────────────────────────────────────────────────────

export default function AdminDashboard({ pendingRequests: initial, users: initialUsers, sponsors: initialSponsors, podcastSubscribers, newsItems: initialNews, stats: initialStats }: Props) {
  const [pending, setPending] = useState(initial);
  const [users, setUsers] = useState(initialUsers);
  const [stats, setStats] = useState(initialStats);
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<'requests' | 'users' | 'sponsors' | 'podcast' | 'jobs' | 'news' | 'analytics'>('requests');

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
      notify(`Access code ${json.user.accessCode} created for ${json.user.name}.`);
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
            <span>⚕</span>
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
            { key: 'requests',  label: 'Access Requests', badge: stats.pending },
            { key: 'users',     label: 'Users',           badge: 0 },
            { key: 'sponsors',  label: 'Sponsors',        badge: 0 },
            { key: 'podcast',   label: '🎙️ Podcast',      badge: 0 },
            { key: 'jobs',      label: '💼 Job Board',    badge: 0 },
            { key: 'news',      label: '📰 News',          badge: 0 },
            { key: 'analytics', label: 'Analytics',       badge: 0 },
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
          <section className="admin-section">
            <h2 className="admin-section-title">All users</h2>

            {users.length === 0 ? (
              <p className="admin-empty">No users yet.</p>
            ) : (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Access code</th>
                      <th>Approved</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id} className={u.active ? '' : 'admin-row--disabled'}>
                        <td className="admin-td-name">{u.name}</td>
                        <td className="admin-td-email">{u.email}</td>
                        <td>{u.role}</td>
                        <td>
                          <div className="admin-code-cell">
                            <code className="admin-code">{u.accessCode}</code>
                            <button
                              className="admin-copy-btn"
                              onClick={() => copyCode(u.accessCode)}
                              title="Copy access code"
                            >
                              Copy
                            </button>
                          </div>
                        </td>
                        <td>{formatDate(u.approvedAt)}</td>
                        <td>
                          <span className={`admin-status-badge admin-status-badge--${u.active ? 'active' : 'disabled'}`}>
                            {u.active ? 'Active' : 'Disabled'}
                          </span>
                        </td>
                        <td>
                          <button
                            className={u.active ? 'btn-disable' : 'btn-enable'}
                            onClick={() => handleToggle(u.id, u.active)}
                            disabled={isPending}
                          >
                            {u.active ? 'Disable' : 'Enable'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* Sponsors */}
        {activeTab === 'sponsors' && (
          <SponsorsSection initial={initialSponsors} notify={notify} />
        )}

        {/* Analytics */}
        {/* Podcast Subscribers */}
        {activeTab === 'podcast' && (
          <PodcastSubscribersSection subscribers={podcastSubscribers} />
        )}

        {/* Job Board */}
        {activeTab === 'jobs' && <JobBoardSection />}

        {/* News */}
        {activeTab === 'news' && <NewsSection initial={initialNews} />}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <AnalyticsSection />
        )}
      </div>
    </div>
  );
}
