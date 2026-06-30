import { useEffect, useRef } from 'react';

export function McpA2aDiagram() {
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
          primaryColor: '#8b5cf6',
          primaryTextColor: '#e8e8ed',
          primaryBorderColor: '#2a2a38',
          lineColor: '#9a9aad',
          secondaryColor: '#16161f',
          tertiaryColor: '#0a0a0f',
        },
      });

      const graph = `flowchart TB
    subgraph MCP["MCP — Agent to Tool"]
      A1["Agent"] -->|"MCP"| T1["Database"]
      A1 -->|"MCP"| T2["GitHub API"]
      A1 -->|"MCP"| T3["File System"]
    end
    subgraph A2A["A2A — Agent to Agent"]
      A2["Orchestrator Agent"] -->|"A2A"| A3["Coder Agent"]
      A2 -->|"A2A"| A4["Reviewer Agent"]
    end
    A1 -.->|"complementary"| A2`;

      if (mounted && containerRef.current) {
        const { svg } = await mermaid.render('mcp-a2a', graph);
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
      <h3 className="mb-1 font-serif text-xl">MCP + A2A Complementarity</h3>
      <p className="mb-6 text-sm text-[var(--color-text-muted)]">
        MCP connects agents to tools; A2A connects agents to agents
      </p>
      <div ref={containerRef} className="flex justify-center overflow-x-auto" role="img" aria-label="MCP and A2A complementarity diagram" />
    </div>
  );
}
