import { DEFAULT_PAGINATED_RESPONSE } from '@/constants/common';
import { PaginatedResponse } from '@/types/common';
import { Property } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type SearchPropertyReducerInitialState = {
  getAllPropertiesPending: boolean;
  getAllPropertiesError: string | null;
  searchPropertiesPending: boolean;
  searchPropertiesError: string | null;
  filterPropertiesPending: boolean;
  filterPropertiesError: string | null;
  results: PaginatedResponse<Property>;
};

const initialState: SearchPropertyReducerInitialState = {
  getAllPropertiesPending: false,
  getAllPropertiesError: null,
  searchPropertiesError: null,
  searchPropertiesPending: false,
  filterPropertiesError: null,
  filterPropertiesPending: false,
  results: DEFAULT_PAGINATED_RESPONSE,
};

export const searchPropertySlice = createSlice({
  name: 'searchProperties',
  initialState,
  reducers: {
    getAllPropertiesPending: (state, { payload }) => {
      state.getAllPropertiesPending = payload;
    },
    getAllPropertiesError: (state, { payload }) => {
      state.getAllPropertiesError = payload;
    },
    searchPropertiesPending: (state, { payload }) => {
      state.searchPropertiesPending = payload;
    },
    searchPropertiesError: (state, { payload }) => {
      state.searchPropertiesError = payload;
    },
    setResults: (state, { payload }) => {
      state.results = payload;
    },
    filterPropertiesPending: (state, { payload }) => {
      state.filterPropertiesPending = payload;
    },
    filterPropertiesError: (state, { payload }) => {
      state.filterPropertiesError = payload;
    },
  },
});

export const {
  getAllPropertiesPending,
  getAllPropertiesError,
  setResults,
  searchPropertiesError,
  searchPropertiesPending,
  filterPropertiesError,
  filterPropertiesPending,
} = searchPropertySlice.actions;

export default searchPropertySlice.reducer;
