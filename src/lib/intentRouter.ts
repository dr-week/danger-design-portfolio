export type RouteTarget = 'STATIC_FAQ' | 'AI_MODEL';

interface RouteDecision {
  target: RouteTarget;
  faqId?: string;
  cleanPrompt: string;
}

// Predefined static FAQ dictionary
const STATIC_FAQS: Record<string, string> = {
  'faq-theme': 'Open Settings and scroll to Appearance to select a theme.',
  'faq-apikey': 'Go to Settings > API Keys to paste your Gemini or OpenAI key locally.',
  'faq-privacy': 'Your code and keys are stored 100% locally on your device.',
};

export function routePrompt(input: string, sourcePillId?: string): RouteDecision {
  const trimmed = input.trim();

  // 1. Explicit Suggestion Pill Click -> Instant Static Match
  if (sourcePillId && STATIC_FAQS[sourcePillId]) {
    return {
      target: 'STATIC_FAQ',
      faqId: sourcePillId,
      cleanPrompt: trimmed,
    };
  }

  // 2. Default Rule: ALWAYS route typed text to the AI LLM
  return {
    target: 'AI_MODEL',
    cleanPrompt: trimmed,
  };
}
