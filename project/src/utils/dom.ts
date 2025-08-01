import { UI_CONFIG } from '../constants';

export const scrollToBottom = (element: HTMLElement | null): void => {
  element?.scrollIntoView({ behavior: UI_CONFIG.SCROLL_BEHAVIOR });
};

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export const isEnterKeyPressed = (event: React.KeyboardEvent): boolean => {
  return event.key === 'Enter' && !event.shiftKey;
};