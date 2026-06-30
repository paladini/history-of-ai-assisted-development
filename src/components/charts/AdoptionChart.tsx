import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface AdoptionChartProps {
  data: Array<{
    year: string;
    adoption: number;
    trust: number | null;
    favorability: number;
  }>;
}

export function AdoptionChart({ data }: AdoptionChartProps) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
      <h3 className="mb-1 font-serif text-xl">Adoption vs Trust vs Favorability</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        Stack Overflow Developer Survey, 2023–2025
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="year" stroke="var(--color-text-muted)" fontSize={12} />
          <YAxis stroke="var(--color-text-muted)" fontSize={12} domain={[0, 100]} unit="%" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-text)',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="adoption"
            name="Adoption"
            stroke="var(--color-copilot)"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="trust"
            name="Trust"
            stroke="var(--color-culture)"
            strokeWidth={2}
            dot={{ r: 5 }}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="favorability"
            name="Favorability"
            stroke="var(--color-cursor)"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
