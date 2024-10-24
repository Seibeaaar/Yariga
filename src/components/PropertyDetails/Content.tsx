import { FC } from 'react';
import { PropertyExtended } from '@/types/property';
import { Link } from 'react-router-dom';
import PropertyGallery from '../Property/Gallery';
import PropertyDetailsHeading from './Heading';
import PropertyDetailsFacilities from './Facilities';
import PropertyLandlordDetails from './LandlordDetails';
import PropertyLocationMap from './LocationMap';
import Button from '../Button';

type PropertyDetailsContentProps = {
  property: PropertyExtended;
};

const PropertyDetailsContent: FC<PropertyDetailsContentProps> = ({
  property,
}) => {
  return (
    <section className="flex gap-[24px] flex-col lg:flex-row">
      <div>
        <PropertyGallery photos={property.photos} />
        <div className="flex flex-col gap-[24px] mt-[24px] mr-[48px]">
          <PropertyDetailsHeading property={property} />
          <PropertyDetailsFacilities facilities={property.facilities} />
          <div>
            <h6 className="text-lg font-medium mb-[8px]">Description</h6>
            <p className="text-sm text-secondary-light dark:text-secondary-dark">
              {property.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[40%] flex flex-col gap-[20px]">
        <PropertyLandlordDetails landlord={property.owner} />
        <PropertyLocationMap location={property.location} />
        <Link to="/new-agreement">
          <Button text="Book Now" />
        </Link>
      </div>
    </section>
  );
};

export default PropertyDetailsContent;
