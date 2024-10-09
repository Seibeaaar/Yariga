import { NavbarContext } from '@/contexts/NavbarContext';
import useWindowSize from '@/hooks/useWindowSize';
import { FC, ReactNode, useContext } from 'react';

type AuthContentProps = {
  title?: string;
  children: ReactNode;
};

const AuthContainerContent: FC<AuthContentProps> = ({ children, title }) => {
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
      className={`transition-all bg-bg-light mt-[70px] dark:bg-bg-dark w-screen p-[15px] flex-grow ${calculateLeftPaddingStyle()}`}
    >
      {title ? <h1 className="text-2xl font-bold">{title}</h1> : null}
      {children}
    </section>
  );
};

export default AuthContainerContent;
