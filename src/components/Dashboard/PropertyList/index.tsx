import { FC } from 'react';
import { GridLoader } from 'react-spinners';
import { Property } from '@/types/property';
import DashboardPropertyItem from './Item';
import CustomLoader from '@/components/CustomLoader';

type DashboardPropertyListProps = {
  properties: Property[];
  pending: boolean;
};

const DashboardPropertyList: FC<DashboardPropertyListProps> = ({
  properties,
  pending,
}) => {
  const renderContent = () => {
    if (pending) {
      return (
        <div className="flex items-center justify-center h-[192px]">
          <CustomLoader loader={GridLoader} />
        </div>
      );
    }

    if (properties.length === 0) {
      return (
        <div className="flex items-center justify-center h-[192px]">
          <p className="text-xl">No properties of yours so far</p>
        </div>
      );
    }

    return (
      <div className="flex items-center flex-wrap gap-[16px]">
        {properties.map((property) => (
          <DashboardPropertyItem key={property.id} property={property} />
        ))}
      </div>
    );
  };
  return <>{renderContent()}</>;
};

export default DashboardPropertyList;
