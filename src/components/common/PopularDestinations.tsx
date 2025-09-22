'use client';

import { City } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

interface PopularDestinationsProps {
  cities: City[];
}

export default function PopularDestinations({ cities }: PopularDestinationsProps) {
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleSearch = (results: City[]) => {
    setFilteredCities(results);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <SearchBar cities={cities} onSearch={handleSearch} />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {filteredCities.length < cities.length ? 'Search Results' : 'Popular Destinations'}
      </h2>
      
      {filteredCities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No cities found matching your search.</p>
          <button 
            onClick={() => setFilteredCities(cities)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Show all cities
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCities.map((city) => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group block"
            >
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <Image
                  src={city.imageUrl}
                  alt={`${city.name.en} (${city.name.zh}) - ${city.description.substring(0, 50)}...`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">
                    {city.name.en}
                    <span className="ml-2 text-sm opacity-80">({city.name.zh})</span>
                  </h3>
                  <p className="mt-1 text-sm line-clamp-2 opacity-90">
                    {city.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}