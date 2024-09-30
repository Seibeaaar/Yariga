import { AGREEMENT_TOTAL_INTERVAL } from '@/types/agreement';

export const GET_TOTAL_BY_INTERVAL = 'GET_TOTAL_BY_INTERVAL';

export const getTotalByInterval = (payload: AGREEMENT_TOTAL_INTERVAL) => ({
  type: GET_TOTAL_BY_INTERVAL,
  payload,
});
