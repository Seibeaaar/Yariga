import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

export const selectGetAllPropertiesError = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.getAllPropertiesError,
);
export const selectGetAllPropertiesPending = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.getAllPropertiesPending,
);
export const selectResults = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.results,
);

export const selectSearchPropertiesError = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.searchPropertiesError,
);
export const selectSearchPropertiesPending = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.searchPropertiesPending,
);

export const selectFilterPropertiesPending = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.filterPropertiesPending,
);
export const selectFilterPropertiesError = createSelector(
  [(state: RootState) => state.searchProperties],
  (search) => search.filterPropertiesError,
);
