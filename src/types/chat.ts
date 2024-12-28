export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatWindow {
  id: number;
  title: string;
  imagePath: string;
  messages: Message[];
}