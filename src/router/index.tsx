import { createBrowserRouter } from "react-router-dom";

import SignUpScreen from "@/screens/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpScreen />,
  },
]);

export default router;
