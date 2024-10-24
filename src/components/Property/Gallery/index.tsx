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
          className="w-full sm:w-3/4 mx-auto lg:mx-0 lg:w-full rounded-[10px] max-h-[400px]"
          src={photos[0]}
          alt="Property main photo"
        />
      );
    }

    if (photos.length === 2) {
      return (
        <div className="flex flex-col sm:flex-row w-full gap-[16px]">
          <img
            loading="lazy"
            className="rounded-[10px] w-full max-h-[350px] md:max-h-[400px] lg:max-h-[300px] xl:max-h-[350px]"
            src={photos[0]}
            alt="Property main photo"
          />
          <img
            className="rounded-[10px] w-full sm:w-[45%] lg:w-[35%] max-h-[350px] sm:h-[calc(50%-16px)]"
            src={photos[1]}
            alt="Property secondary photo"
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col sm:flex-row items-stretch w-full sm:max-h-[250px] md:max-h-[400px] lg:max-h-[300px] xl:max-h-[350px] gap-[16px]">
        <img
          loading="lazy"
          className="rounded-[10px] w-full max-h-[350px] sm:h-full"
          src={photos[0]}
          alt="Property main photo"
        />
        <div className="flex flex-col gap-y-[16px] w-full sm:w-[45%] lg:w-[35%]">
          <img
            loading="lazy"
            className="rounded-[10px] w-full max-h-[350px] sm:h-[calc(50%-8px)]"
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
