import type { Metadata } from 'next';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import IntroRequestForm from './IntroRequestForm';

export const dynamic = 'force-dynamic';

interface Props {
  params:      { id: string };
  searchParams: { saved?: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const [mentor] = await db
      .select({ name: mentors.name, specialtyArea: mentors.specialtyArea })
      .from(mentors)
      .where(eq(mentors.id, parseInt(params.id, 10)))
      .limit(1);
    if (!mentor) return { title: 'Mentor Profile — NPCollab' };
    return {
      title: `${mentor.name} — NPCollab Mentoring`,
      description: `${mentor.name} is a mentor on NPCollab specialising in ${mentor.specialtyArea}.`,
    };
  } catch {
    return { title: 'Mentor Profile — NPCollab' };
  }
}

export default async function MentorProfilePage({ params, searchParams }: Props) {
  const session = await getSession();
  if (!session) redirect(`/login?redirect=/mentoring/${params.id}`);

  const mentorId = parseInt(params.id, 10);
  if (isNaN(mentorId)) notFound();

  // Fetch mentor + their email
  let mentor = null;
  let mentorEmail = '';
  try {
    const [row] = await db
      .select({
        id:            mentors.id,
        userId:        mentors.userId,
        name:          mentors.name,
        credentials:   mentors.credentials,
        specialtyArea: mentors.specialtyArea,
        state:         mentors.state,
        currentRole:   mentors.currentRole,
        employer:      mentors.employer,
        bio:           mentors.bio,
        mode:          mentors.mode,
        maxMentees:    mentors.maxMentees,
        active:        mentors.active,
        createdAt:     mentors.createdAt,
      })
      .from(mentors)
      .where(eq(mentors.id, mentorId))
      .limit(1);

    if (!row) notFound();
    mentor = row;

    // Fetch email for display
    const [mUser] = await db
      .select({ email: usersV2.email })
      .from(usersV2)
      .where(eq(usersV2.id, row.userId))
      .limit(1);
    mentorEmail = mUser?.email ?? '';
  } catch {
    notFound();
  }

  const isSelf = mentor.userId === session.userId;
  const modes  = mentor.mode ? mentor.mode.split(',').map(m => m.trim()) : [];

  const initials = mentor.name
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const savedSuccess = searchParams.saved === '1';

  return (
    <>
      <div className="page-header">
        <div className="label">Mentoring</div>
        <h1>Mentor Profile</h1>
      </div>

      <div className="content-prose">
        {/* Back link */}
        <Link
          href="/mentoring"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginBottom: '24px',
          }}
        >
          ← Back to mentor directory
        </Link>

        {/* Save success banner */}
        {savedSuccess && (
          <div style={{
            padding: '14px 18px',
            background: '#f0fff4',
            border: '1px solid var(--success)',
            borderRadius: '8px',
            color: 'var(--success)',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '24px',
          }}>
            Your mentor profile has been saved and is now visible in the directory.
          </div>
        )}

        {!mentor.active && !isSelf && (
          <div style={{
            padding: '14px 18px',
            background: 'var(--off-white)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            marginBottom: '24px',
          }}>
            This mentor is not currently accepting new mentees.
          </div>
        )}

        {/* Profile card */}
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '28px',
        }}>
          {/* Gold header bar */}
          <div style={{ height: '6px', background: 'var(--gold)' }} />

          <div style={{ padding: '32px' }}>
            {/* Avatar + name */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                minWidth: '64px',
                borderRadius: '50%',
                background: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--gold)',
              }}>
                {initials}
              </div>
              <div>
                <h2 style={{
                  margin: '0 0 4px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.2,
                }}>
                  {mentor.name}
                  {mentor.credentials && (
                    <span style={{ fontWeight: 400, fontSize: '1rem', color: 'var(--text-muted)', marginLeft: '10px' }}>
                      {mentor.credentials}
                    </span>
                  )}
                </h2>
                {(mentor.currentRole || mentor.employer) && (
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {mentor.currentRole}
                    {mentor.currentRole && mentor.employer ? ' · ' : ''}
                    {mentor.employer}
                  </p>
                )}
              </div>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {mentor.specialtyArea && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: 'var(--gold-pale)',
                  color: 'var(--navy)',
                  border: '1px solid var(--gold-light)',
                  fontWeight: 600,
                }}>
                  {mentor.specialtyArea}
                </span>
              )}
              {mentor.state && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: 'rgba(11,24,41,0.06)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  fontWeight: 500,
                }}>
                  {mentor.state}
                </span>
              )}
              {modes.map(m => (
                <span key={m} style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: 'rgba(11,24,41,0.06)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  fontWeight: 500,
                }}>
                  {m}
                </span>
              ))}
            </div>

            {/* Detail grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '24px',
              padding: '20px',
              background: 'var(--off-white)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Specialty</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{mentor.specialtyArea || '—'}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Location</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{mentor.state || '—'}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Mentoring via</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{mentor.mode || '—'}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Max mentees</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                  Up to {mentor.maxMentees} at a time
                </div>
              </div>
            </div>

            {/* Bio */}
            {mentor.bio && (
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  About
                </div>
                <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--text)', fontSize: '0.95rem' }}>
                  {mentor.bio}
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <div style={{
              padding: '12px 14px',
              background: 'var(--off-white)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBottom: '24px',
            }}>
              NPCollab facilitates introductions only and does not monitor or guarantee mentoring relationships.
              All mentoring arrangements are between mentors and mentees directly.
            </div>

            {/* CTA */}
            <IntroRequestForm
              mentorId={mentor.id}
              mentorName={mentor.name}
              isSelf={isSelf}
            />
          </div>
        </div>
      </div>
    </>
  );
}
