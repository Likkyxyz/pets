import React from 'react';
import { ChatWindow } from './ChatWindow';
import type { ChatWindow as ChatWindowType } from '../types/chat';
import { useChatApi } from '../hooks/useChatApi';
import { useChatMessages } from '../hooks/useChatMessages';

const INITIAL_WINDOWS: ChatWindowType[] = [
  { id: 1, title: 'PixelCat', imagePath: '/images/assistant-1.svg', messages: [] },
  { id: 2, title: 'PixelDog', imagePath: '/images/assistant-2.svg', messages: [] },
  { id: 3, title: 'PixelFrog', imagePath: '/images/assistant-3.svg', messages: [] },
];

export function ChatContainer() {
  const services = useChatApi();
  const { chatWindows, handleSendMessage } = useChatMessages(INITIAL_WINDOWS, services);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {chatWindows.map((window, index) => (
        <ChatWindow
          key={window.id}
          title={window.title}
          imagePath={window.imagePath}
          messages={window.messages}
          onSendMessage={(message) => handleSendMessage(window.id, message)}
          isLoading={(window.id === 1 ? services.llm1 : window.id === 2 ? services.llm2 : services.llm3).isLoading}
          error={(window.id === 1 ? services.llm1 : window.id === 2 ? services.llm2 : services.llm3).error}
          colorClass={[
            'bg-gray-800/50 border border-pink-300/20',
            'bg-gray-800/50 border border-purple-300/20',
            'bg-gray-800/50 border border-blue-300/20'
          ][index]}
        />
      ))}
    </div>
  );
}