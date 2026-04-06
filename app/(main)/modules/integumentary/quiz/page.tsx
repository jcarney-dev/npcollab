import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/integumentary/quiz.json';

export const metadata: Metadata = { title: 'Integumentary — Quiz' };

export default function IntegumentaryQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Integumentary</div>
        <h1>🩹 Quiz</h1>
        <p>Test your knowledge of dermatology, skin cancer, wound management, and skin infections.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />

      <Quiz moduleId="integumentary" questions={questions} />
    </>
  );
}
