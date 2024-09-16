import { PropertyFilters } from '@/types/property';
import instance from '.';
import { User, UserCompleteRequest } from '@/types/user';

export const completeUserRequest = async (
  data: UserCompleteRequest,
): Promise<User> => {
  const result = await instance.post('/user/complete', data);
  return result.data;
};

export const setPreferencesRequest = async (
  data: PropertyFilters,
): Promise<User> => {
  const result = await instance.post('/user/preferences', data);
  return result.data;
};
