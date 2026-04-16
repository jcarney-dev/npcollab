import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { moduleCompletions } from '@/lib/schema';
import { getSession } from '@/lib/session';
import { and, eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  // Validate session
  const session = await getSession();
  if (!session || !session.userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // Parse body
  let body: { module_slug?: string; module_name?: string; quiz_score?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { module_slug, module_name, quiz_score } = body;

  if (!module_slug || !module_name || typeof quiz_score !== 'number') {
    return NextResponse.json(
      { error: 'Missing required fields: module_slug, module_name, quiz_score' },
      { status: 400 }
    );
  }

  if (quiz_score < 0 || quiz_score > 100) {
    return NextResponse.json({ error: 'quiz_score must be between 0 and 100' }, { status: 400 });
  }

  const passed = quiz_score >= 80;
  const userId = session.userId;

  // Check if user has already passed this module
  const existing = await db
    .select({ id: moduleCompletions.id })
    .from(moduleCompletions)
    .where(
      and(
        eq(moduleCompletions.userId, userId),
        eq(moduleCompletions.moduleSlug, module_slug),
        eq(moduleCompletions.passed, true)
      )
    )
    .limit(1);

  const alreadyPassed = existing.length > 0;

  // Always record the attempt — only skip if already passed and this attempt also passes
  // (i.e. don't create duplicate "passed" completions, but still record failed attempts)
  if (!alreadyPassed || !passed) {
    await db.insert(moduleCompletions).values({
      userId,
      moduleSlug: module_slug,
      moduleName: module_name,
      quizScore: quiz_score,
      passed,
      cpdHours: '1.00',
    });
  }

  return NextResponse.json({
    success: true,
    passed,
    firstCompletion: passed && !alreadyPassed,
  });
}
