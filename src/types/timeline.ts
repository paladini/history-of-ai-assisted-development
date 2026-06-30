export type EventCategory = 'tool' | 'protocol' | 'concept' | 'culture' | 'data';

export type EraId =
  | 'inline-pair-programming'
  | 'conversational-ide'
  | 'ai-native-editors'
  | 'agentic-development'
  | 'protocols-standards'
  | 'orchestration-skills';

export interface EventSource {
  label: string;
  url: string;
}

export interface EventStat {
  label: string;
  value: string;
  source?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  era: EraId;
  title: string;
  summary: string;
  category: EventCategory;
  sources: EventSource[];
  stats?: EventStat[];
}

export interface Era {
  id: EraId;
  number: number;
  name: string;
  period: string;
  description: string;
  className: string;
}

export const ERAS: Era[] = [
  {
    id: 'inline-pair-programming',
    number: 1,
    name: 'Inline Pair Programming',
    period: 'Jun 2021 – Dec 2022',
    description: 'From autocomplete suggestions to the first widely adopted AI pair programmer.',
    className: 'era-inline-pair-programming',
  },
  {
    id: 'conversational-ide',
    number: 2,
    name: 'Conversational IDE',
    period: 'Mar 2023 – Dec 2023',
    description: 'Chat interfaces shift the paradigm from completion to dialogue.',
    className: 'era-conversational-ide',
  },
  {
    id: 'ai-native-editors',
    number: 3,
    name: 'AI-Native Editors',
    period: 'Mar 2023 – Aug 2024',
    description: 'Forked IDEs and multi-file editing redefine the development environment.',
    className: 'era-ai-native-editors',
  },
  {
    id: 'agentic-development',
    number: 4,
    name: 'Agentic Development',
    period: 'Mar 2024 – Nov 2024',
    description: 'Autonomous agents and AI flows promise end-to-end task completion.',
    className: 'era-agentic-development',
  },
  {
    id: 'protocols-standards',
    number: 5,
    name: 'Protocols & Standards',
    period: 'Nov 2024 – Dec 2025',
    description: 'MCP, A2A, and industry foundations standardize agent interoperability.',
    className: 'era-protocols-standards',
  },
  {
    id: 'orchestration-skills',
    number: 6,
    name: 'Orchestration & Skills',
    period: 'Feb 2025 – present',
    description: 'Multi-agent modes, skills, and project context standards mature the ecosystem.',
    className: 'era-orchestration-skills',
  },
];

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  tool: 'Tool',
  protocol: 'Protocol',
  concept: 'Concept',
  culture: 'Culture',
  data: 'Data',
};

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  tool: 'var(--color-copilot)',
  protocol: 'var(--color-protocol)',
  concept: 'var(--color-agent)',
  culture: 'var(--color-culture)',
  data: 'var(--color-data)',
};
