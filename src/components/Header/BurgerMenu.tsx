import { NavbarContext } from '@/contexts/NavbarContext';
import { useContext } from 'react';

const HeaderBurgerMenu = () => {
  const { toggleNavbar, navbarCollapsed } = useContext(NavbarContext);

  return (
    <div
      onClick={toggleNavbar}
      className="w-[24px] h-[20px] ml-[20px] flex flex-col justify-between"
    >
      <div
        className={`bg-black dark:bg-white h-[4px] transition-all origin-top-left ${!navbarCollapsed ? 'rotate-45' : 'rotate-0'}`}
      />
      <div
        className={`bg-black dark:bg-white h-[4px] transition-all ${navbarCollapsed ? 'opacity-1 translate-x-0' : 'opacity-100 -translate-x-[50px]'}`}
      />
      <div
        className={`bg-black dark:bg-white h-[4px] transition-all origin-bottom-left ${!navbarCollapsed ? '-rotate-45' : 'rotate-0'}`}
      />
    </div>
  );
};

export default HeaderBurgerMenu;
