import { AGREEMENT_TYPE } from './agreement';

export enum PROPERTY_TYPE {
  House = 'house',
  Apartment = 'apartment',
}

export enum PROPERTY_FACILITY {
  Parking = 'parking',
  Smoking = 'smoking',
  Balcony = 'balcony',
  WiFi = 'wifi',
  Pets = 'pets',
  Kitchen = 'kitchen',
  Pool = 'pool',
  Bathroom = 'bathroom',
}

export enum PROPERTY_PAYMENT_PERIOD {
  Once = 'once',
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Yearly = 'yearly',
}

export enum PROPERTY_STATUS {
  Free = 'free',
  Sold = 'sold',
}

type MinMaxPair = {
  min?: number;
  max?: number;
};

export type PropertyFilters = {
  beds?: MinMaxPair;
  rooms?: MinMaxPair;
  floors?: MinMaxPair;
  floorLevel?: MinMaxPair;
  area?: MinMaxPair;
  amount?: MinMaxPair;
  agreementType?: AGREEMENT_TYPE[];
  paymentPeriod?: PROPERTY_PAYMENT_PERIOD[];
  propertyType?: PROPERTY_TYPE[];
  rating?: MinMaxPair;
  facilities?: PROPERTY_FACILITY[];
};

export type PropertyLocation = {
  lat: number;
  lon: number;
  title: string;
};

export type PropertyData = {
  title: string;
  description: string;
  location: PropertyLocation;
  type: PROPERTY_TYPE;
  agreementType: AGREEMENT_TYPE;
  amount: number;
  area: number;
  facilities: PROPERTY_FACILITY[];
  paymentPeriod: PROPERTY_PAYMENT_PERIOD;
  beds: number;
  rooms: number;
  floors: number;
  floorLevel: number;
  photos: string[];
};
