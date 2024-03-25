import { FC, useState } from "react";

type BurgerMenuProps = {
  onClick: () => void;
};

const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div
      onClick={onMenuClick}
      className="flex transition-all flex-col h-[20px] w-[24px] gap-[4px]"
    >
      <div
        className={`${
          isOpen ? "rotate-[37.5deg]" : "rotate-0"
        } transition-all h-[3px] dark:bg-white bg-bg-black origin-left`}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        } transition-all h-[3px] dark:bg-white bg-bg-black`}
      ></div>
      <div
        className={`${
          isOpen ? "-rotate-[37.5deg]" : "rotate-0"
        } transition-all h-[3px] dark:bg-white bg-bg-black origin-left`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
