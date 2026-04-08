import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-chest-wall/quiz.json';

export default function MskChestQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Chest Wall Quiz</h1>
          <p className="page-subtitle">20 questions covering chest wall clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/chest" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
