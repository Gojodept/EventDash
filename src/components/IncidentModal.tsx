import React from 'react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import { X, Link as LinkIcon, Share2 } from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import VoteButtons from './VoteButtons';

interface IncidentModalProps {
  incident: Incident;
  onClose: () => void;
  onShare: () => void;
  onVote: (vote: 'up' | 'down') => void;
}

const IncidentModal: React.FC<IncidentModalProps> = ({
  incident,
  onClose,
  onShare,
  onVote
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="relative">
          {incident.images?.[0] && (
            <img
              src={incident.images[0]}
              alt={incident.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{incident.title}</h2>
            <SeverityBadge severity={incident.severity} />
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {incident.description}
          </p>

          <div className="text-sm text-gray-500 mb-4">
            Reported: {formatDate(incident.reported_at)}
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4">
              <a
                href={incident.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <LinkIcon className="h-4 w-4 mr-2" />
                View Source
              </a>
              <button
                onClick={onShare}
                className="inline-flex items-center text-gray-600 hover:text-gray-800"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
            <VoteButtons
              upvotes={incident.upvotes}
              downvotes={incident.downvotes}
              userVote={incident.userVote}
              onVote={onVote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentModal