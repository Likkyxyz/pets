import { useMemo } from 'react';
import { ChatApiService } from '../services/api/chatApi';
import { MockChatService } from '../services/api/mockChatService';
import { useLLM } from './useLLM';

// Use mock service in development, real API in production
const IS_DEVELOPMENT = import.meta.env.DEV;
const createService = (id: number) => 
  IS_DEVELOPMENT ? new MockChatService(id) : new ChatApiService(id);

export function useChatApi() {
  const api1 = useMemo(() => createService(1), []);
  const api2 = useMemo(() => createService(2), []);
  const api3 = useMemo(() => createService(3), []);

  const llm1 = useLLM(api1);
  const llm2 = useLLM(api2);
  const llm3 = useLLM(api3);

  return { llm1, llm2, llm3 };
}