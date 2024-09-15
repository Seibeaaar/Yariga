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
