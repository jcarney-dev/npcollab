import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/general-medical/quiz.json';

export default function GeneralMedicalQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>General Medical — Quiz</h1>
        <p>Undifferentiated and multisystem presentations in NP practice</p>
      </div>
      <ModuleTabs moduleId="general-medical" />

      <Quiz moduleId="general-medical" moduleName="General Medical" questions={questions}
      />

      <ModuleNav moduleId="general-medical" />
    </>
  );
}
