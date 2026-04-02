import type { Metadata } from 'next';
import AdminLoginForm from '@/components/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login — NPCollab',
  robots: 'noindex',
};

export default function AdminLoginPage() {
  return (
    <div className="public-page">
      <div className="public-card" style={{ maxWidth: 400 }}>
        <div className="public-logo">
          <span className="public-logo-icon">⚕</span>
          <span className="public-logo-text">NPCollab Admin</span>
        </div>
        <h1 className="public-heading" style={{ fontSize: 22 }}>Sign in</h1>
        <AdminLoginForm />
      </div>
    </div>
  );
}
