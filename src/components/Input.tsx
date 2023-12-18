import { InputHTMLAttributes, FC } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: FC<InputProps> = (props) => {
  return (
    <div className="mt-[15px] w-full">
      <p className="text-sm font-medium mb-[4px]">{props.label}</p>
      <div className="py-[10px] px-[12px] border border-border-light dark:border-border-dark rounded-[8px]">
        <input
          className="bg-transparent w-full outline-none border-none"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
