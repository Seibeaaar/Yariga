import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

export const selectSearchResults = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.results,
);
export const selectSearchPending = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.pending,
);
export const selectSearchError = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.error,
);
export const selectSearchMode = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.mode,
);
export const selectSearchQuery = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.searchQuery,
);
export const selectSearchFilters = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.filters,
);
export const selectSearchFilterSuccess = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.filterSuccess,
);
export const selectIsInitialSearch = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.initialSearch,
);
