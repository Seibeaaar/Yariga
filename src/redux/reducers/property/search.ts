import { DEFAULT_PAGINATED_RESPONSE } from '@/constants/common';
import { PaginatedResponse } from '@/types/common';
import { Property } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type SearchPropertyReducerInitialState = {
  getAllPropertiesPending: boolean;
  allProperties: PaginatedResponse<Property>;
  getAllPropertiesError: string | null;
  searchPropertiesPending: boolean;
  searchPropertiesError: string | null;
  searchResults: PaginatedResponse<Property>;
  filterPropertiesPending: boolean;
  filterPropertiesError: string | null;
  filterResults: PaginatedResponse<Property>;
};

const initialState: SearchPropertyReducerInitialState = {
  getAllPropertiesPending: false,
  allProperties: DEFAULT_PAGINATED_RESPONSE,
  getAllPropertiesError: null,
  searchPropertiesError: null,
  searchPropertiesPending: false,
  searchResults: DEFAULT_PAGINATED_RESPONSE,
  filterPropertiesError: null,
  filterPropertiesPending: false,
  filterResults: DEFAULT_PAGINATED_RESPONSE,
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
    setAllProperties: (state, { payload }) => {
      state.allProperties = payload;
    },
    searchPropertiesPending: (state, { payload }) => {
      state.searchPropertiesPending = payload;
    },
    searchPropertiesError: (state, { payload }) => {
      state.searchPropertiesError = payload;
    },
    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
    filterPropertiesPending: (state, { payload }) => {
      state.filterPropertiesPending = payload;
    },
    filterPropertiesError: (state, { payload }) => {
      state.filterPropertiesError = payload;
    },
    setFilterResults: (state, { payload }) => {
      state.filterResults = payload;
    },
  },
});

export const {
  getAllPropertiesPending,
  getAllPropertiesError,
  setAllProperties,
  searchPropertiesError,
  searchPropertiesPending,
  setFilterResults,
  filterPropertiesError,
  filterPropertiesPending,
  setSearchResults,
} = searchPropertySlice.actions;

export default searchPropertySlice.reducer;
