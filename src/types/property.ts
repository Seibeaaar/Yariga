import { AGREEMENT_TYPE } from './agreement';
import { Landlord } from './user';

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
  beds: MinMaxPair;
  rooms: MinMaxPair;
  floors: MinMaxPair;
  floorLevel: MinMaxPair;
  area: MinMaxPair;
  amount: MinMaxPair;
  agreementType: AGREEMENT_TYPE[];
  propertyType: PROPERTY_TYPE[];
  rating: MinMaxPair;
  facilities: PROPERTY_FACILITY[];
  paymentPeriod: PROPERTY_PAYMENT_PERIOD[];
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
};

export type PropertyDataRequest = PropertyData & {
  photos: File[];
};

export type Property = PropertyData & {
  _id: string;
  owner: string;
  status: PROPERTY_STATUS;
  rating: number;
  votes: number;
  photos: string[];
};

export type PropertyExtended = Property & {
  owner: Landlord;
};

export type AddPropertyPayload = PropertyDataRequest & {
  isFirstProperty: boolean;
};

export type SearchPropertyPayload = {
  query: string;
  page?: number;
};

export type FilterPropertyPayload = {
  filters: PropertyFilters;
  page?: number;
};
