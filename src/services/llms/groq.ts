import { LLMService } from '../api/llmService';
import { LLMConfig } from '../api/types';

export function createGroqService(apiKey: string, model: string): LLMService {
  const config: LLMConfig = {
    apiKey,
    model,
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
  };
  
  return new LLMService(config);
}