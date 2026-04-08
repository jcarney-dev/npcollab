import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/womens-health/quiz.json';

export const metadata: Metadata = { title: "Women's Health — Quiz" };

export default function WomensHealthQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👩 Women&apos;s Health</h1>
        <p>Assessment and management of common women&apos;s health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />


      <div className="content-prose">
      <Quiz moduleId="womens-health" questions={questions} />
      </div>

    </>
  );
}
