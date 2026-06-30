import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineEvent, EventCategory, EraId } from '../../types/timeline';
import { ERAS } from '../../types/timeline';
import { EventCard } from './EventCard';
import { EraBand } from './EraBand';

interface TimelineProps {
  events: TimelineEvent[];
}

const CATEGORIES: (EventCategory | 'all')[] = [
  'all',
  'tool',
  'protocol',
  'concept',
  'culture',
  'data',
];

export function Timeline({ events }: TimelineProps) {
  const [activeEra, setActiveEra] = useState<EraId | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<EventCategory | 'all'>('all');
  const prefersReducedMotion = useReducedMotion();

  const filteredEvents = useMemo(() => {
    return events
      .filter((e) => activeEra === 'all' || e.era === activeEra)
      .filter((e) => activeCategory === 'all' || e.category === activeCategory)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, activeEra, activeCategory]);

  const eventsByEra = useMemo(() => {
    const grouped = new Map<EraId, TimelineEvent[]>();
    for (const era of ERAS) {
      grouped.set(
        era.id,
        filteredEvents.filter((e) => e.era === era.id),
      );
    }
    return grouped;
  }, [filteredEvents]);

  return (
    <div className="timeline-container">
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by era">
          <button
            type="button"
            onClick={() => setActiveEra('all')}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              activeEra === 'all'
                ? 'bg-[var(--color-copilot)] text-white'
                : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
          >
            All eras
          </button>
          {ERAS.map((era) => (
            <button
              key={era.id}
              type="button"
              onClick={() => setActiveEra(era.id)}
              className={`${era.className} rounded-full px-3 py-1 text-sm transition-colors ${
                activeEra === era.id
                  ? 'bg-[var(--era-color)] text-white'
                  : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {era.number}. {era.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 text-sm capitalize transition-colors ${
                activeCategory === cat
                  ? 'bg-[var(--color-agent)] text-white'
                  : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Era overview bands */}
      <div className="mb-12 hidden gap-3 lg:grid lg:grid-cols-3 xl:grid-cols-6">
        {ERAS.map((era) => (
          <button
            key={era.id}
            type="button"
            onClick={() => setActiveEra(era.id === activeEra ? 'all' : era.id)}
            className="text-left"
          >
            <EraBand era={era} isActive={activeEra === era.id} />
          </button>
        ))}
      </div>

      {/* Timeline rail */}
      <div className="relative">
        <div
          className="absolute left-4 top-0 hidden h-full w-0.5 bg-[var(--color-border)] md:left-8 md:block lg:left-1/2 lg:-ml-px"
          aria-hidden="true"
        />

        {ERAS.map((era) => {
          const eraEvents = eventsByEra.get(era.id) ?? [];
          if (eraEvents.length === 0) return null;

          return (
            <section key={era.id} className={`${era.className} mb-16`} aria-label={era.name}>
              <div className="mb-8 text-center lg:sticky lg:top-20 lg:z-10 lg:mb-12 lg:bg-[var(--color-bg)]/90 lg:py-4 lg:backdrop-blur-sm">
                <span
                  className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: 'var(--era-color)' }}
                >
                  Era {era.number}
                </span>
                <h2 className="font-serif text-3xl">{era.name}</h2>
                <p className="text-sm text-[var(--color-text-muted)]">{era.period}</p>
              </div>

              <div className="space-y-8">
                {eraEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative md:pl-16 lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:ml-0 lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}
                  >
                    <div
                      className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full border-2 border-[var(--color-bg)] md:left-6 md:block lg:left-auto lg:right-0 lg:translate-x-1/2"
                      style={{ backgroundColor: 'var(--era-color)' }}
                      aria-hidden="true"
                    />
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <p className="py-12 text-center text-[var(--color-text-muted)]">
          No events match the current filters.
        </p>
      )}
    </div>
  );
}
