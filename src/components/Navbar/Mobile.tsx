import { NAV_LINKS } from '@/constants/navigation';
import { NavbarContext } from '@/contexts/NavbarContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNavbarLink from './Link/Mobile';

const MobileNavbar = () => {
  const { navbarCollapsed, toggleNavbar } = useContext(NavbarContext);
  const location = useLocation();

  return (
    <nav
      className={`absolute z-[3] bg-white dark:bg-black w-screen top-[70px] transition-all overflow-hidden ${navbarCollapsed ? 'h-0' : 'h-[calc(100vh-70px)]'}`}
    >
      <div className="flex flex-col gap-[36px] pt-[24px] px-[20px]">
        {NAV_LINKS.map((link) => {
          return (
            <MobileNavbarLink
              onNavigate={toggleNavbar}
              link={link}
              key={link.route}
              active={location.pathname === link.route}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;
