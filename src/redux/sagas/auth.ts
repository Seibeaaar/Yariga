import { loginRequest, signUpRequest, authViaGoogleRequest } from '@/api/auth';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  authError,
  authPending,
  authViaGoogleError,
  authViaGooglePending,
} from '../reducers/auth';
import { LoginData, SignUpData } from '@/types/auth';
import { AuthRequestResponse } from '@/types/auth';
import { GOOGLE_AUTH, LOGIN_REQUEST, SIGN_UP_REQUEST } from '../actions/auth';
import { PayloadAction } from '@reduxjs/toolkit';

import { generateErrorMesaage } from '@/utils/redux';

function* loginSaga(
  action: PayloadAction<LoginData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authError(null));
    yield put(authPending(true));
    const { payload } = action;
    const { user, token } = yield call(loginRequest, payload);

    console.log(user, token);
  } catch (e) {
    yield put(authError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

function* signUpSaga(
  action: PayloadAction<SignUpData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authError(null));
    yield put(authPending(true));
    const { payload } = action;
    const { user, token } = yield call(signUpRequest, payload);
    console.log(user, token);
  } catch (e) {
    yield put(authError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

function* authViaGoogleSaga(): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authViaGoogleError(null));
    yield put(authViaGooglePending(true));
    const { user, token } = yield call(authViaGoogleRequest);
    console.log(user, token);
  } catch (e) {
    yield put(authViaGoogleError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

export default function* () {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(GOOGLE_AUTH, authViaGoogleSaga);
}
