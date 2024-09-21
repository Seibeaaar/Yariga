import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export type UserReducerInitialState = {
  user: User | null;
};

const initialState: UserReducerInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
