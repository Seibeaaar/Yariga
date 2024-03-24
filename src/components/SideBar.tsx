import { Link, useLocation } from "react-router-dom";
import LogoIcon from "@/assets/icons/Logo.svg";
import { SOLE_PROP_NAV_LINKS } from "@/constants/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/customization/ThemeContext";

const SideBar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const getIconColor = (isCurrentPath: boolean) => ({
    dark: isCurrentPath ? "#FCFCFC" : "#808191",
    light: isCurrentPath ? "##1A1D1F" : "#808191",
  });

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
          const Icon = link.icon;
          return (
            <Link
              className={`w-full cursor-pointer py-[16px] px-[24px] ease-in duration-200 bg-transparent hover:bg-primary rounded-[12px] flex items-center gap-[16px]`}
              key={link.path}
              to={link.path}
            >
              <Icon
                width={24}
                height={24}
                fill={getIconColor(isCurrentPath)[theme]}
              />
              <p
                className={`${
                  isCurrentPath ? "font-semibold" : "font-normal"
                } text-primary-light dark:text-primary-dark`}
              >
                {link.title}
              </p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
