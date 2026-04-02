import type { Metadata } from 'next';
import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import questions from '@/content/modules/cardiac/quiz.json';

export const metadata: Metadata = {
  title: 'Quiz | Cardiac Module',
  description: '20-question cardiac quiz covering ACS, heart failure, AF, hypertension, and ECG interpretation',
};

export default function CardiacQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>❤️ Cardiac</h1>
        <p>Chest pain differentials, ACS, heart failure, arrhythmias, hypertension, and ECG basics</p>
      </div>
      <ModuleTabs moduleId="cardiac" />

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Cardiac Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Mixed difficulty — covers ACS, heart failure, AF, hypertension, and ECG interpretation. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="cardiac" questions={questions} />
    </>
  );
}
