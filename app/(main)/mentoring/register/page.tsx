import type { Metadata } from 'next';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import RegisterMentorForm from './RegisterMentorForm';

export const metadata: Metadata = {
  title: 'Register as a Mentor — NPCollab',
  description: 'Register as a mentor on NPCollab and make yourself available to NPs and transitioning practitioners seeking guidance.',
};

export const dynamic = 'force-dynamic';

export default async function RegisterMentorPage() {
  const session = await getSession();
  if (!session) redirect('/login?redirect=/mentoring/register');

  // Fetch current user's details
  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!user || !user.active || !user.approved) {
    redirect('/login');
  }

  // Check for existing mentor profile (for edit mode)
  let existing = null;
  try {
    const [row] = await db
      .select()
      .from(mentors)
      .where(eq(mentors.userId, user.id))
      .limit(1);
    if (row) existing = row;
  } catch {
    // Table may not exist yet — fail silently
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Mentoring</div>
        <h1>✏️ {existing ? 'Edit Your Mentor Profile' : 'Register as a Mentor'}</h1>
        <p>
          {existing
            ? 'Update your mentor profile. Changes take effect immediately.'
            : 'Make yourself available to NPs and transitioning practitioners looking for guidance.'}
        </p>
      </div>

      <div className="content-prose">
        {/* Intro */}
        {!existing && (
          <div className="info-box" style={{ marginBottom: '32px' }}>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Register as a mentor to make yourself available to NPs and transitioning practitioners
              who are looking for guidance. You control your availability and can update or deactivate
              your profile at any time.
            </p>
          </div>
        )}

        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '32px',
        }}>
          <RegisterMentorForm
            defaultName={user.name}
            existing={existing
              ? {
                  id:            existing.id,
                  name:          existing.name,
                  credentials:   existing.credentials,
                  specialtyArea: existing.specialtyArea,
                  state:         existing.state,
                  currentRole:   existing.currentRole,
                  employer:      existing.employer,
                  bio:           existing.bio,
                  mode:          existing.mode,
                  maxMentees:    existing.maxMentees,
                  active:        existing.active,
                }
              : null
            }
          />
        </div>
      </div>
    </>
  );
}
