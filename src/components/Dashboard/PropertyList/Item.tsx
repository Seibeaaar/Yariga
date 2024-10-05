import { FC } from 'react';
import { Property } from '@/types/property';
import { Place } from '@mui/icons-material';
import { formatPropertyPrice } from '@/utils/property';

type DashboardPropertyItemProps = {
  property: Property;
};

const DashboardPropertyItem: FC<DashboardPropertyItemProps> = ({
  property,
}) => {
  return (
    <div className="w-[calc(33%-8px)]">
      <img
        className="h-[192px] w-full rounded-[10px]"
        src={property.photos[0]}
        alt={`${property.title} photo`}
      />
      <div className="flex justify-between items-start mt-[12px]">
        <div>
          <p className="font-semibold">{property.title}</p>
          <div className="flex items-center gap-[8px]">
            <Place color="inherit" />
            <p className="text-sm text-secondary-light dark:text-secondary-dark">
              {property.location.title}
            </p>
          </div>
        </div>
        <div className="px-[10px] py-[8px] bg-secondary rounded-[4px]">
          <p className="text-primary text-xs">
            ${formatPropertyPrice(property.amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPropertyItem;
