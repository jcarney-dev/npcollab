import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/msk-hip-pelvis/quiz.json';

export default function MskHipPelvisQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Hip &amp; Pelvis</h1>
        <p>Hip and pelvis pain, osteoarthritis, trochanteric bursitis, and hip fracture</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-prose">
        <Quiz moduleId="musculoskeletal/hip-pelvis" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/hip-pelvis" />

    </div>
  );
}
