import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-foot-ankle/quiz.json';

export default function MskFootAnkleQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Foot &amp; Ankle Quiz</h1>
          <p className="page-subtitle">20 questions covering foot and ankle clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/foot-ankle" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
