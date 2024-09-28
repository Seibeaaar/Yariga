import { MuiIcon } from './components';

export type UserCompleteRequest = {
  dateOfBirth: string;
  phoneNumber: string;
  role: USER_ROLE;
};

export type User = {
  firstName: string;
  lastName: string;
  email: {
    value: string;
    verified: true;
  };
  role: USER_ROLE;
  dateOfBirth: string;
  profilePicture?: string;
};

export enum USER_ROLE {
  Landlord = 'landlord',
  Tenant = 'tenant',
}

export type UserRoleOption = {
  icon: MuiIcon;
  role: USER_ROLE;
  title: string;
};

export type ProfilePictureRequest = {
  photo: File;
};
