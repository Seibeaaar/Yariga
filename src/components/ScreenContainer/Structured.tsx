import { FC } from "react";
import { ScreenContainerProps } from "./types";
import SideBar from "../SideBar";

const StructuredContainer: FC<ScreenContainerProps> = ({
  className,
  children,
}) => {
  return (
    <main className={`pt-[100px] pl-[286px] relative ${className}`}>
      <SideBar />
      {children}
    </main>
  );
};

export default StructuredContainer;
