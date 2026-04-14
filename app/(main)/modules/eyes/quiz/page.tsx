import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/eyes/quiz.json';

export const metadata: Metadata = {
  title: 'Ophthalmology Quiz',
};

export default function EyesQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👁️ Ophthalmology</h1>
        <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways</p>
      </div>
      <ModuleTabs moduleId="eyes" />
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Ophthalmology Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Test your knowledge of ophthalmic presentations. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="eyes" questions={questions} />
      <ModuleNav moduleId="eyes" />

    </>
  );
}
