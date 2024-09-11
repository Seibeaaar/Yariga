import SignUpPage from '@/pages/SignUp';
import LoginPage from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import GoogleAuthSuccessPage from '@/pages/GoogleAuthSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/auth/success',
    element: <GoogleAuthSuccessPage />,
  },
]);

export default router;
