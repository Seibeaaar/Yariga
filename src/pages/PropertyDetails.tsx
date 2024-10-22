import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getPropertyById } from '@/redux/actions/property';
import { selectSingleProperty } from '@/redux/selectors/property/single';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { extractPropertyIdFromURL } from '@/utils/property';
import PropertyGallery from '@/components/Property/Gallery';

const PropertyDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.key !== 'default';
  const dispatch = useDispatch<AppDispatch>();
  const property = useSelector(selectSingleProperty);

  useEffect(() => {
    const propertyId = extractPropertyIdFromURL(location.pathname);
    if (property && property._id === propertyId) return;
    dispatch(getPropertyById(propertyId));
  }, [dispatch, location]);

  if (!property) return null;

  const goBack = () => navigate(-1);

  return (
    <AuthedScreenContainer>
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
        <PropertyGallery photos={property?.photos} />
      </Widget>
    </AuthedScreenContainer>
  );
};

export default PropertyDetailsPage;
