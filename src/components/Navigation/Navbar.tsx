import React from 'react';
import { XLogo } from '../icons/XLogo';
import { TelegramLogo } from '../icons/TelegramLogo';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800/80 text-pink-300 font-bold rounded-full hover:bg-gray-700/80 transition-colors border border-pink-500/20"
        >
          BUY
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800/80 text-purple-300 hover:bg-gray-700/80 transition-colors border border-purple-500/20"
          >
            <XLogo />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800/80 text-blue-300 hover:bg-gray-700/80 transition-colors border border-blue-500/20"
          >
            <TelegramLogo />
          </a>
        </div>
      </div>
    </nav>
  );
}