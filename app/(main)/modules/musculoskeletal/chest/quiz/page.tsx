import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-chest-wall/quiz.json';

export default function MskChestQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Chest Wall</h1>
        <p>Chest wall pain, costochondritis, rib fractures, and musculoskeletal causes of chest pain</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/chest" moduleName="MSK — Chest" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/chest" />

    </div>
  );
}
