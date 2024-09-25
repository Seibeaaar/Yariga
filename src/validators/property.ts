import { ACCEPTED_IMAGE_FORMATS } from '@/constants/common';
import {
  MAX_AREA,
  MAX_BEDS,
  MAX_FLOORS,
  MAX_FLOOR_LEVEL,
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MAX_RENT_AMOUNT,
  MAX_ROOMS,
  MAX_SALE_AMOUNT,
  MIN_AREA,
  MIN_BEDS,
  MIN_DESCRPTION_CHARS,
  MIN_FLOORS,
  MIN_FLOOR_LEVEL,
  MIN_LATITUDE,
  MIN_LONGITUDE,
  MIN_RENT_AMOUNT,
  MIN_ROOMS,
  MIN_SALE_AMOUNT,
} from '@/constants/property';
import { AGREEMENT_TYPE } from '@/types/agreement';
import {
  PROPERTY_FACILITY,
  PROPERTY_PAYMENT_PERIOD,
  PROPERTY_TYPE,
} from '@/types/property';
import * as yup from 'yup';

export const PROPERTY_DATA_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required('Property title required').trim(),
  description: yup
    .string()
    .required('Property description required')
    .trim()
    .min(
      MIN_DESCRPTION_CHARS,
      `Description should be at least ${MIN_DESCRPTION_CHARS} characters long`,
    ),
  type: yup
    .string()
    .required('Property type required')
    .oneOf(Object.values(PROPERTY_TYPE)),
  agreementType: yup
    .string()
    .required('Agreement type required')
    .oneOf(Object.values(AGREEMENT_TYPE)),
  area: yup
    .number()
    .typeError('Invalid area value')
    .required('Property area required')
    .min(MIN_AREA)
    .max(MAX_AREA),
  beds: yup
    .number()
    .typeError('Invalid number of beds')
    .required('Number of beds required')
    .min(MIN_BEDS)
    .max(MAX_BEDS),
  rooms: yup
    .number()
    .typeError('Invalid number of rooms')
    .required('Number of rooms required')
    .min(MIN_ROOMS)
    .max(MAX_ROOMS),
  floors: yup
    .number()
    .typeError('Invalid number of floors')
    .required('Number of floors required')
    .min(MIN_FLOORS)
    .max(MAX_FLOORS),
  floorLevel: yup
    .number()
    .typeError('Floor level required')
    .required('Floor level required')
    .when('type', ([type], schema) => {
      if (type === PROPERTY_TYPE.House) {
        return schema.min(MIN_FLOOR_LEVEL).max(MIN_FLOOR_LEVEL);
      }
      return schema.min(MIN_FLOOR_LEVEL).max(MAX_FLOOR_LEVEL);
    }),
  amount: yup
    .number()
    .typeError('Invalid property price')
    .required('Property payment amount required')
    .when('agreementType', ([type], schema) => {
      const [min, max] =
        type === AGREEMENT_TYPE.Sale
          ? [MIN_SALE_AMOUNT, MAX_SALE_AMOUNT]
          : [MIN_RENT_AMOUNT, MAX_RENT_AMOUNT];
      return schema.min(min).max(max);
    }),
  location: yup.object({
    title: yup.string().required('Location name required'),
    lat: yup
      .number()
      .required('Latitude required')
      .min(MIN_LATITUDE)
      .max(MAX_LATITUDE),
    lon: yup
      .number()
      .required('Longitude required')
      .min(MIN_LONGITUDE)
      .max(MAX_LONGITUDE),
  }),
  paymentPeriod: yup
    .string()
    .required('Payment period required')
    .oneOf(Object.values(PROPERTY_PAYMENT_PERIOD)),
  facilities: yup
    .array()
    .required()
    .ensure()
    .of(yup.string().required().oneOf(Object.values(PROPERTY_FACILITY))),
  photos: yup
    .array()
    .required()
    .ensure()
    .length(3, 'At least 3 photos required')
    .of(
      yup
        .mixed<File>()
        .required()
        .test('size', 'File is too large', (value: File) => {
          return value && value.size <= 5 * 1024 * 1024;
        })
        .test('type', 'Zalupa', (value: File) => {
          const fileType = value.type.split('/')[1];
          return ACCEPTED_IMAGE_FORMATS.includes(fileType);
        }),
    ),
});
