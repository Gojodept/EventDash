import React from 'react';
import { Incident } from '../types';
import IncidentCard from './IncidentCard';
import { motion, AnimatePresence } from 'framer-motion';

interface IncidentListProps {
  incidents: Incident[];
  onShare: (id: number) => void;
  onVote: (id: number, vote: 'up' | 'down') => void;
  onViewDetails: (id: number) => void;
}

const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  onShare,
  onVote,
  onViewDetails
}) => {
  if (incidents.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No incidents found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {incidents.map(incident => (
          <motion.div
            key={incident.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <IncidentCard
              incident={incident}
              onShare={() => onShare(incident.id)}
              onVote={(vote) => onVote(incident.id, vote)}
              onViewDetails={() => onViewDetails(incident.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IncidentList;