import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/womens-health/quiz.json';

export const metadata: Metadata = { title: "Women's Health — Quiz" };

export default function WomensHealthQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Women&apos;s Health</div>
        <h1>🌸 Women&apos;s Health — Quiz</h1>
        <p>Test your knowledge of menstrual disorders, contraception, menopause, cervical screening, and breast health in the Australian NP context.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />

      <Quiz moduleId="womens-health" questions={questions} />
    </>
  );
}
