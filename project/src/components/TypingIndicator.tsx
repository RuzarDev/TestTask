import React from 'react';
import { UI_CONFIG } from '../constants';

const TypingDot: React.FC<{ delay?: string }> = ({ delay = '' }) => (
  <div className={`w-2 h-2 bg-gray-400 rounded-full animate-bounce ${delay}`} />
);

const TypingAvatar: React.FC = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
    <div className="w-4 h-4 bg-gray-400 rounded-full" />
  </div>
);

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <TypingAvatar />
      <div className="flex space-x-1">
        <TypingDot />
        <TypingDot delay={UI_CONFIG.ANIMATION_DELAY.BOUNCE_1} />
        <TypingDot delay={UI_CONFIG.ANIMATION_DELAY.BOUNCE_2} />
      </div>
    </div>
  );
};