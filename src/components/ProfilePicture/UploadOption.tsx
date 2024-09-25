import { FC } from 'react';
import { MuiIcon } from '@/types/components';

type UploadOptionProps = {
  onClick: () => void;
  icon: MuiIcon;
};

const ProfilePictureUploadOption: FC<UploadOptionProps> = ({
  onClick,
  icon,
}) => {
  const Icon = icon;
  return (
    <div
      className="relative z-[2] cursor-pointer hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary flex items-center justify-center rounded-[4px] w-[48px] h-[48px] bg-primary-light dark:bg-primary-dark"
      onClick={onClick}
    >
      <Icon
        color="inherit"
        sx={{
          width: 24,
          height: 24,
        }}
      />
    </div>
  );
};

export default ProfilePictureUploadOption;
