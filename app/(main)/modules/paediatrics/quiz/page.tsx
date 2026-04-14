import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/paediatrics/quiz.json';

export const metadata: Metadata = { title: 'Paediatrics — Quiz' };

export default function PaediatricsQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👶 Paediatrics</h1>
        <p>Assessment and management of common paediatric presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />


      <div className="content-prose">
      <Quiz moduleId="paediatrics" questions={questions} />
      </div>

      <ModuleNav moduleId="paediatrics" />

    </>
  );
}
