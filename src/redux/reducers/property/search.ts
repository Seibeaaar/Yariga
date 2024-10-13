import { DEFAULT_PAGINATED_RESPONSE } from '@/constants/common';
import { DEFAULT_PROPERTY_FILTERS } from '@/constants/property';
import { PaginatedResponse } from '@/types/common';
import { Property, PropertyFilters } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type SearchPropertyReducerInitialState = {
  pending: boolean;
  error: string | null;
  mode: 'all' | 'search' | 'filter';
  searchQuery: string;
  filters: PropertyFilters;
  results: PaginatedResponse<Property>;
  filterSuccess: boolean;
  initialSearch: boolean;
};

const initialState: SearchPropertyReducerInitialState = {
  results: DEFAULT_PAGINATED_RESPONSE,
  pending: false,
  error: null,
  searchQuery: '',
  filters: DEFAULT_PROPERTY_FILTERS,
  mode: 'all',
  filterSuccess: false,
  initialSearch: true,
};

export const searchPropertySlice = createSlice({
  name: 'searchProperties',
  initialState,
  reducers: {
    setSearchResults: (state, { payload }) => {
      state.results = payload;
    },
    setSearchMode: (state, { payload }) => {
      state.mode = payload;
    },
    setSearchPending: (state, { payload }) => {
      state.pending = payload;
    },
    setSearchError: (state, { payload }) => {
      state.error = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setSearchFilters: (state, { payload }) => {
      state.filters = payload;
    },
    setFilterSuccess: (state, { payload }) => {
      state.filterSuccess = payload;
    },
    setInitialSearch: (state, { payload }) => {
      state.initialSearch = payload;
    },
  },
});

export const {
  setSearchResults,
  setSearchError,
  setSearchFilters,
  setSearchMode,
  setSearchPending,
  setSearchQuery,
  setFilterSuccess,
  setInitialSearch,
} = searchPropertySlice.actions;

export default searchPropertySlice.reducer;
