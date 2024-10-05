import { useSelector } from 'react-redux';
import DashboardPropertyList from './PropertyList';
import Widget from '../Widget';
import {
  selectRecommendations,
  selectGetRecommendationsPending,
} from '@/redux/selectors/property/recommendations';

const RecommendationsList = () => {
  const recommendations = useSelector(selectRecommendations);
  const getRecommendationsPending = useSelector(
    selectGetRecommendationsPending,
  );
  return (
    <Widget>
      <h5 className="text-lg font-semibold mb-[16px]">Recommendations</h5>
      <DashboardPropertyList
        pending={getRecommendationsPending}
        properties={recommendations}
        placeholder="No recommendations for you so far"
      />
    </Widget>
  );
};

export default RecommendationsList;
