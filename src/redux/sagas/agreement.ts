import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getLatestAgreementsRequest,
  getTotalByIntervalRequest,
} from '@/api/agreement';
import { GET_LATEST, GET_TOTAL_BY_INTERVAL } from '../actions/agreement';
import {
  getLatestAgreementsError,
  getLatestAgreementsPending,
  getTotalByIntervalError,
  getTotalByIntervalPending,
  setLatestAgreements,
  setTotalByInterval,
} from '../reducers/agreement';
import { PayloadAction } from '@reduxjs/toolkit';
import { Agreement, TotalByInterval } from '@/types/agreement';
import { AGREEMENT_TOTAL_INTERVAL } from '@/types/agreement';
import { generateErrorMesaage } from '@/utils/redux';

function* getTotalByIntervalSaga(
  action: PayloadAction<AGREEMENT_TOTAL_INTERVAL>,
): Generator<unknown, void, TotalByInterval[]> {
  try {
    yield put(getTotalByIntervalError(null));
    yield put(getTotalByIntervalPending(true));

    const totalByInterval = yield call(
      getTotalByIntervalRequest,
      action.payload,
    );
    yield put(setTotalByInterval(totalByInterval));
  } catch (e) {
    yield put(getTotalByIntervalError(generateErrorMesaage(e)));
  } finally {
    yield put(getTotalByIntervalPending(false));
  }
}

function* getLatestAgreementsSaga(): Generator<unknown, void, Agreement[]> {
  try {
    yield put(getLatestAgreementsError(null));
    yield put(getLatestAgreementsPending(true));

    const latestAgreements = yield call(getLatestAgreementsRequest);
    yield put(setLatestAgreements(latestAgreements));
  } catch (e) {
    yield put(getLatestAgreementsError(generateErrorMesaage(e)));
  } finally {
    yield put(getLatestAgreementsPending(false));
  }
}

export default function* () {
  yield takeLatest(GET_TOTAL_BY_INTERVAL, getTotalByIntervalSaga);
  yield takeLatest(GET_LATEST, getLatestAgreementsSaga);
}
