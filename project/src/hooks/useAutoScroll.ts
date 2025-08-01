import { useRef, useEffect } from 'react';
import { scrollToBottom } from '../utils/dom';

interface UseAutoScrollReturn {
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const useAutoScroll = (dependencies: unknown[]): UseAutoScrollReturn => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom(messagesEndRef.current);
  }, dependencies);

  return { messagesEndRef };
};