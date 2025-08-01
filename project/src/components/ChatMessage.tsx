import React from 'react';
import { User, Bot } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types';
import { formatTimestamp } from '../utils/dom';

interface ChatMessageProps {
  message: ChatMessageType;
}

const MessageAvatar: React.FC<{ isUser: boolean }> = ({ isUser }) => {
  const avatarClasses = `
    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
    ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}
  `;
  
  const AvatarIcon = isUser ? User : Bot;

  return (
    <div className={avatarClasses}>
      <AvatarIcon size={16} />
    </div>
  );
};

const MessageBubble: React.FC<{ 
  content: string; 
  timestamp: Date; 
  isUser: boolean; 
}> = ({ content, timestamp, isUser }) => {
  const bubbleClasses = `
    max-w-xs lg:max-w-md px-4 py-2 rounded-lg
    ${isUser 
      ? 'bg-blue-500 text-white rounded-br-none' 
      : 'bg-gray-100 text-gray-800 rounded-bl-none'
    }
  `;

  return (
    <div className={bubbleClasses}>
      <p className="text-sm whitespace-pre-wrap">{content}</p>
      <p className="text-xs mt-1 opacity-70">
        {formatTimestamp(timestamp)}
      </p>
    </div>
  );
};

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  const containerClasses = `
    flex items-start space-x-3 
    ${isUser ? 'flex-row-reverse space-x-reverse' : ''}
  `;

  return (
    <div className={containerClasses}>
      <MessageAvatar isUser={isUser} />
      <MessageBubble 
        content={message.content}
        timestamp={message.timestamp}
        isUser={isUser}
      />
    </div>
  );
};