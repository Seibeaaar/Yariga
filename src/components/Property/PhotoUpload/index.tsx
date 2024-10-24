import { useState, ChangeEvent, FC } from 'react';
import { AddCircle } from '@mui/icons-material';
import { ACCEPTED_IMAGE_FORMATS } from '@/constants/common';
import GalleryImage from './Image';

type PropertyPhotoUploadProps = {
  onPhotoUploadChange(images: File[]): void;
  error?: string;
};

const PropertyPhotoUpload: FC<PropertyPhotoUploadProps> = ({
  onPhotoUploadChange,
  error,
}) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploadedImages((images) => {
      const files = Array.from(e.target.files!);
      onPhotoUploadChange([...images, ...files]);
      return [...images, ...files];
    });
  };

  const handleImageRemoval = (image: File) => {
    setUploadedImages((images) => {
      const updatedList = images.filter((i) => i !== image);
      onPhotoUploadChange(updatedList);
      return updatedList;
    });
  };

  const frameBorderStyles = error
    ? 'border-danger dark:border-danger'
    : 'border-border-light dark:border-border-dark';

  return (
    <div className="my-[24px]">
      <p className="text-sm">
        Upload images of a property. Minimum 3 images required.
      </p>
      <div className="w-full mt-[24px] flex items-center flex-wrap gap-y-[16px]">
        {uploadedImages.map((image, i) => (
          <GalleryImage
            onDelete={handleImageRemoval}
            key={`${image.name}${i}`}
            image={image}
          />
        ))}
        {uploadedImages.length < 10 ? (
          <div
            className={`w-full md:max-lg:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] md:max-lg:[&:not(:nth-child(2n))]:mr-[16px] lg:max-xl:[&:not(:nth-child(4n))]:mr-[16px] xl:[&:not(:nth-child(5n))]:mr-[16px] h-[360px] lg:h-[240px] text-secondary-light dark:text-secondary-dark flex flex-col items-center justify-center relative border-[2px] border-dashed ${frameBorderStyles} rounded-[10px]`}
          >
            <input
              type="file"
              className="opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full"
              onChange={handleImageUpload}
              accept={ACCEPTED_IMAGE_FORMATS.map((format) => `.${format}`).join(
                ',',
              )}
              multiple
            />
            <AddCircle fontSize="large" color="inherit" />
            <p className="mt-[16px] text-center">Add property images</p>
          </div>
        ) : null}
      </div>
      <p className="text-sm text-danger mt-[12px]">{error ?? ''}</p>
    </div>
  );
};

export default PropertyPhotoUpload;
