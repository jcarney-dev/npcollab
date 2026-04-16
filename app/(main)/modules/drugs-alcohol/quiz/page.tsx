import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/drugs-alcohol/quiz.json';

export default function DrugsAlcoholQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Drugs & Alcohol — Quiz</h1>
        <p>Substance use disorders — assessment and management in NP practice</p>
      </div>
      <ModuleTabs moduleId="drugs-alcohol" />

      <Quiz moduleId="drugs-alcohol" moduleName="Drugs & Alcohol" questions={questions}
      />

      <ModuleNav moduleId="drugs-alcohol" />
    </>
  );
}
