import { PropertyFilters } from '@/types/property';
import { UserCompleteRequest } from '@/types/user';

export const COMPLETE_USER = 'COMPLETE_USER';
export const SET_PREFERENCES = 'SET_RREFERENCES';

export const completeUser = (payload: UserCompleteRequest) => ({
  type: COMPLETE_USER,
  payload,
});

export const setPreferences = (payload: PropertyFilters) => ({
  type: SET_PREFERENCES,
  payload,
});
