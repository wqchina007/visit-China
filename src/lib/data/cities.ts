import { City } from '@/types';

export const cities: City[] = [
  {
    id: '1',
    slug: 'beijing',
    name: {
      en: 'Beijing',
      zh: '北京',
    },
    description: 'Beijing, China\'s sprawling capital, has history stretching back 3 millennia. Yet it\'s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties.',
    imageUrl: '/images/cities/beijing.jpg',
    attractions: [
      {
        id: 'bj-1',
        name: {
          en: 'Great Wall',
          zh: '长城',
        },
        description: 'One of the greatest wonders of the world, the Great Wall was listed as a World Heritage by UNESCO in 1987.',
        imageUrl: '/images/attractions/great-wall.jpg',
        openingHours: '7:30 AM - 5:30 PM',
        ticketPrice: {
          amount: 40,
          currency: 'CNY',
        },
      },
      {
        id: 'bj-2',
        name: {
          en: 'Forbidden City',
          zh: '故宫',
        },
        description: 'The Forbidden City was the Chinese imperial palace from the Ming Dynasty to the end of the Qing Dynasty.',
        imageUrl: '/images/attractions/forbidden-city.jpg',
        openingHours: '8:30 AM - 5:00 PM',
        ticketPrice: {
          amount: 60,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March-May) and Autumn (September-November)',
      transportation: {
        airport: 'Beijing Capital International Airport (PEK)',
        trainStation: 'Beijing Railway Station',
        localTransport: [
          'Subway - extensive network covering most tourist attractions',
          'Taxi - readily available and relatively cheap',
          'Bus - comprehensive public bus system',
        ],
      },
      weatherInfo: 'Four distinct seasons with hot summers and cold winters',
      usefulPhrases: [
        {
          english: 'Hello',
          chinese: '你好',
          pronunciation: 'Nǐ hǎo',
        },
        {
          english: 'Thank you',
          chinese: '谢谢',
          pronunciation: 'Xièxie',
        },
      ],
    },
  },
  {
    id: '2',
    slug: 'shanghai',
    name: {
      en: 'Shanghai',
      zh: '上海',
    },
    description: 'Shanghai, on China\'s central eastern coast, is the country\'s biggest city and a global financial hub. Its heart is the Bund, a famous waterfront promenade lined with colonial-era buildings.',
    imageUrl: '/images/cities/shanghai.jpg',
    attractions: [
      {
        id: 'sh-1',
        name: {
          en: 'The Bund',
          zh: '外滩',
        },
        description: 'The Bund is a famous waterfront area in central Shanghai, featuring various buildings and the best view of Pudong skyline.',
        imageUrl: '/images/attractions/the-bund.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March-May) and Autumn (September-November)',
      transportation: {
        airport: 'Shanghai Pudong International Airport (PVG)',
        trainStation: 'Shanghai Railway Station',
        localTransport: [
          'Metro - modern and extensive subway system',
          'Taxi - abundant but traffic can be heavy',
        ],
      },
      weatherInfo: 'Subtropical monsoon climate with four distinct seasons',
      usefulPhrases: [
        {
          english: 'Excuse me',
          chinese: '对不起',
          pronunciation: 'Duìbùqǐ',
        },
      ],
    },
  },
];