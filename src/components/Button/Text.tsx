import { FC } from 'react';
import { ButtonProps } from '@/types/button';

const TextButton: FC<ButtonProps> = (props) => {
  const buttonStyles = props.disabled
    ? 'w-full py-[10px] border-none cursor-not-allowed text-gray-700 outline-none bg-transparent'
    : 'transition-all w-full py-[10px] border-none text-primary hover:text-primary-light hover:dark:text-primary-dark outline-none';
  return (
    <button {...props} className={`${buttonStyles} ${props.className}`}>
      <p className="font-semibold text-base text-center">{props.text}</p>
    </button>
  );
};

export default TextButton;
