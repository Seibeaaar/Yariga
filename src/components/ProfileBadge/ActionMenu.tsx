import { ThemeContext } from '@/customization/ThemeContext';
import { FC, useContext, MouseEvent as ReactMouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { logOut } from '@/redux/actions/auth';
import {
  AccountCircle,
  Logout,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type ProfileActionMenuProps = {
  open: boolean;
};

const ProfileActionMenu: FC<ProfileActionMenuProps> = ({ open }) => {
  const { changeTheme, isDarkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onThemeChange = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    changeTheme(isDarkTheme ? 'light' : 'dark');
  };

  const SETTINGS_ACTIONS = [
    {
      icon: AccountCircle,
      text: 'Profile',
      onClick: () => navigate('/profile'),
    },
    {
      icon: Logout,
      text: 'Logout',
      onClick: () => dispatch(logOut()),
    },
    {
      icon: isDarkTheme ? LightMode : DarkMode,
      text: isDarkTheme ? 'Light theme' : 'Dark theme',
      onClick: onThemeChange,
    },
  ];

  return (
    <div
      className={`transition-all overflow-hidden bg-white dark:bg-black rounded-[10px] absolute z-[1] top-[72px] right-[20px] w-[192px] px-[10px] ${open ? 'h-[170px] py-[10px]' : 'h-0 py-0'}`}
    >
      {SETTINGS_ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <div
            className="flex items-center gap-[10px] p-[10px] h-[50px] transition-all text-secondary-light dark:text-secondary-dark dark:hover:text-primary hover:text-primary"
            onClick={action.onClick}
            key={action.text}
          >
            <Icon color="inherit" />
            <p className="">{action.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileActionMenu;
