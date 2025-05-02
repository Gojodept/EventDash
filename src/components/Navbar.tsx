import React, { useState } from 'react';
import { Search, Menu, X, Brain, User } from 'lucide-react';
import ProfileModal from './ProfileModal';
import SearchResults from './SearchResults';
import RecommendationsModal from './RecommendationsModal';
import { useSearch } from '../hooks/useSearch';
import { Incident } from '../types';

interface NavbarProps {
  incidents: Incident[];
  onSelectIncident: (incident: Incident) => void;
  onVote: (id: number, vote: 'up' | 'down') => void;
}

const Navbar: React.FC<NavbarProps> = ({ incidents, onSelectIncident, onVote }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);
  
  const { searchQuery, searchResults, handleSearch } = useSearch(incidents);

  const handleIncidentSelect = (incident: Incident) => {
    onSelectIncident(incident);
    setIsSearchOpen(false);
    handleSearch('');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-2 font-bold text-xl tracking-tight text-gray-900 font-mono">
              AI Unplugged
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsRecommendationsOpen(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              Recommendations
            </button>
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg animate-slideDown">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search incidents..."
                  className="w-full pl-10 pr-4 py-3 border-b focus:outline-none focus:border-blue-500"
                />
              </div>
              {searchQuery && (
                <SearchResults 
                  results={searchResults} 
                  onSelect={handleIncidentSelect} 
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsRecommendationsOpen(true);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              <span>Recommendations</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsProfileModalOpen(true);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      <RecommendationsModal
        isOpen={isRecommendationsOpen}
        onClose={() => setIsRecommendationsOpen(false)}
        incidents={incidents}
        onSelect={(incident) => {
          onSelectIncident(incident);
          setIsRecommendationsOpen(false);
        }}
        onVote={onVote}
      />
    </nav>
  );
};

export default Navbar;