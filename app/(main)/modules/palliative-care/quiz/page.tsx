import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/palliative-care/quiz.json';

export const metadata: Metadata = { title: 'Palliative Care — Quiz' };

export default function PalliativeCareQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🕊️ Palliative Care</h1>
        <p>Symptom management, advance care planning, and end-of-life care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />


      <div className="content-prose">
      <Quiz moduleId="palliative-care" moduleName="Palliative Care" questions={questions} />
      </div>

      <ModuleNav moduleId="palliative-care" />

    </>
  );
}
