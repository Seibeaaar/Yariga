import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getRecommendations } from '@/redux/actions/property';
import DashboardPropertyList from '../PropertyList';
import { Tune } from '@mui/icons-material';
import Widget from '@/components/Widget';
import {
  selectRecommendations,
  selectGetRecommendationsPending,
} from '@/redux/selectors/property/recommendations';
import PreferencesModal from './PreferencesModal';
import Pagination from '@/components/Pagination';

const RecommendationsList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { results, page, pages, total } = useSelector(selectRecommendations);
  const getRecommendationsPending = useSelector(
    selectGetRecommendationsPending,
  );
  const dispatch = useDispatch<AppDispatch>();

  const onModalClose = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const onPageChange = (page: number) => {
    dispatch(getRecommendations(page));
  };

  return (
    <>
      <PreferencesModal onClose={onModalClose} open={modalOpen} />
      <Widget>
        <div className="flex w-full items-center justify-between">
          <h5 className="text-lg font-semibold mb-[16px]">Recommendations</h5>
          <button
            onClick={openModal}
            className="bg-bg-light transition-all hover:bg-primary dark:hover:bg-primary flex p-[10px] gap-[8px] dark:bg-bg-dark rounded-[10px]"
          >
            <Tune
              sx={{
                width: 18,
                height: 18,
              }}
              color="inherit"
            />
            <p className="text-xs">Preferences</p>
          </button>
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
