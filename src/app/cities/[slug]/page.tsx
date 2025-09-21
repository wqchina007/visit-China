import { notFound } from 'next/navigation';
import ResponsiveImage from '@/components/common/ResponsiveImage';
import { cities } from '@/data/cities';
import { City, Attraction } from '@/types';

interface Phrase {
  chinese: string;
  english: string;
  pronunciation: string;
}

// Force static generation and revalidation
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// Main component
interface CityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={city.imageUrl} 
            alt={`${city.name.en} - ${city.name.zh}`}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              {city.name.en}
              <span className="text-2xl font-normal ml-4">({city.name.zh})</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">{city.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Attractions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.attractions.map((attraction: Attraction) => (
              <div
                key={attraction.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={attraction.imageUrl}
                    alt={`${attraction.name.en} - ${attraction.name.zh}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {attraction.name.en}
                    <span className="text-sm font-normal ml-2">
                      ({attraction.name.zh})
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{attraction.openingHours}</span>
                    <span className="font-medium">
                      {attraction.ticketPrice.amount > 0
                        ? `¥${attraction.ticketPrice.amount}`
                        : 'Free Entry'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Information Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Practical Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Best Time to Visit */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
              <p className="text-gray-600">{city.practicalInfo.bestTimeToVisit}</p>
            </div>

            {/* Transportation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Getting Around</h3>
              {city.practicalInfo.transportation.airport && (
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Airport: </span>
                  {city.practicalInfo.transportation.airport}
                </p>
              )}
              {city.practicalInfo.transportation.trainStation && (
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Train Station: </span>
                  {city.practicalInfo.transportation.trainStation}
                </p>
              )}
              <div className="mt-4">
                <h4 className="font-medium mb-2">Local Transportation:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {city.practicalInfo.transportation.localTransport.map(
                    (transport: string, index: number) => (
                      <li key={index}>{transport}</li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Weather */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Weather</h3>
              <p className="text-gray-600">{city.practicalInfo.weatherInfo}</p>
            </div>

            {/* Useful Phrases */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Useful Phrases</h3>
              <div className="space-y-3">
                {city.practicalInfo.usefulPhrases.map((phrase: Phrase, index: number) => (
                  <div key={index} className="text-gray-600">
                    <p className="font-medium">{phrase.english}</p>
                    <p className="text-sm">
                      {phrase.chinese}{' '}
                      <span className="text-gray-400">({phrase.pronunciation})</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}