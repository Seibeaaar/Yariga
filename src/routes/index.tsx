import SignUpPage from '@/pages/SignUp';
import LoginPage from '@/pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import GoogleAuthSuccessPage from '@/pages/GoogleAuthSuccess';
import ProfileCompletePage from '@/pages/ProfileComplete';
import PreferencesPage from '@/pages/Preferences';
import FirstPropertyPage from '@/pages/FirstProperty';
import ProfilePicturePage from '@/pages/ProfilePicture';
import Dashboard from '@/pages/Dashboard';

import ProtectedRoute from './ProtectedRoute';

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
  {
    path: '/first-property',
    element: <FirstPropertyPage />,
  },
  {
    path: '/profile-picture',
    element: <ProfilePicturePage />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

export default router;
