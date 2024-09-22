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
import Option from '../Option';
import { toggleValue } from '@/utils/common';
import Loader from '../Loader';
import Popup from '../Popup';
import {
  AddPropertyPayload,
  PROPERTY_FACILITY,
  PropertyDataRequest,
} from '@/types/property';
import Button from '../Button';
import { PayloadAction } from '@reduxjs/toolkit';

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

  const onPropertyFormSubmit = (data: PropertyDataRequest) =>
    dispatch(
      onSubmit({
        ...data,
        isFirstProperty,
      }),
    );

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
              <PropertyGallery onGalleryChange={onChange} />
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
        <div className="flex flex-col gap-[16px]">
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <div
                className={buildAnimationStyles(
                  'animate-[slideLeft_2s_linear]',
                )}
              >
                <p className="text-sm font-medium mb-[4px]">
                  You property is a:
                </p>
                <div className="flex items-center gap-[16px] flex-wrap">
                  {PROPERTY_TYPE_OPTIONS.map((option) => (
                    <Option
                      selected={value === option.value}
                      option={option}
                      onSelect={() => onChange(option.value)}
                    />
                  ))}
                </div>
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
                <p className="text-sm font-medium mb-[4px]">
                  You prefer to receive payment:
                </p>
                <div className="flex items-center gap-[16px] flex-wrap">
                  {PAYMENT_PERIOD_OPTIONS.map((option) => (
                    <Option
                      selected={value === option.value}
                      option={option}
                      onSelect={() => onChange(option.value)}
                    />
                  ))}
                </div>
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
                <p className="text-sm font-medium mb-[4px]">
                  You want to conclude an agreement of:
                </p>
                <div className="flex items-center gap-[16px] flex-wrap">
                  {AGREEMENT_TYPE_OPTIONS.map((option) => (
                    <Option
                      selected={value === option.value}
                      option={option}
                      onSelect={() => onChange(option.value)}
                    />
                  ))}
                </div>
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
                <p className="text-sm font-medium mb-[4px]">
                  You property provides next facilities:
                </p>
                <div className="flex items-center gap-[16px] flex-wrap">
                  {PROPERTY_FACILITIES_OPTIONS.map((option) => (
                    <Option
                      selected={value.includes(option.value)}
                      option={option}
                      onSelect={() => {
                        const newValue = toggleValue<PROPERTY_FACILITY>(
                          value,
                          option.value,
                        );
                        onChange(newValue);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          />
          <div
            className={`flex items-center flex-col md:flex-row md:flex-wrap gap-x-[16px] ${buildAnimationStyles('animate-[slideLeft_3s_linear]')}`}
          >
            <Controller
              control={control}
              name="area"
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Area"
                    type="number"
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
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Amount"
                    type="number"
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
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Beds"
                    type="number"
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
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Rooms"
                    type="number"
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
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Floors"
                    type="number"
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
              render={({ field: { onChange } }) => (
                <div className="w-full md:w-[calc(50%-16px)]">
                  <Input
                    label="Floor level"
                    type="number"
                    onChange={onChange}
                    placeholder="Property's floor level"
                    prefixIcon={<Roofing />}
                    error={errors.floorLevel?.message}
                  />
                </div>
              )}
            />
          </div>
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
