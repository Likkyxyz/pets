import type { Message } from '../../types/chat';

export interface ChatService {
  sendMessage(messages: Message[]): Promise<string>;
}

export interface ApiResponse {
  response: string;
  error?: string;
}