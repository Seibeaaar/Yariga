import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectUserCompletePending = createSelector(
  [(state: RootState) => state.user],
  (user) => user.userCompletePending,
);

export const selectUserCompleteError = createSelector(
  [(state: RootState) => state.user],
  (user) => user.userCompleteError,
);

export const selectsetPreferencesError = createSelector(
  [(state: RootState) => state.user],
  (user) => user.setPreferencesError,
);

export const selectSetPreferencesPending = createSelector(
  [(state: RootState) => state.user],
  (user) => user.setPreferencesPending,
);
