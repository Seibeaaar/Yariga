import { getPropertyByIdRequest } from '@/api/property';
import { call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { GET_PROPERTY_BY_ID } from '@/redux/actions/property';
import { Property } from '@/types/property';
import {
  getPropertyError,
  getPropertyPending,
  setProperty,
} from '@/redux/reducers/property/single';
import { generateErrorMesaage } from '@/utils/redux';

function* getPropertyByIdSaga(
  action: PayloadAction<string>,
): Generator<unknown, void, Property> {
  try {
    yield put(getPropertyError(null));
    yield put(getPropertyPending(true));

    const property = yield call(getPropertyByIdRequest, action.payload);
    yield put(setProperty(property));
  } catch (e) {
    yield put(getPropertyError(generateErrorMesaage(e)));
  } finally {
    yield put(getPropertyPending(false));
  }
}

export default function* () {
  yield takeLatest(GET_PROPERTY_BY_ID, getPropertyByIdSaga);
}
