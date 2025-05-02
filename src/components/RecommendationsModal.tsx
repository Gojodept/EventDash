import React from 'react';
import { X } from 'lucide-react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import SeverityBadge from './SeverityBadge';
import VoteButtons from './VoteButtons';

interface RecommendationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  incidents: Incident[];
  onSelect: (incident: Incident) => void;
  onVote: (id: number, vote: 'up' | 'down') => void;
}

const RecommendationsModal: React.FC<RecommendationsModalProps> = ({
  isOpen,
  onClose,
  incidents,
  onSelect,
  onVote
}) => {
  if (!isOpen) return null;

  // Sort incidents by upvotes for recommendations
  const recommendedIncidents = [...incidents]
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 6);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden animate-slideUp">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedIncidents.map(incident => (
              <div
                key={incident.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={incident.images[0]}
                  alt={incident.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {incident.title}
                    </h3>
                    <SeverityBadge severity={incident.severity} />
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {incident.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{formatDate(incident.reported_at)}</span>
                    <span>By Arindam Kashyap</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button
                      onClick={() => onSelect(incident)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details
                    </button>
                    <VoteButtons
                      upvotes={incident.upvotes}
                      downvotes={incident.downvotes}
                      userVote={incident.userVote}
                      onVote={(vote) => onVote(incident.id, vote)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsModal;