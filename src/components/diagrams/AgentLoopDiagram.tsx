import { useEffect, useRef } from 'react';

export function AgentLoopDiagram() {
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
          primaryColor: '#f59e0b',
          primaryTextColor: '#e8e8ed',
          primaryBorderColor: '#2a2a38',
          lineColor: '#9a9aad',
          secondaryColor: '#16161f',
          tertiaryColor: '#0a0a0f',
        },
      });

      const graph = `flowchart LR
    P["Perceive<br/>Read files, logs, errors"] --> PL["Plan<br/>Decide next action"]
    PL --> A["Act<br/>Edit, run, call tools"]
    A --> O["Observe<br/>Check results"]
    O -->|"iterate"| P`;

      if (mounted && containerRef.current) {
        const { svg } = await mermaid.render('agent-loop', graph);
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
      <h3 className="mb-1 font-serif text-xl">Agent Loop</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        Perceive → Plan → Act → Observe (conceptual, vendor-agnostic)
      </p>
      <div ref={containerRef} className="flex justify-center overflow-x-auto" role="img" aria-label="Agent loop diagram showing perceive, plan, act, observe cycle" />
    </div>
  );
}
