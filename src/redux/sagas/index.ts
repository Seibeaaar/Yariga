import { all } from 'redux-saga/effects';
import authSaga from './auth';
import userSaga from './user';
import ownPropertiesSaga from './property/own';
import recommendationsSaga from './property/recommendations';
import searchPropertiesSaga from './property/search';
import agreementSaga from './agreement';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    ownPropertiesSaga(),
    agreementSaga(),
    recommendationsSaga(),
    searchPropertiesSaga(),
  ]);
}
