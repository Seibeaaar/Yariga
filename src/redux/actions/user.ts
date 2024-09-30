import { PropertyFilters } from '@/types/property';
import { ProfilePictureRequest, UserCompleteRequest } from '@/types/user';

export const COMPLETE_USER = 'COMPLETE_USER';
export const SET_PREFERENCES = 'SET_RREFERENCES';
export const ADD_PROFILE_PICTURE = 'ADD_PROFILE_PICTURE';
export const GET_STATS = 'GET_STATS';

export const completeUser = (payload: UserCompleteRequest) => ({
  type: COMPLETE_USER,
  payload,
});

export const setPreferences = (payload: PropertyFilters) => ({
  type: SET_PREFERENCES,
  payload,
});

export const addProfilePicture = (payload: ProfilePictureRequest) => ({
  type: ADD_PROFILE_PICTURE,
  payload,
});

export const getStats = () => ({
  type: GET_STATS,
});
