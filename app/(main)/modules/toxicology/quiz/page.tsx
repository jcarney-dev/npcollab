import Quiz from '@/components/Quiz';
import questions from '@/content/modules/toxicology/quiz.json';

export default function ToxicologyQuizPage() {
  return (
    <Quiz
      moduleId="toxicology"
      questions={questions}
    />
  );
}
