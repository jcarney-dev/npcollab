import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-elbow/quiz.json';

export default function MskElbowQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Elbow</h1>
        <p>Lateral epicondylitis, medial epicondylitis, olecranon bursitis, and elbow pain presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/elbow" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/elbow" moduleName="MSK — Elbow" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/elbow" />

    </div>
  );
}
