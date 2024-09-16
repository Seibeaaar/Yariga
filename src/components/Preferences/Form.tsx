import { Controller, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux';
import { setPreferences } from '@/redux/actions/user';
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
import Option from '../Option';
import { toggleValue } from '@/utils/common';
import {
  PROPERTY_FACILITY,
  PROPERTY_PAYMENT_PERIOD,
  PROPERTY_TYPE,
  PropertyFilters,
} from '@/types/property';
import RangeInput from './RangeInput';
import { AGREEMENT_TYPE } from '@/types/agreement';
import Loader from '../Loader';
import Popup from '../Popup';
import {
  selectSetPreferencesPending,
  selectsetPreferencesError,
} from '@/redux/selectors/user';
import AnimatedBlock from '../AnimatedBlock';

const PropertyPreferencesForm = () => {
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(PROPERTY_PREFERENCES_VALIDATION_SCHEMA),
    defaultValues: {
      facilities: [],
      agreementType: [],
      propertyType: [],
      paymemtPeriod: [],
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const setPreferencesPending = useSelector(selectSetPreferencesPending);
  const setPreferencesError = useSelector(selectsetPreferencesError);

  const facilities = useWatch({
    control,
    name: 'facilities',
  });
  const propertyType = useWatch({
    control,
    name: 'propertyType',
  });
  const agreementType = useWatch({
    control,
    name: 'agreementType',
  });
  const paymentPeriod = useWatch({
    control,
    name: 'paymemtPeriod',
  });

  const onFacilitiesSelect = (value: PROPERTY_FACILITY) => {
    const facilitiesSelected = toggleValue<PROPERTY_FACILITY>(
      facilities,
      value,
    );
    setValue('facilities', facilitiesSelected);
  };

  const onAgreementTypeSelect = (value: AGREEMENT_TYPE) => {
    const agreementTypesSelected = toggleValue<AGREEMENT_TYPE>(
      agreementType,
      value,
    );
    setValue('agreementType', agreementTypesSelected);
  };

  const onPropertyTypeSelect = (value: PROPERTY_TYPE) => {
    const propertyTypesSelected = toggleValue<PROPERTY_TYPE>(
      propertyType,
      value,
    );
    setValue('propertyType', propertyTypesSelected);
  };

  const onPaymentPeriodSelect = (value: PROPERTY_PAYMENT_PERIOD) => {
    const paymentPeriodSelected = toggleValue<PROPERTY_PAYMENT_PERIOD>(
      paymentPeriod,
      value,
    );
    setValue('paymemtPeriod', paymentPeriodSelected);
  };

  const onSubmit = (data: PropertyFilters) => dispatch(setPreferences(data));

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
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full px-[24px] md:w-3/4 md:p-0 mt-[24px] flex flex-col gap-[36px]"
      >
        <Controller
          control={control}
          name="agreementType"
          render={() => (
            <AnimatedBlock
              tag="div"
              animationProps={{
                initial: {
                  opacity: 0,
                  x: -200,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                },
                transition: {
                  duration: 1,
                },
              }}
            >
              <h4 className="text-lg font-medium mb-[4px]">
                You're here looking for a:
              </h4>
              <div className="flex items-center gap-[16px] flex-wrap">
                {AGREEMENT_TYPE_OPTIONS.map((option) => (
                  <Option
                    selected={agreementType.includes(option.value)}
                    option={option}
                    onSelect={() => onAgreementTypeSelect(option.value)}
                  />
                ))}
              </div>
            </AnimatedBlock>
          )}
        />
        <Controller
          control={control}
          name="propertyType"
          render={() => (
            <AnimatedBlock
              animationProps={{
                initial: {
                  opacity: 0,
                  x: -200,
                },
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
              <h4 className="text-lg font-medium mb-[4px]">
                Property type should be:
              </h4>
              <div className="flex items-center gap-[16px] flex-wrap">
                {PROPERTY_TYPE_OPTIONS.map((option) => (
                  <Option
                    selected={propertyType.includes(option.value)}
                    option={option}
                    onSelect={() => onPropertyTypeSelect(option.value)}
                  />
                ))}
              </div>
            </AnimatedBlock>
          )}
        />
        <Controller
          control={control}
          name="paymemtPeriod"
          render={() => (
            <AnimatedBlock
              animationProps={{
                initial: {
                  opacity: 0,
                  x: -200,
                },
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
              <h4 className="text-lg font-medium mb-[4px]">
                You prefer to pay:
              </h4>
              <div className="flex items-center gap-[16px] flex-wrap">
                {PAYMENT_PERIOD_OPTIONS.map((option) => (
                  <Option
                    selected={paymentPeriod.includes(option.value)}
                    option={option}
                    onSelect={() => onPaymentPeriodSelect(option.value)}
                  />
                ))}
              </div>
            </AnimatedBlock>
          )}
        />
        <AnimatedBlock
          animationProps={{
            initial: {
              opacity: 0,
              x: -200,
            },
            animate: {
              opacity: 1,
              x: 0,
            },
            transition: {
              duration: 1,
              delay: 0.75,
            },
          }}
          className="flex lg:flex-wrap lg:flex-row flex-col gap-[16px]"
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
        </AnimatedBlock>
        <Controller
          control={control}
          name="facilities"
          render={({ field: { value } }) => (
            <AnimatedBlock
              animationProps={{
                initial: {
                  opacity: 0,
                  x: -200,
                },
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
              <h4 className="text-lg font-medium mb-[4px]">
                Property of your choice should have:
              </h4>
              <div className="flex items-center gap-[16px] flex-wrap">
                {PROPERTY_FACILITIES_OPTIONS.map((option) => (
                  <Option
                    selected={value.includes(option.value)}
                    option={option}
                    onSelect={() => onFacilitiesSelect(option.value)}
                  />
                ))}
              </div>
            </AnimatedBlock>
          )}
        />
        <AnimatedBlock
          animationProps={{
            initial: {
              opacity: 0,
              x: -200,
            },
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
          <Button type="submit" text="Set your preferences" />
        </AnimatedBlock>
      </form>
    </>
  );
};

export default PropertyPreferencesForm;
