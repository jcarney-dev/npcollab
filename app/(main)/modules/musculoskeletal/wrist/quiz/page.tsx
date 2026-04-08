import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-wrist/quiz.json';

export default function MskWristQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Wrist &amp; Hand Quiz</h1>
          <p className="page-subtitle">20 questions covering wrist and hand clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/wrist" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
