import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/mental-health/quiz.json';

export const metadata: Metadata = { title: 'Mental Health — Quiz' };

export default function MentalHealthQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Mental Health</div>
        <h1>🧠 Mental Health — Quiz</h1>
        <p>Test your knowledge of mental health assessment, pharmacotherapy, risk assessment, and management in the NP context.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />

      <Quiz moduleId="mental-health" questions={questions} />
    </>
  );
}
