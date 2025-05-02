import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md 
        overflow-hidden 
        transition-all duration-300
        ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-5 py-4 bg-gray-50 dark:bg-gray-900/50 ${className}`}>
      {children}
    </div>
  );
};