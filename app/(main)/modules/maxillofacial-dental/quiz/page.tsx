import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/maxillofacial-dental/quiz.json';

export default function MaxillofacialDentalQuizPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦷 Maxillofacial &amp; Dental</h1>
        <p>Dental emergencies, orofacial infections, oral mucosal conditions, facial trauma, and oral cancer recognition for NP practice.</p>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />

      <div className="content-prose">
        <Quiz moduleId="maxillofacial-dental" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="maxillofacial-dental" />

    </div>
  );
}
