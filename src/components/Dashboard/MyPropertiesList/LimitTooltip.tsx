import { useState } from 'react';
import { HelpOutline } from '@mui/icons-material';
import { PROPERTIES_OWNED_LIMIT } from '@/constants/property';

const PropertyLimitTooltip = () => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const showTooltip = () => setDisplayTooltip(true);
  const hideTooltip = () => setDisplayTooltip(false);

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <HelpOutline
        sx={{
          width: 24,
          height: 24,
        }}
      />
      {displayTooltip && (
        <div className="absolute min-w-[250px] right-0 p-[10px] bg-bg-light dark:bg-bg-dark rounded-[8px] top-[32px]">
          <h6 className="text-lg font-bold mb-[4px]">IMPORTANT</h6>
          <p>
            You can own only {PROPERTIES_OWNED_LIMIT} properties at the same
            time on this platform
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyLimitTooltip;
