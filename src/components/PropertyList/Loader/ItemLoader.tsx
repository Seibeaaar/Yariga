import useWindowSize from '@/hooks/useWindowSize';
import { Skeleton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const PropertyItemLoader = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [elementsWidth, setElementsWidth] = useState({
    image: 0,
    info: 0,
    price: 0,
    tags: 0,
  });
  const { width } = useWindowSize();

  useEffect(() => {
    if (itemRef && itemRef.current) {
      setElementsWidth(() => {
        const itemWidth = itemRef.current!.clientWidth as number;

        if (width <= 1024) {
          return {
            image: itemWidth / 2,
            info: itemWidth / 2,
            price: itemWidth / 6,
            tags: itemWidth / 3,
          };
        }

        return {
          image: itemWidth / 2,
          info: itemWidth / 2,
          price: itemWidth / 5,
          tags: itemWidth / 4,
        };
      });
    }
  }, [width]);

  return (
    <div
      ref={itemRef}
      className="flex items-stretch gap-[16px] w-full md:w-[calc(50%-24px)]"
    >
      <Skeleton width={elementsWidth.image} height={125} variant="rounded" />
      <div className="flex flex-col justify-between">
        <Skeleton width={elementsWidth.price} height={30} variant="rounded" />
        <Skeleton width={elementsWidth.info} height={60} variant="rounded" />
        <Skeleton width={elementsWidth.tags} height={20} variant="rounded" />
      </div>
    </div>
  );
};

export default PropertyItemLoader;
