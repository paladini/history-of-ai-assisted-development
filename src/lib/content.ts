import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import type { TimelineEvent } from '../types/timeline';

export function loadEvents(): TimelineEvent[] {
  const filePath = new URL('../../content/timeline/events.yaml', import.meta.url);
  const content = readFileSync(filePath, 'utf-8');
  return parse(content) as TimelineEvent[];
}

export function loadGlossaryEntries() {
  const modules = import.meta.glob('../../content/glossary/*.mdx', { eager: true });
  return Object.entries(modules).map(([path, mod]) => {
    const frontmatter = (mod as { frontmatter?: Record<string, unknown> }).frontmatter ?? {};
    const fileSlug = path.replace(/\\/g, '/').split('/').pop()?.replace('.mdx', '') ?? '';
    return {
      slug: (frontmatter.slug as string) ?? fileSlug,
      title: (frontmatter.title as string) ?? '',
      description: (frontmatter.description as string) ?? '',
      order: (frontmatter.order as number) ?? 99,
    };
  }).sort((a, b) => a.order - b.order);
}
