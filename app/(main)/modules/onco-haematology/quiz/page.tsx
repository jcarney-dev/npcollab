import Quiz from '@/components/Quiz';
import questions from '@/content/modules/onco-haematology/quiz.json';

export default function OncoHaematologyQuizPage() {
  return (
    <Quiz
      moduleId="onco-haematology"
      questions={questions}
    />
  );
}
