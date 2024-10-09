import { takeLatest, put, call } from 'redux-saga/effects';
import { Property } from '@/types/property';
import { getRecommendationsRequest } from '@/api/property';
import { GET_RECOMMENDATIONS } from '@/redux/actions/property';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  setRecommendations,
  getRecommendationsError,
  getRecommendationsPending,
} from '@/redux/reducers/property/recommendations';
import { generateErrorMesaage } from '@/utils/redux';
import { PaginatedResponse } from '@/types/common';

function* getRecommendationsSaga(
  action: PayloadAction<number>,
): Generator<unknown, void, PaginatedResponse<Property>> {
  try {
    yield put(getRecommendationsError(null));
    yield put(getRecommendationsPending(true));

    const recommendations = yield call(
      getRecommendationsRequest,
      action.payload,
    );
    yield put(setRecommendations(recommendations));
  } catch (e) {
    yield put(getRecommendationsError(generateErrorMesaage(e)));
  } finally {
    yield put(getRecommendationsPending(false));
  }
}

export default function* () {
  yield takeLatest(GET_RECOMMENDATIONS, getRecommendationsSaga);
}
