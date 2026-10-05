import { siteConfig } from '../data/siteConfig';
import { serviceLinks, guideLinks, hoodLinks } from '../lib/site';
export function GET() {
  const o = siteConfig.origin;
  const list = (a: { href: string; label: string }[]) => a.map((l) => `- [${l.label}](${o}${l.href})`).join('\n');
  const body = `# ${siteConfig.brand}\n\n> Hydro jetting information and service requests for drain and sewer lines in Huber Heights, Ohio. Phone: ${siteConfig.phoneDisplay}. Service availability and pipe suitability are confirmed with a qualified professional. No service or result is guaranteed.\n\n## Services\n\n${list(serviceLinks)}\n\n## Guides\n\n${list(guideLinks)}\n\n## Neighborhoods\n\n${list(hoodLinks)}\n\n## Site\n\n- [Home](${o}/)\n- [Request Service](${o}/contact/)\n- [Sitemap](${o}/sitemap.xml)\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
