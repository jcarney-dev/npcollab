import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/aged-care/quiz.json';

export const metadata: Metadata = { title: 'Aged Care — Quiz' };

export default function AgedCareQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Aged Care</div>
        <h1>🏥 Aged Care — Quiz</h1>
        <p>Test your knowledge of delirium, dementia, falls, polypharmacy, continence, and advance care planning in the Australian aged care context.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />

      <Quiz moduleId="aged-care" questions={questions} />
    </>
  );
}
