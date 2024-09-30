import { jwtDecode } from 'jwt-decode';
import { User } from '@/types/user';
import { generateErrorMesaage } from './redux';

export const buildFullName = (user: User) =>
  `${user.firstName} ${user.lastName}`;

export const extractInitials = (user: User) =>
  `${user.firstName[0]}${user.lastName[0]}`;

export const checkTokenValid = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return !!decoded.exp && decoded.exp > currentTime;
  } catch (e) {
    console.log(`Error decoding token: ${generateErrorMesaage(e)}`);
    return false;
  }
};
