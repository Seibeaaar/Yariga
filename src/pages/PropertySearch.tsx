import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import Widget from '@/components/Widget';
import PropertySearchActionItem from '@/components/PropertySearch/ActionItem';
import PropertiesSearchList from '@/components/PropertyList';
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
  selectSearchError,
  selectSearchFilters,
  selectSearchMode,
  selectSearchPending,
  selectSearchQuery,
  selectSearchResults,
} from '@/redux/selectors/property/search';
import Pagination from '@/components/Pagination';
import Popup from '@/components/Popup';
import PropertySearchHeader from '@/components/PropertySearch/Header';

const PropertySearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const appliedFilters = useSelector(selectSearchFilters);
  const { results, total, page, pages } = useSelector(selectSearchResults);
  const searchPending = useSelector(selectSearchPending);
  const searchMode = useSelector(selectSearchMode);
  const searchQuery = useSelector(selectSearchQuery);
  const searchError = useSelector(selectSearchError);
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
      <Popup
        showPopup={!!searchError}
        title="Oops. Something went wrong"
        content="Properties lookup failed. Please retry"
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <Widget>
        <PropertySearchHeader />
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
