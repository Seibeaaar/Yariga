import { FC } from 'react';
import { SearchOff } from '@mui/icons-material';
import PropertySearchItem from './Item';
import PropertyItemLoader from './ItemLoader';
import { Property } from '@/types/property';

type PropertyListProps = {
  items: Property[];
  pending: boolean;
};

const PropertiesSearchList: FC<PropertyListProps> = ({ items, pending }) => {
  const renderContent = () => {
    if (pending) {
      return <PropertyItemLoader />;
    }
    if (items.length === 0) {
      return (
        <div className="flex min-h-[250px] flex-col gap-[16px] items-center justify-center text-secondary-light dark:text-secondary-dark">
          <SearchOff
            color="inherit"
            sx={{
              width: 96,
              height: 96,
            }}
          />
          <h4 className="text-2xl">No properties found</h4>
        </div>
      );
    }

    return (
      <div className="flex items-center flex-wrap mt-[24px] gap-[24px]">
        {items.map((property) => (
          <PropertySearchItem key={property.id} property={property} />
        ))}
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default PropertiesSearchList;
