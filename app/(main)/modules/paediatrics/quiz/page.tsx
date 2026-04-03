import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/paediatrics/quiz.json';

export const metadata: Metadata = { title: 'Paediatrics — Quiz' };

export default function PaediatricsQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Paediatrics</div>
        <h1>👶 Quiz</h1>
        <p>Test your knowledge of common paediatric presentations, assessment, and management in the NP context.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />

      <Quiz moduleId="paediatrics" questions={questions} />
    </>
  );
}
