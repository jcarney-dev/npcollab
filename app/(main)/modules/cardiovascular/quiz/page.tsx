import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/cardiovascular/quiz.json';

export default function CardiovascularQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Cardiovascular — Quiz</h1>
        <p>Vascular disease, DVT, cerebrovascular disease, and CVD risk management</p>
      </div>
      <ModuleTabs moduleId="cardiovascular" />

      <Quiz
        moduleId="cardiovascular"
        questions={questions}
      />

      <ModuleNav moduleId="cardiovascular" />
    </>
  );
}
