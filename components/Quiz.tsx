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
  moduleName: string;
  questions: Question[];
}

interface QuizState {
  current: number;
  answers: Record<number, number>;
  score: number;
  done: boolean;
}

type SubmitState = 'idle' | 'submitting' | 'done' | 'error';

export default function Quiz({ moduleId, moduleName, questions }: QuizProps) {
  const [state, setState] = useState<QuizState>({
    current: 0,
    answers: {},
    score: 0,
    done: false,
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [firstCompletion, setFirstCompletion] = useState(false);
  const [completionId, setCompletionId] = useState<string | null>(null);

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

  const submitCompletion = async (pct: number) => {
    setSubmitState('submitting');
    try {
      const res = await fetch('/api/cpd/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          module_slug: moduleId,
          module_name: moduleName,
          quiz_score: pct,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setFirstCompletion(!!data.firstCompletion);
        setCompletionId(data.completionId ?? null);
        setSubmitState('done');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  const goPrev = () => {
    if (state.current > 0) {
      setState(prev => ({ ...prev, current: prev.current - 1 }));
    }
  };

  const retry = () => {
    setState({ current: 0, answers: {}, score: 0, done: false });
    setSubmitState('idle');
    setFirstCompletion(false);
    setCompletionId(null);
  };

  const handleFinish = () => {
    const finalScore = state.score;
    const pct = Math.round((finalScore / total) * 100);
    setState(prev => ({ ...prev, done: true }));
    submitCompletion(pct);
  };

  const goNext = () => {
    if (state.current < total - 1) {
      setState(prev => ({ ...prev, current: prev.current + 1 }));
    }
  };

  if (state.done) {
    const pct = Math.round((state.score / total) * 100);
    const passed = pct >= 80;
    const certHref = completionId ? `/api/cpd/certificate/${completionId}` : null;

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

          {passed ? (
            /* ── Pass card ── */
            <div style={{
              background: '#f0faf4',
              border: '1.5px solid #2A7D4F',
              borderRadius: '12px',
              padding: '20px 24px',
              marginTop: '20px',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>🎉</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '17px',
                color: '#1b5e35',
                marginBottom: '6px',
              }}>
                Congratulations — you passed!
              </div>
              <div style={{ fontSize: '14px', color: '#2A7D4F', lineHeight: 1.6, marginBottom: '12px' }}>
                You scored <strong>{pct}%</strong> and have earned <strong>1 CPD hour</strong> for this module.
              </div>

              {/* Certificate download — first completion */}
              {submitState === 'done' && firstCompletion && certHref && (
                <div>
                  <div style={{ fontSize: '13px', color: '#1b5e35', marginBottom: '12px' }}>
                    ✅ Your CPD record has been saved.{' '}
                    <a href="/dashboard/cpd" style={{ color: '#2A7D4F', fontWeight: 600 }}>
                      View your CPD record →
                    </a>
                  </div>
                  <a
                    href={certHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: 'var(--gold)',
                      color: 'var(--navy)',
                      borderRadius: '7px',
                      fontSize: '14px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      marginBottom: '8px',
                    }}
                  >
                    📄 Download Your CPD Certificate
                  </a>
                </div>
              )}

              {/* Already completed — point to dashboard */}
              {submitState === 'done' && !firstCompletion && (
                <div style={{ fontSize: '13px', color: '#2A7D4F', marginBottom: '12px' }}>
                  You have already completed this module. Visit your{' '}
                  <a href="/dashboard/cpd" style={{ color: '#2A7D4F', fontWeight: 700, textDecoration: 'underline' }}>
                    CPD dashboard
                  </a>{' '}
                  to download your certificate.
                </div>
              )}

              {submitState === 'submitting' && (
                <div style={{ fontSize: '13px', color: '#2A7D4F', marginBottom: '12px' }}>
                  Saving your CPD record…
                </div>
              )}
              {submitState === 'error' && (
                <div style={{ fontSize: '13px', color: 'var(--error)', marginBottom: '12px' }}>
                  CPD record could not be saved — please{' '}
                  <a href="/login" style={{ color: 'var(--error)', fontWeight: 600 }}>log in</a>{' '}
                  and retry.
                </div>
              )}
            </div>
          ) : (
            /* ── Fail card ── */
            <div style={{
              background: 'var(--navy)',
              border: '1.5px solid var(--navy-light)',
              borderRadius: '12px',
              padding: '20px 24px',
              marginTop: '20px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '17px',
                color: '#fff',
                marginBottom: '6px',
              }}>
                Not quite — you scored {pct}%
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                You need <strong style={{ color: '#fff' }}>80%</strong> to earn your CPD certificate.
                Review the module content and try again.
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            <button
              className="btn-quiz-nav gold"
              style={{ margin: 0 }}
              type="button"
              onClick={retry}
            >
              ↺ Retry Quiz
            </button>
            {passed && (
              <a
                href={`/modules/${moduleId}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  background: 'var(--navy)',
                  color: '#fff',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1.5px solid var(--navy-light)',
                }}
              >
                Back to Module
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── In-progress quiz ──────────────────────────────────────────────────────
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
        {state.current < total - 1 ? (
          <button
            className="btn-quiz-nav gold"
            type="button"
            onClick={goNext}
          >
            Next →
          </button>
        ) : (
          <button
            className="btn-quiz-nav gold"
            type="button"
            onClick={handleFinish}
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
}
