export interface City {
  id: string;
  slug: string;
  name: {
    en: string;
    zh: string;
  };
  description: string;
  imageUrl: string;
  attractions: Attraction[];
  practicalInfo: PracticalInfo;
}

export interface Attraction {
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
}

export interface PracticalInfo {
  bestTimeToVisit: string;
  transportation: {
    airport?: string;
    trainStation?: string;
    localTransport: string[];
  };
  weatherInfo: string;
  usefulPhrases: Array<{
    english: string;
    chinese: string;
    pronunciation: string;
  }>;
}