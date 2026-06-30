import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface AgentAdoptionChartProps {
  data: Array<{ name: string; value: number }>;
}

const COLORS = ['var(--color-agent)', 'var(--color-border)'];

export function AgentAdoptionChart({ data = [] }: AgentAdoptionChartProps) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
      <h3 className="mb-1 font-serif text-xl">AI Agent Adoption (2025)</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        52% of developers still don&apos;t use AI agents
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
            nameKey="name"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-text)',
            }}
            formatter={(value) => [`${value}%`, 'Share']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
