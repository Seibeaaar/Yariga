import { Controller, useForm } from 'react-hook-form';
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { PROPERTY_DATA_VALIDATION_SCHEMA } from '@/validators/property';
import {
  SquareFoot,
  Money,
  Bed,
  Room,
  LooksOne,
  Roofing,
} from '@mui/icons-material';
import Input from '../Input';
import Textarea from '../Textarea';
import LocationAutocomplete from './LocationAutocomplete';
import PropertyGallery from './PropertyGallery';
import {
  AGREEMENT_TYPE_OPTIONS,
  PAYMENT_PERIOD_OPTIONS,
} from '@/constants/common';
import {
  PROPERTY_FACILITIES_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from '@/constants/property';
import Loader from '../Loader';
import Popup from '../Popup';
import { AddPropertyPayload, PropertyDataRequest } from '@/types/property';
import Button from '../Button';
import { PayloadAction } from '@reduxjs/toolkit';
import OptionFormField from '../OptionFormField';

type PropertyFormProps = {
  animated?: boolean;
  isFirstProperty?: boolean;
  pending: boolean;
  error: string | null;
  onSubmit(data: AddPropertyPayload): PayloadAction<AddPropertyPayload>;
};

const PropertyForm: FC<PropertyFormProps> = ({
  animated = false,
  onSubmit,
  isFirstProperty = false,
  error,
  pending,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(PROPERTY_DATA_VALIDATION_SCHEMA),
    defaultValues: {
      facilities: [],
      photos: [],
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const buildAnimationStyles = (style: string) => {
    if (animated) {
      return style;
    }
  };

  const onPropertyFormSubmit = (data: PropertyDataRequest) => {
    return dispatch(
      onSubmit({
        ...data,
        isFirstProperty,
      }),
    );
  };

  return (
    <>
      <Loader showLoader={pending} />
      <Popup
        title="Oops. Something went wrong"
        content={error as string}
        showPopup={!!error}
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <form
        onSubmit={handleSubmit(onPropertyFormSubmit)}
        className={`mx-auto w-full px-[24px] md:w-3/4 md:p-0 mt-[24px]`}
      >
        <Controller
          control={control}
          name="photos"
          render={({ field: { onChange } }) => (
            <div className={buildAnimationStyles('animate-slideLeft')}>
              <PropertyGallery
                onGalleryChange={onChange}
                error={errors.photos?.message}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <div
              className={buildAnimationStyles(
                'animate-[slideLeft_1.25s_linear]',
              )}
            >
              <Input
                onChange={onChange}
                value={value}
                error={errors.title?.message}
                label="Property title"
                placeholder="Name of your property"
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <div
              className={buildAnimationStyles(
                'animate-[slideLeft_1.5s_linear]',
              )}
            >
              <Textarea
                onChange={onChange}
                value={value}
                error={errors.description?.message}
                label="Property description"
                placeholder="Describe your property"
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="location"
          render={({ field: { onChange } }) => (
            <div
              className={buildAnimationStyles(
                'animate-[slideLeft_1.75s_linear]',
              )}
            >
              <LocationAutocomplete
                error={errors.location?.title?.message}
                onSelect={onChange}
              />
            </div>
          )}
        />
        <div className="mt-[16px]">
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <div
                className={buildAnimationStyles(
                  'animate-[slideLeft_2s_linear]',
                )}
              >
                <OptionFormField
                  onSelect={onChange}
                  selected={value}
                  error={errors.type?.message}
                  label="Your property is a:"
                  options={PROPERTY_TYPE_OPTIONS}
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
                  'animate-[slideLeft_2.25s_linear]',
                )}
              >
                <OptionFormField
                  onSelect={onChange}
                  selected={value}
                  error={errors.paymentPeriod?.message}
                  label="You prefer to receive payment:"
                  options={PAYMENT_PERIOD_OPTIONS}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="agreementType"
            render={({ field: { onChange, value } }) => (
              <div
                className={buildAnimationStyles(
                  'animate-[slideLeft_2.5s_linear]',
                )}
              >
                <OptionFormField
                  onSelect={onChange}
                  selected={value}
                  error={errors.agreementType?.message}
                  label="You want to conclude an agreement of:"
                  options={AGREEMENT_TYPE_OPTIONS}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="facilities"
            render={({ field: { value, onChange } }) => (
              <div
                className={buildAnimationStyles(
                  'animate-[slideLeft_2.75s_linear]',
                )}
              >
                <OptionFormField
                  onSelect={onChange}
                  selected={value}
                  error={errors.facilities?.message}
                  label="Your property provides next facilities:"
                  options={PROPERTY_FACILITIES_OPTIONS}
                  multi
                />
              </div>
            )}
          />
        </div>
        <div
          className={`flex flex-col md:flex-row md:flex-wrap gap-x-[16px] ${buildAnimationStyles('animate-[slideLeft_3s_linear]')} items-stretch`}
        >
          <Controller
            control={control}
            name="area"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Area"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Property's area"
                  prefixIcon={<SquareFoot />}
                  error={errors.area?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Amount"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Property's price"
                  prefixIcon={<Money />}
                  error={errors.amount?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="beds"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Beds"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Number of beds"
                  prefixIcon={<Bed />}
                  error={errors.beds?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="rooms"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Rooms"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Number of rooms"
                  prefixIcon={<Room />}
                  error={errors.rooms?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="floors"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Floors"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Number of floors"
                  prefixIcon={<LooksOne />}
                  error={errors.floors?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="floorLevel"
            render={({ field: { onChange, value } }) => (
              <div className="w-full md:w-[calc(50%-16px)]">
                <Input
                  label="Floor level"
                  type="number"
                  value={value}
                  onChange={onChange}
                  placeholder="Property's floor level"
                  prefixIcon={<Roofing />}
                  error={errors.floorLevel?.message}
                />
              </div>
            )}
          />
        </div>
        <div
          className={`mt-[20px] ${buildAnimationStyles('animate-[slideLeft_3.5s_linear]')}`}
        >
          <Button type="submit" text="Add your property" />
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
