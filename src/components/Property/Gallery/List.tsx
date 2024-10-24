import { FC, useState, MouseEvent } from 'react';
import { Backdrop } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import useWindowSize from '@/hooks/useWindowSize';

type PropertyGalleryListProps = {
  photos: string[];
  listOpen: boolean;
  onClose: () => void;
};

const PropertyGalleryList: FC<PropertyGalleryListProps> = ({
  listOpen,
  onClose,
  photos,
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const { width } = useWindowSize();
  const [imageAnimationDirection, setImageAnimationDirection] = useState<
    'left' | 'right'
  >('left');

  const leftArrowDisabled = activeImage === 0;
  const rightArrowDisabled = activeImage === photos.length - 1;

  const onRightClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (rightArrowDisabled) return;
    setActiveImage(activeImage + 1);
    setImageAnimationDirection('right');
  };

  const onLeftClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (leftArrowDisabled) return;
    setActiveImage(activeImage - 1);
    setImageAnimationDirection('left');
  };

  const buildArrowStyles = (arrow: 'left' | 'right') => {
    const arrowDisabled =
      arrow === 'left' ? leftArrowDisabled : rightArrowDisabled;
    return arrowDisabled
      ? 'text-secondary-light dark:text-secondary-dark cursor-not-allowed'
      : 'text-primary-light dark:text-primary-dark cursor-pointer';
  };

  const renderList = () => {
    return (
      <div className="flex items-center justify-center">
        {photos.map((photo, idx) => {
          const animationTranslate =
            imageAnimationDirection === 'left'
              ? 'translate-x-[20px]'
              : '-translate-x-[20px]';
          const imageStyle =
            idx === activeImage
              ? 'w-[calc(100%-48px)] md:w-fit opacity-1 translate-x-0'
              : `'w-0 opacity-0 ${animationTranslate}`;
          return (
            <img
              key={photo}
              src={photo}
              className={`transition-all z-[0] duration-700 absolute h-1/2 lg:h-2/3 ${imageStyle}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Backdrop
      sx={{
        zIndex: 5,
      }}
      open={listOpen}
      onClick={onClose}
    >
      <div className="w-[calc(100%-48px)] mx-auto h-full flex items-center justify-center md:justify-between">
        {width > 768 && (
          <div onClick={onLeftClick} className={buildArrowStyles('left')}>
            <ChevronLeft
              sx={{
                width: 64,
                height: 64,
              }}
              color="inherit"
            />
          </div>
        )}
        {renderList()}
        {width > 768 && (
          <div onClick={onRightClick} className={buildArrowStyles('right')}>
            <ChevronRight
              sx={{
                width: 64,
                height: 64,
              }}
              color="inherit"
            />
          </div>
        )}
      </div>
    </Backdrop>
  );
};

export default PropertyGalleryList;
