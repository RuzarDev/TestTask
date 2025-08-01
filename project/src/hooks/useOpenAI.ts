import { useState } from 'react';
import {getResponseOpenAi} from "../service/openAiService.ts";

interface UseOpenAIReturn {
  sendMessage: (message: string) => Promise<string>;
  isLoading: boolean;
  error: string | null;
}

export const useOpenAI = (): UseOpenAIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (message: string): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await getResponseOpenAi(message);
      return res;
    } catch (e: unknown) {
      setError("Произошла ошибка при обращении к ChatGPT");
      return "";
    } finally {
      setIsLoading(false);
    }
  };


  return { sendMessage, isLoading, error };
};