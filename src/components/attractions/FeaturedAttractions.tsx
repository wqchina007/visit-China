'use client';

import { City } from '@/types';
import { FC, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FeaturedAttractionsProps {
  cities: City[];
}

const FeaturedAttractions: FC<FeaturedAttractionsProps> = ({ cities }) => {
  // Get all attractions from all cities
  const allAttractions = cities.flatMap((city) =>
    city.attractions.map((attraction) => ({
      ...attraction,
      citySlug: city.slug,
      cityName: city.name,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === allAttractions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allAttractions.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
        {/* Images */}
        <div className="relative h-full">
          {allAttractions.map((attraction, index) => (
            <div
              key={`${attraction.id}-${index}`}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <Link href={`/cities/${attraction.citySlug}`} className="block h-full">
                <div className="relative h-full group">
                  <img
                    src={attraction.imageUrl}
                    alt={`${attraction.name.en} - ${attraction.name.zh}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="max-w-2xl">
                      <div className="inline-block px-3 py-1 mb-3 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {attraction.cityName.en} • {attraction.cityName.zh}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {attraction.name.en}
                        <span className="text-lg md:text-xl font-normal ml-2 opacity-90">
                          ({attraction.name.zh})
                        </span>
                      </h3>
                      <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2">
                        {attraction.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold">
                          {attraction.ticketPrice.amount > 0
                            ? `¥${attraction.ticketPrice.amount}`
                            : 'Free Entry'}
                        </span>
                        <span className="text-sm opacity-75">
                          {attraction.openingHours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all text-white shadow-lg"
          aria-label="Previous attraction"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all text-white shadow-lg"
          aria-label="Next attraction"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {allAttractions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to attraction ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play control */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all text-white text-sm"
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>

        {/* Attraction counter */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
          {currentIndex + 1} / {allAttractions.length}
        </div>
      </div>

      {/* Attraction thumbnails */}
      <div className="mt-6 flex space-x-2 overflow-x-auto pb-2">
        {allAttractions.map((attraction, index) => (
          <button
            key={`thumb-${attraction.id}-${index}`}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all ${
              index === currentIndex 
                ? 'ring-2 ring-blue-500 scale-110' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={attraction.imageUrl}
              alt={attraction.name.en}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAttractions;