import { Profile } from "@/types/proifle";

export const getFullName = (profile: Profile) => {
  return `${profile?.firstName} ${profile?.lastName}`;
};

export const getAvatarFallback = (profile: Profile) => {
  return `${profile.firstName[0]}${profile.lastName[0]}`;
};
