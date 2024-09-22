import { takeLatest, put, call } from 'redux-saga/effects';
import { Property, AddPropertyPayload } from '@/types/property';
import { addPropertyRequest } from '@/api/property';
import { ADD_PROPERTY } from '@/redux/actions/property';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addNewProperty,
  addPropertyError,
  addPropertyPending,
} from '@/redux/reducers/property/own';
import { generateErrorMesaage } from '@/utils/redux';
import router from '@/routes';

function* addPropertySaga(
  action: PayloadAction<AddPropertyPayload>,
): Generator<unknown, void, Property> {
  try {
    yield put(addPropertyError(null));
    yield put(addPropertyPending(true));

    const property = yield call(addPropertyRequest, action.payload);
    yield put(addNewProperty(property));

    if (action.payload.isFirstProperty) {
      router.navigate('/dashboard');
    }
  } catch (e) {
    yield put(addPropertyError(generateErrorMesaage(e)));
  } finally {
    yield put(addPropertyPending(false));
  }
}

export default function* () {
  yield takeLatest(ADD_PROPERTY, addPropertySaga);
}
