import { useState } from 'react';
import type { ChatService } from '../services/api/types';
import type { Message } from '../types/chat';

export function useLLM(service: ChatService) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (messages: Message[]): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await service.sendMessage(messages);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error };
}