import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/constants/navigation';
import Logo from '@/assets/icons/Logo.svg';
import NavbarLink from './Link';
import { NavbarContext } from '@/contexts/NavbarContext';

const Navbar = () => {
  const location = useLocation();
  const { navbarCollapsed: collapsed, toggleNavbar } =
    useContext(NavbarContext);
  return (
    <nav
      className={`transition-all fixed z-[2] bg-white dark:bg-black h-screen px-[16px] ${collapsed ? 'w-[100px]' : 'w-[250px]'}`}
    >
      <div
        onClick={toggleNavbar}
        className={`transition-all flex items-center h-[70px] ${collapsed ? 'ml-[16px] gap-0' : 'ml-0 gap-[16px]'} py-[15px] mb-[25px] cursor-pointer`}
      >
        <img src={Logo} className="w-[40px] h-[40px]" alt="Logo" />
        {collapsed ? null : <h3 className="font-bold text-2xl">Yariga</h3>}
      </div>
      {NAV_LINKS.map((link) => (
        <NavbarLink
          collapsed={collapsed}
          link={link}
          key={link.route}
          active={link.route === location.pathname}
        />
      ))}
    </nav>
  );
};

export default Navbar;
