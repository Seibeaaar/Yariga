import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

export const selectAddPropertyPending = createSelector(
  [(state: RootState) => state.ownProperties],
  (own) => own.addPropertyPending,
);

export const selectAddPropertyError = createSelector(
  [(state: RootState) => state.ownProperties],
  (own) => own.addPropertyError,
);

export const selectGetMyPropertiesError = createSelector(
  [(state: RootState) => state.ownProperties],
  (own) => own.getMyPropertiesError,
);
export const selectGetMyPropertiesPending = createSelector(
  [(state: RootState) => state.ownProperties],
  (own) => own.getMyPropertiesPending,
);
export const selectMyProperties = createSelector(
  [(state: RootState) => state.ownProperties],
  (own) => own.properties,
);
