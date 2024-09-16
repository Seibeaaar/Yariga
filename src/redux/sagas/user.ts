import { completeUserRequest, setPreferencesRequest } from '@/api/user';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  setUserCompleteError,
  setUserCompletePending,
  setUser,
  setPreferencesError,
  setPreferencesPending,
} from '../reducers/user';
import { User, UserCompleteRequest } from '@/types/user';
import { PropertyFilters } from '@/types/property';
import { COMPLETE_USER, SET_PREFERENCES } from '../actions/user';
import { PayloadAction } from '@reduxjs/toolkit';

import { generateErrorMesaage } from '@/utils/redux';

function* completeUserSaga(
  action: PayloadAction<UserCompleteRequest>,
): Generator<unknown, void, User> {
  try {
    yield put(setUserCompletePending(true));
    const user = yield call(completeUserRequest, action.payload);
    yield put(setUser(user));
  } catch (e) {
    yield put(setUserCompleteError(generateErrorMesaage(e)));
  } finally {
    yield put(setUserCompletePending(false));
  }
}

function* setPreferencesSaga(
  action: PayloadAction<PropertyFilters>,
): Generator<unknown, void, User> {
  try {
    yield put(setPreferencesPending(true));
    const user = yield call(setPreferencesRequest, action.payload);
    yield put(setUser(user));
  } catch (e) {
    yield put(setPreferencesError(generateErrorMesaage(e)));
  } finally {
    yield put(setPreferencesPending(false));
  }
}

export default function* () {
  yield takeLatest(COMPLETE_USER, completeUserSaga);
  yield takeLatest(SET_PREFERENCES, setPreferencesSaga);
}
