import { PropertyFilters } from '@/types/property';
import instance from '.';
import {
  LandlordStats,
  ProfilePictureRequest,
  TenantStats,
  User,
  UserCompleteRequest,
} from '@/types/user';

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

export const addProfilePictureRequest = async (
  data: ProfilePictureRequest,
): Promise<User> => {
  const result = await instance.post('/user/picture', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return result.data;
};

export const getUserStatsRequest = async (): Promise<
  LandlordStats | TenantStats
> => {
  const result = await instance.get('/user/stats');
  return result.data;
};
