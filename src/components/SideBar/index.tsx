import { useLocation } from "react-router-dom";
import LogoIcon from "@/assets/icons/Logo.svg";
import { SOLE_PROP_NAV_LINKS } from "@/constants/navigation";
import { useContext, useState } from "react";
import { ThemeContext } from "@/customization/ThemeContext";
import NavLink from "./NavLink";
import BurgerMenu from "./BurgerMenu";
import useWindowDimensions from "@/customization/useWindowDimensions";

const SideBar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);

  if (width <= 768) {
    return (
      <>
        <aside
          className={`h-[70px] p-[23px] flex items-center justify-center overflow-hidden bg-white dark:bg-bg-black relative z-[2]`}
        >
          <BurgerMenu onClick={toggleNavMenu} />
        </aside>
        <div
          className={`flex-grow absolute top-[70px] left-0 w-screen h-screen z-[1] transition-all bg-white dark:bg-bg-black ${
            isNavMenuOpen ? "opacity-60" : "opacity-0"
          }`}
        />
        <nav
          className={`transition-all h-screen z-3 ${
            isNavMenuOpen ? "scale-x-100" : "scale-x-0"
          } origin-left absolute top-[70px] left-0 flex flex-col items-center w-1/2 z-[3] bg-white dark:bg-bg-black`}
        >
          {SOLE_PROP_NAV_LINKS.map((link) => {
            const isCurrentPath = location.pathname === link.path;
            return (
              <NavLink
                path={link.path}
                title={link.title}
                icon={link.icon}
                key={link.path}
                isCurrentPath={isCurrentPath}
                theme={theme}
              />
            );
          })}
        </nav>
      </>
    );
  }

  return (
    <aside
      className={`w-[250px] h-screen p-[16px] overflow-hidden bg-white dark:bg-bg-black relative`}
    >
      <div className="flex items-center gap-[16px]">
        <img src={LogoIcon} alt="Logo" />
        <h5 className="font-bold text-2xl text-primary-light dark:text-primary-dark">
          Yariga
        </h5>
      </div>
      <nav className="pt-[32px]">
        {SOLE_PROP_NAV_LINKS.map((link) => {
          const isCurrentPath = location.pathname === link.path;
          return (
            <NavLink
              path={link.path}
              title={link.title}
              icon={link.icon}
              key={link.path}
              isCurrentPath={isCurrentPath}
              theme={theme}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
