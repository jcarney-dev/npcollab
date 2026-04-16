import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { moduleCompletions, usersV2 } from '@/lib/schema';
import { getSession } from '@/lib/session';
import { eq, and } from 'drizzle-orm';
import { renderCertificate } from '@/lib/certificate';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ completionId: string }> }
) {
  // Validate session
  const session = await getSession();
  if (!session || !session.userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const { completionId } = await params;

  if (!completionId || completionId.length < 8) {
    return NextResponse.json({ error: 'Invalid completion ID' }, { status: 400 });
  }

  // Fetch the completion record
  const [completion] = await db
    .select()
    .from(moduleCompletions)
    .where(eq(moduleCompletions.id, completionId))
    .limit(1);

  if (!completion) {
    return NextResponse.json({ error: 'Completion record not found' }, { status: 404 });
  }

  // Confirm it belongs to the logged-in user
  if (completion.userId !== session.userId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Confirm they actually passed
  if (!completion.passed) {
    return NextResponse.json({ error: 'Module was not passed' }, { status: 403 });
  }

  // Fetch user's full name
  const [user] = await db
    .select({ name: usersV2.name })
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Generate the PDF buffer
  const pdfBuffer = await renderCertificate({
    userName:     user.name,
    moduleName:   completion.moduleName,
    completedAt:  completion.completedAt,
    completionId: completion.id,
    cpdHours:     parseFloat(completion.cpdHours ?? '1'),
  });

  // Mark certificate as generated on first download
  if (!completion.certificateGenerated) {
    await db
      .update(moduleCompletions)
      .set({ certificateGenerated: true })
      .where(
        and(
          eq(moduleCompletions.id, completionId),
          eq(moduleCompletions.userId, session.userId)
        )
      );
  }

  // Sanitise module slug for filename
  const slugSafe = completion.moduleSlug.replace(/[^a-zA-Z0-9-]/g, '-');
  const filename = `NPCollab-${slugSafe}-Certificate.pdf`;

  const arrayBuffer = (pdfBuffer.buffer as ArrayBuffer).slice(
    pdfBuffer.byteOffset,
    pdfBuffer.byteOffset + pdfBuffer.byteLength
  );

  return new Response(arrayBuffer, {
    status: 200,
    headers: {
      'Content-Type':        'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length':      String(pdfBuffer.byteLength),
    },
  });
}
