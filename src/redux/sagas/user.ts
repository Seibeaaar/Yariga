import {
  completeUserRequest,
  setPreferencesRequest,
  addProfilePictureRequest,
  getUserStatsRequest,
} from '@/api/user';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  setUserCompleteError,
  setUserCompletePending,
  setUser,
  setPreferencesError,
  setPreferencesPending,
  addProfilePictureError,
  addProfilePicturePending,
  getStatsPending,
  getStatsError,
  setUserStats,
  setPreferencesSuccess,
} from '../reducers/user';
import {
  LandlordStats,
  ProfilePictureRequest,
  TenantStats,
  User,
  UserCompleteRequest,
} from '@/types/user';
import { PropertyFilters } from '@/types/property';
import {
  COMPLETE_USER,
  SET_PREFERENCES,
  ADD_PROFILE_PICTURE,
  GET_STATS,
} from '../actions/user';
import { PayloadAction } from '@reduxjs/toolkit';

import { generateErrorMesaage } from '@/utils/redux';

function* completeUserSaga(
  action: PayloadAction<UserCompleteRequest>,
): Generator<unknown, void, User> {
  try {
    yield put(setUserCompleteError(null));
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
    yield put(setPreferencesError(null));
    yield put(setPreferencesPending(true));
    yield put(setPreferencesSuccess(false));

    const user = yield call(setPreferencesRequest, action.payload);
    yield put(setUser(user));
    yield put(setPreferencesSuccess(true));
  } catch (e) {
    yield put(setPreferencesError(generateErrorMesaage(e)));
  } finally {
    yield put(setPreferencesPending(false));
  }
}

function* addProfilePictureSaga(
  action: PayloadAction<ProfilePictureRequest>,
): Generator<unknown, void, User> {
  try {
    yield put(addProfilePictureError(null));
    yield put(addProfilePicturePending(true));

    const user = yield call(addProfilePictureRequest, action.payload);
    yield put(setUser(user));
  } catch (e) {
    yield put(addProfilePictureError(generateErrorMesaage(e)));
  } finally {
    yield put(addProfilePicturePending(false));
  }
}

function* getUserStatsSaga(): Generator<
  unknown,
  void,
  LandlordStats | TenantStats
> {
  try {
    yield put(getStatsError(null));
    yield put(getStatsPending(true));

    const userStats = yield call(getUserStatsRequest);
    yield put(setUserStats(userStats));
  } catch (e) {
    yield put(getStatsError(generateErrorMesaage(e)));
  } finally {
    yield put(getStatsPending(false));
  }
}

export default function* () {
  yield takeLatest(COMPLETE_USER, completeUserSaga);
  yield takeLatest(SET_PREFERENCES, setPreferencesSaga);
  yield takeLatest(ADD_PROFILE_PICTURE, addProfilePictureSaga);
  yield takeLatest(GET_STATS, getUserStatsSaga);
}
