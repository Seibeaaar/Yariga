import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux/store";
import { getAvatarFallback, getFullName } from "@/utils/profile";
import { useState, MouseEvent as ReactMouseEvent } from "react";
import { PROFILE_ROLE_TITLES } from "@/constants/profile";
import SearchBar from "../Search";
import Popup from "../Popup";
import ProfilePopupContent from "./PopupContent";
import NotificationCenter from "./NotificationCenter";

const Header = () => {
  const { profile } = useSelector((state: RootState) => state.profile);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const togglePopUp = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setPopUpOpen(!popUpOpen);
  };

  return (
    <header className="lg:pl-[24px] pr-[23px] lg:pr-[72px] bg-white flex items-center justify-between h-[70px] py-[16px] dark:bg-bg-black">
      <SearchBar />
      <div className="flex items-center gap-[12px] ">
        <NotificationCenter />
        <Popup
          open={popUpOpen}
          onClose={() => setPopUpOpen(false)}
          className="w-[192px] top-[74px]"
        >
          <ProfilePopupContent />
        </Popup>
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
