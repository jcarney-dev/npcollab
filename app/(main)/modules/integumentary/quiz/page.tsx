import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/integumentary/quiz.json';

export const metadata: Metadata = { title: 'Integumentary — Quiz' };

export default function IntegumentaryQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩹 Integumentary</h1>
        <p>Assessment and management of common dermatological presentations, skin malignancy, and wound care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />


      <div className="content-prose">
      <Quiz moduleId="integumentary" moduleName="Integumentary" questions={questions} />
      </div>

      <ModuleNav moduleId="integumentary" />

    </>
  );
}
