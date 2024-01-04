export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = LoginData & {
  firstName: string;
  lastName: string;
};
