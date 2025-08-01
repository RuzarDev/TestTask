import React from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';
import { VoiceInput } from './VoiceInput';
import { isEnterKeyPressed } from '../utils/dom';

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  onInputChange,
  onSubmit,
  isLoading,
}) => {
  const isSubmitDisabled = !input.trim() || isLoading

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (isEnterKeyPressed(e)) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div className="border-t bg-white p-4">
      <form onSubmit={onSubmit} className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-3 pr-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={1}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
        </div>

        <VoiceInput  input={input} setInput={onInputChange} />

        <Button
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Send size={20} />
        </Button>
      </form>

    </div>
  );
};