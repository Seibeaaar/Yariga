import instance from '.';
import { PropertyDataRequest, Property } from '@/types/property';
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

export const getMyPropertiesReuest = async (
  page: number,
): Promise<PaginatedResponse<Property>> => {
  const result = await instance.get(`/property/mine?page=${page}`);
  return result.data;
};
