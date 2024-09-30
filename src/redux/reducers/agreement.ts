import { TotalByInterval } from '@/types/agreement';
import { createSlice } from '@reduxjs/toolkit';

export type AgrementReducerInitialState = {
  getTotalByIntervalPending: boolean;
  getTotalByIntervalError: string | null;
  totalByInterval: TotalByInterval[];
};

const initialState: AgrementReducerInitialState = {
  totalByInterval: [],
  getTotalByIntervalError: null,
  getTotalByIntervalPending: false,
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
  },
});

export const {
  getTotalByIntervalError,
  getTotalByIntervalPending,
  setTotalByInterval,
} = agreementSlice.actions;

export default agreementSlice.reducer;
