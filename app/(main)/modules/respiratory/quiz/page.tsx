import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/respiratory/quiz.json';

export const metadata: Metadata = {
  title: 'Respiratory - Quiz',
};

export default function RespiratoryQuizPage() {
  return (
      <>
        <div className="page-header">
          <div className="label">Clinical Module</div>
          <h1>🫁 Respiratory - Quiz</h1>
          <p>Asthma, COPD, pneumonia, pulmonary embolism, and spirometry interpretation</p>
        </div>
        <ModuleTabs moduleId="respiratory" />

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Respiratory Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Mixed difficulty — covers asthma, COPD, pneumonia, PE, spirometry, and acute management. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="respiratory" questions={questions} />
          </>

  );
}