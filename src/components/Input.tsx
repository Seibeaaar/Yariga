import { FC, InputHTMLAttributes, ReactNode, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  prefixIcon?: ReactNode;
  error?: string;
};

const Input: FC<InputProps> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);

  const calculateBorderStyle = () => {
    switch (true) {
      case !!props.error:
        return 'border-danger';
      case !!focused:
        return 'border-primary';
      default:
        return 'border-border-light dark:border-border-dark';
    }
  };

  const focus = () => setFocused(true);
  const blur = () => setFocused(false);

  return (
    <div className="mt-[10px] w-full">
      {props.label ? (
        <p className="text-sm font-medium mb-[4px]">{props.label}</p>
      ) : null}
      <div
        className={`py-[10px] px-[12px] border flex gap-[8px] ${calculateBorderStyle()} rounded-[8px]`}
      >
        {props.prefixIcon}
        <input
          className="dark:[color-scheme:dark] bg-transparent w-full outline-none border-none"
          {...props}
          onFocus={focus}
          onBlur={blur}
        />
      </div>
      <p className="text-danger text-xs mt-[5px] mb-[12px]">
        {props.error ?? ''}
      </p>
    </div>
  );
};

export default Input;
