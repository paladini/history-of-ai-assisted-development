import { useEffect, useRef } from 'react';

export function McpStackDiagram() {
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
          primaryColor: '#10b981',
          primaryTextColor: '#e8e8ed',
          primaryBorderColor: '#2a2a38',
          lineColor: '#9a9aad',
          secondaryColor: '#16161f',
          tertiaryColor: '#0a0a0f',
        },
      });

      const graph = `flowchart LR
    H["Host<br/>IDE / Agent App"] <--> C["MCP Client"]
    C <--> S["MCP Server"]
    S <--> T["Tools & Data<br/>DB, APIs, Files"]`;

      if (mounted && containerRef.current) {
        const { svg } = await mermaid.render('mcp-stack', graph);
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
      <h3 className="mb-1 font-serif text-xl">MCP Stack</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        Host ↔ Client ↔ Server ↔ Tools/Data
      </p>
      <div ref={containerRef} className="flex justify-center overflow-x-auto" role="img" aria-label="MCP stack architecture diagram" />
    </div>
  );
}
