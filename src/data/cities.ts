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
  {
    id: 'chengdu',
    slug: 'chengdu',
    name: {
      en: 'Chengdu',
      zh: '成都',
    },
    description: 'Chengdu, the capital of Sichuan province, is famous for its spicy cuisine, giant pandas, and laid-back lifestyle. Known as the "Land of Abundance", it offers a perfect blend of modern city life and traditional Chinese culture.',
    imageUrl: '/images/cities/chengdu.jpg',
    attractions: [
      {
        id: 'giant-panda-breeding',
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
        id: 'jinli-ancient-street',
        name: {
          en: 'Jinli Ancient Street',
          zh: '锦里古街',
        },
        description: 'A beautifully restored ancient street showcasing traditional Sichuan architecture, local crafts, and delicious street food. Perfect for experiencing local culture and shopping for souvenirs.',
        imageUrl: '/images/attractions/jinli-street.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
      
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March to May) and Autumn (September to November) offer the most comfortable weather. Avoid summer heat and winter fog.',
      transportation: {
        airport: 'Chengdu Shuangliu International Airport (CTU)',
        trainStation: 'Chengdu Railway Station',
        localTransport: [
          'Metro - modern subway system covering major attractions',
          'Bus - extensive public bus network',
          'Taxi - affordable and convenient',
          'Bike sharing - popular for short distances',
        ],
      },
      weatherInfo: 'Subtropical monsoon climate with four distinct seasons. Hot and humid summers, mild winters. Frequent fog and overcast skies.',
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
        {
          english: 'How much?',
          chinese: '多少钱',
          pronunciation: 'Duōshao qián',
        },
        {
          english: 'Where is...?',
          chinese: '在哪里',
          pronunciation: 'Zài nǎlǐ',
        },
      ],
    },
  },
  {
    id: 'hangzhou',
    slug: 'hangzhou',
    name: {
      en: 'Hangzhou',
      zh: '杭州',
    },
    description: 'Hangzhou, the capital of Zhejiang province, is renowned for its natural beauty and historical heritage. Famous for West Lake, a UNESCO World Heritage site, and as the home of Alibaba and Chinese tea culture.',
    imageUrl: '/images/cities/hangzhou.jpg',
    attractions: [
      {
        id: 'west-lake',
        name: {
          en: 'West Lake',
          zh: '西湖',
        },
        description: 'A UNESCO World Heritage site featuring stunning scenery with pagodas, gardens, and causeways. Perfect for boat rides and scenic walks.',
        imageUrl: '/images/attractions/west-lake.jpg',
        openingHours: 'Always open',
        ticketPrice: {
          amount: 0,
          currency: 'CNY',
        },
      },
      {
        id: 'lingyin-temple',
        name: {
          en: 'Lingyin Temple',
          zh: '灵隐寺',
        },
        description: 'One of the largest and wealthiest Buddhist temples in China, founded in 328 AD with beautiful grottoes and ancient carvings.',
        imageUrl: '/images/attractions/lingyin-temple.jpg',
        openingHours: '7:00 AM - 6:00 PM',
        ticketPrice: {
          amount: 45,
          currency: 'CNY',
        },
      },
      {
        id: 'leifeng-pagoda',
        name: {
          en: 'Leifeng Pagoda',
          zh: '雷峰塔',
        },
        description: 'A reconstructed five-story octagonal pagoda on Sunset Hill overlooking West Lake, famous from the Legend of the White Snake.',
        imageUrl: '/images/attractions/leifeng-pagoda.jpg',
        openingHours: '8:00 AM - 5:30 PM',
        ticketPrice: {
          amount: 40,
          currency: 'CNY',
        },
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'Spring (March-May) for cherry blossoms and Autumn (September-November) for comfortable weather and fall colors.',
      transportation: {
        airport: 'Hangzhou Xiaoshan International Airport (HGH)',
        trainStation: 'Hangzhou Railway Station',
        localTransport: [
          'Metro - modern subway system connecting major attractions',
          'Bus - extensive public transport network',
          'Bike sharing - popular for exploring West Lake area',
          'Taxi - convenient and affordable',
        ],
      },
      weatherInfo: 'Subtropical monsoon climate with four distinct seasons. Hot summers, mild winters, and beautiful spring/autumn seasons.',
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
        {
          english: 'How much?',
          chinese: '多少钱',
          pronunciation: 'Duōshao qián',
        },
      ],
    },
  },
];