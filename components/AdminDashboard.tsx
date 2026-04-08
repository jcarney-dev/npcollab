'use client';

import { useState, useTransition } from 'react';
import type { AccessRequest, User, Sponsor, PodcastSubscriber } from '@/lib/schema';

interface Props {
  pendingRequests: AccessRequest[];
  users: User[];
  sponsors: Sponsor[];
  podcastSubscribers: PodcastSubscriber[];
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
                      </div>
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

  return (
    <section className="admin-section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ margin: 0 }}>
          🎙️ Podcast Subscribers
          {subscribers.length > 0 && (
            <span className="admin-badge" style={{ marginLeft: '8px' }}>{subscribers.length}</span>
          )}
        </h2>
        {subscribers.length > 0 && (
          <button
            onClick={handleExport}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--navy)',
              background: 'var(--gold-pale)',
              border: '1px solid var(--gold-light)',
              borderRadius: '6px',
              padding: '7px 14px',
              cursor: 'pointer',
            }}
          >
            Export CSV
          </button>
        )}
      </div>

      {subscribers.length === 0 ? (
        <p className="admin-empty">No podcast subscribers yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Subscribed</th>
              </tr>
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
    </section>
  );
}

// ── Main dashboard ──────────────────────────────────────────────────────────

export default function AdminDashboard({ pendingRequests: initial, users: initialUsers, sponsors: initialSponsors, podcastSubscribers, stats: initialStats }: Props) {
  const [pending, setPending] = useState(initial);
  const [users, setUsers] = useState(initialUsers);
  const [stats, setStats] = useState(initialStats);
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<'requests' | 'users' | 'sponsors' | 'podcast' | 'analytics'>('requests');

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

        {activeTab === 'analytics' && (
          <section className="admin-section">
            <h2 className="admin-section-title">📊 Site Analytics</h2>
            <p style={{fontSize:'0.85rem',color:'#6b7280',marginBottom:'16px'}}>
              Session data only — no external tracking, no cookies.
            </p>
            <div className="admin-stats" style={{marginBottom:'20px'}}>
              <div className="admin-stat">
                <div className="admin-stat-value" id="a-pv">—</div>
                <div className="admin-stat-label">Page Views</div>
              </div>
              <div className="admin-stat">
                <div className="admin-stat-value" id="a-pages">—</div>
                <div className="admin-stat-label">Pages Visited</div>
              </div>
              <div className="admin-stat">
                <div className="admin-stat-value" id="a-quiz">—</div>
                <div className="admin-stat-label">Quizzes Completed</div>
              </div>
            </div>
            <h3 style={{fontSize:'0.9rem',fontWeight:600,color:'#1f2937',marginBottom:'10px'}}>Most Visited Pages</h3>
            <div id="a-pages-list">
              <p style={{color:'#6b7280',fontSize:'0.85rem'}}>No data yet — browse the site first.</p>
            </div>
            <div id="a-quiz-detail" />
            <script dangerouslySetInnerHTML={{__html: `
              (function() {
                try {
                  var d = JSON.parse(localStorage.getItem('npa') || '{"pv":0,"pages":{},"quiz":{}}');
                  var pvEl = document.getElementById('a-pv');
                  var pagesEl = document.getElementById('a-pages');
                  var quizEl = document.getElementById('a-quiz');
                  if (pvEl) pvEl.textContent = String(d.pv || 0);
                  var pages = d.pages || {};
                  if (pagesEl) pagesEl.textContent = String(Object.keys(pages).length);
                  var quizData = d.quiz || {};
                  var totalQuiz = Object.values(quizData).reduce(function(a,v){return a+(Array.isArray(v)?v.length:0);},0);
                  if (quizEl) quizEl.textContent = String(totalQuiz);
                  var labels = {home:'Home',scope:'Scope',assessment:'Assessment',eyes:'Eyes',ent:'ENT',support:'Support',analytics:'Analytics',about:'About'};
                  var topPages = Object.entries(pages).sort(function(a,b){return b[1]-a[1];}).slice(0,6);
                  var listEl = document.getElementById('a-pages-list');
                  if (listEl && topPages.length > 0) {
                    listEl.innerHTML = topPages.map(function(e){
                      return '<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:10px 14px;margin-bottom:8px;display:flex;justify-content:space-between"><span style="color:#374151">'+(labels[e[0]]||e[0])+'</span><span style="font-weight:600;color:#c9a84c">'+e[1]+' views</span></div>';
                    }).join('');
                  }
                } catch(e) {}
              })();
            `}} />
          </section>
        )}
      </div>
    </div>
  );
}
