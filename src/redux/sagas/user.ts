import { completeUserRequest } from '@/api/user';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  setUserCompleteError,
  setUserCompletePending,
  setUser,
} from '../reducers/user';
import { User, UserCompleteRequest } from '@/types/user';
import { COMPLETE_USER } from '../actions/user';
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

export default function* () {
  yield takeLatest(COMPLETE_USER, completeUserSaga);
}
