import { useState, useCallback, useMemo } from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import { initialIncidents } from '../data/mockData';

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [selectedIncidentId, setSelectedIncidentId] = useState<number | null>(null);

  const selectIncident = useCallback((id: number) => {
    setSelectedIncidentId(id);
  }, []);

  const closeIncidentModal = useCallback(() => {
    setSelectedIncidentId(null);
  }, []);

  const addNewIncident = useCallback((incident: Omit<Incident, 'id' | 'reported_at' | 'images' | 'upvotes' | 'downvotes' | 'userVote'>) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(inc => inc.id)) + 1,
      reported_at: new Date().toISOString(),
      images: ["https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"],
      upvotes: 0,
      downvotes: 0,
      userVote: null
    };
    
    setIncidents(prevIncidents => [newIncident, ...prevIncidents]);
  }, [incidents]);

  const handleVote = useCallback((incidentId: number, voteType: 'up' | 'down') => {
    setIncidents(prevIncidents => 
      prevIncidents.map(incident => {
        if (incident.id !== incidentId) return incident;

        const currentVote = incident.userVote;
        let upvotes = incident.upvotes;
        let downvotes = incident.downvotes;

        // Remove previous vote if exists
        if (currentVote === 'up') upvotes--;
        if (currentVote === 'down') downvotes--;

        // Add new vote if different from current
        if (currentVote !== voteType) {
          if (voteType === 'up') upvotes++;
          if (voteType === 'down') downvotes++;
        }

        return {
          ...incident,
          upvotes,
          downvotes,
          userVote: currentVote === voteType ? null : voteType
        };
      })
    );
  }, []);

  const shareIncident = useCallback((id: number) => {
    const incident = incidents.find(inc => inc.id === id);
    if (incident) {
      const shareText = `Check out this AI Safety Incident: ${incident.title}\nSource: ${incident.source}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    }
  }, [incidents]);

  const filteredAndSortedIncidents = useMemo(() => {
    let result = [...incidents];
    
    // Apply severity filter
    if (severityFilter !== 'All') {
      result = result.filter(incident => incident.severity === severityFilter);
    }
    
    // Apply sorting with proper date comparison
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return result;
  }, [incidents, severityFilter, sortOrder]);

  const selectedIncident = useMemo(() => {
    return incidents.find(incident => incident.id === selectedIncidentId);
  }, [incidents, selectedIncidentId]);

  return {
    incidents: filteredAndSortedIncidents,
    severityFilter,
    sortOrder,
    selectedIncident,
    setSeverityFilter,
    setSortOrder,
    selectIncident,
    closeIncidentModal,
    addNewIncident,
    shareIncident,
    handleVote
  };
};