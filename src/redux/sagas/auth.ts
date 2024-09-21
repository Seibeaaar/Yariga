import { loginRequest, signUpRequest } from '@/api/auth';
import { takeLatest, put, call } from 'redux-saga/effects';
import { authError, authPending } from '../reducers/auth';
import { LoginData, SignUpData } from '@/types/auth';
import { AuthRequestResponse } from '@/types/auth';
import { LOGIN_REQUEST, SIGN_UP_REQUEST } from '../actions/auth';
import { PayloadAction } from '@reduxjs/toolkit';
import router from '@/routes';

import { generateErrorMesaage } from '@/utils/redux';
import { setUser } from '../reducers/user';

function* loginSaga(
  action: PayloadAction<LoginData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authError(null));
    yield put(authPending(true));
    const { payload } = action;
    const { user, token } = yield call(loginRequest, payload);

    localStorage.setItem('token', token);
    yield put(setUser(user));

    router.navigate('/dashboard');
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
    localStorage.setItem('token', token);
    yield put(setUser(user));

    router.navigate('/complete-profile');
  } catch (e) {
    yield put(authError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

export default function* () {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
}
