import { takeLatest, put, call } from 'redux-saga/effects';
import { Property, AddPropertyPayload } from '@/types/property';
import { addPropertyRequest, getMyPropertiesReuest } from '@/api/property';
import { ADD_PROPERTY, GET_MY_PROPERTIES } from '@/redux/actions/property';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addNewProperty,
  addPropertyError,
  addPropertyPending,
  getMyPropertiesError,
  getMyPropertiesPending,
  setOwnProperties,
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

function* getMyPropertiesSaga(): Generator<unknown, void, Property[]> {
  try {
    yield put(getMyPropertiesError(null));
    yield put(getMyPropertiesPending(true));

    const myProperties = yield call(getMyPropertiesReuest);
    yield put(setOwnProperties(myProperties));
  } catch (e) {
    yield put(getMyPropertiesError(generateErrorMesaage(e)));
  } finally {
    yield put(getMyPropertiesPending(false));
  }
}

export default function* () {
  yield takeLatest(ADD_PROPERTY, addPropertySaga);
  yield takeLatest(GET_MY_PROPERTIES, getMyPropertiesSaga);
}
