import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/msk-shoulder/quiz.json';

export const metadata: Metadata = { title: 'MSK Shoulder — Quiz' };

export default function ShoulderQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Musculoskeletal</div>
        <h1>🦴 Shoulder — Quiz</h1>
        <p>Test your knowledge of shoulder assessment, diagnosis, and management in the NP context.</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <Quiz moduleId="musculoskeletal/shoulder" questions={questions} />
    </>
  );
}
