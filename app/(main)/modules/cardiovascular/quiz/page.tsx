import Quiz from '@/components/Quiz';
import questions from '@/content/modules/cardiovascular/quiz.json';

export default function CardiovascularQuizPage() {
  return (
    <Quiz
      moduleId="cardiovascular"
      questions={questions}
    />
  );
}
