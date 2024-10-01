import {
  AGREEMENT_TOTAL_INTERVAL,
  Agreement,
  TotalByInterval,
} from '@/types/agreement';
import instance from '.';

export const getTotalByIntervalRequest = async (
  interval: AGREEMENT_TOTAL_INTERVAL,
): Promise<TotalByInterval[]> => {
  const result = await instance.get(`/agreement/total?interval=${interval}`);
  return result.data;
};

export const getLatestAgreementsRequest = async (): Promise<Agreement[]> => {
  const result = await instance.get('/agreement/latest');
  return result.data;
};
