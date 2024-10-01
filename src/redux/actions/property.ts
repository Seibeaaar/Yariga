import { AddPropertyPayload } from '@/types/property';

export const ADD_PROPERTY = 'ADD_PROPERTY';
export const GET_MY_PROPERTIES = 'GET_MY_PROPERTIES';

export const addProperty = (payload: AddPropertyPayload) => ({
  type: ADD_PROPERTY,
  payload,
});

export const getMyProperties = (payload: number) => ({
  type: GET_MY_PROPERTIES,
  payload,
});
