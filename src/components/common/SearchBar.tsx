'use client';

import { City } from '@/types';
import { useState, type FC } from 'react';

interface SearchBarProps {
  cities: City[];
  onSearch: (results: City[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ cities, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const results = cities.filter((city) => {
      const searchLower = term.toLowerCase();
      return (
        city.name.en.toLowerCase().includes(searchLower) ||
        city.name.zh.includes(term)
      );
    });
    onSearch(results);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search cities in English or Chinese..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;