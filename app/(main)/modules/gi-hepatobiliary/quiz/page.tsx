import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/gi-hepatobiliary/quiz.json';

export const metadata: Metadata = { title: 'GI & Hepatobiliary — Quiz' };

export default function GiQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫃 GI &amp; Hepatobiliary</h1>
        <p>Assessment and management of common gastrointestinal and hepatobiliary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />


      <div className="content-prose">
      <Quiz moduleId="gi-hepatobiliary" questions={questions} />
      </div>

    </>
  );
}
