import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { BREAKPOINTS } from '@/constants/styles';

const getOrientation = () => window.screen.orientation.type;

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());
  const { height } = useWindowSize();

  const updateOrientation = () => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return {
    orientation,
    isLandscape: orientation === 'landscape-primary',
    isPortrait: orientation === 'portrait-primary',
    isMobileLandscape:
      orientation === 'landscape-primary' && height <= BREAKPOINTS.XS,
  };
};

export default useScreenOrientation;
