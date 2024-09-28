import { useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { Avatar } from '@mui/material';
import { ROLE_NAME } from '@/constants/user';
import { USER_ROLE } from '@/types/user';
import ProfileActionMenu from './ActionMenu';

const ProfileBadge = () => {
  const [actionsMenuOpen, setActionsMenuOpen] = useState<boolean>(false);

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
        sx={{
          width: 40,
          height: 40,
        }}
      >
        TU
      </Avatar>
      <div>
        <h5 className="text-sm font-semibold">Test User</h5>
        <p className="text-sm text-secondary-light dark:text-secondary-dark">
          {ROLE_NAME[USER_ROLE.Landlord]}
        </p>
      </div>
    </article>
  );
};

export default ProfileBadge;
