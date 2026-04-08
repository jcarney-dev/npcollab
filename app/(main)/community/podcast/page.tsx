import type { Metadata } from 'next';
import PodcastSignupForm from '@/components/PodcastSignupForm';

export const metadata: Metadata = {
  title: 'Podcast — NPCollab',
  description: 'The NPCollab Podcast — coming soon. Clinical education, NP career development, and interviews with leading Australian Nurse Practitioners.',
};

export default function PodcastPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>🎙️ The NPCollab Podcast</h1>
        <p>Coming Soon — A podcast for Australian Nurse Practitioners</p>
      </div>

      <div className="content-prose">
        <div className="highlight-box">
          <h4>In Development</h4>
          <p>
            The NPCollab Podcast will cover clinical education, scope of practice,
            NP career development, interviews with leading NPs and healthcare
            professionals, and the business of running an NP practice in Australia.
          </p>
          <p style={{ marginBottom: 0 }}>
            Episodes will be released regularly and made available on all major
            podcast platforms. Subscribe below to be notified at launch.
          </p>
        </div>

        <h2>What to Expect</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">🩺</div>
              <h4>Clinical Education</h4>
            </div>
            <ul>
              <li>In-depth clinical topics relevant to NP practice</li>
              <li>Evidence-based updates across specialties</li>
              <li>Australian guidelines and local context</li>
              <li>Complex case discussions with clinical experts</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">🎓</div>
              <h4>Career Development</h4>
            </div>
            <ul>
              <li>Transitioning from RN to NP — the journey</li>
              <li>Scope of practice expansion and advocacy</li>
              <li>Navigating endorsement and credentialling</li>
              <li>Building your NP identity and professional brand</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">🎙️</div>
              <h4>Interviews</h4>
            </div>
            <ul>
              <li>Leading NPs from across Australia</li>
              <li>TNPs sharing their transition experience</li>
              <li>Healthcare professionals and collaborators</li>
              <li>Policy makers and NMBA/AHPRA perspectives</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header">
              <div className="icon-circle">🏢</div>
              <h4>Business of NP Practice</h4>
            </div>
            <ul>
              <li>Setting up your own NP practice</li>
              <li>Medicare billing and financial sustainability</li>
              <li>Practice management and technology</li>
              <li>Collaborative arrangements and relationships</li>
            </ul>
          </div>
        </div>

        <h2>Be the First to Know</h2>
        <p>
          Enter your email address below and we&apos;ll notify you as soon as
          the NPCollab Podcast launches. No spam — just a single email when
          the first episode drops.
        </p>

        <PodcastSignupForm />
      </div>
    </>
  );
}
