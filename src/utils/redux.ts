import { AxiosError } from 'axios';

export const generateErrorMesaage = (e: unknown) => {
  if (e instanceof AxiosError) {
    return e.response?.data;
  }
  return 'Error not defined.';
};
