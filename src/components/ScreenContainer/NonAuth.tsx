import { FC, ReactNode } from 'react';

type NonAuthorizedScreenProps = {
  children: ReactNode;
};

const NonAuthorizedScreen: FC<NonAuthorizedScreenProps> = ({ children }) => {
  return (
    <main className="bg-bg-light dark:bg-bg-dark text-primary-light dark:text-primary-dark">
      {children}
    </main>
  );
};

export default NonAuthorizedScreen;
