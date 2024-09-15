import SignUpPage from '@/pages/SignUp';
import LoginPage from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import GoogleAuthSuccessPage from '@/pages/GoogleAuthSuccess';
import ProfileCompletePage from '@/pages/ProfileComplete';
import PreferencesPage from '@/pages/Preferences';

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
  {
    path: '/complete-profile',
    element: <ProfileCompletePage />,
  },
  {
    path: '/set-preferences',
    element: <PreferencesPage />,
  },
]);

export default router;
