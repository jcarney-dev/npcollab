import Quiz from '@/components/Quiz';
import questions from '@/content/modules/general-medical/quiz.json';

export default function GeneralMedicalQuizPage() {
  return (
    <Quiz
      moduleId="general-medical"
      questions={questions}
    />
  );
}
