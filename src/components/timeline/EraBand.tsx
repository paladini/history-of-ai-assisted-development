import type { Era } from '../../types/timeline';

interface EraBandProps {
  era: Era;
  isActive?: boolean;
}

export function EraBand({ era, isActive = false }: EraBandProps) {
  return (
    <div
      className={`${era.className} rounded-lg border p-4 transition-all ${
        isActive
          ? 'border-[var(--era-color)] bg-[color-mix(in_srgb,var(--era-color)_10%,transparent)]'
          : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)]'
      }`}
    >
      <div className="mb-1 flex items-center gap-2">
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: 'var(--era-color)' }}
        >
          {era.number}
        </span>
        <h3 className="font-serif text-lg">{era.name}</h3>
      </div>
      <p className="mb-1 text-xs text-[var(--color-text-muted)]">{era.period}</p>
      <p className="text-sm text-[var(--color-text-muted)]">{era.description}</p>
    </div>
  );
}
