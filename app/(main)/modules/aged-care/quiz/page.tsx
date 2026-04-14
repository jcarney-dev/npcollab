import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/aged-care/quiz.json';

export const metadata: Metadata = { title: 'Aged Care — Quiz' };

export default function AgedCareQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧓 Aged Care</h1>
        <p>Assessment and management of common aged care presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />


      <div className="content-prose">
      <Quiz moduleId="aged-care" questions={questions} />
      </div>

      <ModuleNav moduleId="aged-care" />

    </>
  );
}
