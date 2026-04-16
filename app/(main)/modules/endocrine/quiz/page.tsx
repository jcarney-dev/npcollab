import type { Metadata } from 'next';
import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/endocrine/quiz.json';

export const metadata: Metadata = {
  title: 'Quiz | Endocrine Module',
  description: '20-question endocrine quiz covering diabetes, thyroid, adrenal disorders, and metabolic conditions',
};

export default function EndocrineQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔬 Endocrine</h1>
        <p>Diabetes, thyroid disease, adrenal disorders, and metabolic conditions</p>
      </div>
      <ModuleTabs moduleId="endocrine" />


      <div className="content-prose">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Endocrine Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Mixed difficulty — covers T2DM management, thyroid disease, adrenal conditions, and pharmacology. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="endocrine" moduleName="Endocrine" questions={questions} />
      </div>

      <ModuleNav moduleId="endocrine" />

    </>
  );
}
