import type { Sponsor } from '@/lib/schema';

interface SidebarSponsorProps {
  sponsor: Sponsor;
}

/** Tasteful sponsor card shown at the bottom of the sidebar. */
export function SidebarSponsorCard({ sponsor }: SidebarSponsorProps) {
  return (
    <div className="sidebar-sponsor">
      <span className="sidebar-sponsor-label">Sponsored</span>
      <a
        href={sponsor.websiteUrl || '#'}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="sidebar-sponsor-link"
      >
        {sponsor.logoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={sponsor.logoUrl}
            alt={sponsor.companyName}
            className="sidebar-sponsor-logo"
          />
        ) : (
          <span className="sidebar-sponsor-name">{sponsor.companyName}</span>
        )}
      </a>
    </div>
  );
}

interface HomepageSponsorProps {
  sponsor: Sponsor;
}

/** Larger sponsor card shown on the homepage. */
export function HomepageSponsorCard({ sponsor }: HomepageSponsorProps) {
  return (
    <div className="homepage-sponsor">
      <span className="homepage-sponsor-label">Sponsored</span>
      <a
        href={sponsor.websiteUrl || '#'}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="homepage-sponsor-link"
      >
        {sponsor.logoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={sponsor.logoUrl}
            alt={sponsor.companyName}
            className="homepage-sponsor-logo"
          />
        ) : (
          <span className="homepage-sponsor-name">{sponsor.companyName}</span>
        )}
        <span className="homepage-sponsor-text">
          Proudly supporting NPCollab
        </span>
      </a>
    </div>
  );
}

interface ModuleSponsorProps {
  sponsor: Sponsor;
}

/** Small "supported by" attribution at the bottom of a module overview. */
export function ModuleSponsorCard({ sponsor }: ModuleSponsorProps) {
  return (
    <div className="module-sponsor">
      <span className="module-sponsor-label">Supported by</span>
      <a
        href={sponsor.websiteUrl || '#'}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="module-sponsor-link"
      >
        {sponsor.logoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={sponsor.logoUrl}
            alt={sponsor.companyName}
            className="module-sponsor-logo"
          />
        ) : (
          <span className="module-sponsor-name">{sponsor.companyName}</span>
        )}
      </a>
    </div>
  );
}
