import PostJobForm from './PostJobForm';

export default function PostJobPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  return <PostJobForm turnstileSiteKey={turnstileSiteKey} />;
}
