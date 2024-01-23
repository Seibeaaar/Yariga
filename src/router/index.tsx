import { createBrowserRouter } from "react-router-dom";

import SignUpScreen from "@/screens/SignUp";
import LoginScreen from "@/screens/Login";
import EmailSentScreen from "@/screens/EmailSent";
import EmailVerificationScreen from "@/screens/EmailVerification";

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
    path: "/email-sent",
    element: <EmailSentScreen />,
  },
  {
    path: "/email-verification?",
    element: <EmailVerificationScreen />,
  },
]);

export default router;
