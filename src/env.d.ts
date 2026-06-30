/// <reference types="astro/client" />

interface SurveyYear {
  url: string;
  aiAdoption: number;
  aiTrust: number | null;
  aiFavorability: number;
  dailyUse: number | null;
  writeCode: number;
  searchLearn: number;
  testing: number;
  agentAdoption: number | null;
  noAgentUse?: number;
}

interface SurveyData {
  stackOverflow: {
    source: string;
    url: string;
    years: Record<string, SurveyYear>;
  };
  adoptionCurve: Array<{
    year: string;
    adoption: number;
    trust: number | null;
    favorability: number;
  }>;
  useCases2025: Array<{ name: string; value: number }>;
  agentAdoption2025: Array<{ name: string; value: number }>;
}

declare module '../../data/surveys.json' {
  const value: SurveyData;
  export default value;
}

declare module '*.json' {
  const value: Record<string, unknown>;
  export default value;
}
