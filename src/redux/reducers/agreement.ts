import { Agreement, TotalByInterval } from '@/types/agreement';
import { createSlice } from '@reduxjs/toolkit';

export type AgrementReducerInitialState = {
  getTotalByIntervalPending: boolean;
  getTotalByIntervalError: string | null;
  totalByInterval: TotalByInterval[];
  latestAgreements: Agreement[];
  getLatestAgreementsPending: boolean;
  getLatestAgreementsError: string | null;
};

const initialState: AgrementReducerInitialState = {
  totalByInterval: [],
  getTotalByIntervalError: null,
  getTotalByIntervalPending: false,
  latestAgreements: [],
  getLatestAgreementsError: null,
  getLatestAgreementsPending: false,
};

export const agreementSlice = createSlice({
  name: 'agreement',
  initialState,
  reducers: {
    getTotalByIntervalPending: (state, { payload }) => {
      state.getTotalByIntervalPending = payload;
    },
    getTotalByIntervalError: (state, { payload }) => {
      state.getTotalByIntervalError = payload;
    },
    setTotalByInterval: (state, { payload }) => {
      state.totalByInterval = payload;
    },
    getLatestAgreementsPending: (state, { payload }) => {
      state.getLatestAgreementsPending = payload;
    },
    getLatestAgreementsError: (state, { payload }) => {
      state.getLatestAgreementsError = payload;
    },
    setLatestAgreements: (state, { payload }) => {
      state.latestAgreements = payload;
    },
  },
});

export const {
  getTotalByIntervalError,
  getTotalByIntervalPending,
  setTotalByInterval,
  setLatestAgreements,
  getLatestAgreementsError,
  getLatestAgreementsPending,
} = agreementSlice.actions;

export default agreementSlice.reducer;
