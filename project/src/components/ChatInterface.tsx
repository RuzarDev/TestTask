import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useOpenAI } from '../hooks/useOpenAI';
import { useAutoScroll } from '../hooks/useAutoScroll';
import { ChatMessage as ChatMessageType } from '../types';

const createMessage = (
  content: string,
  type: 'user' | 'assistant',
  id?: string
): ChatMessageType => ({
  id: id || Date.now().toString(),
  type,
  content,
  timestamp: new Date(),
});

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  
  const { sendMessage, isLoading, error } = useOpenAI();
  const { messagesEndRef } = useAutoScroll([messages, isLoading]);

  const addMessage = (message: ChatMessageType): void => {
    setMessages(prev => [...prev, message]);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) {
      return;
    }

    const userMessage = createMessage(input.trim(), 'user');
    addMessage(userMessage);
    setInput('');

    try {
      const response = await sendMessage(input.trim());
      const assistantMessage = createMessage(
        response,
        'assistant',
        (Date.now() + 1).toString()
      );
      addMessage(assistantMessage);
    } catch (err) {
      // Error is handled by the useOpenAI hook
    }
  };



  return (
    <div className="flex flex-col h-full w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <ChatHeader 
        title="ChatGPT Voice Assistant" 
      />
      
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        error={error}
        messagesEndRef={messagesEndRef}
      />
      
      <ChatInput
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};