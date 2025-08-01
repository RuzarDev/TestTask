import React from 'react';
import { ChatInterface } from './components/ChatInterface';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;