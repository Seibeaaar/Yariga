import Logo from '@/assets/icons/Logo.svg';
import { NavbarContext } from '@/contexts/NavbarContext';
import { useContext } from 'react';

const AppLogo = () => {
  const { navbarCollapsed: collapsed, toggleNavbar } =
    useContext(NavbarContext);

  return (
    <div
      onClick={toggleNavbar}
      className={`transition-all flex items-center h-[70px] ${collapsed ? 'ml-[28px] gap-0' : 'ml-[16px] gap-[16px]'} py-[15px] cursor-pointer`}
    >
      <img src={Logo} className="w-[40px] h-[40px]" alt="Logo" />
      {collapsed ? null : <h3 className="font-bold text-2xl">Yariga</h3>}
    </div>
  );
};

export default AppLogo;
