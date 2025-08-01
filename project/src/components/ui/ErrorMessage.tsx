import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
      <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
      <div className="text-red-700">
        <p className="font-medium">Error</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};