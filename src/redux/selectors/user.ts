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

export const selectsetPreferencesSuccess = createSelector(
  [(state: RootState) => state.user],
  (user) => user.setPreferencesSuccess,
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

export const selectGetUserStatsPending = createSelector(
  [(state: RootState) => state.user],
  (user) => user.getStatsPending,
);

export const selectGetUserStatsError = createSelector(
  [(state: RootState) => state.user],
  (user) => user.getStatsError,
);

export const selectUserStats = createSelector(
  [(state: RootState) => state.user],
  (user) => user.userStats,
);
