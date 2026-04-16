import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/surgical/quiz.json';

export default function SurgicalQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Surgical — Quiz</h1>
        <p>Perioperative assessment, acute surgical presentations, and post-operative complications</p>
      </div>
      <ModuleTabs moduleId="surgical" />

      <Quiz moduleId="surgical" moduleName="Surgical" questions={questions}
      />

      <ModuleNav moduleId="surgical" />
    </>
  );
}
