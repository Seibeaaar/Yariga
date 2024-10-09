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
} from '@/redux/actions/property';
import {
  setSearchResults,
  setAllProperties,
  setFilterResults,
  searchPropertiesError,
  searchPropertiesPending,
  getAllPropertiesError,
  getAllPropertiesPending,
  filterPropertiesError,
  filterPropertiesPending,
} from '@/redux/reducers/property/search';
import { generateErrorMesaage } from '@/utils/redux';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  FilterPropertyPayload,
  Property,
  SearchPropertyPayload,
} from '@/types/property';
import { PaginatedResponse } from '@/types/common';

function* getAllPropertiesSaga(
  action: PayloadAction<number | undefined>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(getAllPropertiesError(null));
    yield put(getAllPropertiesPending(true));

    const allProperties = yield call(getAllPropertiesRequest, action.payload);
    yield put(setAllProperties(allProperties));
  } catch (e) {
    yield put(getAllPropertiesError(generateErrorMesaage(e)));
  } finally {
    yield put(getAllPropertiesPending(false));
  }
}

function* searchPropertiesSaga(
  action: PayloadAction<SearchPropertyPayload>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(searchPropertiesError(null));
    yield put(searchPropertiesPending(true));
    const { query, page } = action.payload;

    const searchResults = yield call(searchPropertiesRequest, query, page);
    yield put(setSearchResults(searchResults));
  } catch (e) {
    yield put(searchPropertiesError(generateErrorMesaage(e)));
  } finally {
    yield put(searchPropertiesPending(false));
  }
}

function* filterPropertiesSaga(
  action: PayloadAction<FilterPropertyPayload>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(filterPropertiesError(null));
    yield put(filterPropertiesPending(true));
    const { filters, page } = action.payload;

    const filterResults = yield call(filterPropertiesRequest, filters, page);
    yield put(setFilterResults(filterResults));
  } catch (e) {
    yield put(filterPropertiesError(generateErrorMesaage(e)));
  } finally {
    yield put(filterPropertiesPending(false));
  }
}

export default function* () {
  yield takeLatest(GET_ALL_PROPERTIES, getAllPropertiesSaga);
  yield takeLatest(SEARCH_PROPERTIES, searchPropertiesSaga);
  yield takeLatest(FILTER_PROPERTIES, filterPropertiesSaga);
}
