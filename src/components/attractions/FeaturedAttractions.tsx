'use client';

import { City } from '@/types';
import { FC, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FeaturedAttractionsProps {
  cities: City[];
}

const FeaturedAttractions: FC<FeaturedAttractionsProps> = ({ cities }) => {
  // 获取所有城市的主要景点
  const allAttractions = cities.flatMap((city) =>
    city.attractions.map((attraction) => ({
      ...attraction,
      cityId: city.id,
      cityName: city.name,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const attractionsToShow = 3; // 一次显示的景点数量

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allAttractions.length - attractionsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + attractionsToShow >= allAttractions.length ? 0 : prev + 1
    );
  };

  // 获取当前要显示的景点
  const visibleAttractions = [...allAttractions, ...allAttractions].slice(
    currentIndex,
    currentIndex + attractionsToShow
  );

  return (
    <div className="relative">
      <div className="flex items-center space-x-6">
        <button
          onClick={handlePrevious}
          className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div className="overflow-hidden mx-8">
          <div className="flex space-x-6 transition-transform duration-300">
            {visibleAttractions.map((attraction, index) => (
              <Link
                key={`${attraction.id}-${index}`}
                href={`/cities/${attraction.cityId}`}
                className="flex-none w-[calc(33.333%-1rem)] group"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={attraction.imageUrl}
                    alt={`${attraction.name.en} - ${attraction.name.zh}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">
                      {attraction.name.en}
                      <span className="text-sm font-normal ml-2">
                        ({attraction.name.zh})
                      </span>
                    </h3>
                    <p className="text-sm text-gray-200">
                      {attraction.ticketPrice.amount > 0
                        ? `¥${attraction.ticketPrice.amount}`
                        : 'Free Entry'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedAttractions;