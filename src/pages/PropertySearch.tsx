import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import PropertySearchActionItem from '@/components/PropertySearch/ActionItem';
import PropertySearchbar from '@/components/PropertySearch/Searchbar';
import PropertiesSearchList from '@/components/PropertyList';
import PropertyFiltersModal from '@/components/PropertyFiltersModal';
import {
  filterProperties,
  getAllProperties,
  searchProperties,
} from '@/redux/actions/property';
import { PropertyFilters } from '@/types/property';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch } from '@/redux';
import {
  selectIsInitialSearch,
  selectSearchFilterSuccess,
  selectSearchFilters,
  selectSearchMode,
  selectSearchPending,
  selectSearchQuery,
  selectSearchResults,
} from '@/redux/selectors/property/search';
import Pagination from '@/components/Pagination';
import { DEFAULT_PROPERTY_FILTERS } from '@/constants/property';

const PropertySearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setupPropertyFilters = (filters: PropertyFilters) =>
    dispatch(
      filterProperties({
        filters,
      }),
    );
  const filterSuccess = useSelector(selectSearchFilterSuccess);
  const appliedFilters = useSelector(selectSearchFilters);
  const { results, total, page, pages } = useSelector(selectSearchResults);
  const searchPending = useSelector(selectSearchPending);
  const searchMode = useSelector(selectSearchMode);
  const searchQuery = useSelector(selectSearchQuery);
  const isInitialSearch = useSelector(selectIsInitialSearch);

  useEffect(() => {
    if (searchMode === 'all' && isInitialSearch) {
      dispatch(getAllProperties());
    }
  }, [dispatch, searchMode, isInitialSearch]);

  const onPageChange = (page: number) => {
    if (searchMode === 'all') {
      dispatch(getAllProperties(page));
    } else if (searchMode === 'filter') {
      dispatch(
        filterProperties({
          page,
          filters: appliedFilters as PropertyFilters,
        }),
      );
    } else {
      dispatch(
        searchProperties({
          query: searchQuery,
          page,
        }),
      );
    }
  };

  return (
    <AuthedScreenContainer
      title="Property list"
      actionItem={<PropertySearchActionItem />}
    >
      <Widget>
        <div className="flex items-center gap-[10px] justify-between">
          <PropertySearchbar />
          <PropertyFiltersModal
            submitSuccess={filterSuccess}
            submitText="Apply filters"
            defaultValues={appliedFilters ?? DEFAULT_PROPERTY_FILTERS}
            buttonText="Filters"
            onSubmit={setupPropertyFilters}
          />
        </div>
        <PropertiesSearchList pending={searchPending} items={results} />
        <Pagination
          total={total}
          pages={pages}
          activePage={page}
          onChange={onPageChange}
        />
      </Widget>
    </AuthedScreenContainer>
  );
};

export default PropertySearchPage;
