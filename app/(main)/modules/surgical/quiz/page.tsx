import Quiz from '@/components/Quiz';
import questions from '@/content/modules/surgical/quiz.json';

export default function SurgicalQuizPage() {
  return (
    <Quiz
      moduleId="surgical"
      questions={questions}
    />
  );
}
