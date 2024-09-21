import { FC } from 'react';
import { ButtonProps } from '@/types/button';

const OutlinedButton: FC<ButtonProps> = (props) => {
  const buttonStyles = props.disabled
    ? 'w-full py-[10px] flex items-center border border-border-light dark:border-border-dark cursor-not-allowed bg-border-light dark:bg-border-dark text-primary-light dark:text-primary-dark outline-none rounded-[10px]'
    : 'transition-all flex gap-[16px] justify-center items-center w-full py-[10px] border border-border-light dark:border-border-dark hover:border-primary hover:dark:border-primary text-primary-light bg-transparent hover:text-primary hover:dark:text-primary dark:text-primary-dark outline-none rounded-[10px]';
  return (
    <button {...props} className={`${buttonStyles} ${props.className}`}>
      {props.leftIcon ? <img src={props.leftIcon} /> : null}
      <p className="font-semibold text-base text-center">{props.text}</p>
    </button>
  );
};

export default OutlinedButton;
