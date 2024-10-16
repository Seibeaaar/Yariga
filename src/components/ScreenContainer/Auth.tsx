import { FC } from 'react';
import Navbar from '../Navbar';
import NavbarContextProvider from '@/contexts/NavbarContext';
import AuthContainerContent from './AuthContent';
import Header from '../Header';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { AuthedScreenContainerProps } from '@/types/components';

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = (props) => {
  return (
    <ProtectedRoute>
      <NavbarContextProvider>
        <main className="text-primary-light dark:text-primary-dark flex">
          <Header />
          <div className="flex">
            <Navbar />
            <AuthContainerContent {...props} />
          </div>
        </main>
      </NavbarContextProvider>
    </ProtectedRoute>
  );
};

export default AuthedScreenContainer;
