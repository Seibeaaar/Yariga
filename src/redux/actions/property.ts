import { AddPropertyPayload } from '@/types/property';

export const ADD_PROPERTY = 'ADD_PROPERTY';
export const GET_MY_PROPERTIES = 'GET_MY_PROPERTIES';
export const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';

export const addProperty = (payload: AddPropertyPayload) => ({
  type: ADD_PROPERTY,
  payload,
});

export const getMyProperties = (payload: number = 1) => ({
  type: GET_MY_PROPERTIES,
  payload,
});

export const getRecommendations = (payload: number = 1) => ({
  type: GET_RECOMMENDATIONS,
  payload,
});
