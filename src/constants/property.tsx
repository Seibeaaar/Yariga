import { PROPERTY_FACILITY, PROPERTY_TYPE } from '@/types/property';
import {
  Wifi,
  Kitchen,
  Pets,
  LocalParking,
  Pool,
  SmokingRooms,
  Balcony,
  Bathroom,
  House,
  Apartment,
} from '@mui/icons-material';

export const MIN_BEDS = 1;
export const MAX_BEDS = 50;

export const MIN_ROOMS = 1;
export const MAX_ROOMS = 25;

export const MIN_AREA = 1;
export const MAX_AREA = 1000;

export const MIN_RENT_AMOUNT = 10;
export const MAX_RENT_AMOUNT = 50000;

export const MIN_SALE_AMOUNT = 100;
export const MAX_SALE_AMOUNT = 150000000;

export const MIN_FLOOR_LEVEL = 1;
export const MAX_FLOOR_LEVEL = 100;

export const MIN_FLOORS = 1;
export const MAX_FLOORS = 5;

export const PROPERTY_FACILITIES_OPTIONS = [
  {
    label: 'Wi-Fi',
    icon: Wifi,
    value: PROPERTY_FACILITY.WiFi,
  },
  {
    label: 'Kitchen',
    icon: Kitchen,
    value: PROPERTY_FACILITY.Kitchen,
  },
  {
    label: 'Bathroom',
    icon: Bathroom,
    value: PROPERTY_FACILITY.Bathroom,
  },
  {
    label: 'Balcony',
    icon: Balcony,
    value: PROPERTY_FACILITY.Balcony,
  },
  {
    label: 'Smoking',
    icon: SmokingRooms,
    value: PROPERTY_FACILITY.Smoking,
  },
  {
    label: 'Pets',
    icon: Pets,
    value: PROPERTY_FACILITY.Pets,
  },
  {
    label: 'Parking',
    icon: LocalParking,
    value: PROPERTY_FACILITY.Parking,
  },
  {
    label: 'Pool',
    icon: Pool,
    value: PROPERTY_FACILITY.Pool,
  },
];

export const PROPERTY_TYPE_OPTIONS = [
  {
    label: 'House',
    value: PROPERTY_TYPE.House,
    icon: House,
  },
  {
    label: 'Apartment',
    value: PROPERTY_TYPE.Apartment,
    icon: Apartment,
  },
];