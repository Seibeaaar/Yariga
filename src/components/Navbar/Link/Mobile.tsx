import { FC } from 'react';
import { NavbarLinkConfig } from '@/types/components';
import { Link } from 'react-router-dom';

type MobileNavbarLinkProps = {
  link: NavbarLinkConfig;
  active: boolean;
  onNavigate(): void;
};

const MobileNavbarLink: FC<MobileNavbarLinkProps> = ({
  link,
  active,
  onNavigate,
}) => {
  const LinkIcon = link.icon;
  const dynamicStyles = active
    ? 'text-white bg-primary'
    : 'text-secondary-light dark:text-secondary-dark hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary';
  return (
    <Link
      onClick={onNavigate}
      className={`flex items-center justify-center gap-[24px] py-[12px] rounded-[8px] transition-all w-full ${dynamicStyles}`}
      key={link.route}
      to={link.route}
    >
      <LinkIcon
        sx={{
          width: 36,
          height: 36,
        }}
      />
      <p className="text-2xl font-bold">{link.label}</p>
    </Link>
  );
};

export default MobileNavbarLink;
