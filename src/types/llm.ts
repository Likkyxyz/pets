export interface LLMHook {
  sendMessage: (messages: any[]) => Promise<string | null>;
  isLoading: boolean;
  error: string | null;
}