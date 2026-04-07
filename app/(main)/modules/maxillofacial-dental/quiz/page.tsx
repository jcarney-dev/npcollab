import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import quizData from '@/content/modules/maxillofacial-dental/quiz.json';

export default function MaxillofacialDentalQuizPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦷</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>Maxillofacial &amp; Dental — Quiz</h1>
          <p className="page-subtitle">20 questions covering maxillofacial and dental clinical presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />

      <div className="content-body">
        <Quiz moduleId="maxillofacial-dental" questions={quizData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
