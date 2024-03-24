/// <reference types="vite-plugin-svgr/client" />
import { useContext, FC, useRef, useEffect } from "react";
import ProfileIcon from "@/assets/icons/Profile.svg?react";
import SettingsIcon from "@/assets/icons/Settings.svg?react";
import LogoutIcon from "@/assets/icons/Logout.svg?react";
import { ThemeContext } from "@/customization/ThemeContext";
import { useNavigate } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { persistor } from "@/redux/store";

type ProfilePopUpProps = {
  isOpen: boolean;
  closePopup: () => void;
};

const ProfilePopUp: FC<ProfilePopUpProps> = ({ isOpen, closePopup }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (isOpen && popupRef.current) {
        e.target instanceof HTMLElement &&
          !popupRef.current.contains(e.target) &&
          closePopup();
      }
      return null;
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [popupRef, isOpen]);

  const ThemeIcon = theme === "dark" ? DarkModeIcon : LightModeIcon;

  return (
    <div
      ref={popupRef}
      className={`transition-transform origin-top ${
        isOpen ? "scale-y-1" : "scale-y-0"
      } absolute top-[56px] bg-white dark:bg-bg-black rounded-[10px] w-[192px]`}
    >
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
        className="cursor-pointer text-secondary-light dark:text-secondary-dark transition-all hover:text-primary flex p-[16px] items-center gap-[12px] w-full"
      >
        <ThemeIcon fontSize="inherit" />
        <p className="text-sm text-primary-light dark:text-primary-dark font-medium">
          Mode: {theme === "dark" ? "dark" : "light"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePopUp;
