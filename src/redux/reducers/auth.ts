import { createSlice } from '@reduxjs/toolkit';

type AuthReducerInitialState = {
  authPending: boolean;
  authError: string | null;
  authViaGooglePending: boolean;
  authViaGoogleError: string | null;
};

const initialState: AuthReducerInitialState = {
  authPending: false,
  authError: null,
  authViaGooglePending: false,
  authViaGoogleError: null,
};

export const authSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    authPending: (state, { payload }) => {
      state.authPending = payload;
    },
    authError: (state, { payload }) => {
      state.authError = payload;
    },
    authViaGooglePending: (state, { payload }) => {
      state.authViaGooglePending = payload;
    },
    authViaGoogleError: (state, { payload }) => {
      state.authViaGoogleError = payload;
    },
  },
});

export const {
  authPending,
  authError,
  authViaGoogleError,
  authViaGooglePending,
} = authSlice.actions;

export default authSlice.reducer;
