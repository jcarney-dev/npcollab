import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { moduleCompletions } from '@/lib/schema';
import { getSession } from '@/lib/session';
import { and, eq, desc } from 'drizzle-orm';

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
    .orderBy(desc(moduleCompletions.completedAt))
    .limit(1);

  const alreadyPassed = existing.length > 0;
  const existingCompletionId = alreadyPassed ? existing[0].id : null;

  // Record the attempt — skip if already passed and this attempt also passes
  // (don't create duplicate "passed" completions; still record failed attempts)
  let newCompletionId: string | null = null;
  if (!alreadyPassed || !passed) {
    const inserted = await db
      .insert(moduleCompletions)
      .values({
        userId,
        moduleSlug: module_slug,
        moduleName: module_name,
        quizScore: quiz_score,
        passed,
        cpdHours: '1.00',
      })
      .returning({ id: moduleCompletions.id });
    newCompletionId = inserted[0]?.id ?? null;
  }

  // completionId for certificate: use new record if first pass, else existing pass record
  const completionId = passed ? (newCompletionId ?? existingCompletionId) : null;

  return NextResponse.json({
    success: true,
    passed,
    firstCompletion: passed && !alreadyPassed,
    completionId,
  });
}
