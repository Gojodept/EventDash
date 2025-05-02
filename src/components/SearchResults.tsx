import React from 'react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import SeverityBadge from './SeverityBadge';

interface SearchResultsProps {
  results: Incident[];
  onSelect: (incident: Incident) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onSelect }) => {
  if (results.length === 0) {
    return (
      <div className="py-3 px-4 text-gray-500 text-center">
        No results found
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto divide-y divide-gray-100">
      {results.map(incident => (
        <button
          key={incident.id}
          onClick={() => {
            onSelect(incident);
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {incident.title}
                </h3>
                <SeverityBadge severity={incident.severity} />
              </div>
              <p className="text-xs text-gray-500 line-clamp-2">
                {incident.description}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-400">
                  {formatDate(incident.reported_at)}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">
                  By Arindam Kashyap
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-green-600">+{incident.upvotes}</span>
              <span className="text-red-600">-{incident.downvotes}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchResults;