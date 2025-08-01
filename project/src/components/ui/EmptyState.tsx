import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultIcon = (
  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
  </svg>
);

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon = defaultIcon 
}) => {
  return (
    <div className="text-center py-8">
      <div className="text-gray-400 mb-4">
        {icon}
      </div>
      <p className="text-gray-500 text-lg">{title}</p>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
};