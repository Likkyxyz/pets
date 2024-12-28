import type { Message } from '../../types/chat';
import type { ChatService } from './types';

export class MockChatService implements ChatService {
  private assistantId: number;

  constructor(assistantId: number) {
    this.assistantId = assistantId;
  }

  async sendMessage(messages: Message[]): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lastMessage = messages[messages.length - 1];
    return `Assistant ${this.assistantId}: I received your message: "${lastMessage.content}". This is a mock response for development.`;
  }
}