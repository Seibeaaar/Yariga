import { User } from '@/types/user';

export const buildFullName = (user: User) =>
  `${user.firstName} ${user.lastName}`;

export const extractInitials = (user: User) =>
  `${user.firstName[0]}${user.lastName[0]}`;
