/// <reference types="vite-plugin-svgr/client" />
import { useContext, FC } from "react";
import ProfileIcon from "@/assets/icons/Profile.svg?react";
import SettingsIcon from "@/assets/icons/Settings.svg?react";
import LogoutIcon from "@/assets/icons/Logout.svg?react";
import { ThemeContext } from "@/customization/ThemeContext";
import { useNavigate } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { persistor } from "@/redux/store";

const ProfilePopupContent: FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const HEADER_POPUP_OPTIONS = [
    {
      title: "My profile",
      icon: ProfileIcon,
      onClick: () => navigate("/profile"),
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      onClick: () => navigate("/settings"),
    },
    {
      title: "Logout",
      icon: LogoutIcon,
      onClick: () => {
        persistor.purge();
        localStorage.removeItem("JWT");
        navigate("/login");
      },
    },
  ];

  const ThemeIcon = theme === "dark" ? DarkModeIcon : LightModeIcon;

  return (
    <>
      {HEADER_POPUP_OPTIONS.map((option) => {
        const Icon = option.icon;
        return (
          <div
            className="cursor-pointer fill-secondary-light text-primary-light dark:text-primary-dark transition-all hover:fill-primary hover:text-primary flex p-[16px] items-center gap-[12px] w-full"
            key={option.title}
            onClick={option.onClick}
          >
            <Icon fill="inherit" width={16} height={16} />
            <p className="text-sm font-medium hover:text-inherit">
              {option.title}
            </p>
          </div>
        );
      })}
      <div
        onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer text-secondary-light dark:text-secondary-dark transition-all hover:text-primary hover:dark:text-primary flex p-[16px] items-center gap-[12px] w-full"
      >
        <ThemeIcon fontSize="inherit" />
        <p className="text-sm text-primary-light dark:text-primary-dark font-medium">
          Mode: {theme === "dark" ? "dark" : "light"}
        </p>
      </div>
    </>
  );
};

export default ProfilePopupContent;
