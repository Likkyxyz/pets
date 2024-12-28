import type { Message } from '../../types/chat';
import type { ChatService, ApiResponse } from './types';

export class ChatApiService implements ChatService {
  private endpoint: string;

  constructor(assistantId: number) {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    this.endpoint = `${baseUrl}/chat/${assistantId}`;
  }

  async sendMessage(messages: Message[]): Promise<string> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.map(({ role, content }) => ({ role, content }))
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      return data.response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to send message');
    }
  }
}