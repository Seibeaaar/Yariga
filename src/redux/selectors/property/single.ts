import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

export const selectGetSinglePropertyPending = createSelector(
  [(state: RootState) => state.singleProperty],
  (single) => single.getPropertyPending,
);
export const selectGetSinglePropertyError = createSelector(
  [(state: RootState) => state.singleProperty],
  (single) => single.getPropertyError,
);
export const selectSingleProperty = createSelector(
  [(state: RootState) => state.singleProperty],
  (single) => single.property,
);
