import { AddPropertyPayload } from '@/types/property';

export const ADD_PROPERTY = 'ADD_PROPERTY';

export const addProperty = (payload: AddPropertyPayload) => ({
  type: ADD_PROPERTY,
  payload,
});
