import SubmitCourseForm from './SubmitCourseForm';

export default function SubmitCoursePage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  return <SubmitCourseForm turnstileSiteKey={turnstileSiteKey} />;
}
