import { FC, ReactNode } from "react";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => (
  <main className="w-screen h-screen bg-light dark:bg-black text-text-primary-light dark:text-text-primary-dark">
    {children}
  </main>
);

export default ScreenContainer;
