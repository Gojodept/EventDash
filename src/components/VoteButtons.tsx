import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface VoteButtonsProps {
  upvotes: number;
  downvotes: number;
  userVote: 'up' | 'down' | null;
  onVote: (vote: 'up' | 'down') => void;
}

const VoteButtons: React.FC<VoteButtonsProps> = ({
  upvotes,
  downvotes,
  userVote,
  onVote,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => onVote('up')}
        className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
          userVote === 'up'
            ? 'text-green-600 bg-green-50'
            : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
        }`}
      >
        <ThumbsUp className="h-4 w-4" />
        <span className="text-sm font-medium">{upvotes}</span>
      </button>
      
      <button
        onClick={() => onVote('down')}
        className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
          userVote === 'down'
            ? 'text-red-600 bg-red-50'
            : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
        }`}
      >
        <ThumbsDown className="h-4 w-4" />
        <span className="text-sm font-medium">{downvotes}</span>
      </button>
    </div>
  );
};

export default VoteButtons;