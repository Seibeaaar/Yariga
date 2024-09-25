import { Property } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type OwnPropertiesReducerInitialState = {
  addPropertyPending: boolean;
  addPropertyError: string | null;
  properties: Property[];
};

const initialState: OwnPropertiesReducerInitialState = {
  addPropertyError: null,
  addPropertyPending: false,
  properties: [],
};

export const ownPropertiesSlice = createSlice({
  name: 'ownProperties',
  initialState,
  reducers: {
    addPropertyPending: (state, { payload }) => {
      state.addPropertyPending = payload;
    },
    addPropertyError: (state, { payload }) => {
      state.addPropertyError = payload;
    },
    setOwnProperties: (state, { payload }) => {
      state.properties = payload;
    },
    addNewProperty: (state, { payload }) => {
      state.properties.push(payload);
    },
  },
});

export const {
  addPropertyError,
  addPropertyPending,
  setOwnProperties,
  addNewProperty,
} = ownPropertiesSlice.actions;

export default ownPropertiesSlice.reducer;
