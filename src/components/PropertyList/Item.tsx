import { FC } from 'react';
import { Property } from '@/types/property';
import { formatPropertyPrice } from '@/utils/property';
import { PlaceOutlined, SquareFoot } from '@mui/icons-material';
import { PROPERTY_TYPE_ICON, PROPERTY_TYPE_NAME } from '@/constants/property';
import { AGREEMENT_TYPE_ICON, AGREEMENT_TYPE_NAME } from '@/constants/common';

type PropertySearchItemProps = {
  property: Property;
};

const PropertySearchItem: FC<PropertySearchItemProps> = ({ property }) => {
  const displayedAttributes = [
    {
      label: PROPERTY_TYPE_NAME[property.type],
      icon: PROPERTY_TYPE_ICON[property.type],
    },
    {
      label: `${property.area}M`,
      icon: SquareFoot,
    },
    {
      label: AGREEMENT_TYPE_NAME[property.agreementType],
      icon: AGREEMENT_TYPE_ICON[property.agreementType],
    },
  ];
  return (
    <div className="flex items-stretch gap-[16px] w-full md:w-[calc(50%-24px)]">
      <img
        src={property.photos[0]}
        className="h-[125px] w-[200px] rounded-[10px]"
        alt={`${property.title} image`}
      />
      <div className="flex flex-col justify-between">
        <div className="bg-secondary rounded-[5px] px-[10px] py-[8px] w-fit">
          <p className="text-primary text-xs font-medium">
            ${formatPropertyPrice(property.amount)}
          </p>
        </div>
        <div>
          <h6 className="font-semibold">{property.title}</h6>
          <div className="flex items-center gap-[6px] text-secondary-light dark:text-secondary-dark">
            <PlaceOutlined color="inherit" />
            <p className="text-sm">{property.location.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          {displayedAttributes.map((attr) => {
            const AttributeIcon = attr.icon;
            return (
              <div
                className="flex gap-[4px] items-center text-secondary-light dark:text-secondary-dark"
                key={attr.label}
              >
                <AttributeIcon
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                  color="inherit"
                />
                <p className="text-xs text-primary-light dark:text-primary-dark">
                  {attr.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertySearchItem;
