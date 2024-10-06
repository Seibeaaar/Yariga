import { createContext, useState, FC, ReactNode } from 'react';

export const NavbarContext = createContext({
  navbarCollapsed: false,
  toggleNavbar: () => {},
  closeNavbar: () => {},
});

type NavbarContextProps = {
  children: ReactNode;
};

const NavbarContextProvider: FC<NavbarContextProps> = ({ children }) => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleNavbar = () => setNavbarCollapsed(!navbarCollapsed);
  const closeNavbar = () => setNavbarCollapsed(false);

  return (
    <NavbarContext.Provider
      value={{
        navbarCollapsed,
        closeNavbar,
        toggleNavbar,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
