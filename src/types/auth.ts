import { Profile, USER_ROLE } from "./proifle";

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

export type ProfileCompletionRequest = {
  role: USER_ROLE;
  taxNumber?: string;
  dateOfBirth: string;
};

export type PhoneVerificationRequest = {
  phoneNumber: string;
};

export type InitialRoleOption = "sole" | "customer";
