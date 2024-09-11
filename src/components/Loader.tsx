import Logo from '@/assets/icons/Logo.svg';
import { FC } from 'react';
import AnimatedBlock from './AnimatedBlock';

type LoaderProps = {
  showLoader: boolean;
};

const Loader: FC<LoaderProps> = ({ showLoader }) => {
  if (!showLoader) return null;
  return (
    <div className="fixed z-[1000] top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className={`w-full h-full bg-black z-0 absolute`} />
      <AnimatedBlock
        tag="img"
        src={Logo}
        animationProps={{
          animate: { scale: [1, 2.5, 1] },
          transition: { duration: 3, repeat: Infinity },
        }}
        className="w-[96px] h-[96px] absolute opacity-100 z-1"
        alt="Yariga logo"
      />
    </div>
  );
};

export default Loader;
