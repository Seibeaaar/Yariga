import { useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import {
  selectGetLatestAgreementsPending,
  selectLatestAgreements,
} from '@/redux/selectors/agreement';
import Widget from '../Widget';
import { formatAmountDisplay } from '@/utils/agreement';
import CustomLoader from '../CustomLoader';

const LatestAgreementsWidget = () => {
  const latestAgreements = useSelector(selectLatestAgreements);
  const getLatestAgreementsPending = useSelector(
    selectGetLatestAgreementsPending,
  );

  const renderContent = () => {
    if (getLatestAgreementsPending) {
      return (
        <div className="flex-grow items-center justify-center flex">
          <CustomLoader loader={PropagateLoader} />
        </div>
      );
    }

    if (latestAgreements.length === 0) {
      return (
        <div className="flex-grow items-center justify-center flex">
          <p>No agreements found</p>
        </div>
      );
    }

    return (
      <>
        {latestAgreements.map((agreement) => {
          const { property, amount } = agreement;
          return (
            <div
              key={agreement.id}
              className="w-full cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-[16px]">
                <img
                  className="w-[50px] h-[50px] rounded-[4px]"
                  src={property.photos[0]}
                  alt={`${property.title} photo`}
                />
                <div>
                  <p className="font-semibold">{property.title}</p>
                  <p className="text-sm text-secondary-light dark:text-secondary-dark">
                    {property.location.title}
                  </p>
                </div>
              </div>
              <p className="text-primary text-lg">
                +{formatAmountDisplay(amount)}
              </p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Widget className="flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-[24px]">
        <h6 className="font-semibold text-lg">Latest agreements</h6>
      </div>
      {renderContent()}
    </Widget>
  );
};

export default LatestAgreementsWidget;
