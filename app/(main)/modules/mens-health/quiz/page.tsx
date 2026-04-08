import type { Metadata } from 'next';
import Quiz from '@/components/Quiz';
import ModuleTabs from '@/components/ModuleTabs';
import questions from '@/content/modules/mens-health/quiz.json';

export const metadata: Metadata = {
  title: "Quiz | Men's Health Module",
  description: "20-question men's health quiz covering ED, testosterone deficiency, BPH, prostate cancer screening, mental health, and sexual health",
};

export default function MensHealthQuizPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔵 Men&apos;s Health</h1>
        <p>Erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, and cardiovascular risk</p>
      </div>
      <ModuleTabs moduleId="mens-health" />

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Men&apos;s Health Quiz — 20 Questions</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Mixed difficulty — covers erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, sexual health, and cardiovascular risk. Each question includes a detailed explanation.</p>
      </div>
      <Quiz moduleId="mens-health" questions={questions} />
    </>
  );
}
