import { FC, ReactNode, useState } from 'react';
import Navbar from '../Navbar';
import ProfileBadge from '../ProfileBadge';

type AuthedScreenContainerProps = {
  children: ReactNode;
  title?: string;
};

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = ({
  children,
  title,
}) => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleNavbar = () => setNavbarCollapsed(!navbarCollapsed);
  return (
    <main className="text-primary-light dark:text-primary-dark flex">
      <Navbar collapsed={navbarCollapsed} toggleCollapsed={toggleNavbar} />
      <div className="flex flex-col flex-grow">
        <header className="bg-white w-full fixed dark:bg-black flex items-center justify-end pr-[20px] py-[15px] h-[70px]">
          <ProfileBadge />
        </header>
        <section
          className={`transition-all bg-bg-light mt-[70px] flex-grow dark:bg-bg-dark w-full p-[15px] ${navbarCollapsed ? 'pl-[115px]' : 'pl-[265px]'}`}
        >
          {title ? <h1 className="text-2xl font-bold">{title}</h1> : null}
          {children}
        </section>
      </div>
    </main>
  );
};

export default AuthedScreenContainer;
