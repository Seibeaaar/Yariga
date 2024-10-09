import { Property } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type OwnPropertiesReducerInitialState = {
  addPropertyPending: boolean;
  addPropertyError: string | null;
  properties: Property[];
  getMyPropertiesPending: boolean;
  getMyPropertiesError: string | null;
};

const initialState: OwnPropertiesReducerInitialState = {
  addPropertyError: null,
  addPropertyPending: false,
  properties: [],
  getMyPropertiesError: null,
  getMyPropertiesPending: false,
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
    getMyPropertiesPending: (state, { payload }) => {
      state.getMyPropertiesPending = payload;
    },
    getMyPropertiesError: (state, { payload }) => {
      state.getMyPropertiesError = payload;
    },
  },
});

export const {
  addPropertyError,
  addPropertyPending,
  setOwnProperties,
  addNewProperty,
  getMyPropertiesError,
  getMyPropertiesPending,
} = ownPropertiesSlice.actions;

export default ownPropertiesSlice.reducer;
