import { siteConfig } from '../data/siteConfig';
import { services, guides } from '../data/pages';
import { neighborhoods } from '../data/neighborhoods';

export const SITE_URL = siteConfig.origin;
export const business = {
  name: siteConfig.brand,
  description: 'Hydro jetting information and service requests for drain and sewer lines in Huber Heights, Ohio.',
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phoneHref}`,
  phoneE164: siteConfig.phoneHref,
  city: 'Huber Heights', region: 'OH', regionName: 'Ohio', country: 'US',
} as const;

export const serviceLinks = services.map((s) => ({ href: `/services/${s.slug}/`, label: s.name }));
export const guideLinks = guides.map((g) => ({ href: `/guides/${g.slug}/`, label: g.name }));
export const hoodLinks = neighborhoods.map((n) => ({ href: `/neighborhood/${n.slug}/`, label: n.name }));
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services', children: serviceLinks },
  { href: '/guides/', label: 'Guides', children: guideLinks },
  { href: '/neighborhood/', label: 'Neighborhoods', children: hoodLinks },
  { href: '/contact/', label: 'Contact' },
] as const;
