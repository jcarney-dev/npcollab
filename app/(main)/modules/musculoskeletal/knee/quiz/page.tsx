import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-knee/quiz.json';

export default function MskKneeQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Knee Quiz</h1>
          <p className="page-subtitle">20 questions covering knee clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/knee" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
