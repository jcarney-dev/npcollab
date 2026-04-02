import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/neurology/quiz.json';

export const metadata: Metadata = { title: 'Neurology — Quiz' };

export default function NeurologyQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Neurology</div>
        <h1>🧬 Neurology — Quiz</h1>
        <p>Test your knowledge of headache, stroke, epilepsy, movement disorders, and peripheral neuropathy in the NP context.</p>
      </div>

      <ModuleTabs moduleId="neurology" />

      <Quiz moduleId="neurology" questions={questions} />
    </>
  );
}
