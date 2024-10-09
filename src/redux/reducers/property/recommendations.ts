import { PaginatedResponse } from '@/types/common';
import { Property } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type RecommendationsReducerInitialState = {
  getRecommendationsPending: boolean;
  getRecommendationsError: string | null;
  recommendations: PaginatedResponse<Property>;
};

const initialState: RecommendationsReducerInitialState = {
  getRecommendationsError: null,
  getRecommendationsPending: false,
  recommendations: {
    results: [],
    total: 0,
    page: 1,
    pages: 1,
  },
};

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    getRecommendationsPending: (state, { payload }) => {
      state.getRecommendationsPending = payload;
    },
    getRecommendationsError: (state, { payload }) => {
      state.getRecommendationsError = payload;
    },
    setRecommendations: (state, { payload }) => {
      state.recommendations = payload;
    },
  },
});

export const {
  getRecommendationsError,
  getRecommendationsPending,
  setRecommendations,
} = recommendationsSlice.actions;

export default recommendationsSlice.reducer;
