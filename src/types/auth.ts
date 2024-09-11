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
