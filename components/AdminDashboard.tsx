'use client';

import { useState, useTransition } from 'react';
import type { AccessRequest, User } from '@/lib/schema';

interface Props {
  pendingRequests: AccessRequest[];
  users: User[];
  stats: { pending: number; active: number; disabled: number; total: number };
}

function formatDate(d: Date | null) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function AdminDashboard({ pendingRequests: initial, users: initialUsers, stats: initialStats }: Props) {
  const [pending, setPending] = useState(initial);
  const [users, setUsers] = useState(initialUsers);
  const [stats, setStats] = useState(initialStats);
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [isPending, startTransition] = useTransition();

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

        {/* Pending Requests */}
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

        {/* Users */}
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
      </div>
    </div>
  );
}
