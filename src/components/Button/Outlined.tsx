import { FC } from 'react';
import { ButtonProps } from '@/types/button';

const OutlinedButton: FC<ButtonProps> = (props) => {
  const computedStyles = props.disabled
    ? 'cursor-not-allowed bg-border-light dark:bg-border-dark'
    : 'hover:border-primary hover:dark:border-primary bg-transparent hover:text-primary hover:dark:text-primary';
  return (
    <button
      {...props}
      className={`transition-all border border-border-light text-primary-light dark:text-primary-dark dark:border-border-dark w-full py-[10px] flex items-center justify-center font-semibold outline-none rounded-[10px] ${computedStyles} ${props.className}`}
    >
      {props.leftIcon ?? null}
      <p className="text-base text-center">{props.text}</p>
    </button>
  );
};

export default OutlinedButton;
