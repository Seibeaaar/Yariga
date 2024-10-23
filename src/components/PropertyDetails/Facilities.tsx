import { PROPERTY_FACILITY } from '@/types/property';
import { FC } from 'react';
import { PROPERTY_FACILITIES_OPTIONS } from '@/constants/property';

type PropertyDetailsFacilitiesProps = {
  facilities: PROPERTY_FACILITY[];
};

const PropertyDetailsFacilities: FC<PropertyDetailsFacilitiesProps> = ({
  facilities,
}) => {
  if (facilities.length === 0) return null;

  const renderFacility = (facility: PROPERTY_FACILITY) => {
    const facilityOption = PROPERTY_FACILITIES_OPTIONS.find(
      (option) => option.value === facility,
    );
    if (!facilityOption) return null;

    const OptionIcon = facilityOption.icon;

    return (
      <div key={facility} className="flex items-center gap-[8px] w-1/4">
        <OptionIcon
          color="inherit"
          sx={{
            width: 18,
            height: 18,
          }}
        />
        <p className="text-sm">{facilityOption.label}</p>
      </div>
    );
  };

  return (
    <div>
      <h6 className="text-lg font-semibold mb-[16px]">Facilities</h6>
      <div className="flex items-center flex-wrap">
        {facilities.map((facility) => renderFacility(facility))}
      </div>
    </div>
  );
};

export default PropertyDetailsFacilities;
