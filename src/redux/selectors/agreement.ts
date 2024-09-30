import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectGetTotalByIntervalError = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.getTotalByIntervalError,
);

export const selectGetTotalByIntervalPending = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.getTotalByIntervalPending,
);

export const selectTotalByInterval = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.totalByInterval,
);
