import { FC } from 'react';
import { Property } from '@/types/property';

import PropertyGallery from '../Property/Gallery';
import PropertyDetailsHeading from './Heading';

type PropertyDetailsContentProps = {
  property: Property;
};

const PropertyDetailsContent: FC<PropertyDetailsContentProps> = ({
  property,
}) => {
  return (
    <section className="flex gap-[24px]">
      <div className="flex flex-col gap-[10px]">
        <PropertyGallery photos={property?.photos} />
        <PropertyDetailsHeading property={property} />
      </div>
    </section>
  );
};

export default PropertyDetailsContent;
