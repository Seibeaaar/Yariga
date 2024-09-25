import instance from '.';
import { PropertyDataRequest, Property } from '@/types/property';

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
