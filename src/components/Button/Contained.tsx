import { FC } from 'react';
import { ButtonProps } from '@/types/button';

const ContainedButton: FC<ButtonProps> = (props) => {
  const computedStyles = props.disabled
    ? 'cursor-not-allowed border-transparent text-primary-light dark:text-primary-dark bg-border-light dark:bg-border-dark'
    : 'border-primary text-white hover:bg-transparent hover:text-primary bg-primary';
  return (
    <button
      {...props}
      className={`transition-all border w-full py-[10px] outline-none flex justify-center rounded-[10px] items-center ${computedStyles} ${props.className}`}
    >
      {props.leftIcon ?? null}
      <p className="text-base text-center">{props.text}</p>
    </button>
  );
};

export default ContainedButton;
