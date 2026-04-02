'use client';

import { useState, useCallback } from 'react';

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  moduleId: string;
  questions: Question[];
}

interface QuizState {
  current: number;
  answers: Record<number, number>;
  score: number;
  done: boolean;
}

export default function Quiz({ moduleId, questions }: QuizProps) {
  const [state, setState] = useState<QuizState>({
    current: 0,
    answers: {},
    score: 0,
    done: false,
  });

  const total = questions.length;
  const q = questions[state.current];
  const answered = state.answers[state.current];
  const progress = state.done ? 100 : Math.round((state.current / total) * 100);

  const selectAnswer = useCallback((selected: number) => {
    if (state.answers[state.current] !== undefined) return;
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [prev.current]: selected },
      score: selected === questions[prev.current].correct ? prev.score + 1 : prev.score,
    }));
  }, [state.answers, state.current, questions]);

  const goNext = () => {
    if (state.current < total - 1) {
      setState(prev => ({ ...prev, current: prev.current + 1 }));
    } else {
      setState(prev => ({ ...prev, done: true }));
    }
  };

  const goPrev = () => {
    if (state.current > 0) {
      setState(prev => ({ ...prev, current: prev.current - 1 }));
    }
  };

  const retry = () => {
    setState({ current: 0, answers: {}, score: 0, done: false });
  };

  if (state.done) {
    const pct = Math.round((state.score / total) * 100);
    const msg = pct >= 80
      ? '🎉 Excellent work!'
      : pct >= 60
        ? '👍 Good effort — review the areas you missed.'
        : '📚 Keep studying — review the module content and retry.';

    return (
      <div className="quiz-wrapper">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: '100%' }} />
        </div>
        <div className="quiz-counter">Quiz complete</div>
        <div className="quiz-results">
          <div className="score-circle">
            <span className="score-num">{state.score}</span>
            <span className="score-denom">/ {total}</span>
          </div>
          <h3>{msg}</h3>
          <p>You scored {pct}% — {state.score} correct out of {total} questions.</p>
          <button
            className="btn-quiz-nav gold"
            style={{ margin: '0 auto', display: 'flex' }}
            type="button"
            onClick={retry}
          >
            ↺ Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper" id={`quiz-${moduleId}`}>
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="quiz-counter">Question {state.current + 1} of {total}</div>
      <div className="quiz-question-card">
        <div className="q-text">{q.q}</div>
        <div className="quiz-options">
          {q.options.map((option, i) => {
            let cls = 'quiz-option';
            if (answered !== undefined) {
              if (i === q.correct) cls += ' revealed';
              else if (i === answered && answered !== q.correct) cls += ' incorrect';
            }
            return (
              <button
                key={i}
                className={cls}
                type="button"
                disabled={answered !== undefined}
                onClick={() => selectAnswer(i)}
              >
                {option}
              </button>
            );
          })}
        </div>
        {answered !== undefined && (
          <div className="quiz-explanation show">{q.explanation}</div>
        )}
      </div>
      <div className="quiz-nav">
        <button
          className="btn-quiz-nav"
          type="button"
          disabled={state.current === 0}
          onClick={goPrev}
        >
          ← Previous
        </button>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {Object.keys(state.answers).length}/{total} answered
        </span>
        <button
          className="btn-quiz-nav gold"
          type="button"
          onClick={goNext}
        >
          {state.current < total - 1 ? 'Next →' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
}
