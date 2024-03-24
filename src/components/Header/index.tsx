import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux/store";
import { getAvatarFallback, getFullName } from "@/utils/profile";
import ProfilePopUp from "./ProfilePopup";
import { useState } from "react";

const Header = () => {
  const { profile } = useSelector((state: RootState) => state.profile);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setPopUpOpen(!popUpOpen);
  };

  return (
    <header className="pl-[24px] pr-[72px] bg-white flex items-center justify-between h-[70px] py-[16px] dark:bg-bg-black">
      <div></div>
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
            Sole proprietor
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
