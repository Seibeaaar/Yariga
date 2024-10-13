import { DEFAULT_PAGINATED_RESPONSE } from '@/constants/common';
import { PaginatedResponse } from '@/types/common';
import { Property, PropertyFilters } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

export type SearchPropertyReducerInitialState = {
  pending: boolean;
  error: string | null;
  mode: 'all' | 'search' | 'filter';
  searchQuery: string;
  filters?: PropertyFilters;
  results: PaginatedResponse<Property>;
  filterSuccess: boolean;
};

const initialState: SearchPropertyReducerInitialState = {
  results: DEFAULT_PAGINATED_RESPONSE,
  pending: false,
  error: null,
  searchQuery: '',
  filters: undefined,
  mode: 'all',
  filterSuccess: false,
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
} = searchPropertySlice.actions;

export default searchPropertySlice.reducer;
