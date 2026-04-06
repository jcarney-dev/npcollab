import Quiz from '@/components/Quiz';
import questions from '@/content/modules/gu-nephrology/quiz.json';

export default function GUNephrologyQuizPage() {
  return (
    <Quiz
      moduleId="gu-nephrology"
      questions={questions}
    />
  );
}
