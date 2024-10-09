import { LoginData, SignUpData } from '@/types/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const GOOGLE_AUTH = 'GOOGLE_AUTH';
export const LOG_OUT = 'LOG_OUT';

export const login = (payload: LoginData) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const signUp = (payload: SignUpData) => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const logOut = () => ({
  type: LOG_OUT,
});
