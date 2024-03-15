import PropertyBuyerIcon from "@/assets/icons/PropertyBuyer.svg";
import PropertySellerIcon from "@/assets/icons/PropertySeller.svg";
import { InitialRoleOption } from "@/types/auth";

export type OnboardingRoleOption = {
  role: InitialRoleOption;
  title: string;
  image: string;
};

export const ONBOARDING_ROLE_OPTIONS: OnboardingRoleOption[] = [
  {
    role: "sole",
    title: "Sell and/or rent out properties",
    image: PropertySellerIcon,
  },
  {
    role: "customer",
    title: "Find a perfect property for your needs",
    image: PropertyBuyerIcon,
  },
];

export const ONBOARDING_STEPS: string[] = [
  "Choose your role",
  "Date of birth",
  "Profile picture",
  "Phone verification",
];

export const ONBOARDING_ROLES = ["sole", "customer"];
export const USER_ROLES = ["general", "manager", ...ONBOARDING_ROLES];

export const ACCEPTED_AVATAR_FORMATS = ["png", "jpeg", "jpg", "webp"];
