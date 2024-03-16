import { createBrowserRouter } from "react-router-dom";

import SignUpScreen from "@/screens/SignUp";
import LoginScreen from "@/screens/Login";
import EmailSentScreen from "@/screens/EmailSent";
import EmailVerificationScreen from "@/screens/EmailVerification";
import ProfileCompleteScreen from "@/screens/ProfileComplete";
import ProfileAvatarUpload from "@/screens/ProfileComplete/AvatarUpload";
import ProtectedRoutes from "./ProtectedRoute";
import Dashboard from "@/screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/email-sent",
    element: <EmailSentScreen />,
  },
  {
    path: "/email-verification",
    element: <EmailVerificationScreen />,
  },
  {
    path: "/complete-profile",
    element: <ProfileCompleteScreen />,
  },
  {
    path: "/upload-avatar",
    element: <ProfileAvatarUpload />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
