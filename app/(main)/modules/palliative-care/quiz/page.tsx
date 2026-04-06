import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/palliative-care/quiz.json';

export const metadata: Metadata = { title: 'Palliative Care — Quiz' };

export default function PalliativeCareQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Palliative Care</div>
        <h1>🕊️ Quiz</h1>
        <p>Test your knowledge of palliative symptom management, opioid prescribing, advance care planning, and end-of-life care.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />

      <Quiz moduleId="palliative-care" questions={questions} />
    </>
  );
}
