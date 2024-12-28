import type { LucideIcon } from 'lucide-react';

export interface AssistantConfig {
  id: number;
  title: string;
  icon: LucideIcon;
  basePrompt: string;
  model: string;
}