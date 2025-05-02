import React from 'react';
import { SeverityFilter, SortOrder } from '../types';
import { Filter, SortDesc, SortAsc } from 'lucide-react';

interface FilterControlsProps {
  severityFilter: SeverityFilter;
  sortOrder: SortOrder;
  onSeverityChange: (filter: SeverityFilter) => void;
  onSortChange: (order: SortOrder) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  severityFilter,
  sortOrder,
  onSeverityChange,
  onSortChange
}) => {
  const severityOptions: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center">
          <Filter className="text-gray-500 mr-2 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700 mr-3">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            {severityOptions.map((option) => (
              <button
                key={option}
                onClick={() => onSeverityChange(option)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-150 ${
                  severityFilter === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center">
          {sortOrder === 'newest' ? (
            <SortDesc className="text-gray-500 mr-2 h-5 w-5" />
          ) : (
            <SortAsc className="text-gray-500 mr-2 h-5 w-5" />
          )}
          <span className="text-sm font-medium text-gray-700 mr-3">Sort by:</span>
          <div className="flex gap-2">
            <button
              onClick={() => onSortChange('newest')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-150 ${
                sortOrder === 'newest'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Newest First
            </button>
            <button
              onClick={() => onSortChange('oldest')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-150 ${
                sortOrder === 'oldest'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Oldest First
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;