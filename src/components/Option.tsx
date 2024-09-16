import { SelectableOption } from '@/types/components';
import { FC } from 'react';

type OptionProps = {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  option: SelectableOption;
  multi?: boolean;
};

const Option: FC<OptionProps> = ({
  selected,
  onSelect,
  option: { icon, label },
  className = '',
}) => {
  const Icon = icon;
  const selectedStyles = 'bg-primary text-white border-primary';
  const nonSelectedStyles =
    'hover:border-primary hover:text-primary text-primary-light dark:text-primary-dark dark:hover:border-primary dark:hover:text-primary border-border-light dark:border-border-dark';

  return (
    <div
      onClick={onSelect}
      className={`rounded-[32px] w-fit px-[24px] py-[16px] flex items-center gap-[8px] border cursor-pointer ${selected ? selectedStyles : nonSelectedStyles} ${className}`}
    >
      <Icon color="inherit" />
      <p className="font-medium">{label}</p>
    </div>
  );
};

export default Option;
