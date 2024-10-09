import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import NavbarContextProvider from '@/contexts/NavbarContext';
import AuthContainerContent from './AuthContent';
import Header from '../Header';

type AuthedScreenContainerProps = {
  children: ReactNode;
  title?: string;
};

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = (props) => {
  return (
    <NavbarContextProvider>
      <main className="text-primary-light dark:text-primary-dark flex">
        <Header />
        <div className="flex">
          <Navbar />
          <AuthContainerContent {...props} />
        </div>
      </main>
    </NavbarContextProvider>
  );
};

export default AuthedScreenContainer;
