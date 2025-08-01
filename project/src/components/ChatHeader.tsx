import React from 'react';

interface ChatHeaderProps {
  title: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};