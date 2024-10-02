import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

export const selectGetRecommendationsError = createSelector(
  [(state: RootState) => state.recommendations],
  (recommendations) => recommendations.getRecommendationsError,
);
export const selectGetRecommendationsPending = createSelector(
  [(state: RootState) => state.recommendations],
  (recommendations) => recommendations.getRecommendationsPending,
);
export const selectRecommendations = createSelector(
  [(state: RootState) => state.recommendations],
  (recommendations) => recommendations.recommendations,
);
