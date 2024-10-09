import useWindowSize from '@/hooks/useWindowSize';
import ProfileBadge from '../ProfileBadge';
import AppLogo from './AppLogo';
import HeaderBurgerMenu from './BurgerMenu';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className="z-[1000] bg-white w-full fixed dark:bg-black flex items-center justify-between pr-[20px] py-[15px] h-[70px]">
      {width <= 1024 ? <HeaderBurgerMenu /> : <AppLogo />}
      <ProfileBadge />
    </header>
  );
};

export default Header;
