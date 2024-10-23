import { FC, useState } from 'react';
import { Delete } from '@mui/icons-material';

type PropertyGalleryImageProps = {
  image: File;
  onDelete: (image: File) => void;
};

const PropertyGalleryImage: FC<PropertyGalleryImageProps> = ({
  image,
  onDelete,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full md:max-lg:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] md:max-lg:[&:not(:nth-child(2n))]:mr-[16px] lg:max-xl:[&:not(:nth-child(4n))]:mr-[16px] xl:[&:not(:nth-child(5n))]:mr-[16px] h-[360px] lg:h-[240px] cursor-pointer relative rounded-[10px] overflow-hidden"
    >
      <img
        src={URL.createObjectURL(image)}
        alt="Property image"
        className="w-full h-full"
      />
      {hovered ? (
        <>
          <div className="absolute flex items-center z-[2] justify-center top-0 left-0 w-full h-full bg-slate-700 opacity-80" />
          <div
            onClick={() => onDelete(image)}
            className="absolute text-[36px] top-[calc(50%-30px)] left-[calc(50%-18px)] z-[3]"
          >
            <Delete color="inherit" fontSize="inherit" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PropertyGalleryImage;