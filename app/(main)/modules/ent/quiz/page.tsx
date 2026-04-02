import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/ent/quiz.json';

export const metadata: Metadata = {
  title: 'ENT Quiz',
};

export default function ENTQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👂 ENT (Ears, Nose & Throat)</h1>
        <p>Assessment framework, SOAP note, resources, and quiz for ENT presentations</p>
      </div>
      <ModuleTabs moduleId="ent" />
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>ENT Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Test your knowledge of ENT presentations. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="ent" questions={questions} />
    </>
  );
}
