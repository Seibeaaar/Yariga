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

export const selectAddProfilePicturePending = createSelector(
  [(state: RootState) => state.user],
  (user) => user.addProfilePicturePending,
);

export const selectAddProfilePictureError = createSelector(
  [(state: RootState) => state.user],
  (user) => user.addProfilePictureError,
);

export const selectUser = createSelector(
  [(state: RootState) => state.user],
  (user) => user.user,
);

export const selectSetPreferencesPending = createSelector(
  [(state: RootState) => state.user],
  (user) => user.setPreferencesPending,
);
