import type { Metadata } from 'next';
import EnterAccessForm from '@/components/EnterAccessForm';

export const metadata: Metadata = {
  title: 'Enter Access Code',
  description: 'Enter your NPCollab access code to access NP educational resources.',
};

interface Props {
  searchParams: Promise<{ from?: string }>;
}

export default async function EnterAccessPage({ searchParams }: Props) {
  const { from } = await searchParams;

  // Use the stored return URL only if it's a safe internal path,
  // otherwise default to /modules/cardiac
  const redirectTo =
    from && from.startsWith('/') && !from.startsWith('//')
      ? from
      : '/modules/cardiac';

  return (
    <div className="public-page">
      <div className="public-card">
        <div className="public-logo">
          <span className="public-logo-icon">⚕</span>
          <span className="public-logo-text">NPCollab</span>
        </div>
        <h1 className="public-heading">Enter Access Code</h1>
        <p className="public-subheading">
          Enter the access code you received by email to access NPCollab resources.
          Don&apos;t have a code?{' '}
          <a href="/request-access" className="public-link">
            Request access here
          </a>.
        </p>
        <EnterAccessForm redirectTo={redirectTo} />
      </div>
    </div>
  );
}
