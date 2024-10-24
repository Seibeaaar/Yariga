import { PropertyExtended } from '@/types/property';
import { FC, useContext } from 'react';
import { Rating } from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';
import { PROPERTY_TYPE_NAME } from '@/constants/property';
import { COLORS } from '@/constants/styles';
import { ThemeContext } from '@/customization/ThemeContext';
import { formatPropertyPrice } from '@/utils/property';
import { PAYMENT_PERIOD_PREPOSITION } from '@/constants/common';

type PropertyDetailsHeadingProps = {
  property: PropertyExtended;
};

const PropertyDetailsHeading: FC<PropertyDetailsHeadingProps> = ({
  property,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const emptyRatingColor = isDarkTheme
    ? COLORS['secondary-dark']
    : COLORS['secondary-light'];

  return (
    <div className="flex">
      <div className="flex-grow">
        <h5 className="text-lg font-medium">
          {PROPERTY_TYPE_NAME[property.type]}
        </h5>
        <h3 className="text-2xl fotn-medium my-[8px]">{property.title}</h3>
        <div className="flex items-center text-secondary-light dark:text-secondary-dark">
          <LocationOn
            color="inherit"
            sx={{
              width: 18,
              height: 18,
            }}
          />
          <p className="text-sm">{property.location.title}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <Rating
          readOnly
          value={property.rating}
          precision={0.5}
          icon={
            <Star
              sx={{
                width: 24,
                height: 24,
              }}
            />
          }
          emptyIcon={
            <Star
              color="inherit"
              sx={{
                width: 24,
                height: 24,
                color: emptyRatingColor,
              }}
            />
          }
        />
        <p className="font-medium">Price</p>
        <div className="flex items-end gap-[8px]">
          <p className="text-primary text-2xl">
            {formatPropertyPrice(property.amount)}
          </p>
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            {PAYMENT_PERIOD_PREPOSITION[property.paymentPeriod]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsHeading;
