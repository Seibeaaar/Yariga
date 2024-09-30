import { useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/selectors/user';
import { Avatar } from '@mui/material';
import { ROLE_NAME } from '@/constants/user';
import ProfileActionMenu from './ActionMenu';
import { buildFullName, extractInitials } from '@/utils/user';

const ProfileBadge = () => {
  const [actionsMenuOpen, setActionsMenuOpen] = useState<boolean>(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const outsideClickListener = () => {
      if (actionsMenuOpen) {
        setActionsMenuOpen(false);
      }
    };

    window.addEventListener('click', outsideClickListener);
    return () => {
      window.removeEventListener('click', outsideClickListener);
    };
  }, [actionsMenuOpen]);

  if (!user) return null;

  const toggleSettingsPopup = (
    e: ReactMouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setActionsMenuOpen(!actionsMenuOpen);
  };

  return (
    <article
      onClick={toggleSettingsPopup}
      className="flex items-center gap-[8px] cursor-pointer"
    >
      <ProfileActionMenu open={actionsMenuOpen} />
      <Avatar
        src={user.profilePicture}
        sx={{
          width: 40,
          height: 40,
        }}
      >
        {extractInitials(user)}
      </Avatar>
      <div>
        <h5 className="text-sm font-semibold">{buildFullName(user)}</h5>
        <p className="text-sm text-secondary-light dark:text-secondary-dark">
          {ROLE_NAME[user.role]}
        </p>
      </div>
    </article>
  );
};

export default ProfileBadge;
