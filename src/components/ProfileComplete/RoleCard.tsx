import { UserRoleOption } from '@/types/user';
import { FC } from 'react';

type UserCardProps = {
  option: UserRoleOption;
  onSelect: () => void;
  selected: boolean;
};

const UserRoleCard: FC<UserCardProps> = ({
  option: { icon, title },
  onSelect,
  selected,
}) => {
  const Icon = icon;
  const selectedStyles = 'bg-primary text-primary-dark border-primary';
  const nonSelectedStyles =
    'hover:bg-primary hover:border-primary border-border-light dark:border-border-dark';

  return (
    <div
      onClick={onSelect}
      className={`rounded-[16px] border-[1px] w-full md:w-1/2 cursor-pointer p-[16px] transition-all flex flex-col justify-center gap-[16px] items-center min-h-[200px] ${selected ? selectedStyles : nonSelectedStyles}`}
    >
      <Icon fontSize="large" />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default UserRoleCard;
