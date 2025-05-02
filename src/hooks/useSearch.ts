import { useState, useCallback, useMemo } from 'react';
import { Incident } from '../types';

export const useSearch = (incidents: Incident[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return incidents.filter(incident => 
      incident.title.toLowerCase().includes(query) ||
      incident.description.toLowerCase().includes(query)
    );
  }, [incidents, searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    searchQuery,
    searchResults,
    handleSearch
  };
};