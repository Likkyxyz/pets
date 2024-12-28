import { useState } from 'react';
import type { Message, ChatWindow } from '../types/chat';
import type { LLMHook } from '../types/llm';

interface LLMServices {
  llm1: LLMHook;
  llm2: LLMHook;
  llm3: LLMHook;
}

export function useChatMessages(initialWindows: ChatWindow[], services: LLMServices) {
  const [chatWindows, setChatWindows] = useState(initialWindows);

  const handleSendMessage = async (windowId: number, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Update messages immediately for the user message
    setChatWindows((prev) =>
      prev.map((window) =>
        window.id === windowId
          ? { ...window, messages: [...window.messages, newMessage] }
          : window
      )
    );

    const llm = windowId === 1 ? services.llm1 : windowId === 2 ? services.llm2 : services.llm3;
    const currentWindow = chatWindows.find((w) => w.id === windowId);

    if (!currentWindow) return;

    const response = await llm.sendMessage([...currentWindow.messages, newMessage]);

    if (response) {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      // Update messages with the bot response
      setChatWindows((prev) =>
        prev.map((window) =>
          window.id === windowId
            ? { ...window, messages: [...window.messages, botResponse] }
            : window
        )
      );
    }
  };

  return { chatWindows, handleSendMessage };
}