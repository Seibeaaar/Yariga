import { Controller, useForm } from 'react-hook-form';
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
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
import AnimatedBlock from '../AnimatedBlock';
import LocationAutocomplete from '../LocationAutocomplete';
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
import { PROPERTY_FACILITY } from '@/types/property';
import Button from '../Button';

type PropertyFormProps = {
  animated?: boolean;
  pending: boolean;
  error: string | null;
};

const PropertyForm: FC<PropertyFormProps> = ({ animated = false }) => {
  const {
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(PROPERTY_DATA_VALIDATION_SCHEMA),
    defaultValues: {
      facilities: [],
    },
  });

  const initialAnimatedProps = animated
    ? {
        x: -200,
        opacity: 0,
      }
    : false;

  return (
    <>
      <form className="mx-auto w-full px-[24px] md:w-3/4 md:p-0 mt-[24px]">
        <AnimatedBlock
          tag="div"
          animationProps={{
            initial: initialAnimatedProps,
            animate: {
              opacity: 1,
              x: 0,
            },
            transition: {
              duration: 1,
              delay: 0,
            },
          }}
        >
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                error={errors.title?.message}
                label="Property title"
                placeholder="Name of your property"
              />
            )}
          />
        </AnimatedBlock>
        <AnimatedBlock
          tag="div"
          animationProps={{
            initial: initialAnimatedProps,
            animate: {
              opacity: 1,
              x: 0,
            },
            transition: {
              duration: 1,
              delay: 0.25,
            },
          }}
        >
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Textarea
                onChange={onChange}
                value={value}
                error={errors.description?.message}
                label="Property description"
                placeholder="Describe your property"
              />
            )}
          />
        </AnimatedBlock>
        <AnimatedBlock
          tag="div"
          animationProps={{
            initial: initialAnimatedProps,
            animate: {
              opacity: 1,
              x: 0,
            },
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
        >
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange } }) => (
              <LocationAutocomplete onSelect={onChange} />
            )}
          />
        </AnimatedBlock>
        <div className="flex flex-col gap-[16px]">
          <AnimatedBlock
            tag="div"
            animationProps={{
              initial: initialAnimatedProps,
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 1,
                delay: 0.75,
              },
            }}
          >
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <>
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
                </>
              )}
            />
          </AnimatedBlock>
          <AnimatedBlock
            tag="div"
            animationProps={{
              initial: initialAnimatedProps,
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
          >
            <Controller
              control={control}
              name="paymentPeriod"
              render={({ field: { onChange, value } }) => (
                <>
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
                </>
              )}
            />
          </AnimatedBlock>
          <AnimatedBlock
            tag="div"
            animationProps={{
              initial: initialAnimatedProps,
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 1,
                delay: 1.25,
              },
            }}
          >
            <Controller
              control={control}
              name="agreementType"
              render={({ field: { onChange, value } }) => (
                <>
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
                </>
              )}
            />
          </AnimatedBlock>
          <AnimatedBlock
            tag="div"
            animationProps={{
              initial: initialAnimatedProps,
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 1,
                delay: 1.5,
              },
            }}
          >
            <Controller
              control={control}
              name="facilities"
              render={({ field: { value, onChange } }) => (
                <>
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
                </>
              )}
            />
          </AnimatedBlock>
          <AnimatedBlock
            tag="div"
            animationProps={{
              initial: initialAnimatedProps,
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 1,
                delay: 1.75,
              },
            }}
            className="flex items-center flex-col md:flex-row md:flex-wrap gap-x-[16px]"
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
          </AnimatedBlock>
        </div>
        <AnimatedBlock
          className="mt-[20px]"
          animationProps={{
            initial: initialAnimatedProps,
            animate: {
              opacity: 1,
              x: 0,
            },
            transition: {
              duration: 1,
              delay: 2,
            },
          }}
        >
          <Button type="submit" text="Add your property" />
        </AnimatedBlock>
      </form>
    </>
  );
};

export default PropertyForm;
