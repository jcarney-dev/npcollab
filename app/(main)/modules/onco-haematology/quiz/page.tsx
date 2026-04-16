import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/onco-haematology/quiz.json';

export default function OncoHaematologyQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Onco-Haematology — Quiz</h1>
        <p>Oncology and haematology for NP practice</p>
      </div>
      <ModuleTabs moduleId="onco-haematology" />

      <Quiz moduleId="onco-haematology" moduleName="Oncology & Haematology" questions={questions}
      />

      <ModuleNav moduleId="onco-haematology" />
    </>
  );
}
