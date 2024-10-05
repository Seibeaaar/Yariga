import { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardPropertyList from './PropertyList';
import { Tune } from '@mui/icons-material';
import Widget from '../Widget';
import {
  selectRecommendations,
  selectGetRecommendationsPending,
} from '@/redux/selectors/property/recommendations';
import PreferencesModal from './PreferencesModal';

const RecommendationsList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const recommendations = useSelector(selectRecommendations);
  const getRecommendationsPending = useSelector(
    selectGetRecommendationsPending,
  );

  const onModalClose = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
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
          properties={recommendations}
          placeholder="No recommendations for you so far"
        />
      </Widget>
    </>
  );
};

export default RecommendationsList;
