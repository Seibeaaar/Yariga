import { FC } from 'react';
import { ButtonProps } from '@/types/button';

const TextButton: FC<ButtonProps> = (props) => {
  const buttonStyles = props.disabled
    ? 'cursor-not-allowed text-border-light dark:text-border-dark'
    : 'text-primary hover:text-primary-light hover:dark:text-primary-dark';
  return (
    <button
      {...props}
      className={`transition-all w-full py-[10px] border-none outline-none ${buttonStyles} ${props.className}`}
    >
      <p className="text-base text-center">{props.text}</p>
    </button>
  );
};

export default TextButton;
