import { all } from 'redux-saga/effects';
import authSaga from './auth';
import userSaga from './user';
import ownPropertiesSaga from './property/own';
import agreementSaga from './agreement';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), ownPropertiesSaga(), agreementSaga()]);
}
