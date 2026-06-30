# Contributing

Thank you for your interest in contributing to The History of AI-Assisted Development!

## Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+

### Getting Started

```bash
git clone https://github.com/paladini/history-of-ai-assisted-development.git
cd history-of-ai-assisted-development
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321/history-of-ai-assisted-development/`.

### Build

```bash
pnpm build
pnpm preview
```

## Ways to Contribute

### Timeline Events

Add or edit milestones in `content/timeline/events.yaml`. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the schema and source policy.

Use the [Timeline Event issue template](.github/ISSUE_TEMPLATE/timeline-event.yml) to propose new events.

### Glossary Articles

Glossary pages live in `content/glossary/*.mdx`. Each file needs frontmatter:

```yaml
---
title: "Page Title"
slug: page-slug
description: "Short description for SEO"
order: 1
---
```

### Code & UI

- Follow existing patterns in `src/components/`
- Ensure `pnpm build` succeeds before submitting PRs
- Test with keyboard navigation and `prefers-reduced-motion`

## Source Policy

- **Tier 1 (required):** Official product blogs, GitHub repos, Stack Overflow Survey
- **Tier 2 (context only):** Reputable tech press (TechCrunch, The Verge)
- **Avoid:** Unsourced valuation claims

Every timeline event must have at least one Tier 1 source.

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b add-copilot-event`)
3. Make your changes
4. Verify `pnpm build` passes
5. Open a PR using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). Please be respectful and constructive.
