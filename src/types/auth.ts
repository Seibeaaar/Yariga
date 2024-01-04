import { Profile } from "./proifle";

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = LoginData & {
  firstName: string;
  lastName: string;
};

export type AuthRequestResponse = {
  profile: Profile;
  token: string;
};
