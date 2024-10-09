import { User } from './user';

export type SignUpData = {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type LoginData = {
  password: string;
  email: string;
};

export type AuthRedirectMode = 'signUp' | 'login';

export type AuthRequestResponse = {
  user: User;
  token: string;
};

export type AuthProvider = 'password' | 'google';
