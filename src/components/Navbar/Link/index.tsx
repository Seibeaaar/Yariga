import { FC } from 'react';
import { NavbarLinkConfig } from '@/types/components';
import { Link } from 'react-router-dom';

type NavbarLinkProps = {
  link: NavbarLinkConfig;
  active: boolean;
  collapsed: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({ link, active, collapsed }) => {
  const LinkIcon = link.icon;
  const collapsedStyles = collapsed
    ? 'opacity-0 -left-x-[300px]'
    : 'left-[76px] opacity-1';
  const dynamicStyles = active
    ? 'text-white bg-primary'
    : 'text-secondary-light dark:text-secondary-dark hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary';
  return (
    <Link
      className={`rounded-[12px] transition-all px-[20px] py-[16px] flex items-center ${dynamicStyles}`}
      to={link.route}
    >
      <LinkIcon
        sx={{
          width: 24,
          height: 24,
        }}
        color="inherit"
      />
      <p className={`font-bold absolute ${collapsedStyles}`}>{link.label}</p>
    </Link>
  );
};

export default NavbarLink;
