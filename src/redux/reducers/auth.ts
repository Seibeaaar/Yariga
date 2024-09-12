import { createSlice } from '@reduxjs/toolkit';

export type AuthReducerInitialState = {
  authPending: boolean;
  authError: string | null;
  authViaGoogleError: string | null;
};

const initialState: AuthReducerInitialState = {
  authPending: false,
  authError: null,
  authViaGoogleError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authPending: (state, { payload }) => {
      state.authPending = payload;
    },
    authError: (state, { payload }) => {
      state.authError = payload;
    },
    authViaGoogleError: (state, { payload }) => {
      state.authViaGoogleError = payload;
    },
  },
});

export const { authPending, authError, authViaGoogleError } = authSlice.actions;

export default authSlice.reducer;
