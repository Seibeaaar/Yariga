import { NavbarContext } from '@/contexts/NavbarContext';
import useWindowSize from '@/hooks/useWindowSize';
import { FC, ReactNode, useContext } from 'react';

type AuthContentProps = {
  title: string;
  children: ReactNode;
  actionItem?: ReactNode;
};

const AuthContainerContent: FC<AuthContentProps> = ({
  children,
  title,
  actionItem,
}) => {
  const { width } = useWindowSize();
  const { navbarCollapsed } = useContext(NavbarContext);

  const calculateLeftPaddingStyle = () => {
    if (width <= 1024) {
      return 'pl-[15px]';
    }

    return navbarCollapsed ? 'pl-[115px]' : 'pl-[265px]';
  };
  return (
    <section
      className={`transition-all min-h-[calc(100vh-70px)] bg-bg-light mt-[70px] dark:bg-bg-dark w-screen p-[15px] flex-grow ${calculateLeftPaddingStyle()}`}
    >
      <div className="flex items-center justify-between mb-[24px]">
        <h1 className="text-2xl font-bold">{title}</h1>
        {actionItem ?? null}
      </div>
      {children}
    </section>
  );
};

export default AuthContainerContent;
