export class LLMService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async sendMessage(messages: { role: string; content: string }[]): Promise<string | null> {
    try {
      // For demo purposes, return a mock response
      const lastMessage = messages[messages.length - 1];
      return `This is a demo response to: "${lastMessage.content}"`;
    } catch (error) {
      console.error('LLM Service error:', error);
      return null;
    }
  }
}