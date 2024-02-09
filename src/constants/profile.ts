import PropertyBuyerIcon from "@/assets/icons/PropertyBuyer.svg";
import PropertySellerIcon from "@/assets/icons/PropertySeller.svg";

export const ONBOARDING_ROLE_OPTIONS = [
  {
    role: "soleProp",
    title: "Sell and/or rent out properties",
    image: PropertySellerIcon,
  },
  {
    role: "customer",
    title: "Find a perfect property for your needs",
    image: PropertyBuyerIcon,
  },
];

export const ONBOARDING_STEPS = [
  "Choose your role",
  "Date of birth",
  "Profile picture",
  "Phone verification",
];
