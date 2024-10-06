import { NavbarContext } from '@/contexts/NavbarContext';
import { FC, ReactNode, useContext } from 'react';

type AuthContentProps = {
  title?: string;
  children: ReactNode;
};

const AuthContainerContent: FC<AuthContentProps> = ({ children, title }) => {
  const { navbarCollapsed } = useContext(NavbarContext);
  return (
    <section
      className={`transition-all bg-bg-light mt-[70px] flex-grow dark:bg-bg-dark w-full p-[15px] ${navbarCollapsed ? 'pl-[115px]' : 'pl-[265px]'}`}
    >
      {title ? <h1 className="text-2xl font-bold">{title}</h1> : null}
      {children}
    </section>
  );
};

export default AuthContainerContent;
