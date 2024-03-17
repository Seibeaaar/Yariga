import { FC } from "react";
import { ScreenContainerProps } from "./types";
import SideBar from "../SideBar";
import Header from "../Header";

const StructuredContainer: FC<ScreenContainerProps> = ({
  className,
  children,
}) => {
  return (
    <main className={`flex ${className}`}>
      <SideBar />
      <section className="flex-grow">
        <Header />
        {children}
      </section>
    </main>
  );
};

export default StructuredContainer;
