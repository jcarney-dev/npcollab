import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/neurology/quiz.json';

export const metadata: Metadata = { title: 'Neurology — Quiz' };

export default function NeurologyQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧬 Neurology</h1>
        <p>Assessment and management of common neurological presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="neurology" />


      <div className="content-prose">
      <Quiz moduleId="neurology" moduleName="Neurology" questions={questions} />
      </div>

      <ModuleNav moduleId="neurology" />

    </>
  );
}
