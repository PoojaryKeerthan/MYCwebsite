'use client';

import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = 'Search programs...' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Icon name="MagnifyingGlassIcon" size={20} className="text-text-secondary" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3 bg-card border-2 border-border rounded-lg font-source text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors duration-300"
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors duration-300"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;