import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export type UserReducerInitialState = {
  user: User | null;
  userCompletePending: boolean;
  userCompleteError: string | null;
};

const initialState: UserReducerInitialState = {
  user: null,
  userCompleteError: null,
  userCompletePending: false,
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
  },
});

export const { setUser, setUserCompleteError, setUserCompletePending } =
  userSlice.actions;

export default userSlice.reducer;
