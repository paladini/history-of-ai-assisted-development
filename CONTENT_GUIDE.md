# Content Guide

How to add or edit timeline events in `content/timeline/events.yaml`.

## YAML Schema

```yaml
- id: unique-kebab-case-id          # Required, unique
  date: 2021-06-29                   # Required, ISO date (YYYY-MM-DD)
  era: inline-pair-programming       # Required, one of 6 era IDs
  title: "Event Title"               # Required
  summary: "2-3 sentence description" # Required
  category: tool                     # Required: tool|protocol|concept|culture|data
  sources:                           # Required, at least 1 Tier 1 source
    - label: "GitHub Blog"
      url: "https://github.blog/..."
  stats:                             # Optional
    - label: "Metric name"
      value: "40%"
      source: "Citation for the stat"
```

## Era IDs

| ID | Period | Name |
|----|--------|------|
| `inline-pair-programming` | Jun 2021 – Dec 2022 | Inline Pair Programming |
| `conversational-ide` | Mar 2023 – Dec 2023 | Conversational IDE |
| `ai-native-editors` | Mar 2023 – Aug 2024 | AI-Native Editors |
| `agentic-development` | Mar 2024 – Nov 2024 | Agentic Development |
| `protocols-standards` | Nov 2024 – Dec 2025 | Protocols & Standards |
| `orchestration-skills` | Feb 2025 – present | Orchestration & Skills |

## Categories

- **tool** — Product launches, feature releases
- **protocol** — Standards, specifications (MCP, A2A, AGENTS.md)
- **concept** — Ideas, patterns (context engineering, codebase indexing)
- **culture** — Cultural moments (vibe coding, ChatGPT awareness)
- **data** — Survey results, benchmarks

## Source Policy

1. Every event needs at least one **Tier 1** source (official blog, repo, survey)
2. Prefer primary announcements over retrospective articles
3. Include stats only when the source explicitly states them
4. Use approximate dates (`2024-08-01`) when exact day is unknown — note in summary if needed

## Adding a Glossary Page

Create `content/glossary/your-topic.mdx`:

```mdx
---
title: "Your Topic"
slug: your-topic
description: "One-line description for SEO"
order: 13
---

## Section heading

Content here...
```

The page will be available at `/glossary/your-topic/`.

## Validation

After editing content, run:

```bash
pnpm build
```

The build will fail if YAML is malformed or glossary frontmatter is missing required fields.
