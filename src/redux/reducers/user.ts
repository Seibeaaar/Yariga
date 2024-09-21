import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export type UserReducerInitialState = {
  user: User | null;
  userCompletePending: boolean;
  userCompleteError: string | null;
  setPreferencesError: string | null;
  setPreferencesPending: boolean;
};

const initialState: UserReducerInitialState = {
  user: null,
  userCompleteError: null,
  userCompletePending: false,
  setPreferencesError: null,
  setPreferencesPending: false,
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
  },
});

export const {
  setUser,
  setUserCompleteError,
  setUserCompletePending,
  setPreferencesError,
  setPreferencesPending,
} = userSlice.actions;

export default userSlice.reducer;
