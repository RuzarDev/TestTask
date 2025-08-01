
export const SPEECH_CONFIG = {
  LANGUAGE: 'en-US',
  CONTINUOUS: false,
  INTERIM_RESULTS: true,
} as const;

export const UI_CONFIG = {
  ANIMATION_DELAY: {
    BOUNCE_1: 'delay-100',
    BOUNCE_2: 'delay-200',
  },
  SCROLL_BEHAVIOR: 'smooth' as const,
} as const;

export const ERROR_MESSAGES = {
  NO_API_KEY: 'OpenAI API key not found. Please set VITE_OPENAI_API_KEY in your environment variables.',
  NO_RESPONSE: 'No response received',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
  OFFLINE: 'No internet connection. Please check your connection and try again.',
} as const;