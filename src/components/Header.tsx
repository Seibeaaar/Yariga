import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux/store";
import { getAvatarFallback, getFullName } from "@/utils/profile";
import { useNavigate } from "react-router";

const Header = () => {
  const { profile } = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();

  const goToProfile = () => navigate("/profile");
  return (
    <header className="bg-primary-dark h-[70px] py-[16px] dark:bg-primary-light">
      <div className="flex items-center gap-[12px]">
        <Avatar
          onClick={goToProfile}
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
