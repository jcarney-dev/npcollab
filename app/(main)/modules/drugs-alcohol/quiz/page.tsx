import Quiz from '@/components/Quiz';
import questions from '@/content/modules/drugs-alcohol/quiz.json';

export default function DrugsAlcoholQuizPage() {
  return (
    <Quiz
      moduleId="drugs-alcohol"
      questions={questions}
    />
  );
}
