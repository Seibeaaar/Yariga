import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getRecommendations } from '@/redux/actions/property';
import DashboardPropertyList from '../PropertyList';
import Widget from '@/components/Widget';
import {
  selectRecommendations,
  selectGetRecommendationsPending,
} from '@/redux/selectors/property/recommendations';
import Pagination from '@/components/Pagination';
import PropertyFiltersModal from '@/components/PropertyFiltersModal';
import { setPreferences } from '@/redux/actions/user';
import {
  selectUser,
  selectsetPreferencesSuccess,
} from '@/redux/selectors/user';
import { Tenant } from '@/types/user';
import { PropertyFilters } from '@/types/property';

const RecommendationsList = () => {
  const { results, page, pages, total } = useSelector(selectRecommendations);
  const getRecommendationsPending = useSelector(
    selectGetRecommendationsPending,
  );
  const user = useSelector(selectUser) as Tenant | null;
  const setPreferencesSuccess = useSelector(selectsetPreferencesSuccess);
  const dispatch = useDispatch<AppDispatch>();

  const onPageChange = (page: number) => {
    dispatch(getRecommendations(page));
  };
  const onModalFormSubmit = (payload: PropertyFilters) =>
    dispatch(setPreferences(payload));

  return (
    <>
      <Widget>
        <div className="flex w-full items-center justify-between">
          <h5 className="text-lg font-semibold mb-[16px]">Recommendations</h5>
          <PropertyFiltersModal
            submitSuccess={setPreferencesSuccess}
            submitText="Set your preferences"
            onSubmit={onModalFormSubmit}
            buttonText="Preferences"
            defaultValues={user?.preferences}
          />
        </div>
        <DashboardPropertyList
          pending={getRecommendationsPending}
          properties={results}
          placeholder="No recommendations for you so far"
        />
        <Pagination
          onChange={onPageChange}
          activePage={page}
          pages={pages}
          total={total}
        />
      </Widget>
    </>
  );
};

export default RecommendationsList;
