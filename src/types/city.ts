export interface City {
  slug: string;
  name: {
    en: string;
    zh: string;
  };
  description: string;
  imageUrl: string;
  attractions: {
    id: string;
    name: {
      en: string;
      zh: string;
    };
    description: string;
    imageUrl: string;
    openingHours: string;
    ticketPrice: {
      amount: number;
      currency: string;
    };
  }[];
  practicalInfo: {
    bestTimeToVisit: string;
    transportation: {
      airport?: string;
      trainStation?: string;
      localTransport: string[];
    };
    weatherInfo: string;
    usefulPhrases: {
      chinese: string;
      pinyin: string;
      english: string;
      pronunciation: string;
    }[];
  };
}