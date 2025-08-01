import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const getButtonClasses = (variant: string, size: string, disabled: boolean): string => {
  const baseClasses = 'rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'px-6 py-3',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return `${baseClasses} ${variantClasses[variant as keyof typeof variantClasses]} ${sizeClasses[size as keyof typeof sizeClasses]} ${disabledClasses}`;
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  disabled = false,
  ...props 
}) => {
  const buttonClasses = getButtonClasses(variant, size, disabled);

  return (
    <button
      className={`${buttonClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};