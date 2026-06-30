import { useEffect, useRef } from 'react';

export function EvolutionLadder() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    async function render() {
      if (!containerRef.current) return;
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#e8e8ed',
          primaryBorderColor: '#2a2a38',
          lineColor: '#9a9aad',
          secondaryColor: '#16161f',
          tertiaryColor: '#0a0a0f',
        },
      });

      const graph = `flowchart BT
    A["Plugin<br/>Copilot 2021"] --> B["Chat Sidebar<br/>Copilot Chat 2023"]
    B --> C["Forked IDE<br/>Cursor 2023"]
    C --> D["Autonomous Agent<br/>Devin 2024"]
    D --> E["Multi-Agent Mesh<br/>Cursor Agents 2025"]`;

      if (mounted && containerRef.current) {
        const { svg } = await mermaid.render('evolution-ladder', graph);
        containerRef.current.innerHTML = svg;
      }
    }

    render();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
      <h3 className="mb-1 font-serif text-xl">Evolution Ladder</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        From plugin completions to multi-agent orchestration
      </p>
      <div ref={containerRef} className="flex justify-center overflow-x-auto" role="img" aria-label="Evolution ladder diagram showing progression from Plugin to Multi-Agent Mesh" />
    </div>
  );
}
