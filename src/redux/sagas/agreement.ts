import { put, call, takeLatest } from 'redux-saga/effects';
import { getTotalByIntervalRequest } from '@/api/agreement';
import { GET_TOTAL_BY_INTERVAL } from '../actions/agreement';
import {
  getTotalByIntervalError,
  getTotalByIntervalPending,
  setTotalByInterval,
} from '../reducers/agreement';
import { PayloadAction } from '@reduxjs/toolkit';
import { TotalByInterval } from '@/types/agreement';
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

export default function* () {
  yield takeLatest(GET_TOTAL_BY_INTERVAL, getTotalByIntervalSaga);
}
