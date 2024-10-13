import { Controller, useForm } from 'react-hook-form';
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import {
  SquareFoot,
  Money,
  Bed,
  Room,
  LooksOne,
  Roofing,
} from '@mui/icons-material';
import { PROPERTY_PREFERENCES_VALIDATION_SCHEMA } from '@/validators/common';
import Button from '@/components/Button';
import {
  MAX_AREA,
  MAX_BEDS,
  MAX_FLOORS,
  MAX_FLOOR_LEVEL,
  MAX_ROOMS,
  MAX_SALE_AMOUNT,
  MIN_AREA,
  MIN_BEDS,
  MIN_FLOORS,
  MIN_FLOOR_LEVEL,
  MIN_RENT_AMOUNT,
  MIN_ROOMS,
  PROPERTY_FACILITIES_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from '@/constants/property';
import {
  AGREEMENT_TYPE_OPTIONS,
  PAYMENT_PERIOD_OPTIONS,
} from '@/constants/common';
import { PropertyFilters } from '@/types/property';
import RangeInput from './RangeInput';
import Loader from '../Loader';
import Popup from '../Popup';
import {
  selectSetPreferencesPending,
  selectsetPreferencesError,
} from '@/redux/selectors/user';
import OptionFormField from '../OptionFormField';

type PropertyPreferencesFormProps = {
  animated?: boolean;
  onSubmit(payload: PropertyFilters): void;
  defaultValues?: PropertyFilters;
  submitText: string;
};

const PropertyPreferencesForm: FC<PropertyPreferencesFormProps> = ({
  animated = false,
  onSubmit,
  defaultValues = {
    facilities: [],
    agreementType: [],
    propertyType: [],
    paymentPeriod: [],
  },
  submitText,
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(PROPERTY_PREFERENCES_VALIDATION_SCHEMA),
    defaultValues,
  });

  const setPreferencesPending = useSelector(selectSetPreferencesPending);
  const setPreferencesError = useSelector(selectsetPreferencesError);

  const onFormSubmit = (data: PropertyFilters) => onSubmit(data);

  const buildAnimationStyles = (style: string) => {
    if (animated) {
      return style;
    }
  };

  return (
    <>
      <Loader showLoader={setPreferencesPending} />
      <Popup
        title="Oops. Something went wrong"
        content={setPreferencesError as string}
        showPopup={!!setPreferencesError}
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full flex flex-col gap-[24px]"
      >
        <Controller
          control={control}
          name="agreementType"
          render={({ field: { onChange, value } }) => (
            <div className={buildAnimationStyles('animate-slideLeft')}>
              <OptionFormField
                options={AGREEMENT_TYPE_OPTIONS}
                selected={value}
                onSelect={onChange}
                label="You're here looking for a:"
                multi
                error={errors.agreementType?.message}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="propertyType"
          render={({ field: { onChange, value } }) => (
            <div
              className={buildAnimationStyles(
                'animate-[slideLeft_1.25s_linear]',
              )}
            >
              <OptionFormField
                options={PROPERTY_TYPE_OPTIONS}
                selected={value}
                onSelect={onChange}
                label="Property type should be:"
                multi
                error={errors.propertyType?.message}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="paymentPeriod"
          render={({ field: { onChange, value } }) => (
            <div
              className={buildAnimationStyles(
                'animate-[slideLeft_1.5s_linear]',
              )}
            >
              <OptionFormField
                options={PAYMENT_PERIOD_OPTIONS}
                selected={value}
                onSelect={onChange}
                label="You prefer to pay:"
                multi
                error={errors.paymentPeriod?.message}
              />
            </div>
          )}
        />
        <div
          className={`flex lg:flex-wrap lg:flex-row flex-col justify-between gap-y-[16px] ${buildAnimationStyles(
            'animate-[slideLeft_1.5s_linear]',
          )}`}
        >
          <RangeInput
            lowestError={errors.area?.min?.message ?? ''}
            highestError={errors.area?.max?.message ?? ''}
            lowestName="area.min"
            highestName="area.max"
            min={MIN_AREA}
            max={MAX_AREA}
            prefix={<SquareFoot />}
            control={control}
            label="Property area"
          />
          <RangeInput
            lowestError={errors.amount?.min?.message ?? ''}
            highestError={errors.amount?.max?.message ?? ''}
            lowestName="amount.min"
            highestName="amount.max"
            min={MIN_RENT_AMOUNT}
            max={MAX_SALE_AMOUNT}
            prefix={<Money />}
            control={control}
            label="Property price"
          />
          <RangeInput
            lowestError={errors.rooms?.min?.message ?? ''}
            highestError={errors.rooms?.max?.message ?? ''}
            lowestName="rooms.min"
            highestName="rooms.max"
            min={MIN_ROOMS}
            max={MAX_ROOMS}
            prefix={<Room />}
            control={control}
            label="Number of rooms"
          />
          <RangeInput
            lowestError={errors.beds?.min?.message ?? ''}
            highestError={errors.beds?.max?.message ?? ''}
            lowestName="beds.min"
            highestName="beds.max"
            min={MIN_BEDS}
            max={MAX_BEDS}
            prefix={<Bed />}
            control={control}
            label="Number of beds"
          />
          <RangeInput
            lowestError={errors.floors?.min?.message ?? ''}
            highestError={errors.floors?.max?.message ?? ''}
            lowestName="floors.min"
            highestName="floors.max"
            min={MIN_FLOORS}
            max={MAX_FLOORS}
            prefix={<Roofing />}
            control={control}
            label="Number of floors"
          />
          <RangeInput
            lowestError={errors.floorLevel?.min?.message ?? ''}
            highestError={errors.floorLevel?.max?.message ?? ''}
            lowestName="floorLevel.min"
            highestName="floorLevel.max"
            min={MIN_FLOOR_LEVEL}
            max={MAX_FLOOR_LEVEL}
            prefix={<LooksOne />}
            control={control}
            label="Floor level"
          />
        </div>
        <Controller
          control={control}
          name="facilities"
          render={({ field: { value, onChange } }) => (
            <div
              className={buildAnimationStyles('animate-[slideLeft_2s_linear]')}
            >
              <OptionFormField
                options={PROPERTY_FACILITIES_OPTIONS}
                selected={value}
                onSelect={onChange}
                label="Property of your choice should have:"
                multi
                error={errors.facilities?.message}
              />
            </div>
          )}
        />
        <div
          className={buildAnimationStyles('animate-[slideLeft_2.25s_linear]')}
        >
          <Button type="submit" text={submitText} />
        </div>
      </form>
    </>
  );
};

export default PropertyPreferencesForm;
