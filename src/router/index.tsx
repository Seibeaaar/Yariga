import { createBrowserRouter } from "react-router-dom";

import SignUpScreen from "@/screens/SignUp";
import LoginScreen from "@/screens/Login";
import VerifyEmailScreen from "@/screens/VerifyEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmailScreen />,
  },
]);

export default router;
