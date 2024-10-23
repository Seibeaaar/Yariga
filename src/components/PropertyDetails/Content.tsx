import { FC } from 'react';
import { Property } from '@/types/property';

import PropertyGallery from '../Property/Gallery';
import PropertyDetailsHeading from './Heading';
import PropertyDetailsFacilities from './Facilities';

type PropertyDetailsContentProps = {
  property: Property;
};

const PropertyDetailsContent: FC<PropertyDetailsContentProps> = ({
  property,
}) => {
  return (
    <section className="flex gap-[24px]">
      <div className="flex flex-col gap-[24px]">
        <PropertyGallery photos={property.photos} />
        <PropertyDetailsHeading property={property} />
        <PropertyDetailsFacilities facilities={property.facilities} />
        <div>
          <h6 className="text-lg font-medium mb-[8px]">Description</h6>
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            {property.description}
          </p>
        </div>
      </div>
      <div className="w-1/3"></div>
    </section>
  );
};

export default PropertyDetailsContent;
