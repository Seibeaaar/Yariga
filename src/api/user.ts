import instance from '.';
import { User, UserCompleteRequest } from '@/types/user';

export const completeUserRequest = async (
  data: UserCompleteRequest,
): Promise<User> => {
  const result = await instance.post('/user/complete', data);
  return result.data;
};
