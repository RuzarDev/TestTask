import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from './ui/Button';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

interface VoiceInputProps {
  input: string;
  setInput: (value: string) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ input, setInput }) => {
  const { isListening, startListening, stopListening } = useSpeechRecognition({ input, setInput });

  const toggleListening = () => {
    if (isListening) stopListening();
    else startListening();
  };

  const Icon = isListening ? MicOff : Mic;

  return (
      <Button
          variant="secondary"
          onClick={toggleListening}
          className={isListening ? 'bg-red-500 text-white animate-pulse' : ''}
          title={isListening ? 'Остановить запись' : 'Голосовой ввод'}
      >
        <Icon size={20} />
      </Button>
  );
};
