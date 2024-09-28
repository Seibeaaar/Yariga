import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';

type AuthedScreenContainerProps = {
  children: ReactNode;
};

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = ({
  children,
}) => {
  return (
    <main className="text-primary-light dark:text-primary-dark flex">
      <Navbar />
      <section className="dark:bg-bg-dark flex-grow">{children}</section>
    </main>
  );
};

export default AuthedScreenContainer;
