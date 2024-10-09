import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/constants/navigation';
import NavbarLink from './Link';
import { NavbarContext } from '@/contexts/NavbarContext';
import useWindowSize from '@/hooks/useWindowSize';
import MobileNavbar from './Mobile';

const Navbar = () => {
  const { width } = useWindowSize();
  const { navbarCollapsed: collapsed } = useContext(NavbarContext);
  const location = useLocation();

  if (width <= 1024) {
    return <MobileNavbar />;
  }
  return (
    <nav
      className={`transition-all fixed z-[2] top-[70px] pt-[15px] bg-white dark:bg-black h-screen px-[16px] ${collapsed ? 'w-[100px]' : 'w-[250px]'}`}
    >
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
