'use server';

import { cities } from '@/data/cities';

export async function getCityBySlug(slug: string) {
  const city = cities.find((c) => c.slug === slug);
  return city;
}