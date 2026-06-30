import type { TimelineEvent } from '../../types/timeline';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../../types/timeline';
import { SourceCitation } from '../layout/SourceCitation';

interface EventCardProps {
  event: TimelineEvent;
}

export function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <article
      className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-all hover:border-[var(--era-color,var(--color-border))] hover:shadow-lg hover:shadow-black/20"
      aria-labelledby={`event-${event.id}`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <time
          dateTime={event.date}
          className="font-mono text-sm text-[var(--color-text-muted)]"
        >
          {formattedDate}
        </time>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-medium"
          style={{
            backgroundColor: `color-mix(in srgb, ${CATEGORY_COLORS[event.category]} 15%, transparent)`,
            color: CATEGORY_COLORS[event.category],
          }}
        >
          {CATEGORY_LABELS[event.category]}
        </span>
      </div>

      <h3
        id={`event-${event.id}`}
        className="mb-2 font-serif text-xl text-[var(--color-text)]"
      >
        {event.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {event.summary}
      </p>

      {event.stats && event.stats.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-3">
          {event.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-[var(--color-bg-elevated)] px-3 py-2"
            >
              <div className="text-lg font-semibold text-[var(--era-color,var(--color-copilot))]">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <SourceCitation sources={event.sources} />
    </article>
  );
}
