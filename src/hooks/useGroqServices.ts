import { useMemo } from 'react';
import { createGroqService } from '../services/llms/groq';
import { useLLM } from './useLLM';

const MODEL = 'mixtral-8x7b-32768';

export function useGroqServices() {
  const groq1 = useMemo(() => createGroqService(import.meta.env.VITE_GROQ_API_KEY_1, MODEL), []);
  const groq2 = useMemo(() => createGroqService(import.meta.env.VITE_GROQ_API_KEY_2, MODEL), []);
  const groq3 = useMemo(() => createGroqService(import.meta.env.VITE_GROQ_API_KEY_3, MODEL), []);

  const llm1 = useLLM(groq1);
  const llm2 = useLLM(groq2);
  const llm3 = useLLM(groq3);

  return { llm1, llm2, llm3 };
}