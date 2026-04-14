import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/mental-health/quiz.json';

export const metadata: Metadata = { title: 'Mental Health — Quiz' };

export default function MentalHealthQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧠 Mental Health</h1>
        <p>Assessment and management of common mental health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />


      <div className="content-prose">
      <Quiz moduleId="mental-health" questions={questions} />
      </div>

      <ModuleNav moduleId="mental-health" />

    </>
  );
}
