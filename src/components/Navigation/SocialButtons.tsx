import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export function SocialButtons() {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-4">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-purple-200 text-purple-700 hover:bg-purple-300 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-purple-200 text-purple-700 hover:bg-purple-300 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}