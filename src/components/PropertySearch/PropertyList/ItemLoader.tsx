import { Skeleton } from '@mui/material';

const PropertyItemLoader = () => {
  return (
    <div className="flex items-center flex-wrap gap-y-[24px] mt-[24px]">
      {Array.from({
        length: 10,
      }).map((_, i) => (
        <div key={i} className="flex items-stretch gap-[10px] w-1/2">
          <Skeleton width={200} height={125} variant="rounded" />
          <div className="flex flex-col justify-between">
            <Skeleton width={60} height={30} variant="rounded" />
            <Skeleton width={300} height={60} variant="rounded" />
            <Skeleton width={180} height={20} variant="rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyItemLoader;
