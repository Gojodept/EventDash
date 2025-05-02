import React from 'react';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';
import { formatDate } from '../utils/dateUtils';
import { Link, Share2 } from 'lucide-react';
import VoteButtons from './VoteButtons';

interface IncidentCardProps {
  incident: Incident;
  onShare: () => void;
  onVote: (vote: 'up' | 'down') => void;
  onViewDetails: () => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({
  incident,
  onShare,
  onVote,
  onViewDetails
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={incident.images[0]} 
          alt={incident.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <SeverityBadge severity={incident.severity} />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1">{incident.title}</h3>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {incident.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{formatDate(incident.reported_at)}</span>
          <div className="flex items-center gap-3">
            <a
              href={incident.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Link className="h-4 w-4 mr-1" />
              Source
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShare();
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              title="Share incident"
            >
              <Share2 className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <button
            onClick={onViewDetails}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            View Details
          </button>
          <VoteButtons
            upvotes={incident.upvotes}
            downvotes={incident.downvotes}
            userVote={incident.userVote}
            onVote={onVote}
          />
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;