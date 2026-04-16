import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-wrist/quiz.json';

export default function MskWristQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Wrist &amp; Hand</h1>
        <p>Wrist and hand pain, fractures, tendinopathy, and nerve entrapment syndromes</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/wrist" moduleName="MSK — Wrist" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/wrist" />

    </div>
  );
}
