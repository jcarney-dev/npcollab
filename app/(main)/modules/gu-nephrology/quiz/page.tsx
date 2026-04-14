import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/gu-nephrology/quiz.json';

export default function GUNephrologyQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>GU & Nephrology — Quiz</h1>
        <p>Urinary tract, renal, and male genitourinary presentations in NP practice</p>
      </div>
      <ModuleTabs moduleId="gu-nephrology" />

      <Quiz
        moduleId="gu-nephrology"
        questions={questions}
      />

      <ModuleNav moduleId="gu-nephrology" />
    </>
  );
}
