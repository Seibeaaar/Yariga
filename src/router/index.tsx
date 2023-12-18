import { createBrowserRouter } from "react-router-dom";

import SignUpScreen from "@/screens/SignUp";
import LoginScreen from "@/screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);

export default router;
