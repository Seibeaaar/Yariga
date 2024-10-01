import { useSelector } from 'react-redux';
import {
  selectMyProperties,
  selectGetMyPropertiesPending,
} from '@/redux/selectors/property/own';
import Widget from '../Widget';
import DashboardPropertyList from './PropertyList';

const MyPropertiesList = () => {
  const myProperties = useSelector(selectMyProperties);
  const getMyPropertiesPending = useSelector(selectGetMyPropertiesPending);
  return (
    <Widget>
      <h5 className="text-lg font-semibold mb-[16px]">My properties</h5>
      <DashboardPropertyList
        pending={getMyPropertiesPending}
        properties={myProperties}
      />
    </Widget>
  );
};

export default MyPropertiesList;
