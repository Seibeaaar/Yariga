import { SelectableOption } from '@/types/components';
import Option from './Option';
import { toggleValue } from '@/utils/common';
import { Key } from 'react';

type OptionFormFieldProps<T> = {
  selected: T | T[];
  multi?: boolean;
  onSelect(selected: T | T[]): void;
  options: SelectableOption<T>[];
  error?: string;
  label: string;
};

const OptionFormField = <T,>({
  label,
  options,
  selected,
  onSelect,
  multi = false,
  error,
}: OptionFormFieldProps<T>) => {
  const isSelected = (option: SelectableOption<T>) => {
    if (multi) {
      if (Array.isArray(selected)) {
        return selected.includes(option.value);
      }
      return false;
    }
    return selected === option.value;
  };

  const handleSelect = (option: SelectableOption<T>) => {
    if (multi) {
      const newValues = toggleValue(selected as T[], option.value);
      onSelect(newValues);
    } else {
      onSelect(option.value);
    }
  };

  return (
    <>
      <p className="text-sm font-medium mb-[8px]">{label}</p>
      <div className="flex items-center gap-[16px] flex-wrap">
        {options.map((option) => (
          <Option
            selected={isSelected(option)}
            onSelect={() => handleSelect(option)}
            key={option.value as Key}
            option={option}
            className={error && 'border-danger dark:border-danger'}
          />
        ))}
      </div>
      <p className="text-xs text-danger mt-[6px] mb-[16px]">{error ?? ''}</p>
    </>
  );
};

export default OptionFormField;
