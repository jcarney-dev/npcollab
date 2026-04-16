import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/msk-shoulder/quiz.json';

export const metadata: Metadata = { title: 'MSK Shoulder — Quiz' };

export default function ShoulderQuizPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Shoulder</h1>
        <p>Rotator cuff disease, impingement, AC joint injuries, frozen shoulder, and instability</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <Quiz moduleId="musculoskeletal/shoulder" moduleName="MSK — Shoulder" questions={questions} />
      <ModuleNav moduleId="musculoskeletal/shoulder" />

    </>
  );
}
