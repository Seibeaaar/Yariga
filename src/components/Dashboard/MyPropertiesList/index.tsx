import { useSelector } from 'react-redux';
import {
  selectMyProperties,
  selectGetMyPropertiesPending,
} from '@/redux/selectors/property/own';
import Widget from '../../Widget';
import DashboardPropertyList from '../PropertyList';
import Button from '../../Button';
import { MY_PROPERTIES_DESKTOP_DISPLAY_THRESHOLD } from '@/constants/property';
import { useNavigate } from 'react-router-dom';
import PropertyLimitTooltip from './LimitTooltip';

const MyPropertiesList = () => {
  const myProperties = useSelector(selectMyProperties);
  const getMyPropertiesPending = useSelector(selectGetMyPropertiesPending);
  const navigate = useNavigate();

  const goToMyProperties = () => navigate('/my-properties');
  return (
    <Widget>
      <div className="flex items-center justify-between w-full mb-[16px]">
        <h5 className="text-lg font-semibold">My properties</h5>
        <PropertyLimitTooltip />
      </div>
      <DashboardPropertyList
        pending={getMyPropertiesPending}
        placeholder="No poroperties of yours so far"
        properties={myProperties.slice(
          0,
          MY_PROPERTIES_DESKTOP_DISPLAY_THRESHOLD,
        )}
      />
      <Button
        onClick={goToMyProperties}
        text="See all my properties"
        variant="text"
      />
    </Widget>
  );
};

export default MyPropertiesList;
