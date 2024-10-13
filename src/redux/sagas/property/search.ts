import { takeLatest, put, call } from 'redux-saga/effects';
import {
  searchPropertiesRequest,
  filterPropertiesRequest,
  getAllPropertiesRequest,
} from '@/api/property';
import {
  SEARCH_PROPERTIES,
  FILTER_PROPERTIES,
  GET_ALL_PROPERTIES,
  getAllProperties,
} from '@/redux/actions/property';
import {
  setSearchError,
  setSearchFilters,
  setSearchMode,
  setSearchPending,
  setSearchQuery,
  setSearchResults,
  setFilterSuccess,
} from '@/redux/reducers/property/search';
import { generateErrorMesaage } from '@/utils/redux';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  FilterPropertyPayload,
  Property,
  SearchPropertyPayload,
} from '@/types/property';
import { PaginatedResponse } from '@/types/common';
import isEqual from 'lodash.isequal';
import { DEFAULT_PROPERTY_FILTERS } from '@/constants/property';

function* getAllPropertiesSaga(
  action: PayloadAction<number | undefined>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(setSearchError(null));
    yield put(setSearchPending(true));

    const allProperties = yield call(getAllPropertiesRequest, action.payload);

    yield put(setSearchMode('all'));
    yield put(setSearchResults(allProperties));

    yield put(setSearchQuery(''));
    yield put(setSearchFilters(undefined));
  } catch (e) {
    yield put(setSearchError(generateErrorMesaage(e)));
  } finally {
    yield put(setSearchPending(false));
  }
}

function* searchPropertiesSaga(
  action: PayloadAction<SearchPropertyPayload>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(setSearchError(null));
    yield put(setSearchPending(true));
    const { query, page } = action.payload;

    const searchResults = yield call(searchPropertiesRequest, query, page);

    yield put(setSearchQuery(query));
    yield put(setSearchFilters(undefined));
    yield put(setSearchMode('search'));
    yield put(setSearchResults(searchResults));
  } catch (e) {
    yield put(setSearchError(generateErrorMesaage(e)));
  } finally {
    yield put(setSearchPending(false));
  }
}

function* filterPropertiesSaga(
  action: PayloadAction<FilterPropertyPayload>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(setSearchError(null));
    yield put(setSearchPending(true));
    yield put(setFilterSuccess(false));
    const { filters, page } = action.payload;

    if (isEqual(DEFAULT_PROPERTY_FILTERS, filters)) {
      yield call(getAllPropertiesSaga, getAllProperties());
    } else {
      const filterResults = yield call(filterPropertiesRequest, filters, page);

      yield put(setSearchFilters(filters));
      yield put(setSearchMode('filter'));
      yield put(setSearchResults(filterResults));
      yield put(setSearchQuery(''));
    }

    yield put(setFilterSuccess(true));
  } catch (e) {
    yield put(setSearchError(generateErrorMesaage(e)));
  } finally {
    yield put(setSearchPending(false));
  }
}

export default function* () {
  yield takeLatest(GET_ALL_PROPERTIES, getAllPropertiesSaga);
  yield takeLatest(SEARCH_PROPERTIES, searchPropertiesSaga);
  yield takeLatest(FILTER_PROPERTIES, filterPropertiesSaga);
}
