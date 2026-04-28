'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const ENDPOINT = '/api/track/pageview';

function getOrCreateSessionId(): string {
  try {
    let id = sessionStorage.getItem('npcollab_session_id');
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem('npcollab_session_id', id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export default function PageTracker({ userId }: { userId: string }) {
  const pathname        = usePathname();
  const startTimeRef    = useRef<number>(0);
  const sessionIdRef    = useRef<string>('');
  const lastPathRef     = useRef<string>('');

  function fireBeacon(path: string, startMs: number) {
    if (!path || !sessionIdRef.current) return;
    const duration = Math.round((Date.now() - startMs) / 1000);
    const payload = JSON.stringify({ path, duration, sessionId: sessionIdRef.current });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: 'application/json' }));
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }

  // Initialise session once on mount, register global event listeners
  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
    lastPathRef.current  = pathname;
    startTimeRef.current = Date.now();

    function handleVisibility() {
      if (document.visibilityState === 'hidden') {
        fireBeacon(lastPathRef.current, startTimeRef.current);
        // Reset so returning to the tab starts a fresh window
        startTimeRef.current = Date.now();
      }
    }

    function handleUnload() {
      fireBeacon(lastPathRef.current, startTimeRef.current);
    }

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', handleUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire for the leaving page on every soft navigation
  useEffect(() => {
    if (!sessionIdRef.current) return;
    if (lastPathRef.current && lastPathRef.current !== pathname) {
      fireBeacon(lastPathRef.current, startTimeRef.current);
    }
    lastPathRef.current  = pathname;
    startTimeRef.current = Date.now();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // userId prop guards rendering in the layout — not sent in the payload
  void userId;

  return null;
}
