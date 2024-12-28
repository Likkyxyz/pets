import { LLMService } from '../api/llmService';
import { LLMConfig } from '../api/types';

export function createOpenAIService(apiKey: string): LLMService {
  const config: LLMConfig = {
    apiKey,
    model: 'gpt-3.5-turbo',
    baseUrl: 'https://api.openai.com/v1/chat/completions',
  };
  
  return new LLMService(config);
}