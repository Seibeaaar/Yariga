import { UserCompleteRequest } from '@/types/user';

export const COMPLETE_USER = 'COMPLETE_USER';

export const completeUser = (payload: UserCompleteRequest) => ({
  type: COMPLETE_USER,
  payload,
});
