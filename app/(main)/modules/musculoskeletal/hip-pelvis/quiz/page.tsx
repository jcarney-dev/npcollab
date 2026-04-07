import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-hip-pelvis/quiz.json';

export default function MskHipPelvisQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Hip &amp; Pelvis Quiz</h1>
          <p className="page-subtitle">20 questions covering hip and pelvis clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-body">
        <Quiz moduleId="musculoskeletal/hip-pelvis" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
