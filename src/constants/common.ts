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

export const AGREEMENT_TYPE_NAME = {
  [AGREEMENT_TYPE.Rent]: 'Rent',
  [AGREEMENT_TYPE.Sale]: 'Sale',
};

export const AGREEMENT_TYPE_ICON = {
  [AGREEMENT_TYPE.Rent]: CalendarToday,
  [AGREEMENT_TYPE.Sale]: RequestQuote,
};

export const AGREEMENT_TYPE_OPTIONS = [
  {
    icon: AGREEMENT_TYPE_ICON[AGREEMENT_TYPE.Sale],
    value: AGREEMENT_TYPE.Sale,
    label: AGREEMENT_TYPE_NAME[AGREEMENT_TYPE.Sale],
  },
  {
    icon: AGREEMENT_TYPE_ICON[AGREEMENT_TYPE.Rent],
    value: AGREEMENT_TYPE.Rent,
    label: AGREEMENT_TYPE_NAME[AGREEMENT_TYPE.Rent],
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

export const PAYMENT_PERIOD_PREPOSITION = {
  [PROPERTY_PAYMENT_PERIOD.Daily]: 'For One Day',
  [PROPERTY_PAYMENT_PERIOD.Monthly]: 'For One Month',
  [PROPERTY_PAYMENT_PERIOD.Weekly]: 'For One Week',
  [PROPERTY_PAYMENT_PERIOD.Yearly]: 'For One Year',
  [PROPERTY_PAYMENT_PERIOD.Once]: 'Once',
};

export const ACCEPTED_IMAGE_FORMATS = ['png', 'jpeg', 'jpg', 'webp'];

export const DEFAULT_PAGINATED_RESPONSE = {
  results: [],
  pages: 1,
  page: 1,
  total: 0,
};
