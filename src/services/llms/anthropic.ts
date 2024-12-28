import { LLMService } from '../api/llmService';
import { LLMConfig } from '../api/types';

export function createAnthropicService(apiKey: string): LLMService {
  const config: LLMConfig = {
    apiKey,
    model: 'claude-2',
    baseUrl: 'https://api.anthropic.com/v1/messages',
  };
  
  return new LLMService(config);
}