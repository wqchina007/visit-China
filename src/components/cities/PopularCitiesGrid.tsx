import { City } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PopularCitiesGridProps {
  cities: City[];
}

const PopularCitiesGrid: FC<PopularCitiesGridProps> = ({ cities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city) => (
        <Link
          key={city.id}
          href={`/cities/${city.slug}`}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src={city.imageUrl}
              alt={`${city.name.en} - ${city.name.zh}`}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">
              {city.name.en}
              <span className="text-sm font-normal ml-2">({city.name.zh})</span>
            </h3>
            <p className="text-sm text-gray-200 line-clamp-2">{city.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularCitiesGrid;