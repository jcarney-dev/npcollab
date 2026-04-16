import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-back/quiz.json';

export default function MskBackQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Back</h1>
        <p>Low back pain, lumbar radiculopathy, spinal stenosis, and serious spinal pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/back" moduleName="MSK — Back" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/back" />

    </div>
  );
}
