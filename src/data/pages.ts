import content from './content.json';
export type Block = { h: string; ps: string[] };
export type PageContent = { h1: string; intro: string; lead: string[]; sections: Block[]; faqs: { q: string; a: string }[]; title: string; desc: string };
export const C = content as unknown as Record<string, PageContent>;
export const services = [
  'severe-grease-and-sludge', 'tree-root-intrusions', 'recurring-clogs-and-slow-drains', 'mineral-and-scale-deposits', 'preventative-maintenance',
].map((slug) => ({ slug, name: C[slug].h1.replace(/ in Huber Heights, OH$/, ''), blurb: C[slug].lead[0] ?? C[slug].intro }));
export const guides = [
  { slug: 'how-hydro-jetting-works', name: 'How Hydro Jetting Works', blurb: C['how-hydro-jetting-works'].intro },
  { slug: 'hydro-jetting-vs-snaking', name: 'Hydro Jetting vs Snaking', blurb: C['hydro-jetting-vs-snaking'].intro },
];
