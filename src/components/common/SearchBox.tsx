'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cities } from '@/data/cities';


interface SearchResult {
  id: string;
  name: string;
  type: 'city' | 'attraction';
  href: string;
  imageUrl?: string;
}

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const placeholder = "Search destinations...";

  // 搜索逻辑
  const performSearch = (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerTerm = term.toLowerCase();
    const results: SearchResult[] = [];

    // 搜索城市
    cities.forEach(city => {
      if (
        city.name.en.toLowerCase().includes(lowerTerm) ||
        city.name.zh.toLowerCase().includes(lowerTerm) ||
        city.description.toLowerCase().includes(lowerTerm)
      ) {
        results.push({
          id: city.id,
          name: `${city.name.en} (${city.name.zh})`,
          type: 'city',
          href: `/cities/${city.slug}`,
          imageUrl: city.imageUrl
        });
      }

      // 搜索景点
      city.attractions.forEach(attraction => {
        if (
          attraction.name.en.toLowerCase().includes(lowerTerm) ||
          attraction.name.zh.toLowerCase().includes(lowerTerm) ||
          attraction.description.toLowerCase().includes(lowerTerm)
        ) {
          results.push({
            id: `${city.id}-${attraction.id}`,
            name: `${attraction.name.en} (${attraction.name.zh})`,
            type: 'attraction',
            href: `/cities/${city.slug}`,
            imageUrl: attraction.imageUrl
          });
        }
      });
    });

    setSearchResults(results.slice(0, 8)); // 限制结果数量
  };

  // 防抖搜索
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 处理搜索提交
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(searchResults[0].href);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // 处理结果点击
  const handleResultClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setSearchTerm('');
  };

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="search-container relative">
      <form onSubmit={handleSearch} className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-4 w-4 text-white/60" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-48 pl-8 pr-8 py-1.5 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder={placeholder}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSearchResults([]);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <XMarkIcon className="h-4 w-4 text-white/60 hover:text-white" />
          </button>
        )}
      </form>

      {/* 搜索结果下拉框 */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result.href)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                {result.imageUrl && (
                  <img
                    src={result.imageUrl}
                    alt={result.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                )}
                <div>
                  <div className="text-sm font-medium text-gray-900">{result.name}</div>
                  <div className="text-xs text-gray-500 capitalize">
                    {result.type === 'city' ? 'City' : 'Attraction'}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 无结果提示 */}
      {isOpen && searchTerm && searchResults.length === 0 && (
        <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          <p className="text-sm text-gray-500 text-center">No results found</p>
        </div>
      )}
    </div>
  );
}