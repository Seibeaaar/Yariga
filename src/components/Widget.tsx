import { FC, ReactNode } from 'react';

type WidgetProps = {
  children: ReactNode;
  className?: string;
};

const Widget: FC<WidgetProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-[15px] p-[20px] bg-white dark:bg-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Widget;
