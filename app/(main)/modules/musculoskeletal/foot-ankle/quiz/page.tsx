import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-foot-ankle/quiz.json';

export default function MskFootAnkleQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Foot &amp; Ankle</h1>
        <p>Foot and ankle pain, sprains, plantar fasciitis, and common foot presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/foot-ankle" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/foot-ankle" />

    </div>
  );
}
