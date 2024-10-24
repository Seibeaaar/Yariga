import { PropertyExtended } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type SinglePropertyReducerInitialState = {
  getPropertyPending: boolean;
  getPropertyError: string | null;
  property: PropertyExtended | null;
};

const initialState: SinglePropertyReducerInitialState = {
  getPropertyError: null,
  getPropertyPending: false,
  property: null,
};

export const singlePropertySlice = createSlice({
  name: 'singleProperty',
  initialState,
  reducers: {
    getPropertyPending: (state, { payload }) => {
      state.getPropertyPending = payload;
    },
    getPropertyError: (state, { payload }) => {
      state.getPropertyError = payload;
    },
    setProperty: (state, { payload }) => {
      state.property = payload;
    },
  },
});

export const { getPropertyError, getPropertyPending, setProperty } =
  singlePropertySlice.actions;

export default singlePropertySlice.reducer;
