import { LandlordStats, TenantStats, User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export type UserReducerInitialState = {
  user: User | null;
  userCompletePending: boolean;
  userCompleteError: string | null;
  setPreferencesError: string | null;
  setPreferencesPending: boolean;
  addProfilePictureError: string | null;
  addProfilePicturePending: boolean;
  getStatsPending: boolean;
  getStatsError: string | null;
  userStats: LandlordStats | TenantStats | null;
};

const initialState: UserReducerInitialState = {
  user: null,
  userCompleteError: null,
  userCompletePending: false,
  setPreferencesError: null,
  setPreferencesPending: false,
  addProfilePictureError: null,
  addProfilePicturePending: false,
  getStatsError: null,
  getStatsPending: false,
  userStats: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUserCompletePending: (state, { payload }) => {
      state.userCompletePending = payload;
    },
    setUserCompleteError: (state, { payload }) => {
      state.userCompleteError = payload;
    },
    setPreferencesError: (state, { payload }) => {
      state.setPreferencesError = payload;
    },
    setPreferencesPending: (state, { payload }) => {
      state.setPreferencesPending = payload;
    },
    addProfilePicturePending: (state, { payload }) => {
      state.addProfilePicturePending = payload;
    },
    addProfilePictureError: (state, { payload }) => {
      state.addProfilePictureError = payload;
    },
    setUserStats: (state, { payload }) => {
      state.userStats = payload;
    },
    getStatsPending: (state, { payload }) => {
      state.getStatsPending = payload;
    },
    getStatsError: (state, { payload }) => {
      state.getStatsError = payload;
    },
  },
});

export const {
  setUser,
  setUserCompleteError,
  setUserCompletePending,
  setPreferencesError,
  setPreferencesPending,
  addProfilePictureError,
  addProfilePicturePending,
  getStatsError,
  getStatsPending,
  setUserStats,
} = userSlice.actions;

export default userSlice.reducer;
