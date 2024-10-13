import PropertySearchbar from './Searchbar';
import PropertyFiltersModal from '../PropertyFiltersModal';
import { DEFAULT_PROPERTY_FILTERS } from '@/constants/property';
import { useDispatch, useSelector } from 'react-redux';
import { Replay, Cancel } from '@mui/icons-material';
import { AppDispatch } from '@/redux';
import { filterProperties, getAllProperties } from '@/redux/actions/property';
import { PropertyFilters } from '@/types/property';
import {
  selectSearchFilterSuccess,
  selectSearchFilters,
  selectSearchMode,
} from '@/redux/selectors/property/search';
import useWindowSize from '@/hooks/useWindowSize';

const PropertySearchHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setupPropertyFilters = (filters: PropertyFilters) => {
    dispatch(
      filterProperties({
        filters,
      }),
    );
  };
  const filterSuccess = useSelector(selectSearchFilterSuccess);
  const appliedFilters = useSelector(selectSearchFilters);
  const searchMode = useSelector(selectSearchMode);
  const { width } = useWindowSize();

  const renderUserAction = () => {
    if (searchMode === 'search') return null;
    const onActionClick = () => dispatch(getAllProperties());

    // Refresh all properties
    if (searchMode === 'all') {
      if (width <= 576) {
        return (
          <button
            onClick={onActionClick}
            className="bg-bg-light flex-grow justify-center items-center transition-all hover:bg-primary dark:hover:bg-primary flex p-[10px] gap-[8px] dark:bg-bg-dark rounded-[10px]"
          >
            <Replay
              color="inherit"
              sx={{
                width: 18,
                height: 18,
              }}
            />
            <p className="text-xs">Refresh</p>
          </button>
        );
      }
      return (
        <div
          className="cursor-pointer transition-all hover:text-primary dark:hover:text-primary"
          onClick={onActionClick}
        >
          <Replay
            color="inherit"
            sx={{
              width: 24,
              height: 24,
            }}
          />
        </div>
      );
    }

    // Clear filters
    if (width <= 576) {
      return (
        <button
          onClick={onActionClick}
          className="bg-bg-light flex-grow justify-center items-center transition-all hover:bg-primary dark:hover:bg-primary flex p-[10px] gap-[8px] dark:bg-bg-dark rounded-[10px]"
        >
          <Cancel
            color="inherit"
            sx={{
              width: 18,
              height: 18,
            }}
          />
          <p className="text-xs">Clear all filters</p>
        </button>
      );
    }

    return (
      <div
        onClick={onActionClick}
        className="flex flex-grow items-center gap-[8px] transition-all hover:text-primary dark:hover:text-primary cursor-pointer"
      >
        <Cancel
          color="inherit"
          sx={{
            width: 20,
            height: 20,
          }}
        />
        <p className="text-sm">Clear all filters</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[10px] justify-between">
      <PropertySearchbar />
      <div className="flex items-stretch md:items-center gap-[16px]">
        {renderUserAction()}
        <PropertyFiltersModal
          submitSuccess={filterSuccess}
          submitText="Apply filters"
          defaultValues={appliedFilters ?? DEFAULT_PROPERTY_FILTERS}
          buttonText="Filters"
          onSubmit={setupPropertyFilters}
        />
      </div>
    </div>
  );
};

export default PropertySearchHeader;
