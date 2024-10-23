import { FC, useState } from 'react';
import PropertyGalleryMore from './More';
import PropertyGalleryList from './List';

type PropertyGalleryProps = {
  photos: string[];
};

const PropertyGallery: FC<PropertyGalleryProps> = ({ photos }) => {
  const [photoListOpen, setPhotoListOpen] = useState(false);
  const renderPhotos = () => {
    if (photos.length === 1) {
      return (
        <img
          loading="lazy"
          className="flex-grow rounded-[10px] max-h-[350px]"
          src={photos[0]}
          alt="Property main photo"
        />
      );
    }

    if (photos.length === 2) {
      return (
        <div className="flex w-full gap-[16px]">
          <img
            loading="lazy"
            className="flex-grow rounded-[10px] max-h-[350px]"
            src={photos[0]}
            alt="Property main photo"
          />
          <img
            className="rounded-[10px] w-[30%] h-[calc(50%-16px)]"
            src={photos[1]}
            alt="Property secondary photo"
          />
        </div>
      );
    }

    return (
      <div className="flex items-stretch w-full gap-[16px]">
        <img
          loading="lazy"
          className="flex-grow rounded-[10px] max-h-[350px]"
          src={photos[0]}
          alt="Property main photo"
        />
        <div className="flex flex-col gap-[16px]">
          <img
            loading="lazy"
            className="rounded-[10px] w-[30%]"
            src={photos[1]}
            alt="Property secondary photo"
          />
          <PropertyGalleryMore
            photosLeft={photos.length - 2}
            photo={photos[1]}
          />
        </div>
      </div>
    );
  };

  const openPhotoList = () => setPhotoListOpen(true);
  const closePhotoList = () => setPhotoListOpen(false);

  return (
    <>
      <div
        onClick={openPhotoList}
        className="cursor-pointer flex items-stretch gap-[16px]"
      >
        {renderPhotos()}
      </div>
      <PropertyGalleryList
        onClose={closePhotoList}
        listOpen={photoListOpen}
        photos={photos}
      />
    </>
  );
};

export default PropertyGallery;
