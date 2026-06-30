import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface UseCasesChartProps {
  data: Array<{ name: string; value: number }>;
}

export function UseCasesChart({ data }: UseCasesChartProps) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
      <h3 className="mb-1 font-serif text-xl">Primary AI Use Cases (2025)</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        % of developers using AI for each purpose
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis type="number" domain={[0, 100]} unit="%" stroke="var(--color-text-muted)" fontSize={12} />
          <YAxis type="category" dataKey="name" stroke="var(--color-text-muted)" fontSize={12} width={75} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-text)',
            }}
            formatter={(value) => [`${value}%`, 'Developers']}
          />
          <Bar dataKey="value" fill="var(--color-protocol)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
