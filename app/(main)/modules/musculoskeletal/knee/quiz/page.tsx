import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-knee/quiz.json';

export default function MskKneeQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Knee</h1>
        <p>Knee injuries, osteoarthritis, tendinopathy, and common knee presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/knee" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
