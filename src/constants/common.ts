import { AGREEMENT_TYPE } from '@/types/agreement';
import { PROPERTY_PAYMENT_PERIOD } from '@/types/property';
import {
  CalendarToday,
  RequestQuote,
  CalendarMonth,
  CalendarViewDay,
  CalendarViewWeek,
  Event,
  EventAvailable,
} from '@mui/icons-material';

export const MIN_RATING = 0;
export const MAX_RATING = 5;

export const AGREEMENT_TYPE_OPTIONS = [
  {
    icon: RequestQuote,
    value: AGREEMENT_TYPE.Sale,
    label: 'Purchase',
  },
  {
    icon: CalendarToday,
    value: AGREEMENT_TYPE.Rent,
    label: 'Rent',
  },
];

export const PAYMENT_PERIOD_OPTIONS = [
  {
    icon: EventAvailable,
    value: PROPERTY_PAYMENT_PERIOD.Once,
    label: 'Once',
  },
  {
    icon: Event,
    value: PROPERTY_PAYMENT_PERIOD.Daily,
    label: 'Daily',
  },
  {
    icon: CalendarViewWeek,
    value: PROPERTY_PAYMENT_PERIOD.Weekly,
    label: 'Weekly',
  },
  {
    icon: CalendarMonth,
    value: PROPERTY_PAYMENT_PERIOD.Monthly,
    label: 'Monthly',
  },
  {
    icon: CalendarViewDay,
    value: PROPERTY_PAYMENT_PERIOD.Yearly,
    label: 'Yearly',
  },
];

export const ACCEPTED_IMAGE_FORMATS = ['png', 'jpeg', 'jpg', 'webp'];
