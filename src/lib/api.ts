import { cities } from '@/data/cities';
import { notFound } from 'next/navigation';

export async function getCityBySlug(slug: string) {
  const city = cities.find((city) => city.slug === slug);
  
  if (!city) {
    notFound();
  }
  
  return city;
}