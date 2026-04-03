import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import Quiz from '@/components/Quiz';
import questions from '@/content/modules/gi-hepatobiliary/quiz.json';

export const metadata: Metadata = { title: 'GI & Hepatobiliary — Quiz' };

export default function GiQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">GI &amp; Hepatobiliary</div>
        <h1>🫃 Quiz</h1>
        <p>Test your knowledge of gastrointestinal and hepatobiliary presentations, investigations, and management.</p>
      </div>

      <ModuleTabs moduleId="gi-hepatobiliary" />

      <Quiz moduleId="gi-hepatobiliary" questions={questions} />
    </>
  );
}
