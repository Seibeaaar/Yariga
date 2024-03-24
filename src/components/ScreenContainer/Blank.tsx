import { FC } from "react";
import { ScreenContainerProps } from "./types";

const BlankContainer: FC<ScreenContainerProps> = ({ children, className }) => (
  <main
    className={`w-screen h-screen bg-light dark:bg-bg-black text-primary-light dark:text-primary-dark ${className}`}
  >
    {children}
  </main>
);

export default BlankContainer;
