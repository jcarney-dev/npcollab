import { db } from '@/lib/db';
import { moduleContributors, ModuleContributor } from '@/lib/schema';
import { eq } from 'drizzle-orm';

interface Props {
  moduleSlug: string;
}

export default async function ContributorCard({ moduleSlug }: Props) {
  let contributors: ModuleContributor[] = [];
  try {
    contributors = await db
      .select()
      .from(moduleContributors)
      .where(eq(moduleContributors.moduleSlug, moduleSlug))
      .orderBy(moduleContributors.displayOrder);
  } catch {
    // Fail silently if table doesn't exist yet
  }

  if (contributors.length === 0) return null;

  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px',
      marginTop: '32px',
    }}>
      <div style={{
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '20px',
      }}>
        Content
      </div>

      {contributors.map((contributor, idx) => (
        <div
          key={contributor.id}
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            marginBottom: idx < contributors.length - 1 ? '20px' : 0,
            paddingBottom: idx < contributors.length - 1 ? '20px' : 0,
            borderBottom: idx < contributors.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '50%',
            background: 'var(--navy)',
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--gold)',
          }}>
            {contributor.avatarInitials}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '2px',
              fontSize: '0.95rem',
            }}>
              {contributor.name}
            </div>

            {contributor.title && (
              <div style={{
                color: 'var(--gold)',
                fontSize: '0.85rem',
                marginBottom: '4px',
                fontWeight: 600,
              }}>
                {contributor.title}
              </div>
            )}

            {contributor.credentials && (
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                marginBottom: '6px',
              }}>
                {contributor.credentials}
              </div>
            )}

            {contributor.bio && (
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {contributor.bio}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
