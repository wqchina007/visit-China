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
  {
    id: '3',
    slug: 'chengdu',
    name: {
      en: 'Chengdu',
      zh: '成都',
    },
    description: 'Chengdu, the capital of Sichuan province, is famous for its spicy cuisine, giant pandas, and laid-back lifestyle. Known as the "Land of Abundance", it offers a perfect blend of modern city life and traditional Chinese culture.',
    imageUrl: '/images/cities/chengdu.jpg',
    attractions: [
      {
        id: 'cd-1',
        name: {
          en: 'Giant Panda Breeding Research Base',
          zh: '成都大熊猫繁育研究基地',
        },
        description: 'The world-famous panda base is home to over 200 giant pandas and red pandas. Watch these adorable creatures play, eat bamboo, and learn about conservation efforts.',
        imageUrl: '/images/attractions/giant-panda-base.jpg',
        openingHours: '7:30 AM - 6:00 PM',
        ticketPrice: {
          amount: 55,
          currency: 'CNY',
        },
      },
      {
        id: 'cd-2',
        name: {
          en: 'Jinli Ancient Street',
          zh: '锦里古街',
        },
        description: 'A beautifully restored ancient street showcasing traditional Sichuan architecture, local crafts, and delicious street food. Perfect for experiencing local culture.',
        imageUrl: '/images/attractions/jinli-street.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
      
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March-May) and Autumn (September-November) offer the most comfortable weather.',
      transportation: {
        airport: 'Chengdu Shuangliu International Airport (CTU)',
        trainStation: 'Chengdu Railway Station',
        localTransport: [
          'Metro - modern subway system covering major attractions',
          'Bus - extensive public bus network',
          'Taxi - affordable and convenient',
        ],
      },
      weatherInfo: 'Subtropical monsoon climate with hot summers and mild winters.',
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
    id: '4',
    slug: 'hangzhou',
    name: {
      en: 'Hangzhou',
      zh: '杭州',
    },
    description: 'Hangzhou, the capital of Zhejiang province, is renowned for its natural beauty and historical heritage. Famous for West Lake, a UNESCO World Heritage site, and as the home of Alibaba and Chinese tea culture.',
    imageUrl: '/images/cities/hangzhou.jpg',
    attractions: [
      {
        id: 'hz-1',
        name: {
          en: 'West Lake',
          zh: '西湖',
        },
        description: 'A UNESCO World Heritage site featuring stunning scenery with pagodas, gardens, and causeways.',
        imageUrl: '/images/attractions/west-lake.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
      {
        id: 'hz-2',
        name: {
          en: 'Lingyin Temple',
          zh: '灵隐寺',
        },
        description: 'One of the largest and wealthiest Buddhist temples in China, founded in 328 AD.',
        imageUrl: '/images/attractions/lingyin-temple.jpg',
        openingHours: '7:00 AM - 6:00 PM',
        ticketPrice: {
          amount: 45,
          currency: 'CNY',
        },
      },
      {
        id: 'hz-3',
        name: {
          en: 'Leifeng Pagoda',
          zh: '雷峰塔',
        },
        description: 'A reconstructed five-story octagonal pagoda overlooking West Lake.',
        imageUrl: '/images/attractions/leifeng-pagoda.jpg',
        openingHours: '8:00 AM - 5:30 PM',
        ticketPrice: {
          amount: 40,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March-May) and Autumn (September-November)',
      transportation: {
        airport: 'Hangzhou Xiaoshan International Airport (HGH)',
        trainStation: 'Hangzhou Railway Station',
        localTransport: [
          'Metro - modern subway system',
          'Bus - extensive public transport',
          'Bike sharing - popular for West Lake',
          'Taxi - convenient and affordable',
        ],
      },
      weatherInfo: 'Subtropical monsoon climate with four distinct seasons',
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