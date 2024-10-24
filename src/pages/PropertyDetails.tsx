import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import { useEffect } from 'react';
import { SentimentDissatisfied } from '@mui/icons-material';
import { HashLoader } from 'react-spinners';
import Popup from '@/components/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getPropertyById } from '@/redux/actions/property';
import {
  selectSingleProperty,
  selectGetSinglePropertyPending,
  selectGetSinglePropertyError,
} from '@/redux/selectors/property/single';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { extractPropertyIdFromURL } from '@/utils/property';
import CustomLoader from '@/components/CustomLoader';
import PropertyDetailsContent from '@/components/PropertyDetails/Content';

const PropertyDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.key !== 'default';
  const dispatch = useDispatch<AppDispatch>();
  const property = useSelector(selectSingleProperty);
  const getSinglePropertyPending = useSelector(selectGetSinglePropertyPending);
  const getSinglePropertyError = useSelector(selectGetSinglePropertyError);

  useEffect(() => {
    const propertyId = extractPropertyIdFromURL(location.pathname);
    if (property && property._id === propertyId) return;
    dispatch(getPropertyById(propertyId));
  }, [dispatch, location]);

  const renderContent = () => {
    if (getSinglePropertyPending) {
      return (
        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
          <CustomLoader loader={HashLoader} size={96} />
        </div>
      );
    }

    if (!property) {
      return (
        <div className="flex flex-col text-secondary-light dark:text-secondary-dark items-center justify-center h-[calc(100vh-100px)]">
          <SentimentDissatisfied
            color="inherit"
            sx={{
              width: 124,
              height: 124,
            }}
          />
          <h2 className="text-4xl mb-[12px] font-semibold">
            On ho, property details cannot be found
          </h2>
          <p className="text-xl font-medium">
            Please try to reload or take a look at other options
          </p>
        </div>
      );
    }

    return (
      <Widget>
        {canGoBack && (
          <div
            onClick={goBack}
            className="flex cursor-pointer items-center gap-[8px] mb-[24px]"
          >
            <ChevronLeft
              color="inherit"
              sx={{
                width: 36,
                height: 36,
              }}
            />
            <p className="text-2xl font-semibold">Details</p>
          </div>
        )}
        <PropertyDetailsContent property={property} />
      </Widget>
    );
  };

  const goBack = () => navigate(-1);

  return (
    <>
      <Popup
        showPopup={!!getSinglePropertyError}
        title="Oh no, something is wrong!"
        content="There was an error while getting details of the property"
        severity="error"
        vertical="top"
        horizontal="right"
      />
      <AuthedScreenContainer>{renderContent()}</AuthedScreenContainer>
    </>
  );
};

export default PropertyDetailsPage;
