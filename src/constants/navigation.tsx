/// <reference types="vite-plugin-svgr/client" />
import DashboardIcon from "@/assets/icons/Dashboard.svg?react";
import PropertyIcon from "@/assets/icons/Union.svg?react";
import StarIcon from "@/assets/icons/Star.svg?react";
import MessageIcon from "@/assets/icons/Message.svg?react";
import ProfileIcon from "@/assets/icons/Profile.svg?react";

export const SOLE_PROP_NAV_LINKS = [
  {
    path: "/",
    title: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/property",
    title: "Property",
    icon: PropertyIcon,
  },
  {
    path: "/reviews",
    title: "Reviews",
    icon: StarIcon,
  },
  {
    path: "/chats",
    title: "Chats",
    icon: MessageIcon,
  },
  {
    path: "/profile",
    title: "Profile",
    icon: ProfileIcon,
  },
];
