import type { EventSource } from '../../types/timeline';

interface SourceCitationProps {
  sources: EventSource[];
  className?: string;
}

export function SourceCitation({ sources, className = '' }: SourceCitationProps) {
  if (!sources.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-copilot)] hover:text-[var(--color-copilot)]"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {source.label}
        </a>
      ))}
    </div>
  );
}
