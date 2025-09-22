'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const heroImages: HeroImage[] = [
  {
    src: '/images/hero.jpg',
    alt: 'Great Wall of China',
    title: 'Discover China',
    subtitle: 'Experience the beauty of ancient civilization'
  },
  {
    src: '/images/cities/beijing.jpg',
    alt: 'Beijing skyline',
    title: 'Explore Beijing',
    subtitle: 'Ancient capital with modern wonders'
  },
  {
    src: '/images/cities/shanghai.jpg',
    alt: 'Shanghai skyline',
    title: 'Experience Shanghai',
    subtitle: 'Where East meets West'
  },
  {
    src: '/images/cities/hangzhou.jpg',
    alt: 'Hangzhou West Lake',
    title: 'Discover Hangzhou',
    subtitle: 'Paradise on Earth with West Lake beauty'
  },
  {
    src: '/images/cities/chengdu.jpg',
    alt: 'Chengdu landscape',
    title: 'Visit Chengdu',
    subtitle: 'Home of giant pandas and spicy cuisine'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Images */}
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-delay">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-10 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white text-sm"
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}