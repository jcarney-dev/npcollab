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
  const pathname       = usePathname();
  const startTimeRef   = useRef<number>(0);
  const sessionIdRef   = useRef<string>('');
  const lastPathRef    = useRef<string>('');   // current page
  const referrerRef    = useRef<string>('');   // page before current
  const scrollDepthRef = useRef<number>(0);    // max % scrolled on current page

  function fireBeacon(path: string, startMs: number, referrer: string, scrollDepth: number) {
    if (!path || !sessionIdRef.current) return;
    const duration = Math.round((Date.now() - startMs) / 1000);
    const payload = JSON.stringify({
      path,
      referrer,
      duration,
      sessionId:   sessionIdRef.current,
      scrollDepth: Math.round(scrollDepth),
    });
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

  function getScrollDepth(): number {
    const el = document.documentElement;
    const scrolled = el.scrollTop + el.clientHeight;
    const total = el.scrollHeight;
    return total > 0 ? (scrolled / total) * 100 : 0;
  }

  // Mount once: init session, register scroll + visibility + unload listeners
  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
    lastPathRef.current  = pathname;
    startTimeRef.current = Date.now();
    scrollDepthRef.current = getScrollDepth();

    function handleScroll() {
      const depth = getScrollDepth();
      if (depth > scrollDepthRef.current) scrollDepthRef.current = depth;
    }

    function handleVisibility() {
      if (document.visibilityState === 'hidden') {
        fireBeacon(lastPathRef.current, startTimeRef.current, referrerRef.current, scrollDepthRef.current);
        startTimeRef.current = Date.now();
        scrollDepthRef.current = getScrollDepth();
      }
    }

    function handleUnload() {
      fireBeacon(lastPathRef.current, startTimeRef.current, referrerRef.current, scrollDepthRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', handleUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire beacon for the leaving page on every soft navigation
  useEffect(() => {
    if (!sessionIdRef.current) return;
    if (lastPathRef.current && lastPathRef.current !== pathname) {
      fireBeacon(lastPathRef.current, startTimeRef.current, referrerRef.current, scrollDepthRef.current);
      referrerRef.current    = lastPathRef.current;
      lastPathRef.current    = pathname;
      startTimeRef.current   = Date.now();
      scrollDepthRef.current = getScrollDepth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  void userId;
  return null;
}
