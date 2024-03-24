import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux/store";
import { getAvatarFallback, getFullName } from "@/utils/profile";
import ProfilePopUp from "./ProfilePopup";
import { useState, MouseEvent as ReactMouseEvent } from "react";
import { PROFILE_ROLE_TITLES } from "@/constants/profile";

const Header = () => {
  const { profile } = useSelector((state: RootState) => state.profile);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const togglePopUp = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setPopUpOpen(!popUpOpen);
  };

  return (
    <header className="pl-[24px] pr-[72px] bg-white flex items-center justify-between h-[70px] py-[16px] dark:bg-bg-black">
      <div />
      <div className="flex relative items-center gap-[12px] ">
        <ProfilePopUp
          closePopup={() => setPopUpOpen(false)}
          isOpen={popUpOpen}
        />
        <Avatar
          onClick={togglePopUp}
          className="cursor-pointer"
          alt={getFullName(profile!)}
          src={profile?.avatar}
        >
          {getAvatarFallback(profile!)}
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-primary-light dark:text-primary-dark">
            {getFullName(profile!)}
          </p>
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            {PROFILE_ROLE_TITLES[profile!.role]}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
