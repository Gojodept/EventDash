import React from 'react';

interface SeverityBadgeProps {
  severity: 'Low' | 'Medium' | 'High';
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getSeverityColors = (severity: string): string => {
    switch (severity) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColors(severity)}`}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;