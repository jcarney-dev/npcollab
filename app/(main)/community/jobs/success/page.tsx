import Link from 'next/link';

export default function JobPostSuccessPage() {
  return (
    <div className="content-prose">
      <div className="public-success">
        <div className="public-success-icon">✓</div>
        <h2>Payment received</h2>
        <p>
          Thank you — your payment of $99 AUD has been received. Your job listing will be reviewed and published within 1 business day. You&rsquo;ll receive a confirmation email once it&rsquo;s live.
        </p>
        <Link href="/community/jobs" className="btn-primary" style={{ display: 'inline-block', marginTop: '16px' }}>
          View Job Board →
        </Link>
      </div>
    </div>
  );
}
