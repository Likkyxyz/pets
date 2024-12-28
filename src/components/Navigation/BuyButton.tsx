import React from 'react';

export function BuyButton() {
  return (
    <div className="fixed top-4 left-4">
      <a
        href="https://pump.fun"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-purple-200 text-purple-700 font-bold rounded-full hover:bg-purple-300 transition-colors"
      >
        BUY
      </a>
    </div>
  );
}