import { AuthProvider } from './auth';
import { MuiIcon } from './components';
import { Property, PropertyFilters } from './property';

export type UserCompleteRequest = {
  dateOfBirth: string;
  phoneNumber: string;
  role: USER_ROLE;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: USER_ROLE;
  dateOfBirth: string;
  profilePicture: string | null;
  phoneNumber: string;
  id: string;
  joinedAt: string;
  updatedAt?: string;
  provider: AuthProvider;
  rating: number;
  votes: number;
};

export type Tenant = User & {
  preferences: PropertyFilters;
};

export type Landlord = User & {
  tenants: Tenant[];
  properties: Property[];
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

export type LandlordStats = {
  propertiesForSale: number;
  propertiesForRent: number;
  agreementsTotal: number;
  agreementsCount: number;
  tenantsCount: number;
};

export type TenantStats = {
  propertiesRented: number;
  propertiesPurchased: number;
  agreementsTotal: number;
  agreementsCount: number;
};
