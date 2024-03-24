import { useLocation } from "react-router-dom";
import LogoIcon from "@/assets/icons/Logo.svg";
import { SOLE_PROP_NAV_LINKS } from "@/constants/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/customization/ThemeContext";
import NavLink from "./NavLink";

const SideBar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <aside
      className={`w-[250px] h-screen p-[16px] overflow-hidden bg-white dark:bg-bg-black`}
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
