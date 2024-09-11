import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const selectAuthPending = createSelector(
  [(state: RootState) => state.auth],
  (auth) => auth.authPending,
);

export const selectAuthError = createSelector(
  [(state: RootState) => state.auth],
  (auth) => auth.authError,
);

export const selectAuthViaGoogleError = createSelector(
  [(state: RootState) => state.auth],
  (auth) => auth.authViaGoogleError,
);
