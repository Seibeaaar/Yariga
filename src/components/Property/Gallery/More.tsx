import { FC } from 'react';

type PropertyGalleryMoreProps = {
  photo: string;
  photosLeft: number;
};

const PropertyGalleryMore: FC<PropertyGalleryMoreProps> = ({
  photo,
  photosLeft,
}) => {
  return (
    <div className="relative rounded-[10px] overflow-hidden">
      {photosLeft > 0 && (
        <>
          <div className="bg-bg-dark opacity-60 w-full h-full top-0 left-0 absolute flex items-center justify-center" />
          <p className="text-lg left-[calc(50%-18px)] top-[calc(50%-18px)] absolute origin-center">
            + {photosLeft}
          </p>
        </>
      )}
      <img src={photo} alt="More property photos" />
    </div>
  );
};

export default PropertyGalleryMore;
