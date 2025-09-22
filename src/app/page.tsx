import { Metadata } from 'next';
import Image from 'next/image';
import { cities } from '@/lib/data/cities';
import Link from 'next/link';
import SearchBar from '@/components/common/SearchBar';
import HeroCarousel from '@/components/common/HeroCarousel';
import FeaturedAttractions from '@/components/attractions/FeaturedAttractions';
import { City } from '@/types';

export const metadata: Metadata = {
  title: 'Visit China - Discover Amazing Destinations',
  description: 'Explore Beijing, Shanghai, Chengdu, and Hangzhou. Find travel guides, attractions, and practical information for your China adventure.',
  openGraph: {
    title: 'Visit China - Your Ultimate Travel Guide',
    description: 'Discover the best destinations in China with comprehensive travel guides, attractions, and practical information.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful China landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit China - Your Ultimate Travel Guide',
    description: 'Discover the best destinations in China with comprehensive travel guides.',
    images: ['/images/hero.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroCarousel />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <SearchBar cities={cities} />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cities.map((city) => (
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Attractions
        </h2>
        <FeaturedAttractions cities={cities} />
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Essential Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
              <p className="text-gray-600">
                Spring (March-May) and Autumn (September-November) are ideal seasons.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-gray-600">
                Major cities have extensive metro systems and high-speed trains.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Local Customs</h3>
              <p className="text-gray-600">
                Learn basic Mandarin greetings. Tipping is not common.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}