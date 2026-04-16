import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-neck/quiz.json';

export default function MskNeckQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Neck</h1>
        <p>Cervical spine pain, radiculopathy, whiplash, and serious cervical pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/neck" moduleName="MSK — Neck" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/neck" />

    </div>
  );
}
