import { City } from '@/types';

export const cities: City[] = [
  {
    id: 'beijing',
    slug: 'beijing',
    name: {
      en: 'Beijing',
      zh: '北京',
    },
    description: 'Beijing, China\'s sprawling capital, has history stretching back 3 millennia. Yet it\'s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties.',
    imageUrl: '/images/cities/beijing.jpg',
    attractions: [
      {
        id: 'great-wall',
        name: {
          en: 'Great Wall of China',
          zh: '长城',
        },
        description: 'One of the greatest wonders of the world, the Great Wall was built over 2,000 years ago and stretches over 5,500 miles.',
        imageUrl: '/images/attractions/great-wall.jpg',
        openingHours: '7:30 AM - 5:30 PM',
        ticketPrice: {
          amount: 65,
          currency: 'CNY',
        },
      },
      {
        id: 'forbidden-city',
        name: {
          en: 'Forbidden City',
          zh: '故宫',
        },
        description: 'The Forbidden City was the Chinese imperial palace from the Ming Dynasty to the end of the Qing Dynasty. It is located in the center of Beijing.',
        imageUrl: '/images/attractions/forbidden-city.jpg',
        openingHours: '8:30 AM - 5:00 PM',
        ticketPrice: {
          amount: 60,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March to May) and Autumn (September to October) are the best times to visit Beijing, with pleasant temperatures and beautiful scenery.',
      transportation: {
        airport: 'Beijing Capital International Airport (PEK)',
        trainStation: 'Beijing Railway Station',
        localTransport: [
          'Subway - extensive network covering most tourist attractions',
          'Bus - comprehensive public bus system',
          'Taxi - readily available and relatively inexpensive',
        ],
      },
      weatherInfo: 'Four distinct seasons, with hot summers and cold winters. Spring and autumn are mild and pleasant.',
      usefulPhrases: [
        {
          english: 'Hello',
          chinese: '你好',
          pronunciation: 'Nǐ hǎo',
        },
        {
          english: 'Thank you',
          chinese: '谢谢',
          pronunciation: 'Xièxiè',
        },
      ],
    },
  },
  {
    id: 'shanghai',
    slug: 'shanghai',
    name: {
      en: 'Shanghai',
      zh: '上海',
    },
    description: 'Shanghai, on China\'s central eastern coast, is the country\'s biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings.',
    imageUrl: '/images/cities/shanghai.jpg',
    attractions: [
      {
        id: 'the-bund',
        name: {
          en: 'The Bund',
          zh: '外滩',
        },
        description: 'The Bund is a famous waterfront area in central Shanghai, featuring a wide variety of architectural styles.',
        imageUrl: '/images/attractions/the-bund.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March to May) and Autumn (September to November) offer the most pleasant weather for exploring the city.',
      transportation: {
        airport: 'Shanghai Pudong International Airport (PVG)',
        trainStation: 'Shanghai Railway Station',
        localTransport: [
          'Metro - extensive and modern subway system',
          'Bus - comprehensive public bus network',
          'Maglev train - connects Pudong Airport to the city',
        ],
      },
      weatherInfo: 'Subtropical climate with four distinct seasons. Summers are hot and humid, winters are chilly but rarely freezing.',
      usefulPhrases: [
        {
          english: 'Hello',
          chinese: '你好',
          pronunciation: 'Nǐ hǎo',
        },
        {
          english: 'Thank you',
          chinese: '谢谢',
          pronunciation: 'Xièxiè',
        },
      ],
    },
  },
];