import {
  AddPropertyPayload,
  FilterPropertyPayload,
  SearchPropertyPayload,
} from '@/types/property';

export const ADD_PROPERTY = 'ADD_PROPERTY';
export const GET_MY_PROPERTIES = 'GET_MY_PROPERTIES';
export const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';
export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const SEARCH_PROPERTIES = 'SEARCH_PROPERTIES';
export const FILTER_PROPERTIES = 'FILTER_PROPERTIES';

export const addProperty = (payload: AddPropertyPayload) => ({
  type: ADD_PROPERTY,
  payload,
});

export const getMyProperties = () => ({
  type: GET_MY_PROPERTIES,
});

export const getRecommendations = (payload?: number) => ({
  type: GET_RECOMMENDATIONS,
  payload,
});

export const getAllProperties = (payload?: number) => ({
  type: GET_ALL_PROPERTIES,
  payload,
});

export const searchProperties = (payload: SearchPropertyPayload) => ({
  type: SEARCH_PROPERTIES,
  payload,
});

export const filterProperties = (payload: FilterPropertyPayload) => ({
  type: FILTER_PROPERTIES,
  payload,
});
