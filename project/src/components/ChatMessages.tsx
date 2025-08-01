import React from 'react';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { ErrorMessage } from './ui/ErrorMessage';
import { EmptyState } from './ui/EmptyState';
import { ChatMessage as ChatMessageType } from '../types';

interface ChatMessagesProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  error,
  messagesEndRef,
}) => {
  const hasNoMessages = messages.length === 0;

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {hasNoMessages && (
        <EmptyState
          title="Start a conversation"
          description="Type a message or use voice input to get started"
        />
      )}
      
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {isLoading && <TypingIndicator />}
      
      {error && <ErrorMessage message={error} />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};