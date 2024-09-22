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
