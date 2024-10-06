import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import ProfileBadge from '../ProfileBadge';
import NavbarContextProvider from '@/contexts/NavbarContext';
import AuthContainerContent from './AuthContent';

type AuthedScreenContainerProps = {
  children: ReactNode;
  title?: string;
};

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = (props) => {
  return (
    <NavbarContextProvider>
      <main className="text-primary-light dark:text-primary-dark flex">
        <Navbar />
        <div className="flex flex-col flex-grow">
          <header className="bg-white w-full fixed dark:bg-black flex items-center justify-end pr-[20px] py-[15px] h-[70px]">
            <ProfileBadge />
          </header>
          <AuthContainerContent {...props} />
        </div>
      </main>
    </NavbarContextProvider>
  );
};

export default AuthedScreenContainer;
