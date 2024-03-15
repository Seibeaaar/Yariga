export type Profile = {
  firstName: string;
  lastName: string;
  email: {
    value: string;
    verified: true;
  };
  role: USER_ROLE;
  dateOfBirth: string;
  avatar?: string;
};

export enum USER_ROLE {
  GM = "general",
  Manager = "manager",
  Agent = "agent",
  Sole = "sole",
  Customer = "customer",
}

export type ProfileAvatarRequest = {
  avatar: BufferSource;
};

export type OnboardingRole = "soleProp" | "customer";
