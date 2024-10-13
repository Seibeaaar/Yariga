import { DEFAULT_PAGINATED_RESPONSE } from '@/constants/common';
import { PaginatedResponse } from '@/types/common';
import { Property, PropertyFilters } from '@/types/property';
import { createSlice } from '@reduxjs/toolkit';

// One list - one object of results
// One list - one error message
// One list - one pending state
// Mode - all, search, filter
// Fetch all properties on an initial mode
// Show clear search if mode is search
// Show clear filters if mode is filter
// Show refresh if mode is all
// Set mode on request success
// Preserve search query and filters on successful request
// If empty filters or query - request all properties
// If query is not empty when filtering - clear it (and vice versa)

export type SearchPropertyReducerInitialState = {
  pending: boolean;
  error: string | null;
  mode: 'all' | 'search' | 'filter';
  searchQuery: string;
  filters: PropertyFilters | null;
  results: PaginatedResponse<Property>;
};

const initialState: SearchPropertyReducerInitialState = {
  results: DEFAULT_PAGINATED_RESPONSE,
  pending: false,
  error: null,
  searchQuery: '',
  filters: null,
  mode: 'all',
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
  },
});

export const {
  setSearchResults,
  setSearchError,
  setSearchFilters,
  setSearchMode,
  setSearchPending,
  setSearchQuery,
} = searchPropertySlice.actions;

export default searchPropertySlice.reducer;
