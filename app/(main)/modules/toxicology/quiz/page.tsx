import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import questions from '@/content/modules/toxicology/quiz.json';

export default function ToxicologyQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Toxicology — Quiz</h1>
        <p>Toxidrome recognition, overdose management, antidotes, and poisoning presentations</p>
      </div>
      <ModuleTabs moduleId="toxicology" />

      <Quiz moduleId="toxicology" moduleName="Toxicology" questions={questions}
      />

      <ModuleNav moduleId="toxicology" />
    </>
  );
}
