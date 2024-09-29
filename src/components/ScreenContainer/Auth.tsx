import { FC, ReactNode } from 'react';
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
  return (
    <main className="text-primary-light dark:text-primary-dark flex">
      <Navbar />
      <div className="flex-grow">
        <header className="bg-white dark:bg-black flex items-center justify-end pr-[20px] py-[15px] h-[70px]">
          <ProfileBadge />
        </header>
        <section className="bg-bg-light dark:bg-bg-dark w-full p-[15px]">
          {title ? <h1 className="text-2xl font-bold">{title}</h1> : null}
          {children}
        </section>
      </div>
    </main>
  );
};

export default AuthedScreenContainer;
