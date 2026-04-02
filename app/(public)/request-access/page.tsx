import type { Metadata } from 'next';
import RequestAccessForm from '@/components/RequestAccessForm';

export const metadata: Metadata = {
  title: 'Request Access',
  description: 'Request access to NPCollab — free educational resources for Australian Nurse Practitioners.',
};

export default function RequestAccessPage() {
  return (
    <div className="public-page">
      <div className="public-card">
        <div className="public-logo">
          <span className="public-logo-icon">⚕</span>
          <span className="public-logo-text">NPCollab</span>
        </div>
        <h1 className="public-heading">Request Access</h1>
        <p className="public-subheading">
          NPCollab is a free educational resource for Australian Nurse Practitioners, Transitional Nurse Practitioners, and NP students.
          Fill in the form below and you&apos;ll receive an access code by email once your request is reviewed.
        </p>
        <RequestAccessForm />
      </div>
    </div>
  );
}
