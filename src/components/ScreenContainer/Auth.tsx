import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import ProfileBadge from '../ProfileBadge';

type AuthedScreenContainerProps = {
  children: ReactNode;
};

const AuthedScreenContainer: FC<AuthedScreenContainerProps> = ({
  children,
}) => {
  return (
    <main className="text-primary-light dark:text-primary-dark flex">
      <Navbar />
      <div className="flex-grow">
        <header className="bg-white dark:bg-black flex items-center justify-end pr-[20px] py-[15px] h-[70px]">
          <ProfileBadge />
        </header>
        <section className="dark:bg-bg-dark w-full">{children}</section>
      </div>
    </main>
  );
};

export default AuthedScreenContainer;
