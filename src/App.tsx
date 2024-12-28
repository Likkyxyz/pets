import React from 'react';
import { ChatContainer } from './components/ChatContainer';
import { Header } from './components/Header';
import { Navbar } from './components/Navigation/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 pt-20 sm:p-8 sm:pt-24">
        <div className="max-w-6xl mx-auto">
          <Header />
          <ChatContainer />
        </div>
      </div>
    </>
  );
}