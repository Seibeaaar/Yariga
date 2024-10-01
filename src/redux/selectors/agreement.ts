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

export const selectGetLatestAgreementsPending = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.getLatestAgreementsPending,
);

export const selectGetLatestAgreementsError = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.getLatestAgreementsError,
);

export const selectLatestAgreements = createSelector(
  [(state: RootState) => state.agreement],
  (agreement) => agreement.latestAgreements,
);
