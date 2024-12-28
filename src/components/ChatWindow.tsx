import React, { useEffect, useRef } from 'react';
import type { Message } from '../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface ChatWindowProps {
  title: string;
  imagePath: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error: string | null;
  colorClass: string;
}

export function ChatWindow({ 
  title, 
  imagePath,
  messages, 
  onSendMessage, 
  isLoading,
  error,
  colorClass 
}: ChatWindowProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`flex flex-col h-[500px] rounded-xl shadow-lg backdrop-blur-sm ${colorClass}`}>
      <div className="px-4 py-3 border-b border-gray-700/50 flex items-center gap-2 bg-gray-800/30">
        <img src={imagePath} alt={title} className="w-8 h-8" />
        <h2 className="font-semibold text-gray-200">{title}</h2>
      </div>
      
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="text-sm text-gray-400 italic">Thinking...</div>
        )}
        {error && (
          <div className="text-sm text-red-400">{error}</div>
        )}
      </div>

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}