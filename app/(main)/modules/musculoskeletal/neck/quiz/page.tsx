import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-neck/quiz.json';

export default function MskNeckQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Neck Quiz</h1>
          <p className="page-subtitle">20 questions covering neck pain and cervical spine clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/neck" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
