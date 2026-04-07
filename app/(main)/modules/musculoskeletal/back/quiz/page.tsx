import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-back/quiz.json';

export default function MskBackQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Back Quiz</h1>
          <p className="page-subtitle">20 questions covering low back pain clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/back" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
