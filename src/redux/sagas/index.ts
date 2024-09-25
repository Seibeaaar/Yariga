import { all } from 'redux-saga/effects';
import authSaga from './auth';
import userSaga from './user';
import ownPropertiesSaga from './property/own';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), ownPropertiesSaga()]);
}
