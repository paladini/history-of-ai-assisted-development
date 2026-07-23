# The History of AI-Assisted Development

<a href="https://paladini.io/harness-score/guide/maturity-model#l0-%C2%B7-unharnessed" title="Harness Score — AI coding harness maturity"><img alt="Harness Score L0 (Unharnessed): measures AI-assisted development harness maturity with harness-score" src="https://paladini.github.io/harness-score/maturity/badge-l0.svg" height="20"></a>
[![Deploy](https://github.com/paladini/history-of-ai-assisted-development/actions/workflows/deploy.yml/badge.svg)](https://github.com/paladini/history-of-ai-assisted-development/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A museum-quality, scroll-driven timeline documenting the evolution of AI-assisted software development ÔÇö from GitHub Copilot inline completions (2021) to multi-agent orchestration, MCP, A2A, Skills, and AGENTS.md (2026).

**Live site:** [paladini.github.io/history-of-ai-assisted-development](https://paladini.github.io/history-of-ai-assisted-development/)

## Features

- **Interactive timeline** ÔÇö 45+ researched milestones across 6 eras with primary source citations
- **Glossary** ÔÇö 12 concept pages (MCP, A2A, agents, skills, vibe coding, and more)
- **Data dashboard** ÔÇö Stack Overflow survey charts (adoption, trust paradox, use cases)
- **Architecture diagrams** ÔÇö Mermaid diagrams for MCP stack, agent loops, evolution ladder
- **Open source** ÔÇö MIT licensed, community contributions welcome

## Quick Start

```bash
git clone https://github.com/paladini/history-of-ai-assisted-development.git
cd history-of-ai-assisted-development
pnpm install
pnpm dev
```

Open [http://localhost:4321/history-of-ai-assisted-development/](http://localhost:4321/history-of-ai-assisted-development/) in your browser.

## Tech Stack

- [Astro 5](https://astro.build/) ÔÇö static site generation
- [React](https://react.dev/) ÔÇö interactive islands (timeline, charts)
- [Tailwind CSS v4](https://tailwindcss.com/) ÔÇö styling
- [Framer Motion](https://www.framer.com/motion/) ÔÇö scroll animations
- [Recharts](https://recharts.org/) ÔÇö data visualizations
- [Mermaid](https://mermaid.js.org/) ÔÇö architecture diagrams

## Project Structure

```
content/timeline/events.yaml   # Timeline milestones (YAML)
content/glossary/*.mdx         # Glossary articles
data/surveys.json              # Stack Overflow survey data
src/components/                # React & Astro components
src/pages/                     # Site pages
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for adding timeline events.

## License

[MIT](LICENSE) ÔÇö code and content are open for reuse with attribution.
