import instance from '.';
import {
  PropertyDataRequest,
  Property,
  PropertyFilters,
} from '@/types/property';
import { PaginatedResponse } from '@/types/common';

export const addPropertyRequest = async (
  data: PropertyDataRequest,
): Promise<Property> => {
  const result = await instance.post('/property/add', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return result.data;
};

export const getMyPropertiesReuest = async (): Promise<Property[]> => {
  const result = await instance.get(`/property/mine`);
  return result.data;
};

export const getRecommendationsRequest = async (
  page: number = 1,
): Promise<PaginatedResponse<Property>> => {
  const result = await instance.get(`/property/recommendations?page=${page}`);
  return result.data;
};

export const getAllPropertiesRequest = async (
  page: number = 1,
): Promise<PaginatedResponse<Property>> => {
  const result = await instance.get(`/property?page=${page}`);
  return result.data;
};

export const searchPropertiesRequest = async (
  query: string,
  page: number = 1,
): Promise<PaginatedResponse<Property>> => {
  const result = await instance.get(`/property/search?q=${query}&page=${page}`);
  return result.data;
};

export const filterPropertiesRequest = async (
  filters: PropertyFilters,
  page: number = 1,
): Promise<PaginatedResponse<Property>> => {
  const result = await instance.post(`/property/filter?page=${page}`, filters);
  return result.data;
};
