import Input from '@/components/Input';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

type RangeInputProps = {
  label: string;
  lowestName: string;
  highestName: string;
  lowestError: string;
  highestError: string;
  max: number;
  min: number;
  prefix: React.ReactNode;
  control: Control;
  className?: string;
  disabled?: boolean;
};

const RangeInput: FC<RangeInputProps> = ({
  prefix,
  max,
  min,
  label,
  control,
  lowestName,
  lowestError,
  highestError,
  highestName,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={`w-full lg:w-[calc(50%-16px)] ${className}`}>
      <h4 className="text-lg font-medium">{label}:</h4>
      <div className="flex flex-col sm:flex-row gap-[12px] items-center sm:items-end w-full">
        <Controller
          control={control}
          name={lowestName}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="From"
              onChange={onChange}
              error={lowestError}
              prefixIcon={prefix}
              disabled={disabled}
              min={min}
              max={max}
            />
          )}
        />
        <div className="h-[1px] w-[24px] bg-secondary-dark sm:mb-[34px]" />
        <Controller
          control={control}
          name={highestName}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="To"
              onChange={onChange}
              error={highestError}
              prefixIcon={prefix}
              disabled={disabled}
              min={min}
              max={max}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RangeInput;
