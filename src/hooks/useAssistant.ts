import { useMemo } from 'react';
import { createGroqService } from '../services/llms/groq';
import { useLLM } from './useLLM';
import type { Message } from '../types/chat';

export function useAssistant(apiKey: string, basePrompt: string, model: string) {
  const groqService = useMemo(() => createGroqService(apiKey, model), [apiKey, model]);
  const llm = useLLM(groqService);

  const sendMessage = async (messages: Message[]) => {
    // Prepend the base prompt as a system message
    const fullMessages = [
      { role: 'system', content: basePrompt },
      ...messages.map(({ role, content }) => ({ role, content }))
    ];
    
    return await llm.sendMessage(fullMessages);
  };

  return {
    sendMessage,
    isLoading: llm.isLoading,
    error: llm.error
  };
}